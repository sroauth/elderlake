import { Head } from "$fresh/runtime.ts";
import Authenticate from "../islands/Authenticate.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login to Elderlake</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="font-['Inter'] p-10">
        <Authenticate />
      </div>
    </>
  );
}
