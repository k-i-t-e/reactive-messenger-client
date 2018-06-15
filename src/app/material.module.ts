import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule ],
    exports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, FlexLayoutModule ]
})
export class MaterialAppModule {

}