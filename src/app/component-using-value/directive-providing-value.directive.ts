import { Directive, InjectionToken } from '@angular/core';

export const VALUE_PROVIDER = new InjectionToken<any>('token');
@Directive({
  selector: '[appDirectiveProvidingValue]',
  providers: [
    {
      provide: VALUE_PROVIDER,
      useValue: '🚀',
    },
  ],
})
export class DirectiveProvidingValueDirective {
  constructor() {}
}
