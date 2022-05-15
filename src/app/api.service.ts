import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getJoke() {
    return this.http.get<any>("https://api.chucknorris.io/jokes/random")
    .pipe(map(response => {
      return response;
    }))
  }
}
