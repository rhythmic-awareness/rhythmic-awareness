export default function RhythmicAwarenessLandingPage() {
  const timeline = [
    {
      year: '2012',
      title: 'Breathe Video Founded in New Orleans',
      body:
        'Breathe Video was founded by Benjamin Simmons with the objective of turning the video camera on his hometown of New Orleans and sharing whatever his community wanted to communicate.',
    },
    {
      year: '2018',
      title: 'Animals + Bally',
      body:
        'While working on the fashion documentary Animals, Benjamin connected with the Swiss luxury company Bally. They jointly released the film on May 3, 2018 with the re-release of the shoe chronicled in the movie. This opened his eyes to the possibilities available through media and to the power of belief.',
    },
    {
      year: '2019',
      title: 'CocoNola',
      body:
        'Worked with CocoNola to strengthen online sales through media creation and education, refining the connection between awareness, trust, and commerce.',
    },
    {
      year: '2020',
      title: 'Teaching Media Consistency',
      body:
        'Benjamin began instructing friends on media creation and marketing consistency, helping others understand the discipline required to stay visible and coherent.',
    },
    {
      year: '2023',
      title: 'PFRX',
      body:
        'Worked with PFRX to increase brand awareness through media creation and a stronger online presence.',
    },
    {
      year: '2024',
      title: 'Marketing Ethics + Ancient Technology',
      body:
        'Began developing a philosophy of marketing ethics around ancient technology: storytelling. The question became: what responsibility does public messaging carry?',
    },
    {
      year: '2026',
      title: 'Rhythmic Awareness Soft Launch',
      body:
        'Rhythmic Awareness soft launches to coincide with new business partnerships and a refined philosophy of marketing as responsible public art.',
    },
  ];


  const titleCards = [
    'Lead with Love.',
    'Trust in self.',
    'What we possess, controls us.',
    'Identity builds certainty.',
    'Breathe deeply and forgive.',
    'Harmony is homeostasis.',
    'Encourage, entertain and educate.',
    'Be compassionate within.',
  ];


  return (
    <div className="min-h-screen bg-[#0b0b0a] text-[#f4efe6] relative overflow-hidden selection:bg-[#f4efe6] selection:text-black">
      <BackgroundLayer />


      <div className="relative z-10">
        <header className="border-b border-[#f4efe6]/10">
          <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-2">
            <p className="text-xs tracking-[0.45em] uppercase text-[#f4efe6]/55">Rhythmic Awareness</p>
            <p className="text-sm tracking-[0.2em] uppercase text-[#f4efe6]/70">A Public Art Company</p>
          </div>
        </header>


        <main>
          <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.45em] uppercase text-[#f4efe6]/45 mb-8">Website + Company Foundation</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[0.95]">
                marketing is public art.
              </h1>
              <div className="mt-10 max-w-3xl space-y-6 text-lg md:text-xl leading-9 text-[#f4efe6]/75">
                <p>
                  All marketing is public art. As such, its responsibility is to inform, educate, and orient the observer inwardly.
                </p>
                <p>
                  A business must know, operate, and especially market in harmony with its identity.
                </p>
              </div>
            </div>
          </section>


          <section className="mx-auto max-w-6xl px-6 py-20 border-t border-[#f4efe6]/10">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12">
              <aside className="lg:sticky lg:top-10 self-start">
                <p className="text-xs tracking-[0.45em] uppercase text-[#f4efe6]/45">Timeline</p>
                <h2 className="mt-5 text-3xl md:text-4xl font-serif font-normal leading-tight">The path into public art.</h2>
              </aside>


              <div className="relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#f4efe6]/15" />
                <div className="space-y-12">
                  {timeline.map((item) => (
                    <article key={item.year} className="relative pl-10">
                      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#f4efe6]/70 ring-8 ring-[#0b0b0a]" />
                      <p className="text-sm tracking-[0.3em] uppercase text-[#f4efe6]/45">{item.year}</p>
                      <h3 className="mt-3 text-2xl md:text-3xl font-serif font-normal text-[#f4efe6]">{item.title}</h3>
                      <p className="mt-4 max-w-3xl text-base md:text-lg leading-8 text-[#f4efe6]/70">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>


          <section className="mx-auto max-w-6xl px-6 py-20 border-t border-[#f4efe6]/10">
            <SectionLabel label="Our Identity" />
            <p className="mt-8 max-w-4xl text-2xl md:text-4xl font-serif font-normal leading-[1.25] text-[#f4efe6]/90">
              We are a successful business rooted in the social responsibility of public art, especially in messaging.
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f4efe6]/70">
              We have clients all over the world and are helping to encourage the landscape of marketing to build a strong, healthy, internally harmonious public. We believe in encouragement and love and lead with these beliefs.
            </p>
          </section>


          <section className="mx-auto max-w-6xl px-6 py-20 border-t border-[#f4efe6]/10">
            <SectionLabel label="Why" />
            <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-[#f4efe6]/72">
              <p>
                In 2012, Breathe Video was founded by Benjamin Simmons. His objective was to turn the video camera on his hometown of New Orleans and share whatever his community wanted to communicate. This became a journey of discovering what he was made of and developing his craft.
              </p>
              <p>
                In 2017, while working on his fashion documentary Animals, Benjamin connected with the Swiss luxury company Bally. They jointly released his film on May 3, 2018 with the re-release of the shoe that his movie was chronicling. This opened his eyes to the possibilities available through media. With the success of the shoe sales, he also understood the power of belief.
              </p>
              <p>
                Over time, Benjamin realized that he could create media all day with his clients, but the success of this media hinged on awareness and interest. This led him to branding, marketing, and persuasion. Much of what was sold as persuasion seemed aligned with control, sleight of hand, or trickery.
              </p>
              <p>
                Businesses and marketers leading with fear and lack impress those feelings onto the general public. This felt irresponsible, unsustainable, and too much like con-artistry. What the world needs is to return to the original reason for storytelling and public art: to educate, entertain, and encourage a calm, productive, harmonious public.
              </p>
              <p>
                In 2026, Rhythmic Awareness was born. Now these principles of responsible public art can be learned, accessed, or applied through consulting and creative work for your business.
              </p>
            </div>
          </section>


          <section className="mx-auto max-w-6xl px-6 py-20 border-t border-[#f4efe6]/10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <SectionLabel label="Mindstate" />
                <h2 className="mt-6 text-3xl md:text-4xl font-serif font-normal">The internal how.</h2>
                <p className="mt-6 text-lg leading-8 text-[#f4efe6]/70">
                  Not to be confused with physical process, the mindstate of your organization goes hand-in-hand with business identity. It is what your business believes in. How do you and your employees remain motivated? How do you generate the outcomes you desire and support the client in receiving theirs?
                </p>
              </div>
              <div>
                <SectionLabel label="Function" />
                <h2 className="mt-6 text-3xl md:text-4xl font-serif font-normal">The physical how.</h2>
                <p className="mt-6 text-lg leading-8 text-[#f4efe6]/70">
                  Function is the physical activity of the business. It is how the business collects money, charges clients, operates day to day, and executes. It is all downstream from business mindstate and identity.
                </p>
              </div>
            </div>
          </section>


          <section className="mx-auto max-w-6xl px-6 py-20 border-t border-[#f4efe6]/10">
            <SectionLabel label="Mindfulness Cards" />
            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-[#f4efe6]/10 border border-[#f4efe6]/10">
              {titleCards.map((card) => (
                <div key={card} className="min-h-[220px] bg-[#0b0b0a] p-8 flex items-end">
                  <p className="text-2xl md:text-3xl font-serif font-normal leading-tight">{card}</p>
                </div>
              ))}
            </div>
          </section>


          <section className="mx-auto max-w-6xl px-6 py-24 border-t border-[#f4efe6]/10">
            <SectionLabel label="Contact" />
            <h2 className="mt-6 text-4xl md:text-6xl font-serif font-normal tracking-tight">questions@rhythmicawareness.com</h2>
          </section>
        </main>
      </div>
    </div>
  );
}


function SectionLabel({ label }) {
  return <p className="text-xs tracking-[0.45em] uppercase text-[#f4efe6]/45">{label}</p>;
}


function BackgroundLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.045),transparent_30%)]" />
      <div className="absolute top-[18%] right-[-12%] h-[420px] w-[420px] rounded-full border border-[#f4efe6]/10" />
      <div className="absolute bottom-[10%] left-[-10%] h-[520px] w-[520px] rounded-full border border-[#f4efe6]/10" />
    </div>
  );
}