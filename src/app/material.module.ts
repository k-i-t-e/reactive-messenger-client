import {NgModule} from "@angular/core";
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDialogModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule,
  MatTabsModule, MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

const MODULES = [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule,
                  MatDividerModule, MatTabsModule, MatIconModule, MatChipsModule, MatToolbarModule,
                  MatProgressBarModule, MatDialogModule ];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        height: '200px',
        width: '500px'
      }
    }
  ]
})
export class MaterialAppModule {
}