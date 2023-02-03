import { Head } from "$fresh/runtime.ts";
import Authenticate from "../islands/Authenticate.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="w-screen h-screen bg-purple-50">
        <Authenticate />
      </div>
    </>
  );
}
