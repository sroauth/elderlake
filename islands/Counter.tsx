import { useEffect, useRef, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { gun } from "./Gun.mts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const myCount = useRef(gun.value.get("test").get("counter"));
  const [count, setCount] = useState(props.start);

  useEffect(() => {
    myCount.current.on((data: number) => {
      setCount(data);
    });
  }, []);

  // (async () => {
  //   const resp = await fetch(
  //     `https://api.scryfall.com/cards/named?exact=the+meathook+massacre`
  //   );
  //   const card = await resp.json();
  //   console.log(JSON.stringify(card));
  // })();

  return (
    <div>
      <p>{count}</p>
      <Button
        onClick={() => {
          myCount.current.put(count - 1);
        }}
      >
        -1
      </Button>
      <Button
        onClick={() => {
          myCount.current.put(count + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
}
