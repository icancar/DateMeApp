import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'test-errors', component: TestErrorComponent},
  {path: '',
   runGuardsAndResolvers: 'always',
   canActivate:[authGuard],
   children: [
    {path: 'member/:id', component: MemberDetailComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'lists', component: ListsComponent}
   ]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
