import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SectionCardComponent } from './section-card/section-card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SectionCardComponent, HeaderComponent],
  imports: [IonicModule, CommonModule],
  exports: [SectionCardComponent, HeaderComponent],
})
export class ComponentsModule {}
