import {Component} from '@angular/core'
import {Navigation} from '../../shared-components/utility-files/navigation'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.scss']
})
export class BlogComponent implements NavigablePage {
    pageName = Navigation.BLOG
}
