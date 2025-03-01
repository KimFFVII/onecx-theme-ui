import { Component, Input, OnChanges } from '@angular/core'
import { Observable } from 'rxjs'

import { SlotService } from '@onecx/angular-remote-components'

import { Theme } from 'src/app/shared/generated'

@Component({
  selector: 'app-theme-intern',
  templateUrl: './theme-intern.component.html',
  styleUrls: ['./theme-intern.component.scss']
})
export class ThemeInternComponent implements OnChanges {
  @Input() theme: Theme | undefined
  @Input() dateFormat = 'medium'

  public isListWorkspacesUsingThemeComponentDefined$: Observable<boolean> | undefined
  public listWorkspacesUsingThemeSlotName = 'onecx-theme-list-workspaces-using-theme'

  public mandatory = false
  public operator = false

  constructor(private readonly slotService: SlotService) {
    this.isListWorkspacesUsingThemeComponentDefined$ = this.slotService.isSomeComponentDefinedForSlot(
      this.listWorkspacesUsingThemeSlotName
    )
  }

  public ngOnChanges(): void {
    if (this.theme) {
      this.mandatory = this.theme.mandatory ?? false
      this.operator = this.theme.operator ?? false
    }
  }
}
