import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fabricante } from '../model/fabricante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private readonly API = 'http://localhost:8080/api/fabricantes';

  constructor(private httpClient: HttpClient) {}

  listarTodos(): Observable<Array<Fabricante>> {
    return this.httpClient.get<Array<Fabricante>>(this.API+'/todos');
  }

}
