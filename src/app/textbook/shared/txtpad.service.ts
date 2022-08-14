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

  getParticularTxtpad(pk: number | string) {
    return this.http.get<Textpad>(`${this.URL}${pk}`);
  }

  createTxtpad(data: { title: string, text: string }) {
    return this.http.post<Textpad>(`${this.URL}`, data);
  }

  editTxtpad(data: { title: string, text: string }) {
    return this.http.patch<Textpad>(`${this.URL}`, data);
  }

  removeTxtpad() {
    return this.http.delete<Textpad>(`${this.URL}`);
  }
}
