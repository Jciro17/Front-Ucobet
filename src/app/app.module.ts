import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCiudadComponent } from 'src/app/components/crear-ciudad/crear-ciudad.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

// Import the AuthService type from the SDK
import { AuthModule, AuthService } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    CrearCiudadComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
     AuthModule.forRoot({
      domain: 'dev-dvkulj3wfr62ggfg.us.auth0.com',
      clientId: 'gJfhR0DTTeMmx4TnCoMt8J8QCCj5oFq1',
     }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
