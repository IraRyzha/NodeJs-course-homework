import { of, interval } from "rxjs";

import { mergeMap, take } from "rxjs/operators";

const firstObservable = of("Перший потік");

const secondObservable = () => interval(1000).pipe(take(3));

firstObservable
  .pipe(
    mergeMap(() => {
      return secondObservable();
    })
  )
  .subscribe((data) => console.log("nested subscribe:", data));

// firstObservable.subscribe((data1) => {
//   secondObservable().subscribe((data2) => {
//     console.log("Вкладений subscribe:", data2);
//   });
// });
