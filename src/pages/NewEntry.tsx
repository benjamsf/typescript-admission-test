import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Container from "../components/Container";
import type { Entry } from "../types";
import { loadEntries, saveEntries } from "../lib/storage";

export default function NewEntryPage() {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newEntry: Entry = {
      id: uuid(),
      title,
      body,
      createdAt: new Date().toISOString(),
      lat: lat ? Number(lat) : undefined,
      lon: lon ? Number(lon) : undefined,
    };

    const updated = [newEntry, ...loadEntries()];
    saveEntries(updated);
    nav("/"); // back to list
  }

  return (
    <Container className="py-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg space-y-4 rounded border p-6"
      >
        <h2 className="text-xl font-bold">New entry</h2>

        <label className="block">
          <span className="mb-1 inline-block">Title</span>
          <input
            className="w-full rounded border p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 inline-block">Body</span>
          <textarea
            className="w-full rounded border p-2"
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="mb-1 inline-block">Lat (optional)</span>
            <input
              type="number"
              step="any"
              className="w-full rounded border p-2"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1 inline-block">Lon (optional)</span>
            <input
              type="number"
              step="any"
              className="w-full rounded border p-2"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
            />
          </label>
        </div>

        <button
          type="submit"
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Save entry
        </button>
      </form>
    </Container>
  );
}
