import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Entry } from "../types";
import { loadEntries, saveEntries } from "../lib/storage";

export default function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);

  // first load: localStorage → state, then (once) fetch sample-data
  useEffect(() => {
    // 1. hydrate from localStorage
    setEntries(loadEntries());

    // 2. fetch JSON only the first time we have no entries yet
    if (entries.length === 0) {
      fetch("./sample-data/entries.json")
        .then((r) => r.json() as Promise<Entry[]>)
        .then((data) => {
          setEntries(data);
          saveEntries(data); // cache for offline
        })
        .catch(() => void 0); // ignore if offline
    }
  }, []);

  // newest first
  const sorted = [...entries].sort(
    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
  );

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Log entries</h2>
        <Link
          to="/new"
          className="rounded bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
        >
          + New entry
        </Link>
      </header>
      <div className="bg-red-500 text-white p-4">Write below.</div>

      {sorted.length === 0 ? (
        <p className="text-muted-foreground">No entries yet.</p>
      ) : (
        <ul className="space-y-4">
          {sorted.map((e) => (
            <li key={e.id} className="rounded border p-4">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(e.createdAt).toLocaleString()}
              </p>
              <p className="mt-2 whitespace-pre-line">{e.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
