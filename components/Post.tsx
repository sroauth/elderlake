import { createRef } from "preact";
import { user } from "../utils/gun.ts";
import { uuid } from "../utils/helpers.ts";

export function Post(props) {
  const textarea = createRef();

  async function createPost() {
    const id = uuid();

    const who = "*";
    const policy = { "*": `test/messages/${id}`, "+": "*" };
    const authority = user.value.pair();
    const opt = { expiry: Gun.state() + 60 * 60 * 24 * 1000 };
    const certificate = await SEA.certify(who, policy, authority, null, opt);

    user.value.get("test").get("posts").get(id).put({
      name: "Sabastian Auth",
      text: textarea.current.value,
      bg: "#FFB347",
      type: "text",
      certificate: certificate,
    });
  }

  return (
    <div class={`h-screen snap-center flex flex-col justify-center px-10`}>
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center gap-5">
          <img src="/stock/avatar.png" alt="" class="w-12 h-12 rounded-xl" />
          <span class="text-xl">Sabastian Auth</span>
        </div>

        <div>
          <span class="text-xl text-black opacity-40">now</span>
        </div>
      </div>

      <textarea
        class="text-2xl mb-5 outline-none resize-none"
        placeholder="Enter message..."
        rows="8"
        ref={textarea}
      ></textarea>

      <div class="flex justify-end">
        <button
          class="bg-[#FF7F50] font-bold text-white py-2 px-4 rounded-full"
          onClick={createPost}
        >
          Post
        </button>
      </div>
    </div>
  );
}
