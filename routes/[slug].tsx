import { Handlers } from "$fresh/server.ts";
import { getPost, Post } from "../utils/posts.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const types = {
    devblog: "yellow",
    community: "purple",
    "forging legends": "red",
  };

  return (
    <>
      <Head>
        <title>{post.title} | Elderlake</title>

        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <link rel="stylesheet" href="/styles/main.css" />
      </Head>
      <div class="lines">
        <div class="hero" style={`background-image: url('/images/${post.image}')`}>
          <div class="flex flex-col">
            <div class="flex justify-between items-center p-8">
              <div class="bg-yellow-200 border border-yellow-500 p-2 h-12">
                <a href="/"><img src="/logo.png" alt="" class="h-full" /></a>
              </div>

              <div>
                <ul class="text-uppercase text-2xl font-bold">
                  <li class="border-b-4 border-yellow-200">Updates</li>
                </ul>
              </div>
            </div>

            <div class="max-w-screen-md px-4 mx-auto py-8"></div>

            <div class="flex-grow max-w-screen-lg mx-auto flex flex-col justify-center items-center">
              <div class="flex justify-center gap-4 text(sm uppercase) font-bold mb-8">
                <div class={`py-2 px-4 bg-${types[post.type]}-200 text-${types[post.type]}-600 border border-${types[post.type]}-500`}>
                  {post.type}
                </div>

                <time class="bg-gray-200 text-gray-500 py-2 px-4 border border-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h1 class="text-5xl text-uppercase text-center">{post.title}</h1>

              <p class="text-2xl my-8 text-center">{post.snippet}</p>
            </div>
          </div>
        </div>
        
        <main class="">
          <div
            class="markdown-body"
            dangerouslySetInnerHTML={{ __html: render(post.content, {
              disableHtmlSanitization: true,
            }) }}
          />
        </main>
      </div>
    </>
  )
}