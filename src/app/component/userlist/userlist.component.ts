import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';
import {AdduserComponent} from '../../dialog/adduser/adduser.component';
import {UserTypeComponent} from '../../dialog/user-type/user-type.component';
import {CmsConfigService} from '../../service/cms-config.service';
import {ConfirmationComponent} from '../../dialog/confirmation/confirmation.component';
import {EditUserComponent} from '../../dialog/edit-user/edit-user.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {

    displayedColumns = ['full_name', 'mobile', 'user_id', 'button'];
    dataSource: MatTableDataSource<UserData>;
    Search = false;
    @ViewChild(MatPaginator) paginators: MatPaginator;
    constructor(private list: AllRequestService, public dialog: MatDialog, public Config: CmsConfigService) {
        this.LodingTable();
    }
    AddUser() {
        const dialogRef = this.dialog.open(AdduserComponent, {
            width: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }
    EditUser(user_id: String) {
        const dialogRef = this.dialog.open(EditUserComponent, {
            width: '600px',
            data: user_id
        });

        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }

    TypeUser() {
        const dialogRef = this.dialog.open(UserTypeComponent, {
            width: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {});
    }
    Delete_User(user_id: String) {
        const dialogRef = this.dialog.open(ConfirmationComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'yes') {
                this.list.RemoveUser(user_id).subscribe(
                    res => {
                        if (res['msg'] === 'yes') {
                            this.LodingTable();
                        }
                    }
                );
            }
        });
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    LodingTable() {
        this.Config.Loading = true;
        this.list.getUserList().subscribe(
            res => {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginators;
                this.Config.Loading = false;
            });
    }
}
export interface UserData {
    user_id: string;
    type_id: String;
    full_name: string;
    password: string;
    email: string;
    address: string;
    mobile: string;
    photo: string;
    user: string;
}
