import React from "react";
import Item from "./Item";
import Description from "./Description";
import LinkButton from "../buttons/LinkButton";
import List from "./List";

function Project() {
  return <div>Project</div>;
}

Project.Item = Item;
Project.List = List;
Project.Description = Description;
Project.Button = LinkButton;

export default Project;
