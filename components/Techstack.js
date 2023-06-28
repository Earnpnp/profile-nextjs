import React from "react";
import { TechstackData } from "./data";

function Techstack() {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full my-24">
        <div className="w-full max-w-sm md:max-w-5xl flex items-center justify-center my-4 flex-wrap gap-4">
          {TechstackData &&
            TechstackData.map((n) => (
              <div
                key={n.id}
                className="bg-white border border-gray px-6 py-2 inline-block text-lg bg-transparent hover:text-white hover:bg-[#B75199] rounded-lg cursor-pointer duration-200 
                ont-medium text-slate-800 
               border-zinc-800  shadow-[4px_4px_0px_2px_#1a202c] p-2 md:max-w-[500px] 
              hover:border-zinc-600  ease-in-out active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                {n.name}
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Techstack;
