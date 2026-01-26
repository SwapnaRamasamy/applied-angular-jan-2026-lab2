import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-links-pages-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="List of Links">
    <p>List is coming soon...</p>
  </app-ui-page>`,
  styles: ``,
})
export class HomePage {}
