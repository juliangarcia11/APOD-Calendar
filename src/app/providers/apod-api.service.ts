import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApodApiService {

  url: string = "https://api.nasa.gov/planetary/apod?api_key=9poEouZ0VjjQo8ieQF00djY57RnRdjKdEZ7C52vr";
  date: string = '&start_date=';

  constructor(private http: HttpClient) { }

  getAPOD(startDate: string = "") {
    var query = (startDate == "") ? this.url : this.url + this.date + startDate;

    return this.http.get(query);
  }
}
