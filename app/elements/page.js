import { asset } from "@/lib/asset";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export const metadata = { title: "Elements" };

const tableRows = [
  ["01", asset("/img/elements/f1.jpg"), "color-1", 80],
  ["02", asset("/img/elements/f2.jpg"), "color-2", 30],
  ["03", asset("/img/elements/f3.jpg"), "color-3", 55],
  ["04", asset("/img/elements/f4.jpg"), "color-4", 60],
  ["05", asset("/img/elements/f5.jpg"), "color-5", 40],
  ["06", asset("/img/elements/f6.jpg"), "color-6", 70],
  ["07", asset("/img/elements/f7.jpg"), "color-7", 30],
  ["08", asset("/img/elements/f8.jpg"), "color-8", 60],
];

const gallery = [
  [asset("/img/elements/g1.jpg"), "col-md-4"],
  [asset("/img/elements/g2.jpg"), "col-md-4"],
  [asset("/img/elements/g3.jpg"), "col-md-4"],
  [asset("/img/elements/g4.jpg"), "col-md-6"],
  [asset("/img/elements/g5.jpg"), "col-md-6"],
  [asset("/img/elements/g6.jpg"), "col-md-4"],
  [asset("/img/elements/g7.jpg"), "col-md-4"],
  [asset("/img/elements/g8.jpg"), "col-md-4"],
];

const btnColors = [
  "default", "primary", "success", "info", "warning", "danger", "link", "disable",
];

