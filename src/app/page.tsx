import React from "react";
import AuroraBackgroundDemo from "@/view/root/aurora-background";
import Head from "next/head";
import { HeroHighlightDemo } from "@/view/root/hero-highlight";

export default function Main() {
  return (
    <html>
      <Head>
        <title>Чонон сүлд</title>
      </Head>
      <body className="h-[100vh]">
        <HeroHighlightDemo />
      </body>
    </html>
  );
}
