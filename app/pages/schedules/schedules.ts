import {Page, NavController, NavParams} from 'ionic-framework/ionic';

import {SchedulePage} from './../schedule/schedule'

@Page({
  templateUrl: 'build/pages/schedules/schedules.html'
})
export class SchedulesPage {
  constructor(private nav: NavController, navParams: NavParams) {
    this.tab1 = SchedulePage;
    this.tab2 = SchedulePage;
  }
}
