import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { Observable } from 'rxjs';
import * as Date from 'date-format';

import { ApodApiService } from '../../providers/apod-api.service';

// temporary
export interface Tile {
 cols: number;
 rows: number;
 text: string;
 image: string;
}


// copyright: string;
// date: string;
// explanation: string;
// hdurl: string;
// media_type: string;
// service_version: string;
// title: string;
// url: string;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // temporary
  tiles: Tile[] = [];
  apod: Object;

  isCollapsed: boolean = true;

  constructor(private _apodService: ApodApiService) {
  }

  ngOnInit() {
    this.getAPOD();
  }

  // TODO: Show the last 10 days by default; temporarily hard coded date
  getAPOD(startDate: string = "2019-02-16") {
    // if no start date was provided, let's get today's date
    if (startDate == "") {
      startDate = Date('yyyy-MM-dd').toString();
    }

    this._apodService.getAPOD(startDate).subscribe(
      data => { this.apod = data },
      err => console.error(err),
      () => this.updateCalendar()
    );
  }

  updateCalendar(): void {
    // create data array
    var data = [];
    // concat the returned data;
    data = data.concat(this.apod); // this way if only 1 item is returned, there is still a valid `data.length` property
    console.log('data',data);

    // create all the tile items for the html template
    for (var i = 1; i < data.length; i++) {
      this.tiles.push({ text: data[i].title, cols: 1, rows: 1, image: data[i].url});
    }
  }

  /**
  * Simply flips the `isCollapsed` property
  * therefore triggering a rerender of the view
  */
  collapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
