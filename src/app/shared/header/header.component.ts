import { Component, Input, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/_services/header.service';

@Component({ selector: 'app-header', templateUrl: 'header.component.html' })
export class HeaderComponent implements OnInit {
    // private _title!: string;

    title!: string;

    // @Input()
    // set title(selected: string) { this._title = selected; }
    // get title(): string { return this._title; }


    constructor(private headerTitleService: HeaderTitleService) {}

    ngOnInit() {
        this.headerTitleService.title.subscribe(updatedTitle => {
          this.title = updatedTitle;
        });
      }
}