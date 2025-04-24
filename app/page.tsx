"use client";
import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import TextareaAutosize from "react-textarea-autosize";
import { Drawer } from "vaul";

const Home = () => {
  const [exp, setExp] = useState(false);
  const [pro, setPro] = useState(false);

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

            <button className="w-full border-2 border-dashed p-3">
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

      {exp && (
        <Drawer.Root open={exp} onClose={() => setExp(false)}>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[82vh] rounded-t-[10px]">
              <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
                <Drawer.Handle />
                <Drawer.Title className="font-medium text-gray-900 my-6">
                  Your Experiences
                </Drawer.Title>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1/2">
                    <p className="mb-1 text-sm text-gray-700">Company Name</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="mb-1 text-sm text-gray-700">Role</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter role"
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <p className="mb-1 text-sm text-gray-700">Location</p>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1/2">
                    <p className="mb-1 text-sm text-gray-700">Start Date</p>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="mb-1 text-sm text-gray-700">End Date</p>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter role"
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <p className="mb-1 text-sm text-gray-700">Description</p>
                  <TextareaAutosize
                    minRows={3}
                    maxRows={10}
                    placeholder="Write your description..."
                    className="w-full p-3  rounded-xl outline resize-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="block mx-auto p-3 w-40 h-11 bg-black text-white rounded">
                  Save
                </button>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
      {pro && (
        <Drawer.Root open={pro} onClose={() => setPro(false)}>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[82vh] rounded-t-[10px]">
              <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
                <Drawer.Handle />
                <Drawer.Title className="font-medium text-gray-900 my-6">
                  Your Projects
                </Drawer.Title>
                <div className="w-full mb-2">
                  <p className="mb-1 text-sm text-gray-700">Project Name</p>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1/2">
                    <p className="mb-1 text-sm text-gray-700">Deploy Link</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="mb-1 text-sm text-gray-700">
                      Repository link
                    </p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter role"
                    />
                  </div>
                </div>

                <div className="w-full mb-2">
                  <p className="mb-1 text-sm text-gray-700">Description</p>
                  <TextareaAutosize
                    minRows={3}
                    maxRows={10}
                    placeholder="Write your description..."
                    className="w-full p-3  rounded-xl outline resize-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="block mx-auto p-3 w-40 h-11 bg-black text-white rounded">
                  Save
                </button>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </div>
  );
};

export default Home;
