import {Page, NavController, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/schedules/schedules.html'
})
export class SchedulesPage {
  constructor(private nav: NavController, navParams: NavParams) {
  }
}
