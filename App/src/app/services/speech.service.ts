import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class SpeechService {
    private speeches = [
        {
            id : 1,
            author: 'Bradley Phillips',
            title: 'Speech for Womens Association',
            content: 'Speech for Womens Association.',
            dateCreated: new Date().toString()
        },
        {
            id : 2,
            author: 'Bradley Phillips',
            title: 'Speech for University of Colorado',
            content: 'Speech for University of Colorado.',
            dateCreated: new Date().toString()
        },
        {
            id : 3,
            author: 'Bradley Phillips',
            title: "Rotary Club's 60th Aniversary",
            content: "Rotary Club's 60th Aniversary speech.",
            dateCreated: new Date().toString()
        },
        {
            id : 4,
            author: 'Sammuel Phillips',
            title: 'Summer Sports Fest Speech',
            content: 'Summer Sports Fest Speech.',
            dateCreated: new Date().toString()
        },
        {
            id : 5,
            author: 'Sammuel Phillips',
            title: 'Rally on New York, Pendleton Street Speech',
            content: 'Rally on New York, Pendleton Street Speech.',
            dateCreated: new Date().toString()
        },
    ]
    private freeCommentUrl : string = 'https://jsonplaceholder.typicode.com/comments';
    public _subject = new Subject<object>();
    public _page = new Subject<string>();

    public speechEvent = this._subject.asObservable();
    public pageEvent = this._page.asObservable();
    
    constructor(private http: HttpClient) { 
    }

    getRandomSpeeches(): Observable<any> {
        return this.http.get(this.freeCommentUrl);
    }

    getSpeeches(): Observable<any[]> {
        return of(this.speeches).pipe(delay(2000));
    }

    publishAddedSpeech(speech: any){
        if(this.speeches.length > 0) {
            let id = this.speeches.length + 1;
            speech.id = id;
            this._subject.next(speech);
        }
    }

    deleteSpeech(speech: any){
        this.speeches = this.speeches.filter((item) => item.id != speech.id);
        return of(this.speeches);
    }

    publishNavigation(page: string){
        this._page.next(page);
    }
}
