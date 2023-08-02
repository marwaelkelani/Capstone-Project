export interface Iproduct {
    name: string;
    description_short: string;
    description_long: string;
    cover: string;
    preview1: string;
    preview2: string;
    preview3: string;
    grade: string;
    price: number;
    type: number; //fix to make it an array for itype (product_type)
}

