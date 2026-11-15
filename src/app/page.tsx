import Image from "next/image";
import CopyButton from "@/components/CopyButton";
import ProjectRegister, { ProjectLink, StatusPill } from "@/components/ProjectRegister";
import { capabilities, cvFile, employerWork, experience, openToRoles, profile, proof, recognition, showCvDownload, skills } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";
import portrait from "../../public/portrait.jpg";

const bare = (url: string) => url.replace(/^https?:\/\//, "");

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top">
            {profile.name}
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a className="sec" href="#about">What I do</a>
            <a className="sec" href="#projects">Projects</a>
            <a className="sec" href="#work">Client work</a>
            <a className="sec" href="#experience">Experience</a>
            <a className="sec" href="#skills">Skills</a>
            <a className="btn sm primary" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <p className="wrap title" data-testid="title">
            {profile.titleLines.map((line) => (
              <span className="line" key={line[0]}>
                {line.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <i>|</i>}
                    {t}
                  </span>
                ))}
              </span>
            ))}
          </p>
          <div className="wrap hero-grid">
            <div>
              {openToRoles && (
                <span className="avail" data-testid="open-to-roles">
                  <i />
                  Open to new roles
                </span>
              )}
              <h1>{profile.headline}</h1>
              <p className="lede">{profile.summary}</p>
              <div className="cta">
                <a className="btn primary" href="#projects">See my projects</a>
                <a className="btn" href={profile.github} target="_blank" rel="noopener">GitHub</a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
                {showCvDownload && (
                  <a className="btn" href={`/cv/${cvFile}`} download data-testid="cv-download">
                    Download CV
                  </a>
                )}
              </div>
            </div>
            <figure className="portrait">
              <Image src={portrait} alt={`Portrait of ${profile.name}`} priority sizes="(max-width: 820px) 220px, 320px" />
              <figcaption>
                <span>{profile.location}</span>
                <span>{profile.portraitCaption}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="proof">
          <div className="wrap">
            {proof.map((p) => (
              <div key={p.figure}>
                <b>{p.figure}</b>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="block" id="about">
          <div className="wrap">
            <div className="head">
              <span className="label">What I do</span>
              <h2>Systems where a mistake costs real money.</h2>
              <p>
                Most of my career has been in software that takes payments, posts to ledgers or collects government revenue. That shapes how I
                work: every write happens once, every action leaves a record, and nobody approves their own work.
              </p>
            </div>
            <div className="does">
              {capabilities.map((c) => (
                <div key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="projects">
          <div className="wrap">
            <div className="head">
              <span className="label">Independent projects</span>
              <h2>Products I designed, built and run myself.</h2>
              <p>
                These are my own work, from the first design document to the production deployment. Most of the source is private because the
                products are commercial, and I am happy to walk through the architecture and code of any of them in an interview.
              </p>
            </div>
            <div className="feat">
              {featuredProjects.map((p) => (
                <article className="card" key={p.slug}>
                  <div className="card-top">
                    <div>
                      <h3>{p.name}</h3>
                      <div className="tag">{p.tagline}</div>
                    </div>
                    <StatusPill project={p} />
                  </div>
                  <p>{p.blurb}</p>
                  <ul>
                    {p.decisions.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="stack">{p.stack}</div>
                  <div className="card-foot">
                    <span>{p.role.split(". ")[0].replace(/\.$/, "")}.</span>
                    <ProjectLink project={p} />
                  </div>
                </article>
              ))}
            </div>
            <ProjectRegister projects={projects} />
          </div>
        </section>

        <section className="block" id="work">
          <div className="wrap">
            <div className="head">
              <span className="label">Client and employer work</span>
              <h2>Platforms I built or led in employment.</h2>
              <p>
                This code belongs to the organisations I worked for, so it is not on my GitHub. Several of the platforms are public and still
                running.
              </p>
            </div>
            <div className="work">
              {employerWork.map((w) => (
                <article key={w.title}>
                  <span className="at">{w.employer}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                  {w.url && (
                    <a href={w.url} target="_blank" rel="noopener">
                      {bare(w.url)} ↗<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="experience">
          <div className="wrap">
            <div className="head">
              <span className="label">Experience</span>
              <h2>Fifteen years in IT, from support officer to technical lead.</h2>
            </div>
            <div className="roles">
              {experience.map((e) => (
                <div className="role-row" key={e.period}>
                  <time>{e.period}</time>
                  <div>
                    <h3>{e.title}</h3>
                    <div className="org">{e.employer}</div>
                    <p>{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="skills">
          <div className="wrap">
            <div className="head">
              <span className="label">Skills</span>
              <h2>The tools I reach for.</h2>
            </div>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="block">
          <div className="wrap">
            <div className="head">
              <span className="label">Education and recognition</span>
            </div>
            <div className="edu">
              {recognition.map((r) => (
                <div key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <div>
              <h2>{openToRoles ? profile.contact.openHeading : profile.contact.heading}</h2>
              <p>{openToRoles ? profile.contact.openText : profile.contact.text}</p>
            </div>
            <div className="ways">
              <div className="way">
                <div>
                  <span>Email</span>
                  <b>{profile.email}</b>
                </div>
                <CopyButton text={profile.email} />
              </div>
              <div className="way">
                <div>
                  <span>LinkedIn</span>
                  <b>{bare(profile.linkedin)}</b>
                </div>
                <a href={profile.linkedin} target="_blank" rel="noopener">Open ↗</a>
              </div>
              <div className="way">
                <div>
                  <span>GitHub</span>
                  <b>{bare(profile.github)}</b>
                </div>
                <a href={profile.github} target="_blank" rel="noopener">Open ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.locationLong}</span>
        </div>
      </footer>
    </>
  );
}
