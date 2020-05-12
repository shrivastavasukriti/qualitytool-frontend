import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  private baseUrl = '/quality/getFilePath';
  constructor(private http: HttpClient) { }

  getFilePath(file: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, file);
  }
}
