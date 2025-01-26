import { Routes } from '@angular/router';
import { StudentsListComponent } from '../students-list/students-list.component';
import { AppComponent } from './app.component';
import { CountLettersComponent } from '../count-letters/count-letters.component';

export const routes: Routes = [
    {path:"students", component:StudentsListComponent},
    {path:"", component:AppComponent},
    {path:"count-letters", component:CountLettersComponent},
];
