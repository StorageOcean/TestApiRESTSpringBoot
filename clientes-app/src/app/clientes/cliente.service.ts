import { Injectable } from '@angular/core';
import {CLIENTES} from './cliente.json';
import {Cliente} from './cliente';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:5788/api/clientes';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }
}
