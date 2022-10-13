import {Component} from '@angular/core'
import {NavigablePage} from './static-portfolio/navigable-page'

// import "@fontsource/plus-jakarta-sans"

@Component({
    selector: 'ptf-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'portfolio-client'
    currentPage = ''
    getCurrentPage(page: NavigablePage): void {
        this.currentPage = page.pageName
    }
}
