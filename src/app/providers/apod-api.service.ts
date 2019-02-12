import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApodApiService {

  url: string = "https://api.nasa.gov/planetary/apod?api_key=9poEouZ0VjjQo8ieQF00djY57RnRdjKdEZ7C52vr";

  constructor(private http: HttpClient) { }

  getAPOD() {
    return this.http.get(this.url);
  }
}
