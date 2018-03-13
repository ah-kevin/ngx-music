import { AfterViewInit, Inject, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import * as fastclick from 'fastclick';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule implements AfterViewInit {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule, @Inject(DOCUMENT) private document: Document) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
  }

  ngAfterViewInit(): void {
    fastclick['attach'](this.document.body);
  }
}
