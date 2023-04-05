import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';

const routes: Routes = [
  {path: 'repository-list', component: RepositoryListComponent},
  {path: '', redirectTo: 'repository-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
