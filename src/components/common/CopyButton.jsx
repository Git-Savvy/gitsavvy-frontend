import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      // Copy text to the clipboard
      await navigator.clipboard.writeText(textToCopy);

      // Show success state
      setCopied(true);

      // Return to normal icon after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="p-2 rounded-lg  transition-colors"
      title={copied ? "Copied!" : "Copy"}
    >
      {copied ? (
        <Check className="w-6 h-6 text-green-600 mr-5 mt-3" />
      ) : (
        <Copy className="w-6 h-6 text-Gray400 mr-5 mt-3  hover:text-Indigo300" />
      )}
    </button>
  );
}