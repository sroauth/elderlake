import { user } from "./Gun.mts";

export default function Logout() {
  self.addEventListener("load", () => {
    if (!user.value.is) {
      window.location.href = "/login";
    }
  });

  function logOut() {
    user.value.leave();
    window.location.href = "/login";
  }

  return (
    <button
      class="bg-gray-700 py-1 px-4 rounded-full text-gray-800 text-uppercase text-sm font-black"
      onClick={logOut}
    >
      Log out
    </button>
  );
}
