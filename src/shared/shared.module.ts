import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  OnlyObjectNameDirective,
  OnlyCharactersDirective,
  OnlyDigitsDirective,
  OnlyAlphanumericDirective,
  OnlyOrganizationNameDirective,
  OnlyAddressDirective
} from './directives';

const COMPONENTS = [];

const DIRECTIVES = [
  OnlyAlphanumericDirective,
  OnlyCharactersDirective,
  OnlyDigitsDirective,
  OnlyObjectNameDirective,
  OnlyOrganizationNameDirective,
  OnlyAddressDirective
];

const UTILS = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...UTILS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...UTILS
  ],
  entryComponents: [
    ...UTILS
  ],
  providers: []
})
export class SharedModule { }
