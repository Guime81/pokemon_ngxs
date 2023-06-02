import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() set ready(newValue: boolean) {
    newValue ? this.searchValue.enable() : this.searchValue.disable();
  }
  @Input() resetedSearchValue: string;
  @Output() onNewValue: EventEmitter<string> = new EventEmitter();
  @Output() onResetValue: EventEmitter<void> = new EventEmitter();
  searchValue = new FormControl({ value: '', disabled: true });
  subscription: Subscription = undefined;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.searchValue.valueChanges
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        tap((value) => this.onNewValue.emit(value as string))
      )
      .subscribe();
  }

  onReset() {
    this.onResetValue.emit();
  }

  // Aide de chatGPT pour cette partie ngOnChanges():
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetedSearchValue'] && this.searchValue) {
      this.searchValue.setValue(changes['resetedSearchValue'].currentValue);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription = undefined;
  }
}
