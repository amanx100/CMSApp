import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AllRequestService} from '../../service/all-request.service';
import {FormControl, Validators} from '@angular/forms';
import {CmsConfigService} from '../../service/cms-config.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    showImageUpload = true;
    showImage = false;
    sex = 'male';
    TSelect;
    userID;
    userTypes;
    email = new FormControl('', [Validators.required, Validators.email]);
    fullName = new FormControl('', [Validators.required, Validators.minLength( 4 )]);
    mobile = new FormControl('', [Validators.required, Validators.minLength( 11 )]);
    imageUrl = '';
    editAddress = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
              public Req: AllRequestService,
              @Inject(MAT_DIALOG_DATA) public data: String,
              private global: CmsConfigService) {
      this.userID = data;
      this.imageUrl = global.MAIN_URL + '/php/uploads/' + data + '_image.png';
      this.Req.getUserByID(data).subscribe(
          res => {
            this.fullName.setValue(res[0].full_name);
            this.mobile.setValue(res[0].mobile);
            this.email.setValue(res[0].email);
            this.TSelect = res[0].type_id;
            this.editAddress.setValue(res[0].address);
            if (res[0].sex === '1') {
                this.sex = 'female';
            }
          });
    this.Req.getUserTypeList().subscribe(
      res => {
          this.userTypes = res;
      });
  }

  ngOnInit() {
  }
    onSubmit(name: String, email: String, mobile: String, ssex: String, utype: String, address: String, img: any) {

            const _image: File = img.files[0];
            const _FileData: FormData = new FormData();
            _FileData.append('fileToUpload', _image);
            _FileData.append('fullname', name.trim());
            _FileData.append('email', email.trim());
            _FileData.append('mobile', mobile.trim());
            _FileData.append('address', address.trim());
            _FileData.append('id', this.userID);
            _FileData.append('sex', ssex.trim() === 'male' ? '0' : '1');
            _FileData.append('type', utype.trim());
            if (img.files[0] != null) {
                _FileData.append('fileToUpload', _image);
                _FileData.append('image', 'yes');
            } else {
                _FileData.append('image', 'no');
            }
            this.Req.EditUser(_FileData).subscribe(
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
