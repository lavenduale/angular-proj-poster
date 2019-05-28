import { Component, EventEmitter, Output } from '@angular/core';

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
    
    onAddPost() {
        const post: Post = {
            title: this.inputTitle, 
            content: this.inputContent
        };
        this.postCreated.emit(post); // pass the post as a argument
    }
}