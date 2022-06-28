import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts:Contact[] = [] as Contact[];
  public errorMessage:string | undefined;

  @Output() sendContact = new EventEmitter();

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data)=>{
      this.contacts = data;
    }, (error)=>{
      this.errorMessage = error;
    });
  }

  public selectContact(contact: Contact){
    this.sendContact.emit(contact);
  }
}
