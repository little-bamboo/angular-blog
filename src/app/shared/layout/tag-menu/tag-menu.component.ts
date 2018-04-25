import {Component, OnInit} from '@angular/core';
import {TagsService} from '../../../core/services';
import {Tag} from '../../../core/models';


@Component({
  selector: 'app-tag-menu',
  templateUrl: './tag-menu.component.html',
  styleUrls: ['./tag-menu.component.scss']
})
export class TagMenuComponent implements OnInit {

  tagList: Tag[];

  constructor(private tagService: TagsService) {
  }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    console.log('getting tags');
    this.tagService.getTags()
      .subscribe(data => {
        console.log(data);
        this.tagList = data;
      });
  }

}
