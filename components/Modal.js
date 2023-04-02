import { modalState } from "@/atoms/modalAtoms";
import React from "react";
import { useRecoilState } from "recoil";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>{open && <p>THE MODAL IS OPEN</p>}</div>;
}

export default Modal;
