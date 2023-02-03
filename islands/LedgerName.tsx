import { useEffect, useRef, useState } from "preact/hooks";
import { gun, user } from "./Gun.mts";
import { Button } from "../components/Button.tsx";
import { uuid } from "../helpers/uuid.ts";

export default function LedgerName() {
  const names = [
    "Feudal",
    "Royal",
    "Knight's",
    "Baron's",
    "Earl's",
    "Royal",
    "Realm's",
    "Empire's",
    "King's",
  ];
  const types = [
    "Ledger",
    "Tome",
    "Chronicle",
    "Annals",
    "Register",
    "Chronicles",
    "Saga",
  ];

  const myLedgerName = useRef(user.value.get("ledgers"));
  const [ledgerName, setLedgerName] = useState("");

  // useEffect(() => {
  //   myLedgerName.current.on((data: string) => {
  //     setLedgerName(data);
  //   });
  // }, []);

  return (
    <div class="flex items-center gap-4 w-full">
      <input
        type="text"
        id="name"
        placeholder={`The ${names[Math.floor(Math.random() * names.length)]} ${
          types[Math.floor(Math.random() * types.length)]
        }`}
        class="block border-2 rounded-full py-1 px-3"
        value={ledgerName}
        onInput={(e) => setLedgerName(e.target.value)}
      />
      <Button
        onClick={() => {
          user.value
            .get("ledgers")
            .get(uuid())
            .get("name")
            .put(ledgerName, () => {
              window.location.href = "/ledgers";
            });
        }}
      >
        Acknowledge
      </Button>
    </div>
  );
}
