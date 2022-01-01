import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// const httpOptions = {
//   // headers: new HttpHeaders({
//   //   Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user') || '{}')?.token
//   // })
// }

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  constructor(private http: HttpClient) { }

  getMembers() {
    //return this.http.get<Member[]>(this.baseUrl + 'users');
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + '/api/UsersConroller').pipe(
      map(members => {
        this.members = members;
        return members;
      })
    )
  }

  getMember(username: string) {
    const member = this.members.find(x => x.username === username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.baseUrl + '/api/UsersConroller/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + '/api/UsersConroller', member)
    .pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    )
  }
  
}