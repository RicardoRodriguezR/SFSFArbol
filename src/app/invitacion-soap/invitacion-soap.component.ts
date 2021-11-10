import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface Pais{
  name:string;
}

interface Operacion{
  tipo:string;
}

@Component({
  selector: '<app-invitacion-soap>',
  templateUrl: './invitacion-soap.component.html',
  styleUrls: ['./invitacion-soap.component.scss']
})

export class InvitacionSOAPComponent implements OnInit {
  public invitationQuery: FormGroup | any;
  paises: Pais[] = [
    {name:"Colombia"},
    {name:"Mexico"},
    {name:"Uruguay"},
    {name:"Chile"}
  ];

  operaciones: Operacion[] =[
    {tipo:"Invitacion"},
    {tipo:"Dar de baja"}
  ]
  constructor(
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.invitationQuery = this.FormBuilder.group({
      operacion: [''],
      invitedUserEmailAddress: [''],
      userPrincipalName: [''],
      division_grupo: [''],
      nombre: [''],
      reenviar: false
    })
  }

  createInvitacion() {
    const InvitationQuery = this.invitationQuery.value;
  }
}
