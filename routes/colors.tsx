import { Head } from "$fresh/runtime.ts";
import Nav from "../islands/Nav.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Colors of Elderlake</title>
        <meta name="theme-color" content="#FFF2E6" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
      </Head>

      <div class="h-screen flex bg-[#FFF2E6]">
        <Nav />

        <div class="bg-white flex-grow flex gap-4 p-4 rounded-tl-2xl text-sm font-thin">
          <div class="bg-[#FFF2E6] w-20 h-20 flex items-center justify-center text-center rounded-xl p-1">
            Coral Lullaby
          </div>
          <div class="bg-[#C2E6B0] w-20 h-20 flex items-center justify-center text-center rounded-xl p-1">
            Seafoam Haze
          </div>
          <div class="bg-[#FFB347] w-20 h-20 flex items-center text-center rounded-xl p-1">
            Sunny Amber
          </div>
          <div class="bg-[#FF7F50] w-20 h-20 flex items-center justify-center text-center rounded-xl p-1">
            Sunset Orange
          </div>
          <div class="bg-[#363023] w-20 h-20 flex items-center justify-center text-center text-white rounded-xl p-1">
            Umber Night
          </div>
        </div>
      </div>
    </>
  );
}
