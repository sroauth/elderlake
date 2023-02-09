import { createRef } from "preact";
import { useState, useEffect } from "preact/hooks";
import { gun, user } from "../utils/gun.ts";
import { uuid } from "../utils/helpers.ts";
import { activePostKey } from "../utils/state.ts";

export default function Chat() {
  let comms = createRef();
  let message = createRef();

  const [comments, setComments] = useState({});

  useEffect(() => {
    console.log(activePostKey.value);

    setComments({});

    if (activePostKey.value) {
      gun.value
        .user(window.location.pathname.split("/u/")[1])
        .get("test")
        .get("messages")
        .get(activePostKey.value)
        .map()
        .map()
        .on((data, key) => {
          setComments((comments) => {
            const updatedComments = comments;
            updatedComments[key] = data;

            return {
              ...updatedComments,
            };
          });
        });

      // console.log(`loading chat: ${activePostKey}`);
      comms.current.scrollTop = comms.current.scrollHeight;
    }
  }, [activePostKey.value]);

  function createMessage() {
    const pub = window.location.pathname.split("/u/")[1];

    gun.value
      .user(pub)
      .get("test")
      .get("posts")
      .get(activePostKey.value)
      .get("certificate")
      .once((certificate) => {
        const currentMessage = message.current.value;
        message.current.value = "";

        gun.value
          .user(pub)
          .get("test")
          .get("messages")
          .get(activePostKey.value)
          .get(user.value.is.pub)
          .get(uuid())
          .put(
            {
              from: true,
              text: currentMessage,
            },
            null,
            { opt: { cert: certificate } }
          );
      });
  }

  return (
    <div
      class="flex-grow flex flex-col bg-[#FFF2E6] overflow-y-scroll"
      ref={comms}
    >
      <div class="flex-grow flex flex-col gap-5 p-10">
        {Object.keys(comments).map((key) => {
          if (comments[key].from) {
            return (
              <div class="flex items-end gap-5">
                <img
                  src="/stock/avatar.png"
                  alt=""
                  class="w-10 h-10 rounded-xl"
                />

                <div>
                  <span class="text-gray-400">John Doe</span>
                  <p class="bg-[#C2E6B0] py-2 px-4 rounded-full rounded-bl-none text-xl">
                    {comments[key].text}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div class="flex justify-end items-end gap-5">
                <div>
                  <p class="bg-[#FFB347] py-2 px-4 rounded-full rounded-br-none text-xl">
                    {comments[key].text}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div
        class="sticky flex gap-5 bottom-0 left-0 w-full p-5"
        style="background-color: rgba(255, 242, 230, 0.65); -webkit-backdrop-filter: blur(10px);"
      >
        <input
          type="text"
          placeholder="Want to join the conversation?"
          class="bg-transparent text-xl outline-none border-4 rounded-full py-2 px-4 flex-grow"
          ref={message}
        />

        <button
          class="border-4 border-yellow-600 py-2 px-4 rounded-full text-xl text-yellow-600 font-bold"
          onClick={createMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
