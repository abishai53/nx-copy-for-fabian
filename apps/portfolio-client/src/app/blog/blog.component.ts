import {Component} from '@angular/core'
import {Navigation} from '../utility-files/navigation'
import {NavigablePage} from '../utility-files/navigable-page'

@Component({
    selector: 'ptf-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.scss']
})
export class BlogComponent implements NavigablePage {
    pageName = Navigation.BLOG
}
