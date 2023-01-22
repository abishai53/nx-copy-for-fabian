import {NgModule} from '@angular/core'
import {LoggedInGuard} from './authguards/loggedin.service'
import {OktaService} from './okta.service'

@NgModule({
    providers: [OktaService, LoggedInGuard]
})
export class SharedServicesModule {}