import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MytreeComponent } from './mytree/mytree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgForIn } from './ng-for-in.directive';
import { InvitacionSOAPComponent } from './invitacion-soap/invitacion-soap.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponentComponent,
    TreeViewComponent,
    MytreeComponent,
    NgForIn,
    InvitacionSOAPComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }