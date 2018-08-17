import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CmsConfigService} from './cms-config.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AllRequestService {

    constructor(private http: HttpClient, private global: CmsConfigService) { }
    getUserList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/LoadUser.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/LoadPro.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    getOtherProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/otherProduct/LoadOtherPro.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getProByid(Pro_id: String): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/LoadPro.php?id=' + Pro_id).map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    getUserByID(user_id: String): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/LoadUser.php?id=' + user_id).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getUserTypeList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/LoadUserType.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    AddUser(_Data: FormData): Observable<any> {
        return this.http.post(this.global.MAIN_URL + '/php/AddUser.php', _Data).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    EditUser(_Data: FormData): Observable<any> {
        return this.http.post(this.global.MAIN_URL + '/php/EditUser.php', _Data).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    EditPro(_Data: FormData): Observable<any> {
        return this.http.post(this.global.MAIN_URL + '/php/EditPro.php', _Data).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    AddUserTypeList(name: String): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/AddUserType.php?name=' + name).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    RemoveUserTypeList(id: String): Observable<any> {
        console.log(id);
        return this.http.get(this.global.MAIN_URL + '/php/RemoveUserType.php?id=' + id).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    RemoveUser(id: String): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/RemoveUser.php?id=' + id).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getLoginAccess(user: String, Pass: String): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/permission.php?email=' + user + '&password=' + Pass).map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    uploadUserImage(Data: FormData): Observable<any> {
       return this.http.post(this.global.MAIN_URL + '/php/uploadUserImage.php', Data).map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    RemovePro(pro_id: string) {
        return this.http.get(this.global.MAIN_URL + '/php/RemovePro.php?id=' + pro_id).map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    AddPro(_FileData: FormData): Observable<any> {
        return this.http.post(this.global.MAIN_URL + '/php/AddPro.php', _FileData).map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    getSenderProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/ProductSend/LoadSubmitProduct.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getSenderInfo_imp(imp_id: string): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/ProductSend/LoadSubmitProduct.php?imp_id=' + imp_id).map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    getAcceptProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/ProductSend/LoadAcceptProduct.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getShippingProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/ProductSend/LoadShippingProduct.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getReceivedProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/ProductSend/LoadReceivedProduct.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }
    getDeliveryProList(): Observable<any> {
        return this.http.get(this.global.MAIN_URL + '/php/ProductSend/LoadDeliveryProduct.php').map(data => {
            return data;
        }, err => {
            return null;
        });
    }

    Approve_submit_product(_FileData: FormData) {
        return this.http.post(this.global.MAIN_URL + '/php/ProductSend/ApproveProduct.php', _FileData).map(data => {
            return data;
        }, err => {
            return null;
        });
    }
}
