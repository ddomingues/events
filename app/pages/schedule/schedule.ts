import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';
import {Talk} from './../../domain/talk'
import * as _ from './../../util/util'

@Page({
  templateUrl: 'build/pages/schedule/schedule.html'
})
export class SchedulePage implements OnInit {
  talks: Talk[];
  schedules: Array<{start_at: string, talks: Talk[]}>;

  constructor(private nav: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
    this.talks = this.navParams.get('talks');
    this.schedules = this.mapSchedule(_.group(this.talks, t => t.start_at.toLocaleTimeString()));
  }

  mapSchedule(talksByStart) {
    return Object
      .keys(talksByStart)
      .map(d => ({start_at: d, talks: talksByStart[d]}));
  }
}
