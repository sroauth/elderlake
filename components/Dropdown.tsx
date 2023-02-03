import { JSX } from "preact";

export function Dropdown(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const basicTypes = ["String", "Integer", "Double", "Boolean"];
  const fileTypes = ["Photo Path", "Video Path", "Audio Path"];

  return (
    <div
      class="w-64 top-0 left-0 bg-gray-800 absolute border border-gray-700 rounded-xl"
      ref={props.ref}
    >
      <span>Basic Types</span>
      <ul>
        {basicTypes.map((item) => {
          return (
            <li
              class="py-2 px-4"
              onClick={(e) => {
                props.onClick(e, item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <span>File Types</span>
      <ul>
        {fileTypes.map((item) => {
          return (
            <li
              class="py-2 px-4"
              onClick={(e) => {
                props.onClick(e, item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
