import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';
import {TalkService} from './../../services/talk'
import {Talk} from './../../domain/talk'
import {SchedulePage} from './../schedule/schedule'
import * as _ from './../../util/util'

@Page({
  templateUrl: 'build/pages/schedules/schedules.html'
})
export class SchedulesPage implements OnInit{
  schedules: Array<any>;

  constructor(private talkService: TalkService) {
  }

  ngOnInit() {
    this.schedules = [];

    this.talkService
      .all()
      .subscribe(
        talks => {
          this.schedules = this.mapTalksByDay(
            _.group(talks, t => t.day.toDateString())
          ).map(this.toTab);
        },
        err => console.log(err)
      );
  }

  private mapTalksByDay(talksGroupedByDate) {
    return Object
      .keys(talksGroupedByDate)
      .map(d => ({ date: new Date(d), talks: talksGroupedByDate[d] }));
  }

  private toTab(schedule) {
    return {params: schedule, page: SchedulePage};
  }
}
