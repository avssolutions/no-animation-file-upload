import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FileUploadModule } from "@iplab/ngx-file-upload";

import { AppComponent } from "./app.component";
import { FileUploadWrapperComponent } from "./../file-upload-wrapper/file-upload-wrapper.component";

@NgModule({
  declarations: [AppComponent, FileUploadWrapperComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, FileUploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
