"use client";
import React from "react";

function HitCounter({ hits }) {
  const [isCensored, setIsCensored] = React.useState(false);

  return (
    <span
      class={isCensored ? "censored" : undefined}
      onClick={() => setIsCensored(!isCensored)}
    >
      {hits}
    </span>
  );
}

export default HitCounter;
