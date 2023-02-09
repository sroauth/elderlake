export function Image(props) {
  return (
    <div
      class="relative h-screen snap-center flex flex-col justify-center"
      data-key={`${props.id}`}
    >
      <img src="/stock/image.jpg" alt="" />

      <div class="absolute top-0 left-0 w-full p-5 flex justify-between items-center">
        <div class="flex items-center gap-5">
          <img src="/stock/avatar.png" alt="" class="w-12 h-12 rounded-xl" />
          <span class="text-xl">Sabastian Auth</span>
        </div>

        <div>
          <span class="text-xl">1h</span>
        </div>
      </div>
    </div>
  );
}
