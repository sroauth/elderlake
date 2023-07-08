import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "../utils/posts.ts";
import { PostCard } from "../components/PostCard.tsx";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  const types = {
    devblog: "yellow",
    community: "purple",
    "forging legends": "red",
  };

  return (
    <>
      <Head>
        <title>Weblog | Elderlake</title>

        <link rel="stylesheet" href="/styles/main.css" />
      </Head>
      <div class="lines">
        <div class="hero" style={`background-image: url('/images/${posts[0].image}')`}>
          <div class="flex flex-col">
            <div class="flex justify-between items-center p-8">
              <div class="bg-yellow-200 border border-yellow-500 p-2 h-12">
                <img src="/logo.png" alt="" class="h-full" />
              </div>

              <div>
                <ul class="text-uppercase text-2xl font-bold">
                  <li class="border-b-4 border-yellow-200">Updates</li>
                </ul>
              </div>
            </div>

            <div class="flex-grow max-w-screen-lg mx-auto flex flex-col justify-center items-center">
              <div class="flex justify-center gap-4 text(sm uppercase) font-bold mb-8">
                <div class={`py-2 px-4 bg-${types[posts[0].type]}-200 text-${types[posts[0].type]}-600 border border-${types[posts[0].type]}-500`}>
                  {posts[0].type}
                </div>

                <time class="bg-gray-200 text-gray-500 py-2 px-4 border border-gray-400">
                  {new Date(posts[0].publishedAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h1 class="text-5xl text-uppercase text-center">{posts[0].title}</h1>

              <p class="text-2xl my-8 text-center">{posts[0].snippet}</p>

              <div class="flex justify-center gap-4">
                <button class="bg-yellow-200 shadow-md text-yellow-600 text-uppercase font-bold py-2 px-4 border border-yellow-500 hover:scale-110 hover:shadow-lg transition-all duration-100 active:scale-105">
                  <a href={`/${posts[0].slug}`}>Read more</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main class="max-w-screen-lg px-4 mx-auto pb-8">
          <div class="py-12">
            <ul class="flex gap-4">
              <li class="bg-yellow-200 border border-yellow-500 font-bold text-yellow-600 py-2 px-4 text-uppercase">Recent</li>
              <li class="bg-gray-100 border border-gray-200 font-bold text-gray-400 py-2 px-4 text-uppercase">Devblog</li>
              <li class="bg-gray-100 border border-gray-200 font-bold text-gray-400 py-2 px-4 text-uppercase">Community</li>
              <li class="bg-gray-100 border border-gray-200 font-bold text-gray-400 py-2 px-4 text-uppercase">Forging Legends</li>
            </ul>
          </div>

          <div class="grid grid-cols-3 gap-8">
            {posts.map((post, i) => i > 0 ? <PostCard post={post} /> : null)}
          </div>
        </main>
      </div>
    </>
  );
}