import { Post } from "./post.model";

import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'}) // same as add in modul provider
export class PostsService {
    private postList: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient) {}

    getPosts(){
        //return [...this.postList];
        this.http.get<{messgae: string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
            this.postList = postData.posts;
            this.postsUpdated.next([...this.postList]);
        });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = {
            id: null,
            title: title,
            content: content
        };
        this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe((responseData) => {
            console.log(responseData);
            this.postList.push(post);
            this.postsUpdated.next([...this.postList]);
        });
    }
}