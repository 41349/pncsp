import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './public.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Public } from './public.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Public]
})
export class PublicModule {
}
