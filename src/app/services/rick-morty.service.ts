import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private readonly http: HttpClient) {}

  public getCharacters() {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character`);
  }
}
