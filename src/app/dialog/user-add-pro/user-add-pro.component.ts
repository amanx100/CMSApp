import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {CmsConfigService} from '../../service/cms-config.service';
import {AllRequestService} from '../../service/all-request.service';

@Component({
  selector: 'app-user-add-pro',
  templateUrl: './user-add-pro.component.html',
  styleUrls: ['./user-add-pro.component.scss']
})
export class UserAddProComponent {
    ProName = new FormControl('', [Validators.required, Validators.minLength( 4 )]);
    weightPrice = new FormControl('', [Validators.required]);
    cbmprice = new FormControl('', [Validators.required]);
    constructor(public dialogRef: MatDialogRef<UserAddProComponent>,
                public Req: AllRequestService,
                public snackBar: MatSnackBar,
                @Inject(MAT_DIALOG_DATA) public data: String,
                private global: CmsConfigService) {
        this.ProName.setValue(data);
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
        if (name.length >= 4) {
            if (weight.toString().length > 0) {
                if (cbm.toString().length > 0) {
                    const _FileData: FormData = new FormData();
                    _FileData.append('ProName', name.trim());
                    _FileData.append('weight', weight.toString());
                    _FileData.append('cbm', cbm.toString());
                    this.Req.AddPro(_FileData).subscribe(
                        res => {
                            console.log(res);
                            if (res['msg'] === 'yes') {
                                this.dialogRef.close(res);
                            } else {
                                this.snackBar.open(res['msg'], 'Close', {
                                    duration: 2000,
                                });
                            }
                        });
                } else {
                    this.snackBar.open('Wrong CBM Price.', 'Close', {
                        duration: 2000,
                    });
                }
            } else {
                this.snackBar.open('Wrong Weight Price.', 'Close', {
                    duration: 2000,
                });
            }
        } else {
            this.snackBar.open('Wrong Product Name.', 'Close', {
                duration: 2000,
            });
        }
    }
    onClose() {
        this.dialogRef.close('Close');
    }

}
