import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './secure.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Secure } from './secure.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Secure]
})
export class SecureModule {
}
