import Image from "next/image";
import Earn from "../public/earn.jpg";
import { Element } from "react-scroll";

function About() {
  const handleDownload = () => {
    const downloadUrl = "/ResumePannapornCham.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "ResumePannapornCham.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Element name="about">
        <main className="w-full flex items-center justify-center">
          {/* About section */}
          <section
            className="max-w-sm md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-24 "
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <Image
                className="w-full h-full object-cover rounded-xl drop-shadow-2xl relative"
                src={Earn}
                alt="earn"
              />
            </div>

            <div className="w-full h-420 flex flex-col justify-center gap-4">
              <h1 className="text-4xl md:text-7xl text-slate-700 font-bold mb-5">
                Hi there 👋
              </h1>
              <p className="text-2xl md:text-4xl text-slate-600">
                Pannaporn Chamnanaksorn
              </p>
              <p className="fullstackdev">Full Stack Developer</p>
              <button
                className="font-medium mt-20 text-black hover:text-slate-400 bg-white
                cursor-pointer  px-2 py-1 rounded-lg 
               border border-zinc-800  shadow-[7px_7px_0px_2px_#1a202c] p-2 md:max-w-[500px] 
              hover:border-zinc-600 duration-100 ease-in-out active:shadow-none active:translate-x-1 active:translate-y-1"
                onClick={handleDownload}
              >
                Resume
              </button>
            </div>
          </section>
        </main>
      </Element>
    </>
  );
}

export default About;
