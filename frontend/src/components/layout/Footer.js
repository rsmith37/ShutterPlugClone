import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} - Shutter Plug
      </footer>
    </div>
  );
}
