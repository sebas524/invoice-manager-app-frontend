import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent implements OnInit {
  clients: Client[] | undefined;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients) => {
      this.clients = clients;
      console.log('info from server: ', this.clients);
    });
  }
}
