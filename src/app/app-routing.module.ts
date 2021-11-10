import { TreeViewComponent } from './tree-view/tree-view.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvitacionSOAPComponent } from './invitacion-soap/invitacion-soap.component';

const routes: Routes = [
    {path:'body-component', component:BodyComponentComponent},
    {path:'TreeViewComponent', component:TreeViewComponent},
    {path:'InvitacionSoap', component:InvitacionSOAPComponent},
    {path:"", redirectTo:'./index.html', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
