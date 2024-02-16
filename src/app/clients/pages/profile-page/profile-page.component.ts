import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../interfaces/client.interface';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  @Input() client: Client | undefined;
  selectedImage: File | undefined;
  uploadSuccess: boolean = false;

  constructor(
    private clientsService: ClientsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {}

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

  closeClientModal(client: Client) {
    this.modalService.closeModal();
    this.selectedImage = undefined;
  }
}
