import { Component } from '@angular/core';

import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Storedposts: Post[] = []; // apply interface here as Post[]

  onPostAdded(post){
    this.Storedposts.push(post);
  }
}
