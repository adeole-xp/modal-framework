/**
 * @(#)app.component.ts
 *
 * @author amol.deole
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import { ConfirmationModalComponent } from './modals/confirmation/confirmation-modal.component';
import { CustomDialogComponent } from './modals/custom-dialog/custom-dialog.component';
import { ModalService } from './modals/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  confirmedResult: boolean;
  inputResult: string;
  messageResult: boolean;
  customResult: string;
  /**
    * This constructor is used to inject NgbActiveModal
    * @param modalService NgbActiveModal
    */
  constructor(private modalService: ModalService) { }

  /**
    * The method is used to open confirmation modal
    *
    */
  openConfirm(): void {
    const options: NgbModalOptions = {
      centered: true,
      backdrop: true,
      keyboard: false,
    };
    const confirmModal: ConfirmationModalComponent = this.modalService.openConfirmModal(ConfirmationModalComponent, options);
    confirmModal.modalTitle = 'Confirmation Modal';
    confirmModal.modalMsg = 'Are you sure you want to perform this action?';
    confirmModal.primaryActionName = 'Yes';
    confirmModal.secondaryActionName = 'No';
    confirmModal.primaryAction.subscribe(res => {
      this.confirmedResult = res;
      confirmModal.modalService.dismiss('close');
    });
    confirmModal.secondaryAction.subscribe(res => {
      this.confirmedResult = res;
      confirmModal.modalService.dismiss('close');
    });
  }

  /**
   * The method is used to open custom component in modal
   */
  openCustomDialog() {
    const options: NgbModalOptions = {
      size: 'lg',
      windowClass: 'custom-modal',
      centered: true,
      backdrop: true,
      keyboard: false,
      backdropClass: 'modal-backdrop'
    };
    const data = { languages: ['Javascript', 'Typescript'] };
    this.modalService.customModal<string>(CustomDialogComponent, data, options)
      .pipe(take(1) // take() manages unsubscription for us
      ).subscribe(result => {
        this.customResult = result;
      });
  }
}
