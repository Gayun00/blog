import Image from "next/image";
import React from "react";
import Modal from "../../Modal";
import Project from "..";

interface Props {
  title: string;
  imageUrl: string;
  description: string;
}

function Item({ title, imageUrl, description }: Props) {
  return (
    <Modal>
      <Modal.Trigger>
        <li className="hover:scale-105 duration-100 ease-in-out cursor-pointer">
          <Image
            alt="project_thumbnail"
            width={400}
            height={30}
            src={imageUrl}
          />
          <h3 className="mt-4 text-center">{title}</h3>
        </li>
      </Modal.Trigger>

      <Modal.Content title={title}>
        <Project.Detail imageUrl={imageUrl} description={description} />
      </Modal.Content>
    </Modal>
  );
}

export default Item;
