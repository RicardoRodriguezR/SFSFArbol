/*import { stringify } from '@angular/compiler/src/util';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { take } from 'rxjs/operators';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface FileNode {
  name: any;
  children?: FileNode[];
}

interface FlatTreeNode {
  expandable: boolean;
  name: any;
  level: number;
}

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss']
})
export class BodyComponentComponent implements OnInit {
  private transformer = (node: FileNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  public viewBody: any;
  public formQuery!: FormGroup;
  public headerTable: string[] = [];
  public headerTableChildren: string[] = [];
  public listChil: string[] = [];
  public linea: any;

  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private FormBuilder: FormBuilder,
    private taskService: TaskService,
  ) { }

  titulo = "Formulario para consultas SFSF. Ingrese los valores a consultar";
  tituloList = "Datos de la consulta";
  ngOnInit(): void {
    this.formQuery = this.FormBuilder.group({
      entity: [''],
      select: [''],
      expand: [''],
      filter: ['']
    })
  }

  createQuerySFSF() {
    const BodyQuery = this.formQuery.value;
    let dato: FileNode[] = [
    ];
    var element;
    this.taskService.createBodyQuery(BodyQuery)
      .pipe(take(1))
      .subscribe((response: any) => {
        //console.log(response);
        let json: any = {};
        for (var key in response) {
          for (var key1 in response[key]) {
            this.viewBody = response[key][key1];
            console.log(this.viewBody);
            for (var key2 in response[key][key1]) {
              for (var _child in response[key][key1][key2]) {
                if (typeof response[key][key1][key2][_child] == 'object') {
                  for (var _child1 in response[key][key1][key2][_child]) {
                    json = {
                      name: response[key][key1][key2],
                      children: response[key][key1][key2][_child][_child1]
                    }
                    console.log('Hola a todos');
                  }
                } else {
                  json = {
                    name: response[key][key1][key2],
                    childre: []
                  }
                  console.log('Hola');
                }
              }
              dato.push(json)
            }
          }
          //console.log(json);
        }
        console.log(dato);
        this.dataSource.data = dato;
      })
  }
  hasChild = (_: number, node: FlatTreeNode) => node.expandable;
}*/
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.scss']
})
export class BodyComponentComponent implements OnInit {
  public viewBody: any;
  public formQuery!: FormGroup;
  public headerTable: string[] = [];

  constructor(
    private FormBuilder: FormBuilder,
    private taskService: TaskService,
  ) { }

  titulo = "Formulario para consultas SFSF. Ingrese los valores a consultar";
  tituloList = "Datos de la consulta";

  ngOnInit(): void {
    this.formQuery = this.FormBuilder.group({
      entity: [''],
      select: [''],
      expand: [''],
      filter: ['']
    })
  }

  createQuerySFSF() {
    const BodyQuery = this.formQuery.value;
    this.taskService.createBodyQuery(BodyQuery)
      .pipe(take(1))
      .subscribe((response: any) => {
        //this.headerTable = this.formQuery.get('select')?.value.split(',');
        this.viewBody = response;
        for (const key1 in response) {
          for (const key2 in response[key1]) {
            this.viewBody = response[key1][key2];
            for (const key in response[key1][key2][0]) {
              this.headerTable.push(key);
            }
          }
        }
      })
  }
}
