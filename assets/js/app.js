

const root = document.getElementById("view-root");
const crumbEl = document.getElementById("breadcrumb");

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function findSection(kind) {
  return SITE_DATA[kind] || [];
}

function findTerm(kind, termSlug) {
  return findSection(kind).find(t => t.termSlug === termSlug);
}

function findCourse(kind, termSlug, courseSlug) {
  const term = findTerm(kind, termSlug);
  if (!term) return null;
  return term.courses.find(c => c.slug === courseSlug);
}

function setBreadcrumb(parts) {
  crumbEl.innerHTML = parts
    .map((p, i) => {
      if (i === parts.length - 1) {
        return `<span class="crumb-current">${esc(p.label)}</span>`;
      }
      return `<a href="${p.href}">${esc(p.label)}</a><span class="crumb-sep">/</span>`;
    })
    .join("");
}

function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

function linkLabel(label, url) {
  return isExternal(url) ? `${label} <span class="ext-mark" aria-hidden="true">&#8599;</span>` : label;
}

function card(href, title, sub, tone) {
  return `
    <a class="tile tile--${tone}" href="${href}">
      <span class="tile-title">${esc(title)}</span>
      ${sub ? `<span class="tile-sub">${esc(sub)}</span>` : ""}
      <span class="tile-arrow" aria-hidden="true">&rarr;</span>
    </a>`;
}

function emptyState(message) {
  return `<div class="empty-state"><p>${esc(message)}</p></div>`;
}


function renderHome() {
  setBreadcrumb([{ label: "Home" }]);
  root.innerHTML = `
    <section class="hero">
      <p class="hero-eyebrow">Class Resource</p>
      <h1 class="hero-title">Find any lecture or textbook easily.</h1>
      <p class="hero-lede">Everything the class has shared — organized by term and course — kept in one place so no one has to dig through chats again.</p>
    </section>
    <div class="tile-grid tile-grid--main">
      ${card("#/lectures", "Lecture Sheets", "Slides & notes, by term and course", "lecture")}
      ${card("#/books", "Reference Books", "Course textbooks and readings", "book")}
    </div>
  `;
}

function renderTermList(kind) {
  const label = kind === "lectures" ? "Lecture Sheets" : "Reference Books";
  const tone = kind === "lectures" ? "lecture" : "book";
  setBreadcrumb([{ label: "Home", href: "#/" }, { label }]);
  const terms = findSection(kind);
  if (!terms.length) {
    root.innerHTML = emptyState("Nothing has been added here yet.");
    return;
  }
  root.innerHTML = `
    <h2 class="section-heading">${esc(label)} &mdash; choose a term</h2>
    <div class="tile-grid">
      ${terms
        .map(t =>
          card(
            `#/${kind}/${t.termSlug}`,
            t.term,
            `${t.courses.length} course${t.courses.length === 1 ? "" : "s"}`,
            tone
          )
        )
        .join("")}
    </div>
  `;
}

function renderCourseList(kind, termSlug) {
  const label = kind === "lectures" ? "Lecture Sheets" : "Reference Books";
  const tone = kind === "lectures" ? "lecture" : "book";
  const term = findTerm(kind, termSlug);
  if (!term) {
    root.innerHTML = emptyState("That term couldn't be found.");
    return;
  }
  setBreadcrumb([
    { label: "Home", href: "#/" },
    { label, href: `#/${kind}` },
    { label: term.term }
  ]);
  if (!term.courses.length) {
    root.innerHTML = emptyState("No courses added for this term yet.");
    return;
  }
  root.innerHTML = `
    <h2 class="section-heading">${esc(term.term)} &mdash; choose a course</h2>
    <div class="tile-grid">
      ${term.courses
        .map(c => {
          const count = kind === "lectures" ? c.lectures.length : c.books.length;
          const noun = kind === "lectures" ? "lecture" : "book";
          const bits = [];
          if (c.code) bits.push(c.code);
          if (c.type) bits.push(c.type === "sessional" ? "Sessional" : "Theory");
          bits.push(`${count} ${noun}${count === 1 ? "" : "s"}`);
          return card(`#/${kind}/${termSlug}/${c.slug}`, c.name, bits.join(" \u00b7 "), tone);
        })
        .join("")}
    </div>
  `;
}

function renderLectures(termSlug, courseSlug) {
  const term = findTerm("lectures", termSlug);
  const course = findCourse("lectures", termSlug, courseSlug);
  if (!term || !course) {
    root.innerHTML = emptyState("That course couldn't be found.");
    return;
  }
  setBreadcrumb([
    { label: "Home", href: "#/" },
    { label: "Lecture Sheets", href: "#/lectures" },
    { label: term.term, href: `#/lectures/${termSlug}` },
    { label: course.name }
  ]);

  if (!course.lectures.length) {
    root.innerHTML = emptyState("No lectures posted for this course yet.");
    return;
  }

  const rows = [...course.lectures]
    .sort((a, b) => a.number - b.number)
    .map(lec => {
      const noteLink = lec.notes
        ? `<a class="pill pill--notes" href="${lec.notes}" target="_blank" rel="noopener">${linkLabel("Student Note", lec.notes)}</a>`
        : `<span class="pill pill--unavailable">No Note</span>`;
      return `
        <li class="catalog-row">
          <span class="catalog-tab">${String(lec.number).padStart(2, "0")}</span>
          <div class="catalog-body">
            <div class="catalog-heading">
              <span class="catalog-title">${esc(lec.title)}</span>
              <span class="catalog-date">${formatDate(lec.date)}</span>
            </div>
            <div class="catalog-actions">
              <a class="pill pill--slide" href="${lec.slide}" target="_blank" rel="noopener">${linkLabel("Lecture Slide", lec.slide)}</a>
              ${noteLink}
            </div>
          </div>
        </li>`;
    })
    .join("");

  root.innerHTML = `
    <h2 class="section-heading">${esc(course.name)}</h2>
    <ul class="catalog-list">${rows}</ul>
  `;
}

