import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {MessengerComponent} from "./messenger/messenger.component";

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