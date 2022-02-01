import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/App-services/AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserPermission {

  currentUserRoles: any;

  constructor(
    private authService:AuthService) {
    this.currentUserRoles = this.authService.getCurrentUser();
  }
  // getAllowMenu() {
  //   var user = this.currentUserRoles;
  //   var allowuser = user['allowedMainMenuList'];
  //       const index =3;
  //         if (index > -1) {
  //           allowuser.splice(index, 1);
  //         }
  //   return user['allowedMainMenuList'];
  // } 
  getAllowMenu() {
    var user = this.currentUserRoles;
    return user['allowedMainMenuList'];
  } 

  getRolePermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Settings");
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Roles");
    return rolePerms["menuPermissions"];
  }
  getLeaveTypePermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Leave");
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Leave Type");
    return rolePerms["menuPermissions"];
  }
  getTimeSheetPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Timesheet");
    return allowUser["menuPermissions"];
  }
  getEmployeeListPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Employee List");
    return allowUser["menuPermissions"];
  }
  getEmployeeInfoPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Employee List");
    return allowUser["menuPermissions"];
  }
  getEmployeeInfo() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Employee Info");
    return allowUser;
  }
  getDesignationPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Designations");
    return allowUser["menuPermissions"];
  }
  getCityPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "City");
    return allowUser["menuPermissions"];
  }
  getCountryPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Country");
    return allowUser["menuPermissions"];
  }
  getStatePermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "State");
    return allowUser["menuPermissions"];
  }

  getDepartmentPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Departments");
    return allowUser["menuPermissions"];
  }
  getBreakTypePermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "BreakType");
    return allowUser["menuPermissions"];
  }
  getLocationPermissions() {
    var user = this.currentUserRoles;
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Location");
    return allowUser["menuPermissions"];
  }

  getEmployeePersonalPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Personal");
    return rolePerms["menuPermissions"];
  }
  getEmployeeEmployementPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Employement");
    return rolePerms["menuPermissions"];
  }
  getEmployeePayrollPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Payroll");
    return rolePerms["menuPermissions"];
  }
  getEmployeeDocumentsPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Documents");
    return rolePerms["menuPermissions"];
  }
  getEmployeeTimesheetPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Timesheet");
    return rolePerms["menuPermissions"];
  }
  getEmployeeLeavesPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Leaves");
    return rolePerms["menuPermissions"];
  }
  getEmployeeSettingsPermissions() {
    var allowUser=  this.getEmployeeInfo();
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Settings");
    return rolePerms["menuPermissions"];
  }
}

