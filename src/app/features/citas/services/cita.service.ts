import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitaAPI } from 'src/app/core/models/DTO/citaAPI.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  url: string = environment.ApiUrl.base + environment.ApiUrl.appointmentsContext;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http:HttpClient) { }

  public getCitas(idAfiliado?: number, fecha?: string): Observable<CitaAPI[]>{
    
    // Parameters
    let params = new HttpParams();
    params = idAfiliado ? params.set('idAffiliate', idAfiliado) : params;
    params = fecha ? params.set('date', fecha) : params;

    return this.http.get<CitaAPI[]>(this.url, { params });
  }

  public getCitaById(idCita: number): Observable<CitaAPI>{
    return this.http.get<CitaAPI>(this.url + `/${idCita}`);
  }

  public createCita(citaAPI: CitaAPI): Observable<any>{
    return this.http.post<CitaAPI>(this.url, JSON.stringify(citaAPI), this.httpOptions);
  }

  public deleteCita(idCita: number): Observable<any>{
    return this.http.delete<CitaAPI>(this.url + `/${idCita}`);
  }

  public updateCita(idCita: number, citaAPI: CitaAPI): Observable<any>{
    return this.http.put<CitaAPI>(this.url + `/${idCita}`, JSON.stringify(citaAPI), this.httpOptions);
  }

}
