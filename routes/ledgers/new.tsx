import { Head } from "$fresh/runtime.ts";
import { Button } from "../../components/Button.tsx";
import LedgerName from "../../islands/LedgerName.tsx";

export default function App() {
  return (
    <>
      <Head>
        <title>New Ledger - Elderlake</title>
        <meta name="theme-color" content="#fff6e9" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almendra+SC&family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>

      <div class="bg-[#fff6e9] h-screen font-['Poppins']">
        <div
          class="container mx-auto grid p-8 h-full"
          style="grid-template-rows: 32px 1fr;"
        >
          <div>
            <svg
              viewBox="0 0 759 792"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="#d1b283"
            >
              <g transform="matrix(1,0,0,1,-832.593,-731.729)">
                <g transform="matrix(1.02057,0,0,1.02057,-80.5691,-686.227)">
                  <circle cx="1363.24" cy="1727.49" r="216.697" />
                </g>
                <g transform="matrix(1,0,0,1,-14.744,-614.489)">
                  <path d="M1520.25,1806.16C1520.25,1806.16 1578.28,1825.84 1512.42,1895.53C1462.17,1948.7 1372.79,1984.29 1292.93,1984.29C1213.07,1984.29 1112.35,1946.64 1052.92,1864.46C985.108,1770.69 988.051,1635.66 1055.02,1542.4C1109.62,1466.36 1186.32,1433.97 1240.16,1423.6C1307.46,1410.64 1371.77,1419.49 1425.79,1448.59C1477.44,1476.41 1512.78,1524.2 1512.78,1524.2C1512.78,1524.2 1466.48,1340.17 1240.16,1346.37C1002.42,1352.89 847.337,1536.53 847.337,1755.34C847.337,1908.87 985.617,2140.99 1238.57,2137.62C1598.32,2132.85 1696.61,1805.55 1520.25,1806.16Z" />
                </g>
              </g>
            </svg>
          </div>

          <div
            class="container mx-auto grid gap-8 place-content-center"
            style="grid-template-columns: 400px 1fr;"
          >
            <div>
              <lottie-player
                src="/Reports_Animated/Reports.json"
                background="transparent"
                speed="1"
                style="width: 400px; height: 400px;"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div class="flex flex-col justify-center">
              <h1
                class="text-4xl font-medium mb-2 tracking-widest"
                style="font-family: 'Almendra SC';"
              >
                Make known thy ledger's name.
              </h1>
              <p class="mb-4">
                Set forth on an adventure, armed with a blank scroll of records.
              </p>
              <LedgerName />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
