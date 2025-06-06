import { Link, NavLink } from "react-router-dom";
import { Rocket } from "lucide-react";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-gray-200">
      {/* fixed navbar */}
      <nav
        className="fixed inset-x-0 top-0 z-50 h-14 w-full
                      flex items-center justify-between
                      bg-gray-900 border-b border-gray-800 px-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-lg font-semibold"
        >
          <Rocket className="size-5 text-yellow-400" />
          Unit Logbook
        </Link>
        <div className="flex gap-6">
          {[
            { to: "/", label: "Entries", exact: true },
            { to: "/new", label: "New entry" },
          ].map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `transition-colors hover:text-white ${
                  isActive ? "text-white font-medium" : "text-gray-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* main content below 56-px bar */}
      <main className="flex-1 w-full pt-14">
        <div className="mx-auto w-full max-w-3xl px-4">{children}</div>
      </main>

      {/* footer */}
      <footer
        className="w-full border-t border-gray-800 p-4
                         text-center text-xs text-gray-500"
      >
        © {new Date().getFullYear()} · Unit Logbook
      </footer>
    </div>
  );
}
