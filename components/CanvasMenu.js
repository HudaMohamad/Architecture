"use client";

export default function CanvasMenu({ onToggle }) {
  return (
    <div className="canvus_menu">
      <div className="container">
        <div className="float-right">
          <div
            className="toggle_icon"
            title="Menu Bar"
            role="button"
            tabIndex={0}
            onClick={onToggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggle();
              }
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
