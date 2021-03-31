import React, { useState } from "react";

function ListItem(props) {
  function handleChange() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.value}</li>
    </div>
  );
}

export default ListItem;
