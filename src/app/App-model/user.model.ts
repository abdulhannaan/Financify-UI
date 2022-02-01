import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import * as internal from "assert";

export class Employee {

    public id!: number;
    public username!: string;
    public password!: string;
    public nickName!: string;
    public firstName!: string;
    public middleName!: string;
    public lastName!: string;
    public email!: string;
    public phone!: string;
    public address!: string;
    public companyId!: number;
    public zip!: string;
    public dateOfBirth!: Date;
    public state!: number;
    public city!: string;
    public countryId!: number;
    public emergencyPhoneExt!: string;
    public emergencyPhone!: string;
    public emergencyName!: string;
    public isVerified!: boolean;
    public roleName!: string;
    public roleId!: number;
    public profilePicture!: string;
    public departmentId!: number;
    public designationId!: number;
    public managerId!: number;
    public isActive!: boolean;
    public user!: any
    public role!: any;
    public allowedMainMenuList!: any;
    public employeeId!: any;
}
export interface JoinUs {
     id: number;
     fullName: string;
     subject: string;
     body: string;
     emailAddress: string;
     mobileNo: string;
     fileName: string;
     coverFileName: string;
     coverText: string;
     jobId: number;
}
export interface ContactUs {
     id : number;
     fullName: string;
     subject: string;
     body: string;
     emailAddress: string;
     mobileNo: string;
}