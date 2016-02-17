import {Page, NavController, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/schedule/schedule.html'
})
export class SchedulePage {
  constructor(private nav: NavController, navParams: NavParams) {
  }
}
