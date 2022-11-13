import {Component} from '@angular/core'
import {Navigable} from './ptf-shared/utility-files/navigable'

// import "@fontsource/plus-jakarta-sans"

@Component({
    selector: 'ptf-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'portfolio-client'
    currentPage = ''
    getCurrentPage(page: Navigable): void {
        this.currentPage = page.pageName
    }
}
