import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from '../_models/member';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: Member;
  user: User;
  //editForm: NgForm;
  @ViewChild('editForm') editForm: NgForm;
  constructor(private accountService: AccountService, private memberService: MembersService, private toastr: ToastrService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user =>{
      this.user = user
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMember(this.user.username).subscribe(member =>{
      this.member = member
    });
  }

  updateMember() {
    this.toastr.success('Profile updated successfully');
    this.editForm.reset(this.member);
    // this.memberService.updateMember(this.member).subscribe(() => {
    //   this.toastr.success('Profile updated successfully');
    //   this.editForm.reset(this.member);
    // })
  }
}
