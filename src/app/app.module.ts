import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule,MatButtonModule,MatCardModule,
  MatExpansionModule,MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProducerComponent } from './producer/producer.component';
import {MatSliderModule, MatCheckboxModule,MatRadioModule} from '@angular/material';
import { CreatorComponent } from './creator/creator.component';
import {MatSelectModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProducerComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
