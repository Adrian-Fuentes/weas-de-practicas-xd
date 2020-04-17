import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
// componentes xd
import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { TituloyEncierroComponent } from './componentes/tituloy-encierro/tituloy-encierro.component';
import { BuscadoryBotonComponent } from './componentes/buscadory-boton/buscadory-boton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaUsComponent } from './componentes/tabla-us/tabla-us.component';
import { BotonsUComponent } from './componentes/botons-u/botons-u.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    TituloyEncierroComponent,
    BuscadoryBotonComponent,
    TablaUsComponent,
    BotonsUComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  providers: [BuscadoryBotonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
