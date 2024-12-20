import { Component } from '@angular/core';
import { DetailModule } from '../datajson/detail/detail.module';
import { BootService } from '../../services/boot.service';

@Component({
  selector: 'app-entitydetail',
  standalone: false,
  
  templateUrl: './entitydetail.component.html',
  styleUrl: './entitydetail.component.css'
})
export class EntitydetailComponent {
  DetailModule: DetailModule = {
    actionCode: '' 
  };
  
    
    outputJson: string | null = null;
    constructor(private customerService: BootService) {}
    
    onSubmit(): void {
      console.log(this.DetailModule);
      // this.jsonContent =JSON.stringify(this.jsonContent);
    
      this.customerService.generateJsonDetail(this.DetailModule).subscribe({
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
