/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasksFinalizadasComponent } from './tasks-finalizadas.component';

describe('TasksFinalizadasComponent', () => {
  let component: TasksFinalizadasComponent;
  let fixture: ComponentFixture<TasksFinalizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksFinalizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
