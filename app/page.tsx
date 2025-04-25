"use client";
import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import TextareaAutosize from "react-textarea-autosize";
import { Drawer } from "vaul";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Education from "./components/Education";

const Home = () => {
  const [exp, setExp] = useState(false);
  const [pro, setPro] = useState(false);
  const [edu, setEdu] = useState(false);

  useAuth();
  return (
    <div className="w-full md:p-0 p-5">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col gap-5">
        <div className="">
          <div className="rounded mx-auto mb-5">
            <h1 className="mb-3 text-xl">General - Social</h1>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>Full Name</p>
                <input
                  type="text"
                  className="p-2 border w-full mb-2 rounded outline"
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
            </div>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>Mobile Number</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
              <div>
                <p>LinkedIn</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
            </div>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>GitHub</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
              <div>
                <p>Potfolio</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
            </div>
            <div className="md:flex gap-1 md:justify-between items-center mb-4">
              <div>
                <p>Address</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
              <div>
                <p>Job Title</p>
                <input
                  type="text"
                  className="p-2 w-full mb-2 border rounded outline"
                />
              </div>
            </div>
            <div>
              <p>Summary</p>
              <TextareaAutosize
                minRows={3}
                maxRows={10}
                placeholder="Write your message..."
                className="w-full p-3 border rounded-xl outline resize-none"
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
            <button className="w-full border-2 border-dashed p-3">
              Add New Item +
            </button>
          </div>
          <div className=" mx-auto mb-5">
            <h1 className="mb-2 text-xl">Languages</h1>
            <button className="w-full border-2 border-dashed p-3">
              Add New Item +
            </button>
          </div>
        </div>

        <div className=" w-full p-4 border">View Page</div>
      </div>

      {exp && <Experiences exp={exp} setExp={setExp} />}
      {pro && <Projects pro={pro} setPro={setPro} />}
      <Education edu={edu} setEdu={setEdu} />
    </div>
  );
};

export default Home;
