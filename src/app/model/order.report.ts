import { CartItem } from './cart-item';

export interface IOrderReportDto {
    orderId: number;
    shippingAddress: IAddress;
    items: CartItem[];
    totalAmount: number;
}

export interface IAddress {
    id: number;
    customerId: number;
    type: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    orderId: number;
}