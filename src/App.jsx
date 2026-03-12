import "./index.css";

export default function App() {
  const skills = [
    { name: "Windows / Linux", level: 82 },
    { name: "Réseau / VLAN / Routage", level: 86 },
    { name: "Cybersécurité / Pare-feu", level: 74 },
    { name: "GLPI / Centreon / Outils", level: 80 },
  ];

  const projects = [
    {
      title: "Supervision Centreon",
      tags: ["Debian", "Monitoring", "SISR"],
      desc: "Déploiement d'une solution de supervision pour surveiller l'état et les performances des services.",
    },
    {
      title: "VPN SSL pfSense",
      tags: ["VPN", "Sécurité", "Accès distant"],
      desc: "Configuration d'un accès distant sécurisé pour les utilisateurs via pfSense.",
    },
    {
      title: "Inventaire GLPI",
      tags: ["Parc", "Support", "Gestion"],
      desc: "Mise en place d'un inventaire matériel et logiciel pour améliorer le suivi du parc informatique.",
    },
    {
      title: "Routage Inter-VLAN",
      tags: ["Cisco", "VLAN", "Packet Tracer"],
      desc: "Segmentation réseau et communication entre plusieurs VLAN avec routage inter-VLAN.",
    },
  ];

  return (
    <div className="page">
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">
            Antonin <span>Gargaud</span>
          </div>
          <nav className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#veille" className="hover:text-white">Veille</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero" id="accueil">
          <div>
            <div className="badge">Portfolio étudiant</div>
            <h1>
              Bonjour, je suis <span>Antonin</span>
            </h1>
            <p>
              Étudiant en BTS SIO option SISR, en alternance à <strong>La Périgourdine</strong>.
              Je m'intéresse à l'administration systèmes et réseaux, à la cybersécurité et à la supervision.
            </p>
            <div className="hero-buttons">
              <a href="#projets" className="btn btn-primary">Voir mes projets</a>
              <a href="#contact" className="btn btn-secondary">Me contacter</a>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-inner">
              <div className="profile-top">
                <img src="/antonin.jpg" alt="Antonin Gargaud" className="avatar" />
                <div>
                  <div className="profile-name">Antonin Gargaud</div>
                  <div className="profile-location">Limoges / Dordogne</div>
                </div>
              </div>

              <div className="info-boxes">
                <div className="info-box">🎓 BTS SIO — SISR</div>
                <div className="info-box">🏢 Alternance — La Périgourdine</div>
                <div className="info-box">🛠️ Réseau • Systèmes • Support • Sécurité</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="apropos">
          <div className="grid-2">
            <div className="card">
              <h3>À propos</h3>
              <p>
                Je suis étudiant au lycée Suzanne Valadon en BTS Services Informatiques aux Organisations.
                Dans le cadre de mon alternance, je participe à des missions de maintenance, d'installation,
                d'assistance utilisateur et de mise en place de solutions techniques.
              </p>
            </div>

            <div className="card">
              <h3>Objectif</h3>
              <p>
                Construire un portfolio propre, moderne et publiable sur le web, capable de présenter mes
                compétences, mes projets et mes documents BTS de manière claire et professionnelle.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="competences">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">Un aperçu visuel de tes domaines techniques.</p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span className="muted">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projets">
          <h2 className="section-title">Projets</h2>
          <p className="section-subtitle">
            Chaque projet ouvrira une fiche détaillée ou un PDF expliquant le contexte, les outils utilisés et les étapes techniques.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual">
  <img
    src={`/images/${project.title === "Supervision Centreon"
      ? "centreon.png"
      : project.title === "VPN SSL pfSense"
      ? "vpn.png"
      : project.title === "Inventaire GLPI"
      ? "glpi.png"
      : "intervlan.png"}`}
    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
  />
</div>
                <h3 className="project-title">{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <a
  href={`/projets/${
    project.title === "Supervision Centreon"
      ? "centreon.pdf"
      : project.title === "VPN SSL pfSense"
      ? "vpn.pdf"
      : project.title === "Inventaire GLPI"
      ? "glpi.pdf"
      : "intervlan.pdf"
  }`}
  target="_blank"
  className="project-btn"
>
  Voir le projet
</a>
              </article>
            ))}
          </div>
        </section>
<section id="veille" className="mx-auto max-w-6xl px-6 py-16">
  <div className="mb-8">
    <h2 className="text-3xl font-bold md:text-4xl">Veille technologique</h2>
    <p className="mt-3 text-slate-400">
      Dans le cadre de mon BTS SIO, je réalise une veille technologique afin de suivre
      les évolutions du domaine des systèmes, des réseaux et de la cybersécurité.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">Sujet de veille</h3>
      <p className="mt-3 text-slate-300 leading-7">
        Ma veille technologique porte sur l’évolution des solutions de
        cybersécurité et de supervision dans les infrastructures informatiques,
        notamment les outils de monitoring, les pare-feux et les solutions
        de protection des réseaux.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">Outils utilisés</h3>
      <ul className="mt-3 space-y-2 text-slate-300">
        <li>• Sites spécialisés en informatique</li>
        <li>• Articles et blogs techniques</li>
        <li>• Chaînes YouTube technologiques</li>
        <li>• Plateformes d’actualités IT</li>
      </ul>
    </div>

  </div>

  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-xl font-semibold">Exemples de sujets suivis</h3>
    <ul className="mt-3 space-y-2 text-slate-300">
      <li>• Les nouvelles menaces en cybersécurité</li>
      <li>• Les évolutions des pare-feux et solutions de sécurité réseau</li>
      <li>• Les outils de supervision comme Centreon</li>
      <li>• Les bonnes pratiques d’administration système et réseau</li>
    </ul>
  </div>
<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
  <h3 className="text-xl font-semibold">Sources utilisées</h3>

  <ul className="mt-3 space-y-2 text-slate-300">

    <li>
      • <a href="https://thehackernews.com" target="_blank" className="text-cyan-400 hover:underline">
      The Hacker News
      </a>
    </li>

    <li>
      • <a href="https://www.zdnet.fr" target="_blank" className="text-cyan-400 hover:underline">
      ZDNet
      </a>
    </li>

    <li>
      • <a href="https://blogs.cisco.com" target="_blank" className="text-cyan-400 hover:underline">
      Cisco Blog
      </a>
    </li>

    <li>
      • <a href="https://www.it-connect.fr" target="_blank" className="text-cyan-400 hover:underline">
      IT-Connect
      </a>
    </li>

    <li>
      • <a href="https://www.youtube.com/@NetworkChuck" target="_blank" className="text-cyan-400 hover:underline">
      YouTube – NetworkChuck
      </a>
    </li>

  </ul>
</div>
</section>
        <section className="section" id="contact">
          <div className="card">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Tu peux me contacter pour toute question, collaboration ou opportunité professionnelle.
            </p>

            <div className="contact-grid">
              <div className="contact-box">
                <div className="muted">Formation</div>
                <div>BTS SIO • option SISR</div>
              </div>
              <div className="contact-box">
                <div className="muted">Entreprise</div>
                <div>La Périgourdine</div>
              </div>
              <div className="contact-box">
                <div className="muted">Email</div>
                <div>gargaudantonin@gmail.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}