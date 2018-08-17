import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {EditUserComponent} from '../../dialog/edit-user/edit-user.component';
import {CmsConfigService} from '../../service/cms-config.service';
import {UserAddProComponent} from '../../dialog/user-add-pro/user-add-pro.component';
import {ConfirmationComponent} from '../../dialog/confirmation/confirmation.component';
import {UserTypeComponent} from '../../dialog/user-type/user-type.component';
import {AllRequestService} from '../../service/all-request.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent {

    displayedColumns = ['full_name', 'Product_Name', 'Quantity', 'SendByAorS', 'worcbm', 'amount'];
    dataSource: MatTableDataSource<ProData>;
    @ViewChild(MatPaginator) paginators: MatPaginator;
    constructor(private list: AllRequestService, public dialog: MatDialog, public Config: CmsConfigService) {
        this.LodingTable();
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    LodingTable() {
        this.Config.Loading = true;
        this.list.getDeliveryProList().subscribe(
            res => {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginators;
                this.Config.Loading = false;
            });
    }
}
export interface ProData {
    pro_name: string;
    full_name: string;
    mobile: string;
    Product_Name: string;
    tr_no: string;
    Post_date: string;
    Quantity: string;
    Box_id: string;
    Weight: string;
    CBM: string;
    SendByAorS: string;
    amount: string;
    CBMPrice: string;
    WeightPrice: string;
}
