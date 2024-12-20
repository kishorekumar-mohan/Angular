import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatajsonModule } from '../components/datajson/datajson.module';
import { ListModule } from '../components/datajson/list/list.module';
import { DetailModule } from '../components/datajson/detail/detail.module';

@Injectable({
  providedIn: 'root'
})
export class BootService {

  private baseUrl = 'http://localhost:8080/ftlCheck';

  constructor(private http: HttpClient) {}

  generateJsonToJsonCreate(jsonContent: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Create`, jsonContent);
  }
generateJsonToJsonList(jsonContent: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/List`, jsonContent);
  }
generateJsonToJsonDetails(jsonContent: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/Detail`, jsonContent);
  }

generateJson(jsonContent: DatajsonModule): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/dataforjson`, jsonContent);
  }

generateJsonList(jsonContent: ListModule): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/dataforjson`, jsonContent);
  }

generateJsonDetail(jsonContent: DetailModule): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/dataforjson`, jsonContent);
  }
}