function renderBooks(termSlug, courseSlug) {
  const term = findTerm("books", termSlug);
  const course = findCourse("books", termSlug, courseSlug);
  if (!term || !course) {
    root.innerHTML = emptyState("That course couldn't be found.");
    return;
  }
  setBreadcrumb([
    { label: "Home", href: "#/" },
    { label: "Reference Books", href: "#/books" },
    { label: term.term, href: `#/books/${termSlug}` },
    { label: course.name }
  ]);

  if (!course.books.length) {
    root.innerHTML = emptyState("No reference books added for this course yet.");
    return;
  }

  const rows = course.books
    .map(
      (b, i) => `
        <li class="catalog-row">
          <span class="catalog-tab catalog-tab--book">${String(i + 1).padStart(2, "0")}</span>
          <div class="catalog-body">
            <div class="catalog-heading">
              <span class="catalog-title">${esc(b.title)}</span>
              <span class="catalog-date">${esc(b.author)}</span>
            </div>
            <div class="catalog-actions">
              <a class="pill pill--slide" href="${b.file}" target="_blank" rel="noopener">${linkLabel("Open Book", b.file)}</a>
            </div>
          </div>
        </li>`
    )
    .join("");

  root.innerHTML = `
    <h2 class="section-heading">${esc(course.name)}</h2>
    <ul class="catalog-list">${rows}</ul>
  `;
}

function render404() {
  setBreadcrumb([{ label: "Home", href: "#/" }, { label: "Not found" }]);
  root.innerHTML = emptyState("That page doesn't exist.");
}


function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);

  if (parts.length === 0) return renderHome();

  const [kind, termSlug, courseSlug] = parts;
  if (kind !== "lectures" && kind !== "books") return render404();

  if (!termSlug) return renderTermList(kind);
  if (!courseSlug) return renderCourseList(kind, termSlug);

  return kind === "lectures"
    ? renderLectures(termSlug, courseSlug)
    : renderBooks(termSlug, courseSlug);
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact-link").href = `mailto:${CONTACT_EMAIL}?subject=Lecture%20Hub%20feedback`;
  document.getElementById("year").textContent = new Date().getFullYear();
  route();
});
