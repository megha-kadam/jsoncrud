import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    standalone: false
})
export class PostComponent implements OnInit {
  @Input() post !: Ipost;

  constructor() { }

  ngOnInit(): void {
  }

}
