import { Observable } from 'rxjs';

//Create of observable
const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
});
// Observer
const observer = {
  next: (value) => console.log(value),
};

observable$.subscribe(observer);
