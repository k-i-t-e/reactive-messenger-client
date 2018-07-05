import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./messenger-module/auth/login/login.component";
import {MessengerComponent} from "./messenger-module/messenger/messenger.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'messenger', component: MessengerComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {

}