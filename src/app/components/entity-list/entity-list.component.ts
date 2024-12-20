import { Component } from '@angular/core';
import { BootService } from '../../services/boot.service';
import { DatajsonModule } from '../datajson/datajson.module';
import { ListModule } from '../datajson/list/list.module';

@Component({
  selector: 'app-entity-list',
  standalone: false,
  
  templateUrl: './entity-list.component.html',
  styleUrl: './entity-list.component.css'
})
export class EntityListComponent {
  ListModule: ListModule = {
  name: '' ,
  status: '',
};

  
  outputJson: string | null = null;
  constructor(private customerService: BootService) {}
  
  onSubmit(): void {
    console.log(this.ListModule);
    // this.jsonContent =JSON.stringify(this.jsonContent);
  
    this.customerService.generateJsonList(this.ListModule).subscribe({
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
