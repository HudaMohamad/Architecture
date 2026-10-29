const stats = [
  { icon: "ti-crown", value: "286+", label: "Projects done" },
  { icon: "ti-face-smile", value: "942+", label: "Happy Clients" },
  { icon: "ti-user", value: "263+", label: "Real professionals" },
  { icon: "ti-gift", value: "2000+", label: "Cups of Coffee" },
];

export default function Overview({ className = "" }) {
  return (
    <section className={`overview ${className}`.trim()}>
      <div className="container">
        <div className="row">
          {stats.map((s) => (
            <div
              key={s.label}
              className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0"
            >
              <div className="media align-items-center overview__single">
                <span className="overview__single__icon">
                  <i className={s.icon}></i>
                </span>
                <div className="media-body">
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
