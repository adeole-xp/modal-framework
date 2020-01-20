/**
 * @(#)custom-dialog.component.ts
 *
 * @author amol.deole
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDialogComponent {
  languages: string[];
  choice = new FormControl('', Validators.required);

  constructor(public activeModal: NgbActiveModal) {
  }
}
