/**
 * @(#)confirmation-modal.component.ts
 *
 * @author amol.deole
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent {
    modalTitle: string;
    modalMsg: string;
    primaryActionName: string;
    secondaryActionName: string;
    @Output() primaryAction: EventEmitter<any> = new EventEmitter<any>();
    @Output() secondaryAction: EventEmitter<any> = new EventEmitter<any>();

    /**
     * This constructor is used to inject NgbActiveModal
     * @param modalService NgbActiveModal
     */
    constructor(public modalService: NgbActiveModal) { }

    /**
     * The mthod is used to perform close action along with emiting required data.
     *
     * @param topClicked boolean
     */
    closeAction(topClicked: boolean) {
        const actionObj = {
            primaryAction: topClicked
        };
        this.secondaryAction.emit(actionObj);
    }

    /**
     * The method is used to perform primary action.
     */
    primaryActionEvent() {
        const actionObj = {
            primaryAction: true
        };
        this.primaryAction.emit(actionObj);
    }
}
