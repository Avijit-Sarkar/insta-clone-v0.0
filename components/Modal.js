import { modalState } from "@/atoms/modalAtoms";
import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useRecoilState } from "recoil";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return <Transition.Root show={open} as={Fragment}></Transition.Root>;
}

export default Modal;
