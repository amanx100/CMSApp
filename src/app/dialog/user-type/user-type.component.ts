import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';
import {FormControl, Validators} from '@angular/forms';
import {AdduserComponent} from '../adduser/adduser.component';
import {ConfirmationComponent} from '../confirmation/confirmation.component';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {
  displayedColumns = ['serial', 'type_name', 'type_id'];
  dataSource;
  name = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<UserTypeComponent>, public Req: AllRequestService, public dialog: MatDialog) {
      this.Req.getUserTypeList().subscribe(
          res => {
              this.dataSource = new MatTableDataSource(res);
          });
  }

  ngOnInit() {
  }
  onSubmit(name: String) {
      this.Req.AddUserTypeList(name).subscribe(
          res => {
              this.dataSource = new MatTableDataSource(res);
              this.name.setValue('');
          });
  }
  onRemove(id: String) {
      const dialogRef = this.dialog.open(ConfirmationComponent, {
          width: '400px'
      });

      dialogRef.afterClosed().subscribe(result => {
          if (result === 'yes') {
              this.Req.RemoveUserTypeList(id).subscribe(
                  res => {
                      this.dataSource = new MatTableDataSource(res);
                  });
          }
          console.log(`Dialog result: ${result}`);
      });
  }
  onClose() {
      this.dialogRef.close('cancel');
  }
}
