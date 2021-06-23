import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  subscription: Subscription
  contact: Contact

  async ngOnInit(): Promise<void> {
    console.log(this.route.data);

    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact)
    this.router.navigateByUrl(this.contact._id ? `/contacts/${this.contact._id}` : '/contacts')
  }

  async onDeleteContact() {
    await this.contactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('/contacts')
  }

  onBack() {
    this.location.back()
  }

}
