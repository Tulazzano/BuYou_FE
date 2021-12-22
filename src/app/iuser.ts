export interface Iuser{
    id:number;
    first_name:string;
    last_name: string;
    email:string;
    username :string;
    password:string;
    roleType:["CUSTOMER","SELLER"];
}