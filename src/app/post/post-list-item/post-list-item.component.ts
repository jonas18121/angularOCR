import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit(): void {
  }

  doYouLove(param)
  {
    if (param === 'yes') {
      this.post.loveIts ++;
      this.post.iLove ++;
    }
    else if (param === 'no') {
      this.post.loveIts --;
      this.post.iDontLove ++;
    }
  }

}
