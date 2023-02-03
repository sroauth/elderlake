import { useEffect, useRef, useState } from "preact/hooks";
import { SchemaHeader } from "../components/SchemaHeader.tsx";
import { Dropdown } from "../components/Dropdown.tsx";

export default function Schema() {
  const data = [
    {
      id: 0,
      fieldName: "person",
      dataType: "String",
      new: false,
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [dataType, setDataType] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div class="px-8">
      <SchemaHeader title="Board of Directors" />

      <div class="pt-8">
        <table class="w-full text-left">
          <thead>
            <tr>
              <th class="font-normal text-gray-400 py-2 px-5">Field Name</th>
              <th class="font-normal text-gray-400 py-2 px-4">Data Type</th>
              <th class="font-normal text-gray-400 text-right py-2 px-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr class="border-b border-gray-100">
                <td class="font-medium text-gray-400 p-0">
                  <div class="flex items-center gap-2 border-r-2 border-transparent py-2 px-4 focus-within:bg-gray-50 focus-within:border-r-2 focus-within:border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z" />
                      <path
                        d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                        fill="currentColor"
                      />
                    </svg>
                    <input
                      class="flex-grow bg-transparent text-black outline-none"
                      type="text"
                      value={item.fieldName}
                    />
                  </div>
                </td>

                <td class="font-medium text-gray-400 p-0">
                  <div class="py-2 px-4">
                    <span class="text-black">{item.dataType}</span>
                  </div>
                </td>

                <td class="font-medium text-gray-400 p-0">
                  <div class="flex gap-1 justify-end py-1 px-4">
                    <button class="p-1 rounded-xl hover:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-trash"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                        </path>
                      </svg>
                    </button>

                    <button class="p-1 rounded-xl hover:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-copy"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        >
                        </rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
                        </path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            <tr class="border-b border-gray-100">
              <td class="font-medium text-gray-400 p-0">
                <div class="flex items-center gap-2 border-r-2 border-transparent py-2 px-4 focus-within:bg-gray-50 focus-within:border-r-2 focus-within:border-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder="Start typing here to add an additional field..."
                    class="bg-transparent flex-grow outline-none text-black"
                  />
                </div>
              </td>

              <td
                class="relative font-medium text-gray-400 p-0"
                onClick={() => {
                  setShowDropdown(true);
                }}
              >
                {dataType
                  ? (
                    <div class="py-2 px-4">
                      <span class="text-black">{dataType}</span>
                    </div>
                  )
                  : (
                    <div class="flex items-center gap-8 text-gray-400 py-2 px-4">
                      <span>Select data type...</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-down"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}

                {showDropdown
                  ? (
                    <Dropdown
                      ref={ref}
                      onClick={(event, dataType) => {
                        event.stopPropagation();
                        setDataType(dataType);
                        setShowDropdown(false);
                      }}
                    />
                  )
                  : null}
              </td>

              <td class="font-medium text-gray-400 p-0">
                <div class="flex gap-1 justify-end py-1 px-4">
                  <button class="p-1 rounded-xl hover:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="text-gray-400 text-sm pt-4">
          Create your name, then press "Tab" to move to selecting a type, you
          can then press "Enter" / "Return" to create another field.
        </p>
      </div>
    </div>
  );
}
