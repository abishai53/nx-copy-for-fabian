import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable()
export class SlpHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = req.clone({url: `${environment.BASE_URL}${req.url}`})
        return next.handle(apiReq)
    }
}