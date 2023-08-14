import { Igrades } from "./igrades";
import { Isubject } from "./isubject";
import { Itype } from "./itype";

export interface Iproduct {
    id: number;
    name: string;
    description_short: string;
    description_long: string;
    cover: string;
    preview1: string;
    preview2: string;
    preview3: string;
    price: number;
    quantity: number;
    subjects?: Isubject[];
    types?: Itype[]; 
    grades?: Igrades[];
    grade_number?:Igrades[]
}

