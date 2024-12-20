import { Component } from '@angular/core';
import { BootService } from '../../services/boot.service';
import { DatajsonModule } from '../datajson/datajson.module';

@Component({
  selector: 'app-components1',
  standalone: false,
  
  templateUrl: './components1.component.html',
  styleUrl: './components1.component.css'
})
export class Components1Component {
  DatajsonModule: DatajsonModule = {
    theirReferenceId: '',
    city: '',
    customerName: '',
    amount: 0,
    currency: '',
  };
  outputJson: string | null = null;
  constructor(private customerService: BootService) {}
  
  onSubmit(): void {
    console.log(this.DatajsonModule);
    // this.jsonContent =JSON.stringify(this.jsonContent);
  
    this.customerService.generateJson(this.DatajsonModule).subscribe({
      next: (response: any) => {
        this.outputJson = JSON.stringify(response, null, 2);
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
        this.outputJson = 'Error occurred while processing.';
      }
      });
    }
  }
 
