import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-bcomp",
  templateUrl: "./bcomp.component.html",
  styleUrls: ["./bcomp.component.scss"]
})
export class BcompComponent implements OnInit {
  data: any;

  constructor(private router: Router, private sharedData: SharedService) {}

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => (this.data = data));
  }

  changeData() {
    this.sharedData.changeData({ name: "Launch Code" });
    this.router.navigate(["/acomp"]);
  }
}
