import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatTabsModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
             MatTabsModule, MatIconModule ],
  exports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
             MatTabsModule, MatIconModule ]
})
export class MaterialAppModule {
}