import React from "react";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { VscGithubInverted } from "react-icons/vsc";
import { Element } from "react-scroll";

function Contact() {
  return (
    <>
      <Element name="contact">
        <section className="flex flex-col items-center justify-center w-full bg-slate-900 py-8">
          <div className="w-full flex items-center justify-center my-4 flex-wrap gap-4">
            <HiOutlinePhone className="text-white" />
            <p className="text-lg text-white">097-0621-603</p>
            <HiOutlineEnvelope className="text-white" />
            <p className="text-lg text-white">pannaporn.cha@gmail.com</p>
            <VscGithubInverted className="text-white" />
            <p className="text-lg text-white">https://github.com/Earnpnp</p>
          </div>
        </section>
      </Element>
    </>
  );
}

export default Contact;
