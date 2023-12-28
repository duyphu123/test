import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import Adapter from './ckeditorAdapter';
import {ImageResize, Image, ImageResizeButtons, ImageResizeEditing, ImageToolbar } from '@ckeditor/ckeditor5-image';
ClassicEditor
	.create( document.querySelector( '#editor' )as HTMLElement, {
    plugins: [ ImageResize],
	} )
	.then( /* ... */ )
	.catch( /* ... */ );
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  public Editor = ClassicEditor;
  onReady(editor:any){
		editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader:any ) => {

		return new Adapter(loader, editor.config);;
	};
	// editor.plugins.add('ImageResize')
}
}
