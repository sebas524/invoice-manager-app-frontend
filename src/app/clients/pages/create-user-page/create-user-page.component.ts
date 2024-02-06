import { Component } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css'],
})
export class CreateUserPageComponent {
  newClient: Client = {
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(private clientService: ClientsService, private router: Router) {}

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

    this.clientService.createClient(this.newClient).subscribe((res) => {
      console.log('submit btn clicked! client data: ', this.newClient);
      return this.router.navigateByUrl('/clients');
    });
  }
}
