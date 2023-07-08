// Importing two new std lib functions to help with parsing front matter and joining file paths.
import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  image: string;
  type: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
    image: attrs.image,
    type: attrs.type,
  };
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}