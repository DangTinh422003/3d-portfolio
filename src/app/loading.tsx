import React from "react";
import { CgSpinnerTwo } from "react-icons/cg";

const Pageloading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black-100">
      <CgSpinnerTwo className="animate-spin w-10 h-10" />
    </div>
  );
};

export default Pageloading;
