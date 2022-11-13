import {Component} from '@angular/core'
import {Navigation} from '../ptf-shared/utility-files/navigation'
import {Navigable} from '../ptf-shared/utility-files/navigable'

@Component({
    selector: 'ptf-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.scss']
})
export class BlogComponent implements Navigable {
    pageName = Navigation.BLOG
}
