import React from "react";
import { makeCapital } from "./operations";

export default function Capitalize({ label }) {
  return <span data-testid="spn01">{makeCapital(label)}</span>;
}
