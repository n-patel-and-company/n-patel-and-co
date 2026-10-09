import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlywoodArt from "@/components/PlywoodArt";
import {
  LaminateIcon,
  PlywoodIcon,
  TimberIcon,
  VeneerIcon,
} from "@/components/Icons";

const STATS = [
  { value: "2000", label: "Established" },
  { value: "25+", label: "Years of service" },
  { value: "1500+", label: "Clients served" },
  { value: "4", label: "Core material lines" },
];

const PRODUCTS = [
  {
    title: "Plywood",
    icon: PlywoodIcon,
    body: "Cross-laminated panels that hold their shape across cabinetry, wardrobes, partitions and shop fittings — stocked across the thicknesses a working site actually asks for.",
    meta: "Panels · Boards",
  },
  {
    title: "Veneer",
    icon: VeneerIcon,
    body: "Thin slices of natural timber that put real grain on a finished surface. Matched sheets so a run of panels reads as one continuous piece.",
    meta: "Natural grain",
  },
  {
    title: "Laminate",
    icon: LaminateIcon,
    body: "Hard-wearing decorative surfacing in a wide spread of shades, patterns and finishes — the practical choice where a surface has to take daily use.",
    meta: "Decorative surfaces",
  },
  {
    title: "Timber",
    icon: TimberIcon,
    body: "Seasoned sections for frames, beadings and structural members: the groundwork beneath good joinery, selected for straightness and consistency.",
    meta: "Sections · Framing",
  },
];

const TIMELINE = [
  {
    year: "9 August 2000",
    text: "N. Patel & Co. opens its doors in Ahmedabad as a dedicated furniture material supplier.",
  },
  {
    year: "The years after",
    text: "The range widens from plywood into veneer, laminate and timber, so a single order can cover a whole job.",
  },
  {
    year: "1500+ clients later",
    text: "Carpenters, contractors, furniture makers and interior studios return order after order.",
  },
  {
    year: "Today",
    text: "Twenty-five years in, the business is still run on the same footing: honest grades, steady stock, straight dealing.",
  },
];

const REASONS = [
  {
    num: "01",
    title: "Twenty-five years of judgement",
    text: "A quarter-century spent handling these materials is the difference between selling a board and knowing which board suits the job.",
  },
  {
    num: "02",
    title: "One stop for the whole job",
    text: "Plywood, veneer, laminate and timber under one roof — no chasing four suppliers to finish a single piece of work.",
  },
  {
    num: "03",
    title: "Grades you can plan around",
    text: "What arrives matches what was promised. Consistency is what lets a workshop quote a job with confidence.",
  },
  {
    num: "04",
    title: "Relationships, not transactions",
    text: "More than fifteen hundred clients have kept coming back. That record was built one dependable order at a time.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="shell">
            <div className="hero__grid">
              <div>
                <span className="eyebrow">Since 2000 · Ahmedabad</span>
                <h1 className="hero__title">
                  Furniture material,
                  <br />
                  <em>chosen well.</em>
                </h1>
                <p className="hero__lede">
                  N. Patel &amp; Co. supplies plywood, veneer, laminate and
                  timber to the carpenters, contractors and interior studios who
                  build with them every day. Twenty-five years of steady grades
                  and straight dealing.
                </p>

                <div className="hero__cta">
                  <a className="btn btn--primary" href="#products">
                    See our range
                  </a>
                  <a className="btn btn--ghost" href="#about">
                    About the company
                  </a>
                </div>

                <ul className="hero__tags">
                  {PRODUCTS.map((p) => (
                    <li key={p.title} className="chip">
                      {p.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero__art">
                <PlywoodArt />
                <p className="hero__art-caption">
                  Layer by layer, the way good material is made
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Stats ---------- */}
        <section className="shell" aria-label="Company at a glance">
          <ul className="stats">
            {STATS.map((s) => (
              <li className="stat" key={s.label}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Products ---------- */}
        <section className="section" id="products">
          <div className="shell">
            <div className="section-head">
              <span className="eyebrow">What we supply</span>
              <h2 className="section-title">
                Four materials, one dependable source
              </h2>
              <p className="section-lede">
                Everything a furniture job needs, from the panel underneath to
                the surface on top — held in stock and sold by people who know
                the difference between the grades.
              </p>
            </div>

            <div className="cards">
              {PRODUCTS.map(({ title, body, meta, icon: Icon }) => (
                <article className="card" key={title}>
                  <div className="card__icon">
                    <Icon />
                  </div>
                  <h3 className="card__title">{title}</h3>
                  <p className="card__body">{body}</p>
                  <p className="card__meta">{meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section className="section section--alt" id="about">
          <div className="shell">
            <div className="about">
              <div>
                <span className="eyebrow">Our story</span>
                <h2 className="section-title">
                  A quarter-century in furniture material
                </h2>
                <div className="about__body section-lede">
                  <p>
                    N. Patel &amp; Co. was founded on 9 August 2000 in
                    Ahmedabad, Gujarat. The idea then was a simple one, and it
                    has not changed since: give the people who build furniture a
                    supplier they do not have to think twice about.
                  </p>
                  <p>
                    What began with plywood grew into a full material range —
                    veneer, laminate and timber alongside it — so a workshop can
                    put together an entire job from a single order rather than
                    piecing it out across the market.
                  </p>
                  <p>
                    Twenty-five years and more than fifteen hundred clients
                    later, the business still runs the way it was set up to run:
                    a partnership-led firm where the grade quoted is the grade
                    delivered.
                  </p>
                </div>
              </div>

              <div className="timeline">
                {TIMELINE.map((item) => (
                  <div className="timeline__item" key={item.year}>
                    <span className="timeline__dot" aria-hidden="true" />
                    <div>
                      <p className="timeline__year">{item.year}</p>
                      <p className="timeline__text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Why us ---------- */}
        <section className="section" id="why">
          <div className="shell">
            <div className="section-head">
              <span className="eyebrow">Why N. Patel &amp; Co.</span>
              <h2 className="section-title">
                What twenty-five years is actually worth
              </h2>
            </div>

            <div className="why">
              {REASONS.map((r) => (
                <div className="why__item" key={r.num}>
                  <span className="why__num">{r.num}</span>
                  <h3 className="why__title">{r.title}</h3>
                  <p className="why__text">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Closing band ---------- */}
        <section className="shell" style={{ paddingBottom: "clamp(4rem, 9vw, 7rem)" }}>
          <div className="band">
            <h2>Built on material you can trust</h2>
            <p>
              Plywood, veneer, laminate and timber — supplied to Ahmedabad&rsquo;s
              carpenters, contractors and interior studios since 2000.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
