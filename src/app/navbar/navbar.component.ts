import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Adjust the scroll position threshold as needed
    if (scrollPosition > 50) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
}
