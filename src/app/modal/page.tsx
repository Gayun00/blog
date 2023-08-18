"use client";
// modal 기능을 우선적으로 테스트하기 위한 테스트용 임시 페이지
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
        <Form afterSave={() => setIsOpen(false)} />
      </Modal.Content>
    </Modal>
  );
}

export default Page;
