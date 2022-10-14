import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SectionCardComponent } from './section-card/section-card.component';
import { HeaderComponent } from './header/header.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoDetailsComponent } from './info-details/info-details.component';

@NgModule({
  declarations: [
    SectionCardComponent,
    HeaderComponent,
    InfoCardComponent,
    InfoDetailsComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [SectionCardComponent, HeaderComponent, InfoCardComponent],
})
export class ComponentsModule {}
