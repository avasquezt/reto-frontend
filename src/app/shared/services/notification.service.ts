import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public _snackBar: MatSnackBar) { }

  openNotification(message: string, action: string){
    this._snackBar.open(message, action, {duration: 10000});
  }
}
