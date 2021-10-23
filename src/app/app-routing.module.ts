import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListsComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
