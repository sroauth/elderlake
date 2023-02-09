import { gun, user } from "../utils/gun.ts";

export default function CreateUser() {
  gun.value.on("auth", () => {
    let redirect = sessionStorage.getItem("redirect");
    sessionStorage.removeItem("redirect");

    window.location.href = redirect || "/home";
  });

  function handleSubmit(event) {
    event.preventDefault();

    const alias = event.target.alias.value;
    const password = event.target.password.value;

    user.value.create(alias, password);
  }

  return (
    <form class="flex gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Alias"
        id="alias"
        class="border-4 rounded-full py-2 px-4"
      />

      <input
        type="password"
        placeholder="Password"
        id="password"
        class="border-4 rounded-full py-2 px-4"
      />

      <button
        type="submit"
        class="border-4 border-yellow-600 text-yellow-600 font-bold rounded-full py-2 px-4"
      >
        Authenticate
      </button>
    </form>
  );
}
