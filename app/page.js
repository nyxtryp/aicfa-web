import styles from "./page.module.css";

const cards = [
  ["01", "Market Intelligence", "Structured market representation across multiple timeframes and market conditions."],
  ["02", "Smart Money", "Market structure, liquidity, BOS, CHoCH, MSS, order blocks and fair value gaps."],
  ["03", "Autonomous Scanner", "Continuous market observation designed to find setups — or remain silent when evidence is insufficient."],
  ["04", "Historical Analysis", "Historical outcomes, validation and experience become part of the analytical process."]
];

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.container + " " + styles.nav}>
          <div className={styles.logo}>AICFA</div>
          <div className={styles.status}>Independent Research</div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>AI for Digital Financial Assets</div>
          <h1>AICFA</h1>
          <p className={styles.subtitle}>
            An independent intelligence system for structured analysis of digital financial markets.
          </p>
          <div className={styles.buttons}>
            <span className={styles.button + " " + styles.disabled}>Open AICFA — Coming Soon</span>
            <a className={styles.button} href="#system">Explore System</a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="system">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The System</div>
          <div className={styles.grid}>
            {cards.map(([number, title, text]) => (
              <article className={styles.card} key={number}>
                <div className={styles.cardNumber}>{number}</div>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.statement}>
          <h2>No signal is better than a fabricated one.</h2>
          <p>
            AICFA is being designed as an independent analytical system rather than a simple
            interface around another intelligence model.
            <br /><br />
            The system can return LONG, SHORT, WAIT or NO TRADE depending on the available
            evidence and market state.
          </p>
        </div>
      </section>

      <footer>
        <div className={styles.container + " " + styles.footerInner}>
          <span>AICFA</span>
          <span>Research &amp; Development · 2026</span>
        </div>
      </footer>
    </main>
  );
}
