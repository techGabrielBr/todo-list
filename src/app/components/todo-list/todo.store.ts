import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './../../models/task';

export interface State{
  tasks: Task[];
}

const state: State = {
  tasks!: []
}

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable();

  get value(){
      return this.subject.value;
  }

  set(name: string, state: any ){
      this.subject.next({
          ...this.value, [name]: state
      })
  }

  getTasks(): Observable<Task[]>{
    return this.store.pipe(
      map((store) => {
        return store.tasks;
      })
    )
  }
}
