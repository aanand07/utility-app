import { loginpageComponent } from './login-page/login-page.component';
import { TableListComponent } from './table-list.component';

export const AppRoutes: any = [
    { path: "", component: loginpageComponent },
    { path: "table-list", component: TableListComponent }
];

export const AppComponents: any = [
    loginpageComponent,
    TableListComponent
];