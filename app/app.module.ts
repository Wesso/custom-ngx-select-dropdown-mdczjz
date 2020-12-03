import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectDropDownComponent } from './select-dropdown/ngx-select-dropdown.component';
import { TextSearchPipe } from './text-search.pipe';
import { ArrayFilterPipe } from './select-dropdown/filter-by.pipe';
import { LimitToPipe } from './select-dropdown/limit-to.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SelectDropDownComponent, TextSearchPipe,LimitToPipe,ArrayFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
