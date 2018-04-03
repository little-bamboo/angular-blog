import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  private snacker: MatSnackBar;

  constructor(private injector: Injector, private zone: NgZone) {
    super();
  }

  handleError(error) {

    this.zone.run(() => {

      console.log('global error');

      if (!this.snacker) {
        this.snacker = this.injector.get(MatSnackBar);
      }

      // Construct error message based on return value from the server
      // const err_msg = 'Error: ' + error.error.message;

      this.snacker.open(error, 'Close', {duration: 2000, extraClasses: ['background-red']});

      super.handleError(error);

    });
  }

}
