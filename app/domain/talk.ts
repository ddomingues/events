export class Talk {
  day: Date;
  constructor(public title: string, public start_at: Date, public end_at: Date) {
    this.day = new Date(start_at.toDateString());
  }
}
