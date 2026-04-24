export default function RhythmicAwarenessLandingPage() {
  const timeline = [
    {
      year: "2012",
      title: "Breathe Video Founded in New Orleans",
      body: "Breathe Video was founded by Benjamin Simmons with the objective of turning the video camera on his hometown of New Orleans and sharing whatever his community wanted to communicate.",
    },
    {
      year: "2018",
      title: "Animals + Bally",
      body: "While working on the fashion documentary Animals, Benjamin connected with the Swiss luxury company Bally. They jointly released the film on May 3, 2018 with the re-release of the shoe chronicled in the movie. This opened his eyes to the possibilities available through media and to the power of belief.",
    },
    {
      year: "2019",
      title: "CocoNola",
      body: "Worked with CocoNola to strengthen online sales through media creation and education, refining the connection between awareness, trust, and commerce.",
    },
    {
      year: "2020",
      title: "Teaching Media Consistency",
      body: "Benjamin began instructing friends on media creation and marketing consistency, helping others understand the discipline required to stay visible and coherent.",
    },
    {
      year: "2023",
      title: "PFRX",
      body: "Worked with PFRX to increase brand awareness through media creation and a stronger online presence.",
    },
    {
      year: "2024",
      title: "Marketing Ethics + Ancient Technology",
      body: "Began developing a philosophy of marketing ethics around ancient technology: storytelling. The question became: what responsibility does public messaging carry?",
    },
    {
      year: "2026",
      title: "Rhythmic Awareness Soft Launch",
      body: "Rhythmic Awareness soft launches to coincide with new business partnerships and a refined philosophy of marketing as responsible public art.",
    },
  ];

  const cards = [
    "Lead with Love.",
    "Trust in self.",
    "What we possess, controls us.",
    "Identity builds certainty.",
    "Breathe deeply and forgive.",
    "Harmony is homeostasis.",
    "Encourage, entertain and educate.",
    "Be compassionate within.",
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0a] text-[#f4efe6]">
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_28%)]" />

      <div className="relative z-10">
        <header className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <p className="text-xs uppercase tracking-[0.45em] text-white/45">
              Rhythmic Awareness
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/65">
              A Public Art Company
            </p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 py-28 md:py-40">
          <p className="text-xs uppercase tracking-[0.45em] text-white/40 mb-10">
            Website + Company Foundation
          </p>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight lowercase max-w-5xl">
            marketing is public art.
          </h1>

          <div className="mt-12 max-w-3xl space-y-6 text-xl md:text-2xl leading-relaxed text-white/70">
            <p>
              All marketing is public art. As such, its responsibility is to
              inform, educate, and orient the observer inwardly.
            </p>
            <p>
              A business must know, operate, and especially market in harmony
              with its identity.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-[260px_1fr] gap-16">
            <aside className="lg:sticky lg:top-10 self-start">
              <p className="text-xs uppercase tracking-[0.45em] text-white/40">
                Timeline
              </p>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
                The path into public art.
              </h2>
            </aside>

            <div className="space-y-14">
              {timeline.map((item) => (
                <article
                  key={item.year}
                  className="border-l border-white/20 pl-8"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                    {item.year}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <StatementSection
          label="Our Identity"
          statement="We are a successful business rooted in the social responsibility of public art, especially in messaging."
          body="We have clients all over the world and are helping to encourage the landscape of marketing to build a strong, healthy, internally harmonious public. We believe in encouragement and love and lead with these beliefs."
        />

        <section className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.45em] text-white/40">
              Why
            </p>

            <div className="mt-10 max-w-4xl space-y-7 text-lg md:text-xl leading-9 text-white/70">
              <p>
                In 2012, Breathe Video was founded by Benjamin Simmons. His
                objective was to turn the video camera on his hometown of New
                Orleans and share whatever his community wanted to communicate.
                This became a journey of discovering what he was made of and
                developing his craft.
              </p>

              <p>
                In 2017, while working on his fashion documentary Animals,
                Benjamin connected with the Swiss luxury company Bally. They
                jointly released his film on May 3, 2018 with the re-release of
                the shoe that his movie was chronicling. This opened his eyes to
                the possibilities available through media. With the success of
                the shoe sales, he also understood the power of belief.
              </p>

              <p>
                Over time, Benjamin realized that he could create media all day
                with his clients, but the success of this media hinged on
                awareness and interest. This led him to branding, marketing, and
                persuasion. Much of what was sold as persuasion seemed aligned
                with control, sleight of hand, or trickery.
              </p>

              <p>
                Businesses and marketers leading with fear and lack impress
                those feelings onto the general public. This felt irresponsible,
                unsustainable, and too much like con-artistry. What the world
                needs is to return to the original reason for storytelling and
                public art: to educate, entertain, and encourage a calm,
                productive, harmonious public.
              </p>

              <p>
                In 2026, Rhythmic Awareness was born. Now these principles of
                responsible public art can be learned, accessed, or applied
                through consulting and creative work for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
            <ConceptBlock
              label="Mindstate"
              title="The internal how."
              body="Not to be confused with physical process, the mindstate of your organization goes hand-in-hand with business identity. It is what your business believes in. How do you and your employees remain motivated? How do you generate the outcomes you desire and support the client in receiving theirs?"
            />

            <ConceptBlock
              label="Function"
              title="The physical how."
              body="Function is the physical activity of the business. It is how the business collects money, charges clients, operates day to day, and executes. It is all downstream from business mindstate and identity."
            />
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.45em] text-white/40">
              Mindfulness Cards
            </p>

            <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 border border-white/10">
              {cards.map((card) => (
                <div
                  key={card}
                  className="min-h-[220px] border border-white/10 p-8 flex items-end"
                >
                  <p className="font-serif text-3xl leading-tight">{card}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <p className="text-xs uppercase tracking-[0.45em] text-white/40">
              Contact
            </p>

            <a
              href="mailto:questions@rhythmicawareness.com"
              className="mt-8 block font-serif text-4xl md:text-6xl leading-tight hover:underline underline-offset-8"
            >
              questions@rhythmicawareness.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function StatementSection({ label, statement, body }) {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.45em] text-white/40">
          {label}
        </p>

        <p className="mt-10 max-w-5xl font-serif text-4xl md:text-6xl leading-tight text-white/90">
          {statement}
        </p>

        <p className="mt-10 max-w-3xl text-lg md:text-xl leading-9 text-white/65">
          {body}
        </p>
      </div>
    </section>
  );
}

function ConceptBlock({ label, title, body }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.45em] text-white/40">
        {label}
      </p>

      <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
        {title}
      </h2>

      <p className="mt-8 text-lg leading-8 text-white/65">{body}</p>
    </div>
  );
}
