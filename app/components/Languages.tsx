import React from "react";
import { Drawer } from "vaul";
import Select from "react-select";

type LanguageProps = {
  lang: boolean;
  setLang: React.Dispatch<React.SetStateAction<boolean>>;
};

const Languages = ({ lang, setLang }: LanguageProps) => {
  const options = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "fluent", label: "Fluent" },
  ];

  return (
    <Drawer.Root open={lang} onClose={() => setLang(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[82vh] rounded-t-[10px]">
          <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
            <Drawer.Handle />
            <Drawer.Title className="font-medium text-gray-900 my-6">
              Your Language Skills
            </Drawer.Title>
            <div className="w-full mb-2">
              <p className="mb-1 text-sm text-gray-700">Language</p>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Language"
              />
            </div>
            <div className="w-full mb-2">
              <p className="mb-1 text-sm text-gray-700">Level</p>
              <Select options={options} />
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

export default Languages;
