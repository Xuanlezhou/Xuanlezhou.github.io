"use client";

import { FaQuestionCircle } from "react-icons/fa";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
      });
      cal("preload", {
        calLink: "yihan-shi",
      });
    })();
  }, []);
  return (
    <button
      data-cal-link="yihan-shi"
      className="my-1 bg-[#54c5b3] text-white px-2 py-1"
    >
      <FaQuestionCircle className="mr-1 inline-block align-middle" />
      <span className="pointer-events-none align-middle">Ask me anything!</span>
    </button>
  );
}
