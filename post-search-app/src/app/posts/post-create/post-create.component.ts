import { Component } from '@angular/core';

// decreator
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
    inputValue = '';
    thecontent = "blank here";
    
    onAddPost() {
        this.thecontent = this.inputValue;
    };
}