import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="bg-[#db573c] border-2 border-[#993d2a] text-white py-1 px-3 rounded-full font-serif tracking-widest active:border-[#db573c] transition-all"
      style="box-shadow: 0 0 0 3px #eebe60;"
    />
  );
}
