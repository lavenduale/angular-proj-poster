import { Post } from './post.model';

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'}) // same as add in modul provider
export class PostsService {
    private postList: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts(){
        return [...this.postList];
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = {
            title: title,
            content: content
        };
        this.postList.push(post);
        this.postsUpdated.next([...this.postList]);
    }
}