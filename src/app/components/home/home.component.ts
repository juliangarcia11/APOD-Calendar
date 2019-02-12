import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { ApodApiService } from '../../providers/apod-api.service';
import { Observable } from 'rxjs/Rx';

// temporary
export interface Tile {
 cols: number;
 rows: number;
 text: string;
 image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // temporary
  tiles: Tile[] = [];
  apod: Object;

  constructor(private _apodService: ApodApiService) {
    // // temporary
    // for (var i = 0; i < 5; i++) {
    //   this.tiles.push(
    //     { text: 'SUNDAY',    cols: 1, rows: 1, border: '3px double purple' },
    //     { text: 'MONDAY',    cols: 1, rows: 1, border: '3px double purple' },
    //     { text: 'TUESDAY',   cols: 1, rows: 1, border: '3px double purple' },
    //     { text: 'WEDDAY',    cols: 1, rows: 1, border: '3px double purple' },
    //     { text: 'THURSDAY',  cols: 1, rows: 1, border: '3px double purple' },
    //     { text: 'FRIDAY',    cols: 1, rows: 1, border: '3px double purple' },
    //     { text: 'SATURDAY',  cols: 1, rows: 1, border: '3px double purple' }
    //   );
    // }
  }

  ngOnInit() {
    this.getAPOD();
  }

  getAPOD() {
    this._apodService.getAPOD().subscribe(
      data => { this.apod = data },
      err => console.error(err),
      () => this.updateCalendar()
    );
  }

  updateCalendar() {
    var data = this.apod;
    console.log('done loading apod', this.apod)
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
    this.tiles.push({ text: data.title, cols: 1, rows: 1, image: data.url});
  }

}
