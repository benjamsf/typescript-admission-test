export interface Entry {
  id: string; // uuid
  title: string;
  body: string;
  createdAt: string; // ISO string
  lat?: number;
  lon?: number;
}
