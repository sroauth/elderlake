import { signal } from "@preact/signals";
import Gun from "gun";
import "gun/sea";

export const gun = signal(Gun(["http://localhost:8765/gun"]));
export const user = signal(gun.value.user().recall({ sessionStorage: true }));
