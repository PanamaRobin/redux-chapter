import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacterBody } from '../store/view-detail/view-detail.models';
@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private readonly http: HttpClient) {}

  public getCharacters() {
    return this.http.get<ICharacterBody>(
      `https://rickandmortyapi.com/api/character`
    );
  }
}
