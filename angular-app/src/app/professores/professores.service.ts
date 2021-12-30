import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfessoresService {
  urlApi = `${environment.urlApiGp}/professores`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.urlApi);
  }

  deletar(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  salvar(body: any) {
    return this.http.post(this.urlApi, body);
  }
  getOne(id: number) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  update(id: number, body: any) {
    return this.http.patch(`${this.urlApi}/${id}`, body);
  }
}
