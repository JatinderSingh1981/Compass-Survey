import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HeaderTitleService } from '@appservices';
import { Subscription } from 'rxjs';

@Component({ selector: 'app-header', templateUrl: 'header.component.html' })
export class HeaderComponent implements OnInit, OnDestroy {
  title!: string;
  titleSubscription!: Subscription;

  constructor(private headerTitleService: HeaderTitleService) { }

  ngOnInit() {
    this.titleSubscription = this.headerTitleService.title
      .subscribe(updatedTitle => {
        this.title = updatedTitle;
      });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.titleSubscription.unsubscribe();

  }
}