import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';
import {CmsConfigService} from '../../service/cms-config.service';
import {EditProComponent} from '../../dialog/edit-pro/edit-pro.component';
                import {ConfirmationComponent} from '../../dialog/confirmation/confirmation.component';
                import {AddProDailogComponent} from '../../dialog/add-pro-dailog/add-pro-dailog.component';

                @Component({
                    selector: 'app-product',
                    templateUrl: './product.component.html',
                    styleUrls: ['./product.component.scss']
                })
export class ProductComponent {
                    displayedColumns = ['pro_id', 'pro_name', 'CBMPrice', 'WeightPrice', 'button'];
                    dataSource: MatTableDataSource<ProData>;
                    @ViewChild(MatPaginator) paginators: MatPaginator;
                    constructor(private list: AllRequestService, public dialog: MatDialog, public Config: CmsConfigService) {
                        this.LodingTable();
                    }
                    LodingTable() {
                        this.Config.Loading = true;
                        this.list.getProList().subscribe(
                            res => {
                                this.dataSource = new MatTableDataSource(res);
                                this.dataSource.paginator = this.paginators;
                                this.Config.Loading = false;
            });
    }

    EditPro(pro_id: string) {
        const dialogRef = this.dialog.open(EditProComponent, {
           width: '600px',
           data: pro_id
        });
        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }

    DeletePro(pro_id: string) {
        const dialogRef = this.dialog.open(ConfirmationComponent, {
            width: '400px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'yes') {
                this.list.RemovePro(pro_id).subscribe(
                    res => {
                        if (res['msg'] === 'yes') {
                            this.LodingTable();
                        }
                    }
                );
            }
        });
    }

    addProduct() {
        const dialogRef = this.dialog.open(AddProDailogComponent, {
            width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.LodingTable();
        });
    }
}
export interface ProData {
    pro_id: string;
    pro_name: string;
    WeightPrice: string;
    CBMPrice: string;
}
