import { Component } from '@angular/core';
import { BootService } from '../../services/boot.service';

@Component({
  selector: 'app-list-json',
  standalone: false,
  
  templateUrl: './list-json.component.html',
  styleUrl: './list-json.component.css'
})
export class ListJsonComponent {
  jsonContent: any;
  json: string | null = null;
  outputJson: string | null = null;

  constructor(private apiService: BootService) {}

  onSubmit(): void {
    console.log(this.jsonContent);
    this.json = JSON.parse(this.jsonContent);
    // this.jsonContent =JSON.stringify(this.jsonContent);

    this.apiService.generateJsonToJsonList(this.json).subscribe({
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
