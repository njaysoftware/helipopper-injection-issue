import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsVisibleComponent } from './is-visible/isVisible.component';
import { PlaygroundComponent } from './playground/playground.component';
import { InjectionContextSeemsOffComponent } from './injection-context-seems-off/injection-context-seems-off.component';

const routes: Routes = [
  { path: 'is-visible', component: IsVisibleComponent },
  { path: 'injection-context-seems-off', component: InjectionContextSeemsOffComponent },
  { path: '**', component: PlaygroundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
