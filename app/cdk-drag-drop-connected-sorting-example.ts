import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    var self=this;
    if (event.previousContainer === event.container) {    
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else if(event.container.id<event.previousContainer.id){
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex); 
       
       this.todo=this.todo.filter(function(item, pos){
                  return self.todo.indexOf(item)== pos; 
                });
    }
    else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex); 
      this.done=this.done.filter(function(item, pos){
                  return self.done.indexOf(item)== pos; 
                });
    }
   
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */