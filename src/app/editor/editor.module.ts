import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {EditorRoutingModule} from './editor-routing.module';
import {EditorComponent} from './editor.component';
import {EditablePostResolver} from './editable-post-resolver.service';
import {MaterialModule} from '../shared/material/material.module';


@NgModule({
  imports: [SharedModule, EditorRoutingModule, MaterialModule],
  declarations: [EditorComponent],
  providers: [EditablePostResolver]
})

export class EditorModule {
}
