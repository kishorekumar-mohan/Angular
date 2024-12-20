import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remittance',
  standalone: false,
  
  templateUrl: './remittance.component.html',
  styleUrl: './remittance.component.css'
})
export class RemittanceComponent {

  constructor(private router: Router) {}
OnSubmit() : void {

this.router.navigate(['/main']);
}

}
