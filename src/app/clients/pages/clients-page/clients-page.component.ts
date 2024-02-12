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
  currentPage: number = 0;
  pageSize: number = 5;
  sortField: string = 'firstName,asc';

  constructor(
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const { size, page, sort } = params;
      this.pageSize = size ? +size : this.pageSize;
      this.currentPage = page ? +page : this.currentPage;
      this.sortField = sort ? sort : this.sortField;

      this.loadClients();
      this.successMessage =
        params['success'] === 'true'
          ? 'Client has been successfully created/updated!'
          : null;

      // Set a timer to clear the success message after 4 seconds
      if (this.successMessage) {
        setTimeout(() => {
          this.successMessage = null;
        }, 4000);
      }
    });
  }

  loadClients() {
    this.clientsService
      .getClients(this.pageSize, this.currentPage, this.sortField)
      .subscribe((clients) => {
        this.clients = clients;
      });

    console.log('ran loadClients: ', this.clients);
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

  changePageSize(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 0; // Reset page to 1 when changing page size
    this.loadClients();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadClients();
    }
  }

  nextPage() {
    if (this.clients && this.clients.length >= this.pageSize) {
      this.currentPage++;
      this.loadClients();
    }
  }

  changeSort(event: any) {
    this.sortField = event.target.value;
    this.loadClients();
  }
}
