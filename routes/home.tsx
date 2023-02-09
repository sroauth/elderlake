import { Head } from "$fresh/runtime.ts";
import Nav from "../islands/Nav.tsx";
import Posts from "../islands/Posts.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elderlake</title>
        <meta name="theme-color" content="#FFF2E6" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
      </Head>

      <div class="h-screen flex font-['Inter']">
        <Nav />

        <Posts />
      </div>
    </>
  );
}
