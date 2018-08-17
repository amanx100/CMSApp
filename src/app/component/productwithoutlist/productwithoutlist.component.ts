import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddProDailogComponent} from '../../dialog/add-pro-dailog/add-pro-dailog.component';
import {EditProComponent} from '../../dialog/edit-pro/edit-pro.component';
import {ConfirmationComponent} from '../../dialog/confirmation/confirmation.component';
import {CmsConfigService} from '../../service/cms-config.service';
import {AllRequestService} from '../../service/all-request.service';

@Component({
  selector: 'app-productwithoutlist',
  templateUrl: './productwithoutlist.component.html',
  styleUrls: ['./productwithoutlist.component.scss']
})
export class ProductwithoutlistComponent {
    displayedColumns = ['sl', 'Product_Name', 'total', 'button'];
    dataSource: MatTableDataSource<ProData>;
    @ViewChild(MatPaginator) paginators: MatPaginator;
    constructor(private list: AllRequestService, public dialog: MatDialog, public Config: CmsConfigService) {
        this.LodingTable();
    }
    LodingTable() {
        this.Config.Loading = true;
        this.list.getOtherProList().subscribe(
            res => {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginators;
                this.Config.Loading = false;
            });
    }
    addProduct(name: string) {
        const dialogRef = this.dialog.open(AddProDailogComponent, {
            width: '500px',
            data: name
        });

        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }
}
export interface ProData {
    imp_id: string;
    sl: string;
    Product_Name: string;
    total: string;
}
