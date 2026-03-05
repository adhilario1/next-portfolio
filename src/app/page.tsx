import Link from "next/link";
import React from "react";
//import Home from "@/pages/home";

export default function Page() {
  return (
    <div className="page-container">

      <p>What up App Router</p>
      <Link href="/about">test link</Link>
    </ div>
  );
}
