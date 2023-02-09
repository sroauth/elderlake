import { user } from "../utils/gun.ts";

export default function Nav() {
  return (
    <div class="bg-[#FFF2E6] p-5 flex flex-col gap-5">
      <a href="/home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 300 300"
          fill="currentColor"
        >
          <circle cx="186" cy="130" r="83"></circle>
          <path d="M140 1A150 150 0 0 0 26 222c40 73 127 99 205 61 62-30 86-101 35-109h-4l3 3c18 16-24 54-68 62-59 11-116-24-129-78C44 57 174-18 249 58l9 8-2-5C239 17 195-5 140 1z" />
        </svg>
      </a>

      <a href="/settings">
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
          class="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </a>

      {user.value.is ? (
        <a href={`/u/${user.value.pair().pub}`}>
          <img src="/stock/avatar.png" alt="" class="w-6 h-6 rounded-lg" />
        </a>
      ) : (
        <a href="/login" class="bg-gray-400 w-6 h-6 rounded-full"></a>
      )}

      <a href="/colors">C</a>
    </div>
  );
}
