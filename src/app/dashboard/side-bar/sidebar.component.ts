import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/App-services/AuthService/auth.service';
import { UserService } from 'src/app/App-services/UserService/user.service';
import { UserPermission } from '../Permission/user-permission.service';


@Component({
  selector: 'dashboard-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../dashboard.component.scss']
})
export class SideBarComponent implements OnInit {

  currentNav = 'Dashboard'
  menuData!: [];
  id: any;
  logInUserRole: any;
  adminLogin: boolean = false;
  constructor(private userPermission: UserPermission, private authService: AuthService, private userService: UserService,) {


  }

  title = 'childmenu';
  public menus = new Array();
  public submenu = new Array();
  // navmenuclick(value: number) {
  //   for (let i = 0; i < 5; i++) {
  //     if (i != value) {
  //       this.menus[i] = false;
  //       /*Submenu Code Start*/
  //       this.submenu[i + '.' + 0] = false;
  //       this.submenu[i + '.' + 1] = false;
  //       /*Submenu Code Close*/
  //     }
  //   }
  //   if (this.menus[value] == true) {
  //     this.menus[value] = false;
  //   } else {
  //     this.menus[value] = true;

  //   }
  // }


  ngOnInit() {
    this.isAdmin();
    this.id = this.authService.getCurrentUser();
    this.menuData = this.userPermission.getAllowMenu();
  }
  logout() {
    this.authService.clearStorage();
  }
  isAdmin(){
    this.logInUserRole = this.authService.getUserRoleId();
    if(this.logInUserRole===1){
      this.adminLogin = true;
    }
}
}
