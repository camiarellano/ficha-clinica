import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { TemplateFormsComponent } from "./template-forms/template-forms.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
