import { JSX } from "preact";

export function SchemaHeader(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-medium">{props.title}</h1>
        <h2 class="text-gray-400">Schema</h2>
      </div>

      <div>
        <button class="flex gap-2 border-2 border-black p-2 rounded-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-layers"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>Manage Content</span>
        </button>
      </div>
    </div>
  );
}
