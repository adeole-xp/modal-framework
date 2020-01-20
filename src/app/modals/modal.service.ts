/**
 * @(#)modal.service.ts
 *
 * @author amol.deole
 */
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmationModalComponent } from './confirmation/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private ngbModal: NgbModal) { }

  /**
   * This method is used to open confirmation modal
   * @param content any
   * @param config Object
   * @param options NgbModalOptions
   */
  openConfirmModal(content: any, config?: { [index: string]: any; }, options?: NgbModalOptions): ConfirmationModalComponent {
    const confirmModalInstance: NgbModalRef = this.ngbModal.open(content, { backdrop: 'static', ...config });
    const componentInstance = <ConfirmationModalComponent>confirmModalInstance.componentInstance;
    // copy the config values (if any) into the component
    Object.assign(componentInstance, config);
    return componentInstance;
  }

  /**
   * The modal is used to handle the custom component in modal
   *
   * @param content any
   * @param config Object
   * @param options NgbModalOptions
   */
  customModal<R>(
    content: any,
    config?: { [index: string]: any; },
    options?: NgbModalOptions
  ): Observable<R> {
    // we use a static backdrop by default,
    // but allow the user to set anything in the options
    const modal = this.ngbModal.open(
      content,
      { backdrop: 'static', ...options }
    );
    // copy the config values (if any) into the component
    Object.assign(modal.componentInstance, config);
    return from(modal.result).pipe(
      catchError(error => {
        console.warn(error);
        return of(undefined);
      })
    );
  }
}
