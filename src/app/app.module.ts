import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import {
  popperVariation,
  provideTippyConfig,
  TippyDirective,
  tooltipVariation,
  withContextMenuVariation,
} from '@ngneat/helipopper';
import { PlaygroundComponent } from './playground/playground.component';
import { IsVisibleComponent } from './is-visible/isVisible.component';
import { InjectionContextSeemsOffComponent } from './injection-context-seems-off/injection-context-seems-off.component';
import { DirectiveProvidingValueDirective } from './component-using-value/directive-providing-value.directive';
import { ComponentUsingValueComponent } from './component-using-value/component-using-value.component';
import { AnotherComponentComponent } from './another-component/another-component.component';

let zIndex = 99999;

function getZIndex() {
  return zIndex++;
}

@NgModule({
  declarations: [
    AnotherComponentComponent,
    ComponentUsingValueComponent,
    AppComponent,
    ExampleComponent,
    PlaygroundComponent,
    ExampleComponent,
    IsVisibleComponent,
    InjectionContextSeemsOffComponent,
    DirectiveProvidingValueDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, TippyDirective],
  providers: [
    provideTippyConfig({
      defaultVariation: 'tooltip',
      zIndexGetter: getZIndex,
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
        menu: {
          ...popperVariation,
          appendTo: 'parent',
          arrow: false,
          offset: [0, 0],
        },
        contextMenu: withContextMenuVariation(popperVariation),
        popperBorder: {
          ...popperVariation,
          theme: 'light-border',
        },
      },
    }),
  ],
  exports: [ComponentUsingValueComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
