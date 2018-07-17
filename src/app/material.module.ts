import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressBarModule,
  MatTabsModule, MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

const MODULES = [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule,
                  MatDividerModule, MatTabsModule, MatIconModule, MatChipsModule, MatToolbarModule,
                  MatProgressBarModule ];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialAppModule {
}