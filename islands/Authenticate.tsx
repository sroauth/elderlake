import { gun, user } from "./Gun.mts";

export default function Authenticate() {
  gun.value.on("auth", () => {
    window.location.href = "/ledgers";
  });

  function handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const alias = form.alias.value;
    const password = form.password.value;

    user.value.auth(alias, password);
  }

  return (
    <form class="flex flex-col" onSubmit={handleSubmit}>
      <label for="alias">Alias</label>
      <input type="text" id="alias" class="border" />

      <label for="password">Password</label>
      <input type="password" id="password" class="border" />

      <button type="submit" class="bg-purple-500 text-white">
        Authenticate
      </button>
    </form>
  );
}
