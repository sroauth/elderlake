import { Head } from "$fresh/runtime.ts";
import CreateUser from "../islands/CreateUser.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>Register to Elderlake</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="font-['Inter'] p-10">
        <CreateUser />
      </div>
    </>
  );
}
