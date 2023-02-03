import { useEffect, useRef, useState } from "preact/hooks";
import { gun } from "./Gun.mts";

export default function Counter() {
  const [paste, setPaste] = useState("");
  const copy = useRef(gun.value.get("test").get("paste"));

  useEffect(() => {
    copy.current.on((data: string) => {
      setPaste(data);
    });
  }, []);

  return (
    <div>
      <textarea
        id="paste"
        placeholder="paste here!"
        value={paste}
        onChange={(e: any) => {
          copy.current.put(e.target.value);
        }}
      >
      </textarea>
    </div>
  );
}
