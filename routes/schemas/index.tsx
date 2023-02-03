import { Head } from "$fresh/runtime.ts";
import Dropdown from "../../islands/Dropdown.tsx";

export default function Schemas() {
  return (
    <>
      <Head>
        <title>Schemas - Elderlake</title>
        <link rel="stylesheet" href="/global.css" />
      </Head>

      <div class="h-full bg-gray-50 overflow-hidden">
        <h1>Schemas</h1>

        <Dropdown />
      </div>
    </>
  );
}
