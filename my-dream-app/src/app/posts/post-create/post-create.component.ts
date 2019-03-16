import { Component, EventEmitter, Output } from '@angular/core'; // one for package

// decreator includes some configuration
@Component({
    selector: 'app-post-create', // allow us to use this component and html tag including template
    templateUrl: './post-create.component.html', // template for html
    styleUrls: ['./post-create.component.css']
})

// class for the component
export class PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    @Output() postCreated = new EventEmitter(); // output a event which can listent to outside(app.component.html app-post-create tag element)

/*
    onAddPost(postInput: HTMLTextAreaElement){ // has been selected in post-create.component.html
        //console.dir(postInput);
        //alert('it works!');
        this.newPost = postInput.value; // get the postInput.value from post-create.component.html by #
                                        // the value property is bonded in the postInput object
    }
*/
    onAddPost(){
        const posts = {
            title: this.enteredTitle,
            content: this.enteredContent
        };
        this.postCreated.emit(posts); // emit posts to postCreated
    }
}