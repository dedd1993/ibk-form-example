import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  InputComponent
} from './components';

import {
  OnlyObjectNameDirective,
  OnlyCharactersDirective,
  OnlyDigitsDirective,
  OnlyAlphanumericDirective,
  OnlyOrganizationNameDirective,
  OnlyAddressDirective
} from './directives';

const COMPONENTS = [
  InputComponent
];

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
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
