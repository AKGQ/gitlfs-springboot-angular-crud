import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  postCliente(cliente: any): Observable<any> { //Post
    return this.http.post(BASIC_URL + "api/cliente", cliente);
  }

  getAllClientes(): Observable<any> { //Get all
    return this.http.get(BASIC_URL + "api/clientes");
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(BASIC_URL + "api/cliente/" + id);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get(BASIC_URL+"api/cliente/" + id);
  }

  updateCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(BASIC_URL + "api/cliente/" + id, cliente);
  }
}
