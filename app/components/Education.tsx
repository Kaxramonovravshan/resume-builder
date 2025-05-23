"use client";
import React, { useState } from "react";
import { Drawer } from "vaul";
import { TextareaAutosize } from "@mui/material";

type EducationProps = {
  edu: boolean;
  setEdu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Education = ({ edu, setEdu }: EducationProps) => {
  const [startDate, setStartDate] = useState("");
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  return (
    <Drawer.Root open={edu} onClose={() => setEdu(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[82vh] rounded-t-[10px]">
          <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
            <Drawer.Handle />
            <Drawer.Title className="font-medium text-gray-900 my-6">
              Institution
            </Drawer.Title>
            <div className="w-full mb-2">
              <p className="mb-1 text-sm text-gray-700">Institution Name</p>
              <input
                type="text"
                className="w-full p-2 border rounded-lg outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter institution Name"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1/2">
                <p className="mb-1 text-sm text-gray-700">Degree</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter degree name"
                />
              </div>
              <div className="w-1/2">
                <p className="mb-1 text-sm text-gray-700">Field of Study</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter field of study"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1/2">
                <p className="mb-1 text-sm text-gray-700">Start Date</p>
                <input
                  type="date"
                  value={startDate}
                  max={today}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2 border rounded-lg outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/2">
                <p className="mb-1 text-sm text-gray-700">End Date</p>
                <input
                  type="date"
                  disabled={isCurrentlyWorking}
                  max={today}
                  min={startDate}
                  className="w-full p-2 border rounded-lg outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <label htmlFor="currentlyWorking">
                Hozir ham shu yerda o'qiyman
              </label>
              <input
                type="checkbox"
                id="currentlyWorking"
                checked={isCurrentlyWorking}
                onChange={() => setIsCurrentlyWorking(!isCurrentlyWorking)}
                className="w-4 h-4"
              />
            </div>
            <div className="w-full mb-2">
              <p className="mb-1 text-sm text-gray-700">Description</p>
              <TextareaAutosize
                minRows={3}
                maxRows={10}
                placeholder="Write your description..."
                className="w-full p-3  rounded-xl outline resize-none focus:border-0 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="block mx-auto p-3 w-40 h-11 bg-black text-white rounded">
              Save
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Education;
