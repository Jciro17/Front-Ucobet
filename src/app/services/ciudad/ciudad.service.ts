import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CiudadService {
  private API_SERVER = 'http://localhost:8080/ciudades/';

  constructor(private httpCliente: HttpClient) {}

  public getAllCiudades(): Observable<any> {
    return this.httpCliente.get(this.API_SERVER);
  }

  public saveCiudad(ciudad: any): Observable<any> {
    return this.httpCliente.post(this.API_SERVER, ciudad);
  }
}
