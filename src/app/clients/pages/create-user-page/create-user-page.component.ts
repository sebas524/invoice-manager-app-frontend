import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css'],
})
export class CreateUserPageComponent implements OnInit {
  newClient: Client = {
    firstName: '',
    lastName: '',
    email: '',
    region: { id: 0, name: '' },
  };

  errorMessage: string = '';

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadClient();
  }

  isClientBlank(): boolean {
    return (
      !this.newClient.firstName ||
      !this.newClient.lastName ||
      !this.newClient.email
    );
  }

  create(): void {
    //* Check if any of the client properties are blank
    if (this.isClientBlank()) {
      console.log('Client properties cannot be blank');
      return;
    }

    this.clientsService.createClient(this.newClient).subscribe({
      next: (res) => {
        console.log('submit btn clicked! client data: ', this.newClient);
        return this.router.navigateByUrl('/clients?success=true');
      },
      error: (error) => {
        this.clearErrorMessageAfterDelay(error, 3000);
      },
    });
  }

  loadClient() {
    // * to get params from specific path in routing-module:
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clientsService.getClient(id).subscribe((client) => {
          // * setting fetched id data to client attribute:
          return (this.newClient = client);
        });
      }
    });
  }

  update() {
    //* Check if any of the client properties are blank
    if (this.isClientBlank()) {
      console.log('Client properties cannot be blank');
      return;
    }

    this.clientsService.updateClient(this.newClient).subscribe({
      next: (res) => {
        console.log('submit btn clicked! client data: ', this.newClient);
        return this.router.navigateByUrl('/clients?success=true');
      },
      error: (error) => {
        this.clearErrorMessageAfterDelay(error, 3000);
      },
    });
  }

  clearErrorMessageAfterDelay(error: any, delay: number): void {
    this.errorMessage = error;
    setTimeout(() => {
      this.errorMessage = '';
    }, delay);
  }
}
