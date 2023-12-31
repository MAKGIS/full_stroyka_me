import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Category } from '../interfaces/category';

export interface ICategoriesServiceInterface {
    reset(): void;
    complete(): void;
    next(categories: Category[]): void;
  }



@Injectable({
    providedIn: 'root'
})
export class CategoriesService implements ICategoriesServiceInterface {

    isLog = true;

  private CategoriesInit: Category[] = [
    /*
    { parents: null, children: null, id:'AC_7/', type: 'shop', name: 'AciersInit', slug: 'Aciers', path: '', image: '', items: 1, customFields: {}},
    { parents: null, children: null, id:'DE_2/', type: 'shop', name: 'DécorationInit', slug: 'Electricité', path: '', image: '', items: 1, customFields: {}},
    */
];

  public CategoriesChangedSub$ =  new BehaviorSubject<Category[]>(this.CategoriesInit);
  public CategoriesChanged$ = this.CategoriesChangedSub$.asObservable();
  // public CategoriesChangedValue = this.CategoriesChangedSub$.getValue();

  constructor() {
  }
    isBrandsChanged$: Observable<Category[]>;
    isBrandsChangedValue: Category[];

  public reset() {
      this.CategoriesChangedSub$.next(this.CategoriesInit);
  }
  public complete() {
    this.CategoriesChangedSub$.complete();
  }
  public next(categories: Category[]) {
    if (categories) {
        if (this.isLog) {
            console.log('- srv -- CategoriesService.next() categories -> %O', categories);
        }
      this.CategoriesChangedSub$.next(categories);
    } else {
        if (this.isLog) {
            console.log('- srv -- CategoriesService.next() categoriesInit -> %O', this.CategoriesInit);
        }
        this.CategoriesChangedSub$.next(this.CategoriesInit);
    }
  }
}
