import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { ProjectData } from "./data";

function Project() {
  useEffect(() => {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
      video.controls = false; // Disable controls
      video.addEventListener("click", (e) => e.preventDefault()); // Prevent click events
    });
  }, []);

  return (
    <>
      <Element name="projects">
        <div
          className="text-6xl ml-[183px] mt-24 font-semibold justify-center
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
          Projects
        </div>

        <section className="flex flex-wrap items-center justify-evenly my-24">
          <div className="w-full max-w-sm md:max-w-5xl flex items-center justify-center my-4 flex-wrap gap-10">
            {ProjectData &&
              ProjectData.map((n) => (
                <div
                  key={n.id}
                  className="border border-zinc-800 rounded-3xl shadow-[7px_7px_0px_2px_#1a202c] p-6 max-w-[800px]
              hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <video
                    controls
                    src={n.videoSrc}
                    className="rounded-2xl"
                    loop
                    autoPlay
                    muted
                  />
                  <p className="text-lg text-slate-800 font-bold mt-8 mb-2 flex hover:text-xl duration-300">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>
                  <div className="flex gap-10">
                    <h1 className="text-[#B75199] font-bold">Technologies</h1>
                    <p className="font-medium">{n.Tech}</p>
                  </div>
                  <ul className="pt-2 pl-4 list-disc">
                    <li>{n.description1}</li>
                    <li>{n.description2}</li>
                    <li>{n.description3}</li>
                  </ul>
                </div>
              ))}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Project;
