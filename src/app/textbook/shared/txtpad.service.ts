import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Textpad } from './txtpad.interface';

@Injectable({
  providedIn: 'root'
})
export class TxtpadService {

  private URL = 'http://127.0.0.1:8000/api/v1/txtpads/';

  constructor(private http: HttpClient) { }

  getTxtpad() {
    return this.http.get<Textpad>(`${this.URL}`);
  }

  getParticularTxtpad(pk: number) {
    return this.http.get<Textpad>(`${this.URL}${pk}`);
  }

  createTxtpad() {
    return this.http.post<Textpad>(`${this.URL}create`, { title: 'Title', text: 'Text' });
  }

  editTxtpad(data: { title: string, text: string }, pk: number) {
    return this.http.patch<Textpad>(`${this.URL}${pk}`, data);
  }

  removeTxtpad(pk: number) {
    return this.http.delete<Textpad>(`${this.URL}${pk}`);
  }
}
