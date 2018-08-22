import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Injector, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatIconRegistry} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CovalentDialogsModule} from "@covalent/core/dialogs";

import {DIALOG_SERVICE, INJECTOR} from "../api/index";

import {DateFormatDialog} from "./columns/date-format.component";
import {WranglerDialogService} from "./services/dialog.service";
import {DomSanitizer} from "@angular/platform-browser";
import {DynamicFormModule} from "../../../shared/dynamic-form/dynamic-form.module";
/**
 *
 */
@NgModule({
    declarations: [
        DateFormatDialog
    ],
    entryComponents: [
        DateFormatDialog
    ],
    imports: [
        CommonModule,
        CovalentDialogsModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatToolbarModule,
        ReactiveFormsModule,
        DynamicFormModule
    ],
    providers: [
        {provide: DIALOG_SERVICE, useClass: WranglerDialogService},
        {provide: INJECTOR, useExisting: Injector},
    ]
})
export class WranglerModule {

}
