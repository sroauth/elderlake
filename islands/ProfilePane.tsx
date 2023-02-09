import { useEffect, useRef, useState } from "preact/hooks";
import { gun, user } from "../utils/gun.ts";
import { creatingPost } from "../utils/state.ts";

interface ProfilePaneProps {
  pub: string;
}

export default function ProfilePane(props: ProfilePaneProps) {
  const [name, setName] = useState("");
  const nameRef = useRef(gun.value.user(props.pub).get("profile").get("name"));

  useEffect(() => {
    nameRef.current.on((data) => {
      setName(data);
    });
  }, []);

  return (
    <div class="bg-[#FFF2E6] h-screen w-[320px] overflow-y-scroll">
      <div
        class="p-5 sticky top-0"
        style="background-color: rgba(255, 242, 230, 0.65); -webkit-backdrop-filter: blur(10px);"
      >
        <img src="/stock/banner.jpg" class="rounded-3xl" />
      </div>

      <div class="grid grid-cols-3 px-5 mt-[-64px] mb-5 sticky top-[52px]">
        <div class="flex justify-center items-end pb-0.5">
          <button class="bg-[#C2E6B0] border-2 border-[#FFF2E6] font-bold rounded-full py-1 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FFF2E6"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </button>
        </div>

        <div>
          <img
            src="/stock/avatar.png"
            alt=""
            class="w-24 h-24 rounded-3xl border-4 border-[#FFF2E6]"
          />
        </div>

        <div class="flex justify-center items-end pb-0.5">
          {user.value.pair().pub !== props.pub ? (
            <button class="bg-[#FF7F50] border-2 border-[#FFF2E6] font-bold rounded-full py-1 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFF2E6"
                stroke="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          ) : (
            <button
              class="bg-[#FF7F50] border-2 border-[#FFF2E6] font-bold rounded-full py-1 px-3"
              onClick={() => (creatingPost.value = true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFF2E6"
                stroke="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-droplet"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div class="flex flex-col">
        <span class="text-2xl mb-5 text-center">{name}</span>

        <p class="text-center px-5">
          I love exploring new ideas and connecting with like-minded
          individuals.
        </p>

        <h2
          class="px-5 text-xl text-[#907d6f] sticky top-[196px] p-5"
          style="background-color: rgba(255, 242, 230, 0.85); -webkit-backdrop-filter: blur(10px);"
        >
          Shared moments
        </h2>

        <div class="grid grid-cols-3 gap-5 px-5 pb-5">
          <img
            src="/stock/1.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/2.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/3.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/1.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/2.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/3.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/1.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/2.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/3.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/1.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/2.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/stock/3.jpg"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
