import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {CmsConfigService} from '../../service/cms-config.service';
import {AllRequestService} from '../../service/all-request.service';
import {ApproveSubmiteProductComponent} from '../../dialog/approve-submite-product/approve-submite-product.component';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
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
    LodingTable() {
        this.Config.Loading = true;
        this.list.getSenderProList().subscribe(
            res => {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginators;
                this.Config.Loading = false;
            });
    }
    Approve_Product(imp_id: string) {
        console.log(imp_id);
        const dialogRef = this.dialog.open(ApproveSubmiteProductComponent, {
            width: '600px',
            data: imp_id
        });

        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }
}
export interface ProData {
    imp_id: string;
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
