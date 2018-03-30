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

    this.snacker.open(error.message, 'button action', {duration: 2000});
    super.handleError(error);

  }
}
