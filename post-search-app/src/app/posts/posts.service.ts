import { Post } from './post.model';
import { Injectable } from '@angular/core';


@Injectable({providedIn: "root"}) // same as add in modul provider
export class PostsService {
    private posts: Post[] = [];

    getPosts(){
        return [...this.posts];
    }

    addPost(title: string, content: string) {
        const post: Post = {
            title: title,
            content: content
        }
        this.posts.push(post);
    }
}