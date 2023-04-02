import { modalState } from "@/atoms/modalAtoms";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useRecoilState } from "recoil";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-hidden"
        onClose={setOpen}
      ></Dialog>
    </Transition.Root>
  );
}

export default Modal;
