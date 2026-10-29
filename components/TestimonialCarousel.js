"use client";

import { asset } from "@/lib/asset";
import { useEffect, useState } from "react";

const items = Array.from({ length: 5 }, () => ({
  img: asset("/img/testimonial.png"),
  quote:
    "If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt amet.",
  name: "Alex Carter",
  role: "Happy Client",
}));

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);

  // Recalculate how many testimonials fit (1 on mobile, 2 from 1000px up),
  // matching the original Owl responsive config. Done after mount to avoid
  // any server/client markup mismatch.
  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1000 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, items.length - perView);
  const index = Math.min(active, maxIndex);
  const offset = (index * 100) / items.length;

  return (
    <div className="owl-carousel owl-theme testimonialCarousel">
      <div className="testimonial__viewport">
        <div
          className="testimonial__track"
          style={{
            width: `${(items.length * 100) / perView}%`,
            transform: `translateX(-${offset}%)`,
          }}
        >
          {items.map((t, i) => (
            <div key={i} className="item testimonial__cell">
              <div className="media testimonial__slide">
                <img
                  className="img-fluid mr-4"
                  src={t.img}
                  width="120"
                  height="125"
                  alt=""
                />
                <div className="media-body">
                  <blockquote>“{t.quote}”</blockquote>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="owl-dots testimonial__dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`owl-dot${i === index ? " active" : ""}`}
            onClick={() => setActive(Math.min(i, maxIndex))}
            aria-label={`Testimonial ${i + 1}`}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
}
