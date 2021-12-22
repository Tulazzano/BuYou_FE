import { Iuser } from "./iuser";
import { Iproduct } from "./product";

export interface Isession{
    user: Iuser;
    productsList: Iproduct[];
}