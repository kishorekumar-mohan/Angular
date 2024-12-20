import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  url: string = '/';

  constructor(
    private route: Router
  ) { }
  
  gotourl(url: string): void {
    this.route.navigate(["/"+url]);
  }
}
