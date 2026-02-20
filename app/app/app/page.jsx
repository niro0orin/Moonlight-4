"use client";

import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="اكتب المصطلح"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => alert(text)}>Search</button>
    </div>
  );
}
