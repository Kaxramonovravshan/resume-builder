"use client";
import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import TextareaAutosize from "react-textarea-autosize";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

const Home = () => {
  const [exp, setExp] = useState(false);
  const [pro, setPro] = useState(false);
  const [edu, setEdu] = useState(false);
  const [skill, setSkill] = useState(false);
  const [lang, setLang] = useState(false);

  useAuth();
  return (
    <div className="w-full md:p-0 p-5 bg-neutral-50">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col gap-5">
        <div className="w-full md:w-2/3">
          <div className="rounded mx-auto mb-5">
            <h1 className="mb-3 text-xl">General - Social</h1>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>Full Name</p>
                <input
                  type="text"
                  placeholder="Jonh Doe"
                  className="p-2 border w-full mb-2 rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  placeholder="example@gmail.com"
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>Mobile Number</p>
                <input
                  placeholder="+998 91 123 45 67"
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div>
                <p>LinkedIn</p>
                <input
                  placeholder="linkedin.com/username"
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>GitHub</p>
                <input
                  placeholder="github.com/username"
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div>
                <p>Potfolio</p>
                <input
                  placeholder="example.com"
                  type="text"
                  className="p-2 w-full mb-2 border rounded  outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>Address</p>
                <input
                  placeholder="Tashkent, Uzbekistan"
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p>Job Title</p>
                <input
                  placeholder="Frontend Developer"
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <p>Summary</p>
              <TextareaAutosize
                minRows={3}
                maxRows={10}
                placeholder="Write your message..."
                className="w-full p-3 border rounded-xl outline-none focus:border-0 focus:ring-2  focus:ring-blue-500 resize-none"
              />
            </div>
          </div>
          <div className=" mx-auto mb-5">
            <div>
              <h1 className="mb-2 text-xl">Experiences</h1>
              <button
                onClick={() => setExp(true)}
                className="w-full border-2 border-dashed p-3"
              >
                Add New Item +
              </button>
            </div>
          </div>
          <div className=" mx-auto mb-5">
            <h1 className="mb-2 text-xl">Projects</h1>
            <button
              onClick={() => setPro(true)}
              className="w-full border-2 border-dashed p-3"
            >
              Add New Item +
            </button>
          </div>
          <div className=" mx-auto mb-5">
            <h1 className="mb-2 text-xl">Education</h1>
            <button
              onClick={() => setEdu(true)}
              className="w-full border-2 border-dashed p-3"
            >
              Add New Item +
            </button>
          </div>
          <div className=" mx-auto mb-5">
            <h1 className="mb-2 text-xl">Skills</h1>
            <button
              onClick={() => setSkill(true)}
              className="w-full border-2 border-dashed p-3"
            >
              Add New Item +
            </button>
          </div>
          <div className=" mx-auto mb-5">
            <h1 className="mb-2 text-xl">Languages</h1>
            <button
              onClick={() => setLang(true)}
              className="w-full border-2 border-dashed p-3"
            >
              Add New Item +
            </button>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="w-6/7 h-3/4 border mx-auto"></div>
        </div>
      </div>

      {exp && <Experiences exp={exp} setExp={setExp} />}
      {pro && <Projects pro={pro} setPro={setPro} />}
      {edu && <Education edu={edu} setEdu={setEdu} />}
      {skill && <Skills skill={skill} setSkill={setSkill} />}
      {lang && <Languages lang={lang} setLang={setLang} />}
    </div>
  );
};

export default Home;
