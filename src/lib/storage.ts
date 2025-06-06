import type { Entry } from "../types";
import sample from "./data.json";

const KEY = "unitlog.entries";

/** one-time transform: isoTime ➜ createdAt */
type SampleEntry = Entry & { isoTime?: string; createdAt?: string };

const SAMPLE_ENTRIES: Entry[] = (sample as SampleEntry[]).map((e) => ({
  ...e,
  createdAt: e.isoTime ?? e.createdAt,
}));

/** read from localStorage; if empty, fall back to bundled sample data */
export function loadEntries(): Entry[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Entry[];
  } catch {
    /* ignore corrupted JSON */
  }
  return SAMPLE_ENTRIES;
}

/** write entries back to localStorage */
export function saveEntries(entries: Entry[]) {
  localStorage.setItem(KEY, JSON.stringify(entries));
}
