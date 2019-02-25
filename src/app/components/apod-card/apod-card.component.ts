import { Component, OnInit, Input } from '@angular/core';
import { MatGridListModule, MatCardModule } from '@angular/material';

// TODO continue decoupling apod card from home component

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss']
})
export class ApodCardComponent implements OnInit {

  @Input() cardObj: [];

  // preset variables
  isCollapsed: boolean = true;
  cols: number = 1;
  rows: number = 1;

  // variables to be passed in
  title: string;
  url: string;
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;

  constructor(options: var[]) {
    this.title = options.title;
    this.url = options.url;
    this.copyright = options.copyright;
    this.date = options.date;
    this.explanation = options.explanation;
    this.hdurl = options.hdurl;
    this.media_type = options.media_type;
    this.service_version = options.service_version;
  }

  ngOnInit() {
  }

  setIsCollapsed(collapseCard: boolean = true): boolean {
    this.isCollapsed = collapseCard;

    return this.isCollapsed;
  }

  flipIsCollapsed(): boolean {
    this.isCollapsed = !this.isCollapsed;

    return this.isCollapsed;
  }
}
