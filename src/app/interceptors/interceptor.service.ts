import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers= new HttpHeaders({
      'token-usuario':'ABC1238762398123412396'
    });

    const reqClone= req.clone({
      headers
    });


    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.warn(error);

    return throwError('Error personalizado')
  }
}
