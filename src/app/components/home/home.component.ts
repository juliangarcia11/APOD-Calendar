import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { Observable } from 'rxjs';
import * as Moment from 'moment';

import { ApodApiService } from '../../providers/apod-api.service';

/**
* The Main component of the APOD Calendar
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apodCards: [] = [];// TODO decouple ApodCardComponent
  apod: Object;

  isCollapsed: boolean = true;

  constructor(private _apodService: ApodApiService) {
  }

  ngOnInit() {
    this.getAPOD();
  }

  /**
  * Requests the Astronomy Picture of the Date with the option of
  * providing a start date in order to return the APODs from
  * that date until today.
  *
  * @param startDate    The Earliest APOD date to request for
  */
  getAPOD(startDate: string = "") {
    // if no start date was provided, let's get the last 8 APODs to fill two rows in the app
    if (startDate == "") {
      startDate = Moment().subtract(1, 'week').format("YYYY-MM-DD");
    }

    // use the angular service to make the API request,
    // then update the home view
    this._apodService.getAPOD(startDate).subscribe(
      data => { this.apod = data },
      err => console.error(err),
      () => this.updateCalendar()
    );
  }

  /**
  * Update the `apodCards` property of this component
  * in order to rerender the component
  */
  updateCalendar(): void {
    // create data array
    var data = [];
    // concat the returned data;
    data = data.concat(this.apod); // this way if only 1 item is returned, there is still a valid `data.length` property
    data.reverse(); // `reverse` puts the list in most current order

    // create all the tile items for the html template
    for (var i = 0; i < data.length; i++) {
      this.apodCards.push({
        text: data[i].title,
        cols: 1,
        rows: 1,
        image: data[i].url,
        details: data[i].explanation,
        date: Moment(data[i].date).format("MMMM Do, YYYY"),
        isCollapsed: true
      });
    }
  }

  /**
  * Changes the `isCollapsed` property of a particular
  * `card` to the opposite of what it was. A collapsed
  * card only shows the APOD image not the title.
  *
  * TODO decouple ApodCardComponent
  */
  collapse(card): void {
    card.cols = (card.cols > 1) ? 1 : 4;
    card.isCollapsed = !card.isCollapsed;
  }
}
