"use client";
import React, { useState } from "react";
import Form from "../components/Form";
import Modal from "../components/Modal";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Modal open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <Modal.Button className="rounded p-2 hover:bg-gray-200">
        button
      </Modal.Button>

      <Modal.Content title="Edit contact">
        <Form />
      </Modal.Content>
    </Modal>
  );
}

export default Page;
