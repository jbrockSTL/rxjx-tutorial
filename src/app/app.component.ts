import { Component } from "@angular/core";
//import { timer, of } from "rxjs";

/*const source = timer(1000, 2000);
const subscribe = source.subscribe(val => console.log(val));
setTimeout(() => {
  subscribe.unsubscribe();
}, 10000);

const myObservable = of("Howdy", "Hello", "Hi");

const myObserver = {
  next: (x: string) => console.log("Observer got a next value: " + x),
  error: (err: string) => console.error("Observer got an error: " + err),
  complete: () => console.log("Observer COMPLETE")
};*/

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "rxjs-tut";
  constructor() {
    //myObservable.subscribe(myObserver);
  }
}
