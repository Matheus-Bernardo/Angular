import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IfilterOptions } from './interfaces/filter-options-interface';
import { filterUsersList } from './utils/filter-users-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  userSelected : IUser = {} as IUser;
  usersListFiltered: IUser[] =[];
  usersList: IUser[] = [];
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    },1000);
  }

  onUserSelected(user:IUser){
    this.userSelected = user;
    this.showUserDetails = true;

  }
  onFilter(filterOptions:IfilterOptions){
    console.log(filterOptions);
    this.usersListFiltered = filterUsersList(filterOptions,this.usersList);
  }
}
