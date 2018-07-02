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

@NgModule({
  imports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
             MatTabsModule, MatIconModule, MatChipsModule ],
  exports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
             MatTabsModule, MatIconModule, MatChipsModule ]
})
export class MaterialAppModule {
}