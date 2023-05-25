import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PruebaAPI } from 'src/app/core/models/DTO/pruebaAPI.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  url: string = environment.ApiUrl.base + environment.ApiUrl.testsContext;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http:HttpClient) { }

  public getPruebas(): Observable<PruebaAPI[]>{
    return this.http.get<PruebaAPI[]>(this.url);
  }

  public getPruebaById(idPrueba: number): Observable<PruebaAPI>{
    return this.http.get<PruebaAPI>(this.url + `/${idPrueba}`);
  }

  public createPrueba(pruebaAPI: PruebaAPI): Observable<any>{
    return this.http.post<PruebaAPI>(this.url, JSON.stringify(pruebaAPI), this.httpOptions);
  }

  public deletePrueba(idPrueba: number): Observable<any>{
    return this.http.delete<PruebaAPI>(this.url + `/${idPrueba}`);
  }

  public updatePrueba(idPrueba: number, pruebaAPI: PruebaAPI): Observable<any>{
    return this.http.put<PruebaAPI>(this.url + `/${idPrueba}`, JSON.stringify(pruebaAPI), this.httpOptions);
  }
}
