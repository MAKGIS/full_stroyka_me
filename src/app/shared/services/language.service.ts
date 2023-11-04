import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    name_: string = '';

    isLog = true;

    private changesSubject$: Subject<string> = new Subject();

    changes$: Observable<string> = this.changesSubject$.asObservable();

    get options(): string {
        return this.name_;
    }
    set options(value: string) {

        this.name_ = value;

        if (this.isLog) {
            console.log('- srv -- LanguageService.set options()   options -> %o', this.name_);
        }

        this.changesSubject$.next(value);
    }

    constructor() { }
}
