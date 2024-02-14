import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  client: Client | undefined;
  selectedImage: File | undefined;
  uploadSuccess: boolean = false;

  constructor(
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    // * to get params from specific path in routing-module:
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clientsService.getClient(id).subscribe((client) => {
          // * setting fetched id data to client attribute:
          this.client = client;
        });
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);

    if (this.selectedImage!.type.indexOf('image') < 0) {
      console.log('file must be of type image');
      this.selectedImage = undefined;
    }
  }

  uploadImage() {
    if (!this.selectedImage) {
      return;
    }

    this.clientsService
      .uploadPicture(this.selectedImage!, this.client?.id)
      .subscribe((client) => {
        this.client = client;
        this.uploadSuccess = true;

        if (this.uploadSuccess) {
          setTimeout(() => {
            this.uploadSuccess = false;
          }, 4000);
        }
      });
  }
}
