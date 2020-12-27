import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() postsStatic : any = [];
  @Input() lastUpdate;

  ngOnInit(): void {

    console.log(this.postsStatic.length);
    console.log(this.postsStatic);
    console.log(this.lastUpdate);
    
    
  }

}
