import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map,  throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  obtenerUsuarios(){
    let params= new HttpParams().append('page','1')



    return this.http.get(`https://reqres.in/api/user`,{params})
    .pipe(
      map(resp=>{
        return resp
      }),
      catchError(err =>{
        return this.manejarError(err)
      })
    )
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registrado en el log file');
    console.warn(error);

    return throwError('Error personalizado')
  }
}
