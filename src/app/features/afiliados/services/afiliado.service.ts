import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AfiliadoAPI } from 'src/app/core/models/DTO/afiliadoAPI.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  url: string = environment.ApiUrl.base + environment.ApiUrl.affiliatesContext;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http:HttpClient) { }

  public getAfiliados(): Observable<AfiliadoAPI[]>{
    return this.http.get<AfiliadoAPI[]>(this.url);
  }

  public getAfiliadoById(idAfiliado: number): Observable<AfiliadoAPI>{
    return this.http.get<AfiliadoAPI>(this.url + `/${idAfiliado}`);
  }

  public createAfiliado(afiliadoAPI: AfiliadoAPI): Observable<any>{
    return this.http.post<AfiliadoAPI>(this.url, JSON.stringify(afiliadoAPI), this.httpOptions);
  }

  public deleteAfiliado(idAfiliado: number): Observable<any>{
    return this.http.delete<AfiliadoAPI>(this.url + `/${idAfiliado}`);
  }

  public updateAfiliado(idAfiliado: number, afiliadoAPI: AfiliadoAPI): Observable<any>{
    return this.http.put<AfiliadoAPI>(this.url + `/${idAfiliado}`, JSON.stringify(afiliadoAPI), this.httpOptions);
  }
}