export default function ElementsPage() {
  return (
    <>
      <PageBanner title="Elements" crumb="Elements" />

      {/* Sample Text */}
      <section className="sample-text-area">
        <div className="container">
          <h3 className="text-heading">Text Sample</h3>
          <p className="sample-text">
            Every avid independent filmmaker has <b>Bold</b> about making that{" "}
            <i>Italic</i> interest documentary, or short film to show off their
            creative prowess. Many have great ideas and want to “wow” the
            <sup>Superscript</sup> scene, or video renters with their big
            project. But once you have the<sub>Subscript</sub> “in the can” (no
            easy feat), how do you move from a <del>Strike</del> through of
            master DVDs with the <u>“Underline”</u> marked hand-written title
            inside a secondhand CD case, to a pile of cardboard boxes full of
            shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting
            on your doorstep? You need to create eye-popping artwork and have
            your project replicated. Using a reputable full service DVD
            Replication company like PacificDisc, Inc. to partner with is
            certainly a helpful option to ensure a professional end result, but
            to help with your DVD replication project, here are 4 easy steps to
            follow for good DVD replication results:
          </p>
        </div>
      </section>

      {/* Buttons */}
      <section className="button-area">
        <div className="container border-top-generic">
          <h3 className="text-heading">Sample Buttons</h3>
          <div className="button-group-area">
            {btnColors.map((c) => (
              <a key={c} href="#" className={`genric-btn ${c}`}>
                {c === "disable" ? "Disable" : cap(c)}
              </a>
            ))}
          </div>
          <div className="button-group-area mt-10">
            {btnColors.map((c) => (
              <a
                key={c}
                href="#"
                className={`genric-btn ${c === "disable" ? "disable" : c + "-border"}`}
              >
                {c === "disable" ? "Disable" : cap(c)}
              </a>
            ))}
          </div>
          <div className="button-group-area mt-40">
            {btnColors.map((c) => (
              <a key={c} href="#" className={`genric-btn ${c} radius`}>
                {c === "disable" ? "Disable" : cap(c)}
              </a>
            ))}
          </div>
          <div className="button-group-area mt-10">
            {btnColors.map((c) => (
              <a
                key={c}
                href="#"
                className={`genric-btn ${c === "disable" ? "disable" : c + "-border"} radius`}
              >
                {c === "disable" ? "Disable" : cap(c)}
              </a>
            ))}
          </div>
          <div className="button-group-area mt-40">
            {btnColors.map((c) => (
              <a key={c} href="#" className={`genric-btn ${c} circle`}>
                {c === "disable" ? "Disable" : cap(c)}
              </a>
            ))}
          </div>
          <div className="button-group-area mt-10">
            {btnColors.map((c) => (
              <a
                key={c}
                href="#"
                className={`genric-btn ${c === "disable" ? "disable" : c + "-border"} circle`}
              >
                {c === "disable" ? "Disable" : cap(c)}
              </a>
            ))}
          </div>
          <div className="button-group-area mt-40">
            {["default", "primary", "success", "info", "warning", "danger"].map(
              (c) => (
                <a key={c} href="#" className={`genric-btn ${c} circle arrow`}>
                  {cap(c)}
                  <span className="lnr lnr-arrow-right"></span>
                </a>
              )
            )}
          </div>
          <div className="button-group-area mt-10">
            {["default", "primary", "success", "info", "warning", "danger"].map(
              (c) => (
                <a
                  key={c}
                  href="#"
                  className={`genric-btn ${c}-border circle arrow`}
                >
                  {cap(c)}
                  <span className="lnr lnr-arrow-right"></span>
                </a>
              )
            )}
          </div>
          <div className="button-group-area mt-40">
            <a href="#" className="genric-btn primary e-large">Extra Large</a>
            <a href="#" className="genric-btn success large">Large</a>
            <a href="#" className="genric-btn primary">Default</a>
            <a href="#" className="genric-btn success medium">Medium</a>
            <a href="#" className="genric-btn primary small">Small</a>
          </div>
          <div className="button-group-area mt-10">
            <a href="#" className="genric-btn primary-border e-large">Extra Large</a>
            <a href="#" className="genric-btn success-border large">Large</a>
            <a href="#" className="genric-btn primary-border">Default</a>
            <a href="#" className="genric-btn success-border medium">Medium</a>
            <a href="#" className="genric-btn primary-border small">Small</a>
          </div>
        </div>
      </section>

      {/* Align / Tables / Gallery / Typography / Forms */}
      <section className="whole-wrap">
        <div className="container">
          <div className="section-top-border">
            <h3 className="mb-30">Left Aligned</h3>
            <div className="row">
              <div className="col-md-3">
                <img src={asset("/img/elements/d.jpg")} alt="" className="img-fluid" />
              </div>
              <div className="col-md-9 mt-sm-20 left-align-p">
                <p>
                  Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of this
                  law, most of the popular online casino networks such as Party
                  Gaming and PlayTech left the United States. Overnight, online
                  casino players found themselves being chased by the Federal
                  government. But, after a fortnight, the online casino industry
                  came up with a solution and new online casinos started taking
                  root. These began to operate under a different business
                  umbrella, and by doing that, rendered the transfer of money to
                  and from them legal.
                </p>
              </div>
            </div>
          </div>

          <div className="section-top-border text-right">
            <h3 className="mb-30">Right Aligned</h3>
            <div className="row">
              <div className="col-md-9">
                <p className="text-right">
                  Over time, even the most sophisticated, memory packed computer
                  can begin to run slow if we don’t do something to prevent it.
                  The reason why has less to do with how computers are made and
                  how they age and more to do with the way we use them.
                </p>
                <p className="text-right">
                  Before we discuss all of the things that could be affecting
                  your PC’s performance, let’s talk a little about what symptoms
                </p>
              </div>
              <div className="col-md-3">
                <img src={asset("/img/elements/d.jpg")} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="section-top-border">
            <h3 className="mb-30">Definition</h3>
            <div className="row">
              {[1, 2, 3].map((n) => (
                <div key={n} className="col-md-4">
                  <div className="single-defination">
                    <h4 className="mb-20">Definition 0{n}</h4>
                    <p>
                      Recently, the US Federal government banned online casinos
                      from operating in America by making it illegal to transfer
                      money to them through any US bank or payment system. As a
                      result of this law, most of the popular online casino
                      networks
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-top-border">
            <h3 className="mb-30">Block Quotes</h3>
            <div className="row">
              <div className="col-lg-12">
                <blockquote className="generic-blockquote">
                  “Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to
                  them through any US bank or payment system. As a result of this
                  law, most of the popular online casino networks such as Party
                  Gaming and PlayTech left the United States. Overnight, online
                  casino players found themselves being chased by the Federal
                  government.”
                </blockquote>
              </div>
            </div>
          </div>

          <div className="section-top-border">
            <h3 className="mb-30">Table</h3>
            <div className="progress-table-wrap">
              <div className="progress-table">
                <div className="table-head">
                  <div className="serial">#</div>
                  <div className="country">Countries</div>
                  <div className="visit">Visits</div>
                  <div className="percentage">Percentages</div>
                </div>
                {tableRows.map(([serial, flag, color, width]) => (
                  <div key={serial} className="table-row">
                    <div className="serial">{serial}</div>
                    <div className="country">
                      <img src={flag} alt="flag" />
                      Canada
                    </div>
                    <div className="visit">645032</div>
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className={`progress-bar ${color}`}
                          role="progressbar"
                          style={{ width: `${width}%` }}
                          aria-valuenow={width}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-top-border">
            <h3>Image Gallery</h3>
            <div className="row gallery-item">
              {gallery.map(([src, col], i) => (
                <div key={i} className={col}>
                  <a href={src} className="img-gal">
                    <div
                      className="single-gallery-image"
                      style={{ background: `url(${src})` }}
                    ></div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="section-top-border">
            <div className="row">
              <div className="col-md-4 typo-sec">
                <h3 className="mb-20">Typography</h3>
                <div className="typography">
                  <h1 className="typo-list">This is header 01</h1>
                  <h2 className="typo-list">This is header 02</h2>
                  <h3 className="typo-list">This is header 03</h3>
                  <h4 className="typo-list">This is header 04</h4>
                  <h5 className="typo-list">This is header 01</h5>
                  <h6 className="typo-list">This is header 01</h6>
                </div>
              </div>
              <div className="col-md-4 mt-sm-30 typo-sec">
                <h3 className="mb-20">Unordered List</h3>
                <div>
                  <ul className="unordered-list">
                    <li>Fta Keys</li>
                    <li>For Women Only Your Computer Usage</li>
                    <li>
                      Facts Why Inkjet Printing Is Very Appealing
                      <ul>
                        <li>
                          Addiction When Gambling Becomes
                          <ul>
                            <li>Protective Preventative Maintenance</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Dealing With Technical Support 10 Useful Tips</li>
                    <li>Make Myspace Your Best Designed Space</li>
                    <li>Cleaning And Organizing Your Computer</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-sm-30 typo-sec">
                <h3 className="mb-20">Ordered List</h3>
                <div>
                  <ol className="ordered-list">
                    <li><span>Fta Keys</span></li>
                    <li><span>For Women Only Your Computer Usage</span></li>
                    <li>
                      <span>Facts Why Inkjet Printing Is Very Appealing</span>
                      <ol className="ordered-list-alpha">
                        <li>
                          <span>Addiction When Gambling Becomes</span>
                          <ol className="ordered-list-roman">
                            <li><span>Protective Preventative Maintenance</span></li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li><span>Dealing With Technical Support 10 Useful Tips</span></li>
                    <li><span>Make Myspace Your Best Designed Space</span></li>
                    <li><span>Cleaning And Organizing Your Computer</span></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="section-top-border">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <h3 className="mb-30">Form Element</h3>
                <form action="#">
                  <div className="mt-10">
                    <input type="text" name="first_name" placeholder="First Name" required className="single-input" />
                  </div>
                  <div className="mt-10">
                    <input type="text" name="last_name" placeholder="Last Name" required className="single-input" />
                  </div>
                  <div className="mt-10">
                    <input type="text" name="last_name2" placeholder="Last Name" required className="single-input" />
                  </div>
                  <div className="mt-10">
                    <input type="email" name="EMAIL" placeholder="Email address" required className="single-input" />
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                    <input type="text" name="address" placeholder="Address" required className="single-input" />
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
                    <div className="form-select">
                      <select defaultValue="City">
                        <option>City</option>
                        <option>Dhaka</option>
                        <option>Dilli</option>
                        <option>Newyork</option>
                        <option>Islamabad</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group-icon mt-10">
                    <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                    <div className="form-select">
                      <select defaultValue="Country">
                        <option>Country</option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>England</option>
                        <option>Srilanka</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-10">
                    <textarea className="single-textarea" placeholder="Message" required></textarea>
                  </div>
                  <div className="mt-10">
                    <input type="text" placeholder="Primary color" required className="single-input-primary" />
                  </div>
                  <div className="mt-10">
                    <input type="text" placeholder="Accent color" required className="single-input-accent" />
                  </div>
                  <div className="mt-10">
                    <input type="text" placeholder="Secondary color" required className="single-input-secondary" />
                  </div>
                </form>
              </div>

              <div className="col-lg-3 col-md-4 mt-sm-30 element-wrap">
                <div className="single-element-widget">
                  <h3 className="mb-30">Switches</h3>
                  <Toggle wrap="primary-switch" id="default-switch" label="01. Sample Switch" />
                  <Toggle wrap="primary-switch" id="primary-switch" label="02. Primary Color Switch" defaultChecked />
                  <Toggle wrap="confirm-switch" id="confirm-switch" label="03. Confirm Color Switch" defaultChecked />
                </div>
                <div className="single-element-widget">
                  <h3 className="mb-30">Selectboxes</h3>
                  <div className="default-select">
                    <select defaultValue="English">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>Arabic</option>
                      <option>Portuguise</option>
                      <option>Bengali</option>
                    </select>
                  </div>
                </div>
                <div className="single-element-widget">
                  <h3 className="mb-30">Checkboxes</h3>
                  <Toggle wrap="primary-checkbox" id="default-checkbox" label="01. Sample Checkbox" />
                  <Toggle wrap="primary-checkbox" id="primary-checkbox" label="02. Primary Color Checkbox" defaultChecked />
                  <Toggle wrap="confirm-checkbox" id="confirm-checkbox" label="03. Confirm Color Checkbox" />
                  <Toggle wrap="disabled-checkbox" id="disabled-checkbox" label="04. Disabled Checkbox" disabled />
                  <Toggle wrap="disabled-checkbox" id="disabled-checkbox-active" label="05. Disabled Checkbox active" defaultChecked disabled />
                </div>
                <div className="single-element-widget">
                  <h3 className="mb-30">Radios</h3>
                  <Toggle wrap="primary-radio" id="default-radio" label="01. Sample radio" />
                  <Toggle wrap="primary-radio" id="primary-radio" label="02. Primary Color radio" defaultChecked />
                  <Toggle wrap="confirm-radio" id="confirm-radio" label="03. Confirm Color radio" defaultChecked />
                  <Toggle wrap="disabled-radio" id="disabled-radio" label="04. Disabled radio" disabled />
                  <Toggle wrap="disabled-radio" id="disabled-radio-active" label="05. Disabled radio active" defaultChecked disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function Toggle({ wrap, id, label, defaultChecked, disabled }) {
  return (
    <div className="switch-wrap d-flex justify-content-between">
      <p>{label}</p>
      <div className={wrap}>
        <input
          type="checkbox"
          id={id}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
}
