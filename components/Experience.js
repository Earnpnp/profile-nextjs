import React, { useState } from "react";

import { ExperienceData } from "./data";
import { Element } from "react-scroll";

function Experience() {
  return (
    <>
      <Element name="experience">
        <div
          className="text-6xl ml-[183px] mt-24 font-semibold
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
          {ExperienceData &&
            ExperienceData.map((n) => (
              <ol class="border-l-2 border-neutral-300 dark:border-neutral-500 w-full max-w-sm md:max-w-5xl flex jus flex-wrap gap-4">
                <li>
                  <div class="flex-start flex items-center pt-3">
                    <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#B75199] dark:bg-neutral-500"></div>
                    <p class="text-md text-neutral-500 dark:text-neutral-300">
                      {n.date}
                    </p>
                  </div>
                  <div class="mb-6 ml-4 mt-2">
                    <h4 class="mb-1.5 text-2xl font-bold">{n.title}</h4>
                    <h1 class="mb-1.5 text-xl font-semibold">{n.subtitle}</h1>
                    <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                      {n.description1}
                    </p>
                    <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                      {n.description2}
                    </p>
                    <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                      {n.description3}
                    </p>
                  </div>
                </li>
              </ol>
            ))}
        </section>
      </Element>
    </>
  );
}

export default Experience;
