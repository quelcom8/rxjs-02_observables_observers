import { fromEvent } from 'rxjs';

const button = document.querySelector('button');

const observable = fromEvent(button, 'click');

//deprecated in rxjs 7
observable.subscribe(
  (value) => console.log(value.type),
  (error) => console.log(error),
  () => console.log('completed')
);

//best practice in rxjs 7
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed'),
});
