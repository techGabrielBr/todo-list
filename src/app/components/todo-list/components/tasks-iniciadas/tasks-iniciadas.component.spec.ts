/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasksIniciadasComponent } from './tasks-iniciadas.component';

describe('TasksIniciadasComponent', () => {
  let component: TasksIniciadasComponent;
  let fixture: ComponentFixture<TasksIniciadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksIniciadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksIniciadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
