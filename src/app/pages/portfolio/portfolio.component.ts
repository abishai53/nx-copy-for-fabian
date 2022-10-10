import {Component} from '@angular/core'
import {Pages} from '../../../shared/pages'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.scss']
})
export class PortfolioComponent implements NavigablePage {
    pageName = Pages.PORTFOLIO
}
