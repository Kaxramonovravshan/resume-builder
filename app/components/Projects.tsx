import React from "react";
import { Drawer } from "vaul";
import { TextareaAutosize } from "@mui/material";

type ProjectsProps = {
  pro: boolean;
  setPro: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects = ({ pro, setPro }: ProjectsProps) => {
  return (
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
                placeholder="Enter project name"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1/2">
                <p className="mb-1 text-sm text-gray-700">Deploy Link</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter deploy link"
                />
              </div>
              <div className="w-1/2">
                <p className="mb-1 text-sm text-gray-700">Repository link</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter repository link"
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
  );
};

export default Projects;
