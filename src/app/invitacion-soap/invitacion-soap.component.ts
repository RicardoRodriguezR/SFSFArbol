import { InviitationQuery } from './../interface/invitatios-query';
import { TaskService } from './../services/task.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgModel } from '@angular/forms';

interface Pais{
  name:string;
}

interface Operacion{
  tipo:string;
  value:string;
}

interface Reenvio{
  value:string;
}

var invitation: InviitationQuery;
@Component({
  selector: '<app-invitacion-soap>',
  templateUrl: './invitacion-soap.component.html',
  styleUrls: ['./invitacion-soap.component.scss']
})

export class InvitacionSOAPComponent implements OnInit {
  public invitationQuery: FormGroup | any;
  paises: Pais[] = [
    {
      name:"Colombia"
    },
    {
      name:"Mexico"
    },
    {
      name:"Uruguay"
    },
    {
      name:"Chile"
    },
    {
      name:"Guatemala"
    },
    {
      name:"Corporativo"
    }
  ];

  operaciones: Operacion[] =[
    {
      tipo:"Invitar",
      value:"invitar"
    },
    {
      tipo:"Dar de baja",
      value:"dar_baja"
    },
    {
      tipo:"Reemplzar",
      value:"reemplazar"
    }
  ]

  reenvios: Reenvio[]=[
    {
      value:"SI"
    },
    {
      value:"NO"
    }
  ]
  constructor(
    private FormBuilder: FormBuilder,
    private TaskService: TaskService
  ){
  }
  ngOnInit(): void {
    this.invitationQuery = this.FormBuilder.group({
      operacion: [''],
      invitedUserEmailAddress: [''],
      userPrincipalName: [''],
      userPrincipalNameOld:[''],
      division_grupo: [''],
      nombre: [''],
      reenviar: ['']
    })

  }

  createInvitacion() {
    const InvitationQuery = this.invitationQuery.value;
    this.TaskService.crearSUAMApiGraph(InvitationQuery)
    .subscribe()
  }
}
