export function Text(props) {
  return (
    <div
      class={`h-screen snap-center flex flex-col justify-center px-10 bg-[${props.data.bg}]`}
      data-key={`${props.id}`}
    >
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center gap-5">
          <img src="/stock/avatar.png" alt="" class="w-12 h-12 rounded-xl" />
          <span class="text-xl">{props.data.name}</span>
        </div>

        <div>
          <span class="text-xl text-black opacity-40">20m</span>
        </div>
      </div>

      <p class="text-2xl mb-5">{props.data.text}</p>

      <div class="flex justify-end">
        <img
          src="/stock/avatar.png"
          alt=""
          class={`w-10 h-10 border-2 border-[${props.data.bg}] rounded-xl`}
        />
        <img
          src="/stock/avatar.png"
          alt=""
          class={`w-10 h-10 border-2 border-[${props.data.bg}] rounded-xl ml-[-8px]`}
        />
        <div
          class={`relative bg-black w-10 h-10 border-2 border-[${props.data.bg}] text-white rounded-xl ml-[-8px]`}
        >
          <span class="absolute top-[8px] left-[4px] text-sm">+99</span>
        </div>
      </div>
    </div>
  );
}
