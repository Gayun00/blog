"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

function page() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button>open modal</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default page;
