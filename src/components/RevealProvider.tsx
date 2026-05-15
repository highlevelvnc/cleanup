"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export default function RevealProvider() {
  useEffect(() => initScrollReveal(), []);
  return null;
}
