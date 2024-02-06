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
    // * fetching clients from db:

    this.clientsService.getClients().subscribe((clients) => {
      this.clients = clients;
      console.log('info from server: ', this.clients);
    });

    // * new client message when created:
    this.activatedRoute.queryParams.subscribe((params) => {
      this.successMessage =
        params['success'] === 'true'
          ? 'Client has been successfully created!'
          : null;

      // * Set a timer to clear the success message after 4 seconds
      if (this.successMessage) {
        setTimeout(() => {
          this.successMessage = null;
        }, 4000);
      }
    });
  }
}
