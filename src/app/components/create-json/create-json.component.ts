import { Component } from '@angular/core';
import { BootService } from '../../services/boot.service';

@Component({
  selector: 'app-create-json',
  standalone: false,

  templateUrl: './create-json.component.html',
  styleUrl: './create-json.component.css'
})
export class CreateJsonComponent {
  jsonContent: any;
  json: string | null = null;
  outputJson: string | null = null;

  constructor(private apiService: BootService) { }

  onSubmit(): void {
    console.log(this.jsonContent);
    this.json = JSON.parse(this.jsonContent);
    // this.jsonContent =JSON.stringify(this.jsonContent);

    this.apiService.generateJsonToJsonCreate(this.json).subscribe({
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