import { MouseEventHandler } from "react";

export interface CustomButtonProps{
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'submit' | 'button';
}

export interface vehicleListProps{
  id?: number,
  name?: string,
  fuel?: string,
  power?: number,
  tank?: number,
  image?: string
}