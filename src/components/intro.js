import { Link } from "gatsby";
import React from "react";
import Cart from "./Cart";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link to="/">
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Travel Agency.
        </h1>
      </Link>
      <Cart />
    </section>
  );
}
