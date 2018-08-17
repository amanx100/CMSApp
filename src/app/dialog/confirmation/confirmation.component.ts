import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  message = 'Are You Remove This Item?';
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close('yes');
  }
  onClose() {
      this.dialogRef.close('Close');
  }
}
