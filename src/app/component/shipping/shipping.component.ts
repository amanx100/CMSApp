import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';
import {CmsConfigService} from '../../service/cms-config.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {

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
        this.list.getShippingProList().subscribe(
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
