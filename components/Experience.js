import React, { useState } from "react";

import { ExperienceData } from "./data";
import { Element } from "react-scroll";

function Experience() {
  return (
    <>
      <Element name="experience">
        <div
          className="text-6xl ml-[183px] mt-24 font-semibold text-white
                inline-block
                relative
                transition-all
                duration-300
                before:content-['']
                before:absolute
                before:-bottom-4
                before:left-0
                before:w-0
                before:h-1.5
                before:transition-all
                before:duration-500
                before:bg-[rgb(183,81,153)]
                hover:before:w-[60px]
                hover:before:opacity-100"
        >
          Experience
        </div>

        <section className="flex flex-col items-center justify-center w-full my-24">
          <div className="w-full max-w-sm md:max-w-5xl flex items-center justify-center my-4 flex-wrap">
            {ExperienceData &&
              ExperienceData.map((n) => (
                <ol class="border-l-2 border-neutral-300 dark:border-neutral-500 w-full max-w-sm md:max-w-5xl flex flex-wrap">
                  <li>
                    <div class="flex-start flex items-center">
                      <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#B75199] dark:bg-neutral-500"></div>
                      <p class="text-md text-neutral-200">{n.date}</p>
                    </div>
                    <div class="mb-6 ml-4 mt-2">
                      <h4 class="mb-1.5 text-2xl font-bold text-white">
                        {n.title}
                      </h4>
                      <h1 class="mb-1.5 text-xl font-semibold text-white">
                        {n.subtitle}
                      </h1>
                      <p class="mb-3 text-neutral-400">{n.description1}</p>
                      <p class="mb-3 text-neutral-400">{n.description2}</p>
                      <p class="mb-3 text-neutral-400">{n.description3}</p>
                    </div>
                  </li>
                </ol>
              ))}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Experience;
