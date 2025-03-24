import React, { useState } from "react";

export default function ServiceChile() {
  const [val, setval] = useState<any>("");
  const MySubmit = (ev: any) => {
    ev.preventDefault();
    const event: any = new CustomEvent("changeText", {
      detail: {
        name: val,
      },
    });
    dispatchEvent(event);
  };

  return (
    <div>
      <form onSubmit={MySubmit}>
        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Click Here
        </button>
      </form>
    </div>
  );
}
