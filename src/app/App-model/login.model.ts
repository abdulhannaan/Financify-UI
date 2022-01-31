import { Employee } from "./user.model";

export class LoginModel
{
    public username!: string;
    public password!: string;
    public rememberMe !: boolean ;
}
export class LoginResponse{
    public token! : string;
    public expires !: string;
    public employee !: Employee;
    public user !: Employee;

}