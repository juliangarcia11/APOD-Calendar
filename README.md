# APOD Calendar

## Introduction
A small project intended to display multiple photos from [NASA's Astronomy Picture of the Day(APOD) API](https://apod.nasa.gov/apod/astropix.html). The intended goal of this project is to integrate NASA's available [APOD data](https://api.nasa.gov/api.html#apod) in a calendar like fashion where each day is represented by a photo.

This bootstraped and packagable Angular 7 and Electron (Typescript + SASS + Hot Reload) Desktop application works on Mac, Windows, and Linux platforms and runs with:
- Angular v7.1.4
- Electron v4.0.0
- Electron Builder v20.28.1

### Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/juliangarcia11/APOD-Calendar
```

Install dependencies and run the app with npm :

``` bash
npm install && npm start
```

This now runs the Angular + Electron app in a local development environment with hot reload, meaning each update to the code will trigger a rerender of the application!

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window. "Developer Tools" can be shown by uncommenting `win.webContents.openDevTools();` in `main.ts`.

### My Code
My additions to this project started by [Maximegris](https://github.com/maximegris/angular-electron.git) can be found under the following directories:

- [Components Folder](src/app/components/)
- [APOD API Provider Class](src/app/providers/apod-api.service.ts)

### Credits
- As an avid consumer of astronomy photos and news, I was delighted to find out NASA had opened up some of their troves of data to the public via APIs. The data set used in this project is pulled from [here](https://api.nasa.gov/api.html#apod). Thank you NASA for continuing to inspire generations to come. We've only just started exploring.
- The original boilerplate author's project can be found [here](https://github.com/maximegris/angular-electron.git). Thank you, [Maximegris](https://github.com/maximegris) :)
- Color Palette via [Paletton](http://paletton.com/#uid=23h0u0kaOw02WSq6vHQfLr2lplp)
- [Angular](https://angular.io)
- [Electron](https://electronjs.org/)
- [npm](https://www.npmjs.com/)

[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)
