import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Components from '@shared/components';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerService } from './shared/services';

@NgModule({
  declarations: [AppComponent, Components.SidebarComponent, Components.NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'singularcover-5779f'),
    AngularFireDatabaseModule,
  ],
  providers: [SpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
