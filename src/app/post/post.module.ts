import {NgModule} from '@angular/core';

import {PostComponent} from './post.component';
import {SharedModule} from '../shared';
import {PostRoutingModule} from './post-routing.module';
import {MarkdownPipe} from './markdown.pipe';
import {PostResolver} from './post-resolver.service';

@NgModule({
  imports: [SharedModule,
    PostRoutingModule
  ],
  declarations: [PostComponent, MarkdownPipe],
  providers: [
    PostResolver
  ]
})
export class PostModule {
}
