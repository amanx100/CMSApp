import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {CmsConfigService} from '../../service/cms-config.service';
import {AllRequestService} from '../../service/all-request.service';
import {ApproveSubmiteProductComponent} from '../../dialog/approve-submite-product/approve-submite-product.component';
import {ApproveShippingComponent} from '../../dialog/approve-shipping/approve-shipping.component';

@Component({
  selector: 'app-warehouse-sender',
  templateUrl: './warehouse-sender.component.html',
  styleUrls: ['./warehouse-sender.component.scss']
})
export class WarehouseSenderComponent {
    displayedColumns = ['full_name', 'Product_Name', 'Quantity', 'SendByAorS', 'worcbm', 'amount', 'button'];
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
    Approve_Product(imp_id: string) {
        const dialogRef = this.dialog.open(ApproveShippingComponent, {
            width: '600px',
            data: imp_id
        });

        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }
    LodingTable() {
        this.Config.Loading = true;
        this.list.getAcceptProList().subscribe(
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
