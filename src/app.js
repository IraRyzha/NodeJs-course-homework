import { of, interval, delay, pipe } from "rxjs";

import { mergeMap, concatMap, take } from "rxjs/operators";

const firstObservable = of("Перший потік");

const secondObservable = () => interval(1000).pipe(take(3));

firstObservable
  .pipe(
    mergeMap(() => {
      return secondObservable();
    })
  )
  .subscribe((data) => console.log("nested subscribe:", data));

// additional task

// const obs = of(1, 2, 3, 4, 5);

// obs
//   .pipe(concatMap((value) => of(value).pipe(delay(1000))))
//   .subscribe((data) => console.log(data));
