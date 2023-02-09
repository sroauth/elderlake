import { Head } from "$fresh/runtime.ts";
import Profile from "../islands/Profile.tsx";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Elderlake</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="font-['Inter']">
        <h1>Settings</h1>

        <a href="/home" class="text-blue-600">
          Go to home
        </a>

        <Profile />
      </div>
    </>
  );
}
