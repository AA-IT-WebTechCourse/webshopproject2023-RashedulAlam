import React from "react";
import { IListItemProps } from "./IListitemProps";

const ListItem = (props: IListItemProps) => {
  return (
    <div>
      <p>title : {props.title} </p>
      <p>description : {props.description}</p>
      <p>price : {props.price}</p>
    </div>
  );
};

export default ListItem;
