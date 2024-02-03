import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../interfaces/client.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<Client[]> {
    // return of(CLIENTS);

    return this.httpClient.get<Client[]>(`${this.baseUrl}/clients`);
  }
}
