export function Video(props) {
  return (
    <div
      class="relative h-screen snap-center flex flex-col justify-center"
      data-key={`${props.id}`}
    >
      <video width="1080" height="1920" loop playsinline="true">
        <source src={props.data.path} type="video/mp4" />
      </video>

      <div class="absolute top-0 left-0 w-full p-5 flex justify-between items-center">
        <div class="flex items-center gap-5">
          <img src="/stock/avatar.png" alt="" class="w-12 h-12 rounded-xl" />
          <span class="text-xl">Sabastian Auth</span>
        </div>

        <div
          class="rounded-full py-1 px-3"
          style="background-color: rgba(0, 0, 0, 0.35); -webkit-backdrop-filter: blur(5px);"
        >
          <span class="text-xl text-white">2h</span>
        </div>
      </div>
    </div>
  );
}
