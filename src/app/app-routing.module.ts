import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvitacionSOAPComponent } from './invitacion-soap/invitacion-soap.component';

const routes: Routes = [
    {path:"NavBarComponent", component:NavBarComponent},
    {path:'body-component', component:BodyComponentComponent},
    {path:'InvitacionSoap', component:InvitacionSOAPComponent},
    {path:'app.component', component:AppComponent},
    {path:"", redirectTo:'./index.html', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
