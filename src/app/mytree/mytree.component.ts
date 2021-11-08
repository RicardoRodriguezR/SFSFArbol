import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/** Archivo de datos de nodo con posibles nodos secundarios. */
interface FileNode {
  name: string;
  children?: FileNode[];
}

const TREE_DATA: FileNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/**
 * Nodo de árbol acoplado que se ha creado a partir de un FileNode a
 * través del acoplador.
 * Aplanado los nodos incluyen índice de nivel y si se pueden expandir
 * o no.
 */
interface FlatTreeNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-mytree',
  templateUrl: './mytree.component.html',
  styleUrls: ['./mytree.component.scss']
})
export class MytreeComponent {
  private transformer = (node: FileNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  /** TreeControl controla el estado de expansión
   * colapso de los nodos del árbol.  */
  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level, node=> node.expandable);

  /** TreeFlattener se utiliza para generar la lista
   * plana de elementos a partir de datos jerárquicos. */
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  /** MatTreeFlatDataSource conecta el control y el acoplador
   * para proporcionar datos. */
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor() {
    this.dataSource.data = TREE_DATA
  }
  hasChild = (_: number, node: FlatTreeNode) => node.expandable;
}
