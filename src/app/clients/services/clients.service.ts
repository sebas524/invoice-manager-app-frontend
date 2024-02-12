import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Client } from '../interfaces/client.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private baseUrl: string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient, private router: Router) {}

  getClients(
    size?: number,
    page?: number,
    sort?: string
  ): Observable<Client[]> {
    let params = new HttpParams();
    if (size) {
      params = params.set('size', size.toString());
    }
    if (page) {
      params = params.set('page', page.toString());
    }
    if (sort) {
      params = params.set('sort', sort);
    }
    return this.httpClient.get<Client[]>(this.baseUrl, { params });
  }

  createClient(client: Client): Observable<Client> {
    return this.httpClient
      .post<Client>(this.baseUrl, client, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }

  getClient(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        this.router.navigate(['/']);
        const errString = `An error has occurred: ${error.error.message}.`;
        return throwError(() => new Error(errString));
      })
    );
  }

  updateClient(client: Client): Observable<Client> {
    return this.httpClient
      .put<Client>(`${this.baseUrl}/${client.id}`, client, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }

  deleteUser(id: number): Observable<Client> {
    return this.httpClient.delete<Client>(`${this.baseUrl}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
