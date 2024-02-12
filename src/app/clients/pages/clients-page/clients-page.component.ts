import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent implements OnInit {
  clients: Client[] | undefined;
  successMessage: string | null = null;

  constructor(
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // * new client message when created:
    this.activatedRoute.queryParams.subscribe((params) => {
      const { size, page, sort } = params;
      this.loadClients(size, page, sort);

      this.successMessage =
        params['success'] === 'true'
          ? 'Client has been successfully created/updated!'
          : null;

      // * Set a timer to clear the success message after 4 seconds
      if (this.successMessage) {
        setTimeout(() => {
          this.successMessage = null;
        }, 4000);
      }
    });
  }

  loadClients(size?: number, page?: number, sort?: string) {
    this.clientsService.getClients(size, page, sort).subscribe((clients) => {
      this.clients = clients;
    });
  }

  deleteClient(client: Client) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this client?'
    );

    if (confirmDelete) {
      return this.clientsService.deleteUser(client.id!).subscribe(() => {
        this.clients = this.clients?.filter((c) => {
          return c !== client;
        });
        alert('Client has been successfully deleted.');
      });
    }
    return;
  }
}
