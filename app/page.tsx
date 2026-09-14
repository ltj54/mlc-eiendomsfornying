const services = [
  ["Takvask og mosefjerning", "Rengjøring av tak og fjerning av mose."],
  ["Fasadevask", "Vask av fasader med smuss og grønske."],
  ["Takrenner", "Rens og vedlikehold av takrenner."],
  ["Terrasser", "Vask og vedlikehold av terrasser og uteplasser."],
  ["Belegningsstein", "Rengjøring og fornying av belegningsstein."],
  ["Klargjøring før salg", "Utvendig rengjøring før fotografering og visning."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#innhold">Hopp til innhold</a>
      <div className="preview-note">Forslag til nettside for MLC · Til gjennomgang</div>
      <header id="topp" className="site-header wrap">
        <a className="brand" href="#topp" aria-label="MLC Eiendomsfornying – til toppen">
          <strong>MLC</strong><span>Eiendomsfornying<small>Leszczynski</small></span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#tjenester">Tjenester</a><a href="#om">Om MLC</a><a href="#kontakt">Kontakt</a>
        </nav>
      </header>
      <main id="innhold">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">MLC Eiendomsfornying · Vestfold</p>
            <h1 id="hero-title">Vask og vedlikehold av tak, fasade og uteområder.</h1>
            <p className="intro">Vi hjelper deg med utvendig vedlikehold av eiendommen. Ta kontakt med Mariusz for å snakke om jobben du ønsker utført.</p>
            <div className="actions">
              <a className="button" href="tel:+4748610783">Ring 486 10 783</a>
              <a className="text-link" href="mailto:mkrenpro@gmail.com">Send en e-post</a>
            </div>
          </div>
          <aside className="contact-card" aria-label="Kontaktperson">
            <p className="eyebrow">Ta kontakt</p>
            <h2>Mariusz Leszczynski</h2>
            <p>MLC Eiendomsfornying</p>
            <a href="tel:+4748610783">486 10 783</a>
            <a href="mailto:mkrenpro@gmail.com">mkrenpro@gmail.com</a>
            <p className="area">Vi jobber primært i Vestfold.</p>
          </aside>
        </section>
        <section id="tjenester" className="section wrap" aria-labelledby="services-title">
          <h2 id="services-title">Dette kan vi hjelpe med</h2>
          <div className="services">
            {services.map(([title, description]) => (
              <article key={title}><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>
        <section id="om" className="about section wrap" aria-labelledby="about-title">
          <h2 id="about-title">Om MLC Eiendomsfornying</h2>
          <div>
            <p>MLC Eiendomsfornying Leszczynski drives av Mariusz Leszczynski. Vi tilbyr utvendig vask, vedlikehold og fornying av eiendom i Vestfold.</p>
            <p>Du kan kontakte Mariusz direkte på telefon eller e-post. Beskriv gjerne hva som skal gjøres, og hvor eiendommen ligger.</p>
          </div>
        </section>
        <section id="arbeid" className="work section wrap" aria-labelledby="photos-title">
          <div className="section-intro"><div><p className="eyebrow">FØR OG ETTER</p><h2 id="photos-title">Slik kan resultatene vises.</h2></div><p>Her legger vi inn Mariusz sine egne bilder fra utførte oppdrag. Hvert oppdrag får et enkelt før- og etterbilde.</p></div>
          <div className="project-gallery">
            <article className="project-case"><div className="case-label"><strong>Takvask</strong><span>Før / etter</span></div><div className="case-images"><div className="image-slot"><span>Før</span><p>Legg inn bilde</p></div><div className="image-slot after"><span>Etter</span><p>Legg inn bilde</p></div></div></article>
            <article className="project-case"><div className="case-label"><strong>Fasadevask</strong><span>Før / etter</span></div><div className="case-images"><div className="image-slot"><span>Før</span><p>Legg inn bilde</p></div><div className="image-slot after"><span>Etter</span><p>Legg inn bilde</p></div></div></article>
            <article className="project-case"><div className="case-label"><strong>Uteplass</strong><span>Før / etter</span></div><div className="case-images"><div className="image-slot"><span>Før</span><p>Legg inn bilde</p></div><div className="image-slot after"><span>Etter</span><p>Legg inn bilde</p></div></div></article>
          </div>
          <p className="editor-note">Bildeplassene byttes ut med egne arbeidsbilder når Mariusz sender dem.</p>
        </section>
        <section id="kontakt" className="contact">
          <div className="wrap contact-inner">
            <div><h2>Trenger du hjelp med eiendommen?</h2><p>Ring eller send en e-post. Legg gjerne ved bilder og en kort beskrivelse av jobben.</p></div>
            <div className="contact-links"><a href="tel:+4748610783">486 10 783</a><a href="mailto:mkrenpro@gmail.com">mkrenpro@gmail.com</a><span>Mariusz Leszczynski</span></div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div><strong>MLC Eiendomsfornying Leszczynski</strong><span>Org.nr. 938 381 631</span></div>
        <a href="#topp">Til toppen</a>
      </footer>
    </>
  );
}
