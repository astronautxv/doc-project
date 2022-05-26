import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { InterceptorService } from './services/interceptor-service.service'; 
import { NotificationService } from './services/notification.service';
import { CreateFileComponent } from './components/create-file/create-file.component';
 
@NgModule({ 
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    PerfilComponent, CreateFileComponent, 
     
  ], 
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [ 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi: true 
    } ,
    NotificationService
  ], 
  bootstrap: [AppComponent] 
}) 


export class AppModule { }