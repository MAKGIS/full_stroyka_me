import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from '../../../../shared/interfaces/post';
import { posts } from '../../../../../data/blog-posts';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-category',
    templateUrl: './page-category.component.html',
    styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnDestroy {
    private destroy$: Subject<void> = new Subject();

    tagLang = 'page-category.';

    sidebarPosition: 'start'|'end' = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
    layout: 'classic'|'grid'|'list' = 'classic';

    posts: Post[] = posts;

    constructor(
        private route: ActivatedRoute,
        public translate: TranslateService ) {
        this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data['sidebarPosition'];
            this.layout = data['layout'];
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getPostCardLayout(): 'grid-nl'|'grid-lg'|'list-nl'|'list-sm' {
        return {
            classic: 'grid-lg',
            grid: 'grid-nl',
            list: 'list-nl'
        }[this.layout] as 'grid-nl'|'grid-lg'|'list-nl'|'list-sm';
    }

    getLang(text: string): string {

        return this.translate.instant(this.tagLang + text);
    }

}
