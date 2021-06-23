import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { FilterBy } from 'src/app/models/filter.by';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[]
  @Input() filterBy: FilterBy
  @Output() onFilter = new EventEmitter<FilterBy>()
  // @Output() onSelectContact = new EventEmitter<Contact>()

  constructor() { }

  ngOnInit(): void {
  }
}
