import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './components/todo-app/app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoListFooterComponent} from './components/todo-list-footer/todo-list-footer.component';
import {TodoListHeaderComponent} from './components/todo-list-header/todo-list-header.component';
import {TodoDataService} from './services/todo-data.service';
import {TodoListItemComponent} from './components/todo-list-item/todo-list-item.component';
import {ApiService} from './services/api.service';
import {AppUiComponent} from './components/todo-app/ui/app-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    AppUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
