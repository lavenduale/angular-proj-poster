import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { PostsService } from '../posts.service';

// decreator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    inputTitle='';
    inputContent = '';

    constructor(public postsService: PostsService){}
    
    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        //this.postCreated.emit(post); // pass the post as a argument
        this.postsService.addPost(form.value.title, form.value.content);
    }
}