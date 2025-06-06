import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="grid place-content-center h-full text-center space-y-4">
      <h2 className="text-3xl font-bold">404</h2>
      <p className="text-muted-foreground">Nothing to see here.</p>
      <Link
        to="/"
        className="rounded bg-primary px-4 py-2 text-primary-foreground"
      >
        Back to list
      </Link>
    </div>
  );
}
