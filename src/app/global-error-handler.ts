import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  private snacker: MatSnackBar;

  constructor(private injector: Injector) {
    super();
  }

  handleError(error) {

    console.log('global error');

    if (!this.snacker) {
      this.snacker = this.injector.get(MatSnackBar);
    }

    const err_msg = 'Error: ' + error.message;

    this.snacker.open(err_msg, 'Close', {duration: 2000, extraClasses: ['background-red']});
    super.handleError(error);

  }
}
