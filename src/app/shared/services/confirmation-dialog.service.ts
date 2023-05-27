import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogData } from '../models/ConfirmationDialogData.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog){ }

  confirmDialog(data: ConfirmationDialogData): Observable<boolean>{
    return this.dialog.open(ConfirmationDialogComponent, {
      data,
      width: '500px',
    }).afterClosed();
  }
}
