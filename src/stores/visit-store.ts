import { persistentAtom } from "@nanostores/persistent";

export const $hasVisited = persistentAtom<string>("hasVisited", "false");
