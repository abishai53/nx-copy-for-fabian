import {Component} from '@angular/core'
import {Pages} from '../../../shared/pages'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.scss']
})
export class BlogComponent implements NavigablePage {
    pageName = Pages.BLOG
}
