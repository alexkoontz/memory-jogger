export class UserModel {
    id : number = 0;
    Username : string = '';
    Password : string = '';
    LastName : string = '';
    FirstName : string = '';
    Address : string = '';
    PolicyNumber : string = '';
    ClaimNumber : string = '';
    DateOfLoss : Date = new Date("01-01-2001");
    Admin : boolean = false;
    adminstatus: any;
}