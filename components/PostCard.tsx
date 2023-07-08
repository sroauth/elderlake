import { render } from "$gfm";
import { Post } from "../utils/posts.ts";

export function PostCard(props: { post: Post }) {
  const { post } = props;
  const types = {
    devblog: "yellow",
    community: "purple",
    "forging legends": "red",
  };

  return (
    <div>
      <div class="h-48">
        <a class="sm:col-span-2" href={`/${post.slug}`}>
          <img src={`/images/${post.image}`} alt="" class="w-full h-full object-cover" />
        </a>
      </div>

      <div class="flex gap-4 pt-4 text(sm uppercase) font-bold">
        <div class={`flex-grow flex justify-center py-2 px-4 bg-${types[post.type]}-200 text-${types[post.type]}-600 border border-${types[post.type]}-500`}>
          {post.type}
        </div>

        <time class="flex-grow flex justify-center bg-gray-200 text-gray-500 py-2 px-4 border border-gray-400">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <h3 class="text-xl text-uppercase py-4">
        <a class="sm:col-span-2" href={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: render(post.title) }}>
          
        </a>
      </h3>

      <div>
        {post.snippet}
      </div>
    </div>
  );
}