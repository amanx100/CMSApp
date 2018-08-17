import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {CmsConfigService} from '../../service/cms-config.service';
import {AllRequestService} from '../../service/all-request.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.scss']
})
export class EditProComponent implements OnInit {
    ProId;
    ProName = new FormControl('', [Validators.required, Validators.minLength( 4 )]);
    weightPrice = new FormControl('', [Validators.required]);
    cbmprice = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
              public Req: AllRequestService,
              @Inject(MAT_DIALOG_DATA) public data: String,
              private global: CmsConfigService) {
      this.ProId = data;
      this.Req.getProByid(data).subscribe(
          res => {
              this.ProName.setValue(res[0].pro_name);
              this.cbmprice.setValue(res[0].CBMPrice);
              this.weightPrice.setValue(res[0].WeightPrice);
          });
  }

  ngOnInit() {
  }
    getFullNameMessage() {
        return this.ProName.hasError('required') ? 'You must enter a value' :
            this.ProName.hasError('minlength') ? 'Name must be at least 4 characters long.' : '';
    }
    getWeightMessage() {
        return this.weightPrice.hasError('required') ? 'You must enter a value' : '';
    }
    getcbmMessage() {
        return this.cbmprice.hasError('required') ? 'You must enter a value' : '';
    }
    onSubmit(name: String, weight: String, cbm: String) {
        const _FileData: FormData = new FormData();
        _FileData.append('ProName', name.trim());
        _FileData.append('weight', weight.trim());
        _FileData.append('cbm', cbm.trim());
        _FileData.append('id', this.ProId);
        this.Req.EditPro(_FileData).subscribe(
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
