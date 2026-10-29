"use client";

/**
 * The original template loaded the Google Maps JS API with a hard-coded key.
 * That key is not reliable for reuse, so this uses a keyless Maps embed
 * centred on the same region (New South Wales, Australia).
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
