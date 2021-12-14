import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfessoresService {
  constructor(private http: HttpClient) {}
  getAll() {
    // observa o endereço/api
    return this.http.get('http://cursos.grandeporte.com.br:8080/professores');
  }

  delete(id: number) {
    return this.http.delete(
      `http://cursos.grandeporte.com.br:8080/professores/${id}`
    );
  }
}
