import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() posts : any = [];
  @Input() lastUpdate;

  ngOnInit(): void {

    console.log(this.posts.length);
    console.log(this.posts);
    console.log(this.lastUpdate);
    
    
  }

}
