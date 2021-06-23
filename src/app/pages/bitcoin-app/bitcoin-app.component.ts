import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { FilterBy } from 'src/app/models/filter.by';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'bitcoin-app',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss']
})
export class BitcoinAppComponent implements OnInit {

  contacts$: Observable<Contact[]>
  user: User = null
  filterBy = { term: '' }
  pagePreview: string = 'Contacts'

  constructor(
    private contactService: ContactService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    this.contactService.loadContacts()
    this.user = this.userService.getUser()
  }


  switchPage(page: string) {
    this.pagePreview = page
  }
}
