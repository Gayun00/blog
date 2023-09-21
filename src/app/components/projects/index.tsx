import React from "react";
import Item from "./Item";
import Description from "./Description";
import LinkButton from "../buttons/LinkButton";
import List from "./List";
import Detail from "./Detail";
import DescriptionList from "./DescriptionList";

function Project() {
  return <div>Project</div>;
}

Project.Item = Item;
Project.List = List;
Project.Description = Description;
Project.DescriptionList = DescriptionList;
Project.Button = LinkButton;
Project.Detail = Detail;

export default Project;
