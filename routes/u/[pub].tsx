import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Test from "../../islands/Test.tsx";
import Nav from "../../islands/Nav.tsx";
import ProfilePane from "../../islands/ProfilePane.tsx";
import Posts from "../../islands/Posts.tsx";
import Chat from "../../islands/Chat.tsx";

export default function Profile(props: PageProps) {
  return (
    <>
      <Head>
        <title>Elderlake</title>
        <meta name="theme-color" content="#FFF2E6" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
      </Head>

      <div class="h-screen flex font-['Inter'] text-[#363023]">
        <Nav />

        <ProfilePane pub={props.params.pub} />

        <Posts />

        <Chat />
      </div>
    </>
  );
}
