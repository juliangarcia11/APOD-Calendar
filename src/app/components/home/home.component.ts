import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { Observable } from 'rxjs';
import * as Date from 'date-format';

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
  getAPOD(startDate: string = "2019-02-16") {
    // TODO: Show the last 10 days by default; temporarily hard coded date above
    // if no start date was provided, let's get today's date
    if (startDate == "") {
      startDate = Date('yyyy-MM-dd').toString();
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
    console.log('data',data);

    // create all the tile items for the html template
    for (var i = 1; i < data.length; i++) {
      this.apodCards.push({ text: data[i].title, cols: 1, rows: 1, image: data[i].url, details: data[i].explanation, isCollapsed: true});
    }
  }

  /**
  * Changes the `isCollapsed` property of a particular
  * `card` to the opposite of what it was. A collapsed
  * card only shows the APOD image not the title.
  *
  * TODO decouple ApodCardComponent
  */
  collapse(card : var): void {
    console.log(card);
    card.isCollapsed = !card.isCollapsed;
  }
}
