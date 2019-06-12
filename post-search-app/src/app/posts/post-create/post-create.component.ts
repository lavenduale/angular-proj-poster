import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Post } from '../post.model';

// decreator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    inputTitle='';
    inputContent = '';
    @Output() postCreated = new EventEmitter<Post>();
    
    onAddPost(form: NgForm) {
        const post: Post = {
            title: form.value.title, 
            content: form.value.content
        };
        this.postCreated.emit(post); // pass the post as a argument
    }
}