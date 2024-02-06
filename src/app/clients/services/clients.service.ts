import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private baseUrl: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseUrl);
  }

  createClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.baseUrl, client, {
      headers: this.httpHeaders,
    });
  }
}
