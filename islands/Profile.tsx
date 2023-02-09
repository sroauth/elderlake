import { useEffect, useRef, useState } from "preact/hooks";
import { gun, user } from "../utils/gun.ts";

export default function Profile() {
  // Authentication gateway
  useEffect(() => {
    if (!user.value.is) {
      window.location.href = "/login";
    }
  }, []);

  const [name, setName] = useState("");
  const nameRef = useRef(user.value.get("profile").get("name"));

  useEffect(() => {
    nameRef.current.on((data) => {
      setName(data);
    });
  }, []);

  function save() {
    nameRef.current.put(name);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />

      <button onClick={save}>Save</button>
    </div>
  );
}
