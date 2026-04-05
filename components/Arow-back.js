import React from "react";
import {ChevronsLeft}  from "lucide-react"

export default function ArowBack() {
  return (
    <div className="w-10 h-10 flex justify-center items-center text-xl bg-b text-v transition duration-300 hover:bg-v hover:text-b rounded-full z-50 absolute left-3 bottom-10 sm:bottom-20 lg:bottom-30">
        <ChevronsLeft/>
    </div>
  );
}
