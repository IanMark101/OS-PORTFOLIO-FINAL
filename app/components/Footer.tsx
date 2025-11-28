import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center border-t border-zinc-800">
      <p className="text-xs sm:text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Juan Dela Cruz | Built with React and Tailwind CSS.
      </p>
    </footer>
  );
}