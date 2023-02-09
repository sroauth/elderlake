import { useEffect, useRef, useState } from "preact/hooks";
import { gun, user } from "../utils/gun.ts";

interface TestProps {
  pub: string;
}

export default function Test(props: TestProps) {
  const [name, setName] = useState("");
  const nameRef = useRef(gun.value.user(props.pub).get("profile").get("name"));

  useEffect(() => {
    nameRef.current.on((data) => {
      setName(data);
    });
  }, []);

  return (
    <div>
      <span>Hello {name}</span>
    </div>
  );
}
