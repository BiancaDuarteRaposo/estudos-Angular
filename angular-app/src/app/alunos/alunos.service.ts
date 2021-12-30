import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  apiUrl = `${environment.urlApiGp}/usuarios`;
  
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  deletar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  salvar(body: any) {
    return this.http.post(`${this.apiUrl}`, body);
  }

  getOne(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  update(id: number, body: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, body);
  }
}
