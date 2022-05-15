import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.page.html',
  styleUrls: ['./chucknorris.page.scss'],
})
export class ChucknorrisPage implements OnInit {
  public Jokes: Array<string> = [];

  constructor(
    private _apiService: ApiService
  ) { }

  ngOnInit() {
  }
  
  getJoke() {
    this._apiService.getJoke()
    .pipe(first())
    .subscribe(
      data => {
        this.Jokes.unshift(data.value);
        if(this.Jokes.length > 4) {
          this.Jokes.pop();
        }
      },
      error => {
        console.error("Chuck Norris Jokesis not available.");
      }
    )
  }
 

}
