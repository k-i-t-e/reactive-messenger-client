import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule ],
    exports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule, MatDividerModule ]
})
export class MaterialAppModule {

}