import { Component } from '@angular/core'; // one for package

// decreator includes some configuration
@Component({
    selector: 'app-post-create', // allow us to use this component and html tag including template
    templateUrl: './post-create.component.html' // template for html
})

// class for the component
export class PostCreateComponent {

    newPost = ' blank';
    enteredValue = '';
/*
    onAddPost(postInput: HTMLTextAreaElement){ // has been selected in post-create.component.html
        //console.dir(postInput);
        //alert('it works!');
        this.newPost = postInput.value; // get the postInput.value from post-create.component.html by #
                                        // the value property is bonded in the postInput object
    }
*/
    onAddPost(){
        this.newPost = this.enteredValue;
    }
}