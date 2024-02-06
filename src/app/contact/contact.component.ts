import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Define properties to bind with form fields
  userName: string = '';
  userAge: number | null = null;
  userEmail: string = '';
  userPassword: string = '';

  // Handle form submission
  onSubmit():void {
    console.log('Form submitted:', {
      userName: this.userName,
      userAge: this.userAge,
      userEmail: this.userEmail,
      userPassword: this.userPassword
    });
  }
}
