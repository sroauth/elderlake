import { Head } from "$fresh/runtime.ts";
import Ledgers from "../../islands/Ledgers.tsx";

export default function App() {
  return (
    <>
      <Head>
        <title>Ledgers - Elderlake</title>
        <meta name="theme-color" content="#fff6e9" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almendra+SC&family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>

      <div class="bg-[#fff6e9] h-screen font-['Poppins']">
        <Ledgers />
      </div>
    </>
  );
}
