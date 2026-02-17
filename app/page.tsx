"use client";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>

    
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>Exsolvia</h2>

        <ul className={styles.menu}>
          <li>Product</li>
          <li>Solutions</li>
          <li>Company</li>
          <li>Contact</li>
        </ul>

        <button className={styles.primaryBtn}>
          Get Started
        </button>
      </nav>

     
      <section className={styles.hero}>

        <div className={styles.heroText}>
          <h1>
            One Platform. <br />
            Endless Growth.
          </h1>

          <p>
            Manage talent, content, and innovation
            with Exsolvia’s all-in-one workspace.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>
              Start Free
            </button>

            <button className={styles.secondaryBtn}>
              View Demo
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.mockup}>
            Exsolvia Dashboard
          </div>
        </div>

      </section>

      
      <section className={styles.features}>

        <h2>Built for Modern Teams</h2>

        <div className={styles.featureGrid}>

          <div className={styles.featureCard}>
            <h3>Smart Hiring</h3>
            <p>Track applications in one place.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>Content Engine</h3>
            <p>Manage blogs and media easily.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>Team Hub</h3>
            <p>Collaborate and grow faster.</p>
          </div>

        </div>

      </section>

      
      <section className={styles.cta}>
        <h2>Start Building Today</h2>
        <p>Join hundreds of teams using Exsolvia.</p>

        <button className={styles.primaryBtn}>
          Create Account
        </button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Exsolvia
      </footer>

    </main>
  );
}
