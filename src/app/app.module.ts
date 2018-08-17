import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './component/main/main.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { SenderComponent } from './component/sender/sender.component';
import { ReceiverComponent } from './component/receiver/receiver.component';
import { DeliveryComponent } from './component/delivery/delivery.component';
import { ProductComponent } from './component/product/product.component';
import { ProductwithoutlistComponent } from './component/productwithoutlist/productwithoutlist.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {CmsConfigService} from './service/cms-config.service';
import {AllRequestService} from './service/all-request.service';
import {AuthguardGuard} from './guard/authguard.guard';
import {HttpClientModule} from '@angular/common/http';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,
    MatPaginatorModule, MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule, MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { AdduserComponent } from './dialog/adduser/adduser.component';
import { UserTypeComponent } from './dialog/user-type/user-type.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { EditUserComponent } from './dialog/edit-user/edit-user.component';
import { EditProComponent } from './dialog/edit-pro/edit-pro.component';
import { AddProDailogComponent } from './dialog/add-pro-dailog/add-pro-dailog.component';
import { WarehouseSenderComponent } from './component/warehouse-sender/warehouse-sender.component';
import { UserAddProComponent } from './dialog/user-add-pro/user-add-pro.component';
import { ShippingComponent } from './component/shipping/shipping.component';
import { ApproveSubmiteProductComponent } from './dialog/approve-submite-product/approve-submite-product.component';
import {ApproveShippingComponent} from './dialog/approve-shipping/approve-shipping.component';

const appRoutes: Routes =  [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'main',
        canActivate: [AuthguardGuard],
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pro-sender',
                component: SenderComponent
            },
            {
                path: 'wh-sender',
                component: WarehouseSenderComponent
            },
            {
                path: 'shipping-product',
                component: ShippingComponent
            },
            {
                path: 'receiver',
                component: ReceiverComponent
            },
            {
                path: 'user',
                component: UserlistComponent
            },
            {
                path: 'delivery',
                component: DeliveryComponent
            },
            {
                path: 'product',
                component: ProductComponent
            },
            {
                path: 'productwithoutlist',
                component: ProductwithoutlistComponent
            }
        ]
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    UserlistComponent,
    SenderComponent,
    ReceiverComponent,
    DeliveryComponent,
    ProductComponent,
    ProductwithoutlistComponent,
    LoginComponent,
    AdduserComponent,
    UserTypeComponent,
    ConfirmationComponent,
    EditUserComponent,
    EditProComponent,
    AddProDailogComponent,
    WarehouseSenderComponent,
    UserAddProComponent,
    ShippingComponent,
    ApproveSubmiteProductComponent,
    ApproveShippingComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      MatSnackBarModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatDialogModule,
      MatButtonModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatCardModule,
      MatSelectModule,
      ReactiveFormsModule,
      MatRadioModule,
      MatGridListModule,
      MatProgressSpinnerModule
  ],
    entryComponents: [
        AdduserComponent,
        AddProDailogComponent,
        EditUserComponent,
        UserTypeComponent,
        ConfirmationComponent,
        EditProComponent,
        UserAddProComponent,
        ApproveSubmiteProductComponent,
        ApproveShippingComponent
    ],
  providers: [
      CmsConfigService,
      AllRequestService,
      AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
