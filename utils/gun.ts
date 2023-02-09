import { signal } from "@preact/signals";
import Gun from "gun";
import "gun/sea";

// Development
// export const gun = signal(Gun(["http://localhost:8765/gun"]));

// Production
export const gun = signal(Gun(["https://elderlake.glitch.me/gun"]));

export const user = signal(gun.value.user().recall({ sessionStorage: true }));
