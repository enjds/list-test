import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { getProductList$ } from 'src/store/actions';
import { AppState } from 'src/store/app.states';
import { selectProductList } from 'src/store/selectors/product.selectors';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'grid-list';
  isListView = true;
  isButtonDisabled = false;
  toggleButtonText = 'Grid View';

  products$: Observable<Product[]> = this.store.pipe(select(selectProductList));
  onResize$ = new Subject();

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getProductList$());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.onResize$.next(event.target.innerWidth);
  }

  ngOnInit() {
    this.onResize$
    .asObservable()
    .pipe(
      throttleTime(1500)
    )
    .subscribe(innerWidth => {
      if (innerWidth < 728) {
        this.isListView = false;
        this.isButtonDisabled = true;
      } else {
        this.isListView = true;
        this.isButtonDisabled = false;
      }
    });
  }

  ngOnDestroy() {
    this.onResize$.unsubscribe();
  }

  toggle() {
    this.isListView = !this.isListView
    this.toggleButtonText = this.isListView ? 'Grid View' : 'List View';
  }
}
