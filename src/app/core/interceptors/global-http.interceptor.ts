import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GlobalErrorComponent } from '../components/global-error/global-error.component';

@Injectable({
  providedIn: 'root',
})
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor(private dialog:MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    return next.handle(req).pipe(
      catchError((error) => {
        this.dialog.open(GlobalErrorComponent, {data: {status: error.status, message: error.statusText,}, width: '400px'});  
        return throwError(error.message);
      })
    )
  }
}