import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
    showImageUpload = true;
    showImage = false;
    sex = 'male';
    TSelect;
    userTypes;
    email = new FormControl('', [Validators.required, Validators.email]);
    fullName = new FormControl('', [Validators.required, Validators.minLength( 4 )]);
    mobile = new FormControl('', [Validators.required, Validators.minLength( 11 )]);
    constructor(public dialogRef: MatDialogRef<AdduserComponent>, public Req: AllRequestService) {
        this.Req.getUserTypeList().subscribe(
            res => {
                this.userTypes = res;
                this.TSelect = this.userTypes[0].type_id;
            });
    }
    ngOnInit() {
    }
    onSubmit(name: String, email: String, mobile: String, sex: String, utype: String, address: String, img: any) {
        if (img.files[0] != null) {
            const _image: File = img.files[0];
            const _FileData: FormData = new FormData();
            _FileData.append('fileToUpload', _image);
            _FileData.append('fullname', name.trim());
            _FileData.append('email', email.trim());
            _FileData.append('mobile', mobile.trim());
            _FileData.append('address', address.trim());
            _FileData.append('sex', sex.trim());
            _FileData.append('type', utype.trim());
            _FileData.append('fileToUpload', _image);
            this.Req.AddUser(_FileData).subscribe(
                res => {
                    console.log(res);
                    if (res['msg'] === 'yes') {
                        this.dialogRef.close(res);
                    }
                });
        } else {
            console.log('not');
        }
    }
    onClose() {
        this.dialogRef.close('Close');
    }
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getFullNameMessage() {
        return this.fullName.hasError('required') ? 'You must enter a value' :
            this.fullName.hasError('minlength') ? 'Name must be at least 4 characters long.' : '';
    }
    getMobileMessage() {
        return this.fullName.hasError('required') ? 'You must enter a value' :
            this.fullName.hasError('minlength') ? 'Name must be at least 4 characters long.' : '';
    }
    userImage(userImageView: any, fileInput: any) {
        fileInput.addEventListener('change', function() {
            const reader  = new FileReader();
            reader.onloadend = function () {
                userImageView.src = reader.result;
            };
            if (fileInput.files[0]) {
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                userImageView.src = '';
            }
        });
        fileInput.click();
        this.showImageUpload = false;
        this.showImage = true;
    }

}
