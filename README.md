# CalendarApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

It is a basic calendar built using Angular Elements.

For better understanding what Angular Elements are: https://angular.io/guide/elements

## Usage

If you intend to keep the same package.json then just run the following script
### npm run-script build

If you have your own package.json then you can replace the ng build command as follows and then run the above npm command
### "ng build --prod && cat dist/calendar-app/runtime-es2015.*.js dist/calendar-app/polyfills-es2015.*.js dist/calendar-app/main-es2015.*.js > custom-calendar/calendar.js && cp dist/calendar-app/styles.*.css custom-calendar/calendar.css"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
