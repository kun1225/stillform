import type { Metadata } from "next";

import { ProductRender } from "./_components/product-render";

const principles = [
  {
    title: "Physical focus",
    body: "A timer that stays on the desk, not inside the same device that keeps asking for your attention.",
  },
  {
    title: "Quiet presence",
    body: "Brushed metal, soft underlight, and a display that reads clearly from across the room.",
  },
  {
    title: "Daily ritual",
    body: "Alarm clock and pomodoro timer, combined into one object you will want to keep in view.",
  },
];

const materials = [
  "Rounded aluminum body with a restrained silhouette",
  "High-contrast display tuned for quick reading",
  "Warm base light that leaves the desk feeling calm, not theatrical",
];

export const metadata: Metadata = {
  title: "Stillform | Focus, placed in the room",
  description:
    "A refined physical timer for focused work, designed to belong on the desk.",
};

export default function Home() {
  return (
    <main className="home-shell">
      <div className="home-ambient" />

      <section className="hero-section">
        <header className="site-header">
          <a href="#" className="wordmark">
            Stillform
          </a>
          <a href="#waitlist" className="nav-link">
            Join waitlist
          </a>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Alarm clock and pomodoro timer</p>
            <h1>Focus, placed in the room.</h1>
            <p className="hero-body">
              A physical timer for people who care how their desk feels. Calm
              to look at, precise to use, and quiet enough to stay in view all
              day.
            </p>

            <div className="hero-actions">
              <a href="#waitlist" className="button-primary">
                Join the waitlist
              </a>
              <a href="#details" className="button-secondary">
                See the object
              </a>
            </div>

            <p className="hero-note">
              Designed for remote workers, makers, and anyone building a desk
              worth staying at.
            </p>
          </div>

          <div className="hero-object">
            <ProductRender variant="hero" />
          </div>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">Why it belongs here</p>
          <h2 id="principles-title">Built for attention, not interruption.</h2>
        </div>

        <div className="principles-list">
          {principles.map((principle) => (
            <article key={principle.title} className="principle-item">
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="details"
        className="details-section"
        aria-labelledby="details-title"
      >
        <div className="details-copy">
          <p className="eyebrow">Material detail</p>
          <h2 id="details-title">
            The object is the interface.
          </h2>
          <p>
            Stillform is shaped like a piece of desktop equipment that has
            earned its place. The body feels composed, the face stays legible,
            and the warm light at the base keeps the device present without
            asking to be admired.
          </p>

          <ul className="detail-list">
            {materials.map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>
        </div>

        <div className="details-object">
          <ProductRender variant="detail" />
        </div>
      </section>

      <section className="ritual-section" aria-labelledby="ritual-title">
        <div className="ritual-panel">
          <p className="eyebrow">A calmer routine</p>
          <h2 id="ritual-title">Set the hour. Start the session. Leave the phone elsewhere.</h2>
        </div>
        <div className="ritual-copy">
          <p>
            In the morning, it behaves like a clock. During work, it becomes a
            focus timer. At night, it returns to the background. One device,
            one gesture, no app-switching ceremony.
          </p>
          <p>
            The point is not novelty. The point is that attention feels easier
            when the tool in front of you was designed for that single job.
          </p>
        </div>
      </section>

      <section id="waitlist" className="waitlist-section" aria-labelledby="waitlist-title">
        <div className="waitlist-copy">
          <p className="eyebrow">Early access</p>
          <h2 id="waitlist-title">Be first to know when Stillform is ready.</h2>
          <p>
            Join the waitlist for launch updates, release timing, and first
            access.
          </p>
        </div>

        <form className="waitlist-form">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <button type="button">Join waitlist</button>
        </form>
      </section>
    </main>
  );
}
