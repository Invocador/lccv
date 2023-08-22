import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpinnerModule, ModalModule} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SpinnerModule,
    ModalModule,
    IconModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
