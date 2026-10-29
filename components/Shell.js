"use client";

import { useState } from "react";
import SideMenu from "./SideMenu";
import CanvasMenu from "./CanvasMenu";

export default function Shell({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "open" : ""}>
      <SideMenu onNavigate={() => setOpen(false)} />
      <CanvasMenu onToggle={() => setOpen((o) => !o)} />
      {children}
    </div>
  );
}
