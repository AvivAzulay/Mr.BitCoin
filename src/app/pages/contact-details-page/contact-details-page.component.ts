import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  // @Input() contact: Contact
  // @Output() onSelectContact = new EventEmitter<Contact>()

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  contact: Contact
  subscription: Subscription

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onBack() {
    // this.location.back()
    this.router.navigateByUrl('/contacts')
  }

  async onDeleteContact() {
    await this.contactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('/contacts')
  }
}
