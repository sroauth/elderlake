import { Head } from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";
// import GunPaste from "../islands/Paste.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elderlake</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"></script>
        <script src="/lottie.js"></script>
      </Head>

      <div class="h-screen font-['Inter'] snap-mandatory snap-always snap-y overflow-y-scroll">
        <div class="absolute top-5 left-5 z-10">
          <img src="/logo.svg" alt="Elderlake Logo" class="w-12 h-12" />
        </div>

        <div class="absolute top-5 right-5 z-10">
          <button class="bg-white border-4 border-black text-xl font-bold py-2 px-4 rounded-full">
            Go to app
          </button>
        </div>

        <div class="h-screen container mx-auto px-10 flex flex-col-reverse text-center gap-5 items-center justify-center snap-center lg:flex-row lg:text-left lg:gap-10">
          <div>
            <p class="text-xl mb-5 lg:text-2xl">
              Unleash the true potential of social networking with{" "}
              <span class="text-yellow-600 font-bold">Elderlake</span>! Seize
              control of the digital realm to achieve your wildest dreams.
            </p>

            <div class="flex items-center gap-5 justify-center lg:justify-start">
              <div class="scroll"></div>

              <p class="text-xl text-[#D3C9BD] lg:text-2xl">
                Scroll to learn more.
              </p>
            </div>
          </div>

          <div>
            <lottie-player
              src="/Product Release_Animated/Product Release.json"
              background="transparent"
              speed="1"
              class="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div class="h-screen container mx-auto px-10 flex flex-col gap-5 items-center justify-center text-center snap-center lg:flex-row lg:text-left lg:gap-10">
          <div>
            <lottie-player
              src="/Integrations_Animated/Integrations.json"
              id="secondLottie"
              background="transparent"
              speed="1"
              class="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div>
            <p class="text-xl mb-5 lg:text-2xl">
              Built on GUN, the cutting-edge database technology, we are
              rewriting the rules of social networking. With lightning-fast
              speeds, rock-solid security, and complete control over your data,
              you'll never look at social media the same way again.
            </p>

            <div class="flex items-center gap-5 justify-center lg:justify-start">
              <div class="scroll"></div>

              <p class="text-xl text-[#D3C9BD] lg:text-2xl">
                Scroll again to read our pitch.
              </p>
            </div>
          </div>
        </div>

        <div class="h-screen container mx-auto px-10 flex flex-col-reverse items-center justify-center gap-5 snap-center text-center lg:flex-row lg:text-left lg:gap-10">
          <div>
            <p class="text-xl mb-5 lg:text-2xl">
              <span class="text-yellow-600 font-bold">Elderlake</span> is more
              than a social platform - it's a revolutionary movement that
              challenges the status quo. Our decentralized architecture ensures
              that your voice is heard, your privacy is protected, and your data
              is always accessible. Say goodbye to censorship and hello to
              freedom of expression.
            </p>

            <div class="flex items-center gap-5 justify-center lg:justify-start">
              <div class="scroll"></div>

              <p class="text-xl text-[#D3C9BD] lg:text-2xl">
                That's not all. Keep scrolling.
              </p>
            </div>
          </div>

          <div>
            <lottie-player
              src="/Teamwork_Animated/Team Work.json"
              id="thirdLottie"
              background="transparent"
              speed="1"
              class="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div class="h-screen container mx-auto px-10 flex flex-col items-center justify-center gap-5 snap-center text-center lg:flex-row lg:text-left lg:gap-10">
          <div>
            <lottie-player
              src="/Community_Animated/Community.json"
              id="fourthLottie"
              background="transparent"
              speed="1"
              class="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div>
            <p class="text-xl mb-5 lg:text-2xl">
              Share your thoughts, experiences, and moments with the people who
              matter most to you, and enjoy a new level of online socializing
              that's safe, secure, and second to none.
            </p>

            <div class="flex items-center gap-5 justify-center lg:justify-start">
              <div class="scroll"></div>

              <p class="text-xl text-[#D3C9BD] lg:text-2xl">
                One last thing. Scroll once more.
              </p>
            </div>
          </div>
        </div>

        <div class="h-screen container mx-auto px-10 flex flex-col-reverse items-center justify-center gap-10 snap-center text-center lg:flex-row lg:text-left lg:gap-10">
          <div>
            <p class="text-xl mb-5 lg:text-2xl">
              Join the social media revolution and leave the past behind -
              experience the adventure you've been eagerly waiting for!
            </p>

            <button class="border-4 border-yellow-600 text-2xl py-2 px-4 rounded-full font-bold text-yellow-600">
              Join now
            </button>
          </div>

          <div>
            <lottie-player
              src="/Onboarding_Animated/Onboarding.json"
              id="fifthLottie"
              background="transparent"
              speed="1"
              class="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </>
  );
}
