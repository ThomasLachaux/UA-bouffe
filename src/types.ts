// General
export interface Item {
  readonly id: number;
  key: string;
  name: string;
  price: number;
  orgaPrice: number;
  category: Category;
  available: boolean;
}

export interface Category {
  readonly id: number;
  name: string;
  key: string;
  items: Array<Item>;
}

export interface OrderItem {
  item: Item;
  price: number;
}

export interface Order {
  id: number;
  place: string;
  method: PaymentMethod;
  status: Status;
  orderItems: Array<OrderItem>;
  createdAt: string;
}

export interface User {
  token: string;
  name: string;
  key: string;
}

export enum Status {
  PENDING = 'pending',
  PREPARING = 'preparing',
  READY = 'ready',
  FINISHED = 'finished',
}

export enum PaymentMethod {
  Card = 'card',
  Cash = 'cash',
}

// Redux
export interface State {
  basket: Array<Item>;
  orgaPrice: boolean;
  orders: Array<Order>;
  login: LoginState;
  categories: Array<Category>;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface LoginState extends User {
  loading: boolean;
}
