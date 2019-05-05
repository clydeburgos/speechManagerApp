import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommentsService {
    private freeCommentUrl : string = 'https://jsonplaceholder.typicode.com/comments';
    constructor(private http: HttpClient) { 
    }

    getComments(): Observable<any> {
        return this.http.get(this.freeCommentUrl);
    }
}
