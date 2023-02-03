import { useState } from "preact/hooks";

export default function Dropdown() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const basicTypes = ["Text", "Number", "Toggle"];
  const fileTypes = ["Photo Path", "Video Path", "Audio Path"];
  const otherTypes = ["Timestamp", "LatLng", "Color"];

  return (
    <div class="h-full p-8 overflow-hidden">
      <div class="select relative select-none">
        <div
          class={`label py-1 px-3 border cursor-pointer ${
            showSidebar ? "border-blue-400" : "border-transparent"
          }`}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {selectedType ? (
            <span class="font-medium">{selectedType}</span>
          ) : (
            <span>Select data type...</span>
          )}
        </div>
      </div>

      <div
        class={`absolute bottom-0 left-[50%] translate-x-[-50%] bg-gray-50 w-96 max-h-screen transition-all overflow-y-scroll ${
          showSidebar ? "bottom-0" : "bottom-[-100%]"
        }`}
      >
        <div class="border bg-white text-gray-400 py-1 px-2 rounded">
          Basic Types
        </div>
        {basicTypes.map((item) => {
          return (
            <div
              class="flex items-center gap-2"
              onClick={() => {
                setShowSidebar(false);
                setSelectedType(item);
              }}
            >
              <div>
                <img src={`/icons/${item}.svg`} alt="" class="w-4 h-4" />
              </div>
              <div>{item}</div>
            </div>
          );
        })}
        <div class="border-y text-gray-400 py-1">File Types</div>
        {fileTypes.map((item) => {
          return (
            <div
              class="flex items-center gap-2 py-1"
              onClick={() => {
                setShowSidebar(false);
                setSelectedType(item);
              }}
            >
              <img src={`/icons/${item.split(" ")[0]}.svg`} alt="" />
              <div>{item}</div>
            </div>
          );
        })}
        <div class="border-y text-gray-400 py-1">Other Types</div>
        {otherTypes.map((item) => {
          return (
            <div
              class="flex items-center gap-2 py-1"
              onClick={() => {
                setShowSidebar(false);
                setSelectedType(item);
              }}
            >
              <img src={`/icons/${item}.svg`} alt="" />
              <div>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
