import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatTabsModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

const modules = [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
                  MatTabsModule, MatIconModule, MatChipsModule ];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialAppModule {
}