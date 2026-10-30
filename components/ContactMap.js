"use client";

/**
 * Keyless Google Maps embed (no API key required),
 * centred on New South Wales, Australia.
 */
export default function ContactMap() {
  return (
    <div className="d-none d-sm-block mb-5 pb-4">
      <div id="map" style={{ height: "420px" }}>
        <iframe
          title="Our location"
          src="https://maps.google.com/maps?q=-31.197,150.744&z=9&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
