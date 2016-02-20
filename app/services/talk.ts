import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {Talk} from './../domain/talk';

@Injectable()
export class TalkService {
    public endpoint = 'https://api.parse.com/1/classes/Talk';

    constructor(private http: Http) {
    }

    all() {
        return this.http.get(this.endpoint)
          .map(res => res.json().results.map(this.mapToTalk));
    }

    get(id) {
        return this.http.get(`${this.endpoint}/${id}`)
                .map(res => this.mapToTalk(res.json()));
    }

    create(params) {
        return this.http.post(this.endpoint, JSON.stringify(params))
                .map(res => res.json());
    }

    update(id: Number, params) {
        return this.http.put(`${this.endpoint}/${id}`, JSON.stringify(params))
                .map(res => res.json());
    }

    destroy(id: Number) {
        return this.http.delete(`${this.endpoint}/${id}`)
                .map(res => res.json());
    }

    private mapToTalk(data) {
        return new Talk(data.title, new Date(data.start.iso), new Date(data.end.iso));
    }
}
