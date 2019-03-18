import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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

      let err_msg = '';
      if (error.hasOwnProperty(error.message)) {
        err_msg = 'Error: ' + error.error.message;
      } else {
        err_msg = error;
      }
      // Construct error message based on return value from the server


      this.snacker.open(err_msg, 'Close', { duration: 5000, panelClass: ['background-red'] });

      super.handleError(error);

    });
  }

}
