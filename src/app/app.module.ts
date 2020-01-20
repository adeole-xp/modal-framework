/**
 * @(#)app.module.ts
 *
 * @author amol.deole
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomDialogComponent } from './modals/custom-dialog/custom-dialog.component';
import { ConfirmationModalComponent } from './modals/confirmation/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDialogComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    CustomDialogComponent,
    ConfirmationModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
