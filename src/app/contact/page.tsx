"use client";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`Message submitted: ${message}`);
    setMessage("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <textarea
        className="border p-2 w-full mt-4"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}
