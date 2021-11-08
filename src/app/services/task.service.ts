import { BodyQuery } from './../interface/body-query';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'http://applab.dcasoluciones.com:8282/PrevalidadorCreditosProceso/service/ejecutarObjetoDinamico/ConsumirServicioSFSFSUAM';
  private user = 'P2004292705';


  constructor(
    private http:HttpClient
  ) {}

  autorizationHeader(header:Headers){
    header.append('Authorization', 'Basic' + btoa('user: user'));
  }

  createBodyQuery(bodyQuery: BodyQuery):Observable<any>{
    const path = this.api;
    let ht = {
      headers: new HttpHeaders({
        'usuario':this.user,
      })
    }
    return this.http.post<any>(path, bodyQuery, ht);
  }
}
