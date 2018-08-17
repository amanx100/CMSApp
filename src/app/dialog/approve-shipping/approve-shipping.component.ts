import {Component, Inject, OnInit} from '@angular/core';
import {ApproveSubmiteProductComponent} from '../approve-submite-product/approve-submite-product.component';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';
import {CmsConfigService} from '../../service/cms-config.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-approve-shipping',
  templateUrl: './approve-shipping.component.html',
  styleUrls: ['./approve-shipping.component.scss']
})
export class ApproveShippingComponent implements OnInit {
    dataSource: MatTableDataSource<ProData>;
    Full_name: string;
    mobile_number: string;
    tr_Number: string;
    pro_name: string;
    SendByAorS: string;
    weight_Air = new FormControl();
    Height_ship = new FormControl();
    Width_ship = new FormControl();
    height: string;
    width: string;
    Product_Name: string;
    imp_id: string;

    constructor(public dialogRef: MatDialogRef<ApproveSubmiteProductComponent>, public Req: AllRequestService
        , public Config: CmsConfigService, private list: AllRequestService, @Inject(MAT_DIALOG_DATA) public data: string) {
        this.LodingTable(data);
        this.imp_id = data;

    }
    LodingTable(id: string) {
        this.Config.Loading = true;
        this.list.getSenderInfo_imp(id).subscribe(
            res => {
                console.log(res[0].full_name);
                this.Full_name = res[0].full_name;
                this.mobile_number = res[0].mobile;
                this.tr_Number = res[0].tr_no;
                this.pro_name = res[0].pro_name;
                this.Product_Name = res[0].Product_Name;
                this.Config.Loading = false;
                this.SendByAorS = res[0].SendByAorS;
                this.weight_Air.setValue(res[0].Weight);
                this.height = res[0].height;
                this.width = res[0].width;
            });
    }
    ngOnInit() {
    }

    onSubmit() {
        const _FileData: FormData = new FormData();
        _FileData.append('imp_id', this.imp_id);
        _FileData.append('col', 'Ship_date');
        this.Req.Approve_submit_product(_FileData).subscribe(
            res => {
                console.log(res);
                if (res['msg'] === 'yes') {
                    this.dialogRef.close(res);
                }
            });
    }

    onClose() {
        this.dialogRef.close('Close');
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
