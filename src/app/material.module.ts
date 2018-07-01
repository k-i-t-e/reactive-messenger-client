import {NgModule} from "@angular/core";
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
             MatTabsModule ],
  exports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule,
             MatTabsModule ]
})
export class MaterialAppModule {
}