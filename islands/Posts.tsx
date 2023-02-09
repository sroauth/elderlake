import { createRef } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { gun, user } from "../utils/gun.ts";
import { creatingPost, activePostKey } from "../utils/state.ts";
import { debounce } from "../utils/helpers.ts";
import { Text } from "../components/Text.tsx";
import { Image } from "../components/Image.tsx";
import { Video } from "../components/Video.tsx";
import { Post } from "../components/Post.tsx";

export default function Posts() {
  // Authentication gateway
  useEffect(() => {
    if (!user.value.is) {
      sessionStorage.setItem("redirect", window.location.pathname);
      window.location.href = "/login";
    }
  }, []);

  let pos = createRef();

  const [activePost, setActivePost] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  let timeout = null;

  const [posts, setPosts] = useState({});

  useEffect(() => {
    gun.value
      .user(window.location.pathname.split("/u/")[1])
      .get("test")
      .get("posts")
      .map()
      .on((data, key) => {
        setPosts((posts) => {
          const updatedPosts = posts;
          updatedPosts[key] = data;

          if (!activePostKey.value) {
            activePostKey.value = key;
          }

          return {
            ...updatedPosts,
          };
        });
      });
  }, []);

  useEffect(() => {
    pos.current.scrollTop = 0;
  }, [creatingPost.value]);

  function loadComments(e) {
    debounce(() => {
      for (let i = 0; i < e.target.children.length; i++) {
        if (e.target.children[i].getBoundingClientRect().top === 0) {
          setActivePost(i);

          activePostKey.value = e.target.children[i].getAttribute("data-key");

          // if (playingVideo) {
          //   playingVideo.currentTime = 0;
          //   playingVideo.pause();
          // }

          // if (e.target.children[i]?.children[0]?.tagName === "VIDEO") {
          //   e.target.children[i].children[0].play();
          //   setPlayingVideo(e.target.children[i].children[0]);
          // }
        }
      }
    }, 200);
  }

  function debounce(method, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      method();
    }, delay);
  }

  return (
    <div
      class="ratio snap-mandatory snap-always snap-y overflow-y-scroll"
      onScroll={loadComments}
      ref={pos}
    >
      {creatingPost.value ? <Post /> : null}

      {Object.keys(posts).map((key) =>
        posts[key].type === "text" ? (
          <Text data={posts[key]} id={key} />
        ) : posts[key].type === "image" ? (
          <Image data={posts[key]} id={key} />
        ) : (
          <Video data={posts[key]} id={key} />
        )
      )}
    </div>
  );
}
