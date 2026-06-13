const JLPT_SCORE_KEY = "nihongo-n5-jlpt-score";
const jlptState = {
  current: null,
  score: 0,
  answered: 0,
  pageSearch: "",
  bankFilter: "all"
};

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function nl2br(value) {
  return htmlEscape(value).replaceAll("\n", "<br>");
}

function getJlptPool() {
  const mode = document.getElementById("jlptMode")?.value || "all";
  if (mode === "all") return jlptPracticeData;
  return jlptPracticeData.filter(q => q.section === mode);
}

function renderJlptStats() {
  const pageTotal = document.getElementById("jlptPageTotal");
  const questionTotal = document.getElementById("jlptQuestionTotal");
  const score = document.getElementById("jlptScore");
  const last = document.getElementById("jlptLastScore");
  if (!pageTotal) return;

  pageTotal.textContent = jlptExamPages.length;
  questionTotal.textContent = jlptPracticeData.length;
  score.textContent = `${jlptState.score}/${jlptState.answered}`;
  last.textContent = localStorage.getItem(JLPT_SCORE_KEY) || "Belum ada";
}

function renderJlptAnswerKeys() {
  const box = document.getElementById("jlptAnswerKeys");
  if (!box) return;
  box.innerHTML = Object.entries(jlptAnswerTables).map(([section, value]) => `
    <details class="rounded-2xl bg-white p-3" ${section === '文字・語彙' ? 'open' : ''}>
      <summary class="cursor-pointer font-black text-slate-800">${htmlEscape(section)}</summary>
      <p class="mt-2 leading-6">${htmlEscape(value)}</p>
    </details>
  `).join("");
}

function newJlptQuestion() {
  const pool = getJlptPool();
  if (!pool.length) return;
  jlptState.current = pool[Math.floor(Math.random() * pool.length)];
  renderJlptQuestion();
}

function renderJlptQuestion() {
  const q = jlptState.current || jlptPracticeData[0];
  jlptState.current = q;

  const meta = document.getElementById("jlptQuestionMeta");
  const page = document.getElementById("jlptQuestionPage");
  const box = document.getElementById("jlptQuestionBox");
  const options = document.getElementById("jlptOptions");
  const feedback = document.getElementById("jlptFeedback");
  if (!box || !options) return;

  meta.textContent = `${q.section} • ${q.part} • #${q.id}`;
  page.textContent = q.page ? `PDF halaman ${q.page}` : "PDF";

  const img = q.imagePage ? `<div class="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5"><img loading="lazy" src="assets/jlpt-pages/page-${String(q.imagePage).padStart(2, '0')}.webp" alt="Halaman PDF ${q.imagePage}" class="max-h-[420px] w-full object-contain bg-white"></div>` : "";
  const passage = q.passage ? `<div class="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-7 text-slate-200"><p class="mb-2 font-black text-red-200">Teks / konteks</p>${nl2br(q.passage)}</div>` : "";
  const script = q.script ? `<div class="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-7 text-slate-200"><p class="mb-2 font-black text-red-200">Script / petunjuk</p>${nl2br(q.script)}</div>` : "";

  box.innerHTML = `
    <p class="text-sm font-black text-red-300">Pertanyaan</p>
    <h4 class="mt-3 text-2xl font-black leading-relaxed">${htmlEscape(q.question)}</h4>
    ${passage}
    ${script}
    ${img}
  `;

  options.innerHTML = q.options.map((opt, index) => `
    <button onclick="answerJlpt(${index})" class="jlpt-option rounded-2xl border border-slate-200 bg-white p-4 text-left font-bold text-slate-700 transition hover:border-red-400 hover:bg-red-50">
      <span class="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-600">${index + 1}</span>
      ${htmlEscape(opt)}
    </button>
  `).join("");
  feedback.innerHTML = "";
  renderJlptStats();
}

function answerJlpt(index) {
  const q = jlptState.current;
  if (!q) return;
  const buttons = document.querySelectorAll(".jlpt-option");
  if ([...buttons].some(btn => btn.disabled)) return;

  const correct = index === q.answerIndex;
  jlptState.answered++;
  if (correct) jlptState.score++;
  localStorage.setItem(JLPT_SCORE_KEY, `${jlptState.score}/${jlptState.answered}`);

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answerIndex) {
      btn.className = "jlpt-option rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-left font-bold text-emerald-700";
    } else if (i === index) {
      btn.className = "jlpt-option rounded-2xl border border-red-300 bg-red-50 p-4 text-left font-bold text-red-700";
    } else {
      btn.className = "jlpt-option rounded-2xl border border-slate-200 bg-white p-4 text-left font-bold text-slate-400";
    }
  });

  document.getElementById("jlptFeedback").innerHTML = `
    <div class="rounded-2xl ${correct ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'} p-5">
      <p class="text-lg font-black">${correct ? 'Benar!' : 'Belum tepat.'}</p>
      <p class="mt-2 font-semibold">Jawaban: ${q.answerIndex + 1}. ${htmlEscape(q.answer)}</p>
      <p class="mt-2">${htmlEscape(q.explanation || 'Cek lagi pembahasan dan halaman PDF terkait.')}</p>
      <button onclick="newJlptQuestion()" class="mt-4 rounded-2xl bg-slate-950 px-4 py-2 font-black text-white hover:bg-red-600">Lanjut Soal</button>
    </div>
  `;
  renderJlptStats();
}

function resetJlptPractice() {
  jlptState.score = 0;
  jlptState.answered = 0;
  localStorage.removeItem(JLPT_SCORE_KEY);
  newJlptQuestion();
  renderJlptStats();
}

function renderJlptBank() {
  const list = document.getElementById("jlptBankList");
  if (!list) return;
  const data = jlptState.bankFilter === "all" ? jlptPracticeData : jlptPracticeData.filter(q => q.section === jlptState.bankFilter);
  list.innerHTML = data.map(q => `
    <details class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <summary class="cursor-pointer list-none">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-black uppercase tracking-wider text-red-600">${htmlEscape(q.section)} • ${htmlEscape(q.part)} • #${q.id}</p>
            <p class="mt-1 font-black leading-6 text-slate-900">${htmlEscape(q.question)}</p>
          </div>
          <span class="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-black text-slate-500">p.${q.page || '-'}</span>
        </div>
      </summary>
      ${q.passage ? `<div class="mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-600"><b>Konteks:</b><br>${nl2br(q.passage)}</div>` : ''}
      ${q.script ? `<div class="mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-600"><b>Script:</b><br>${nl2br(q.script)}</div>` : ''}
      <ol class="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
        ${q.options.map((opt, i) => `<li class="rounded-2xl bg-white px-4 py-3 ${i === q.answerIndex ? 'ring-2 ring-emerald-200' : ''}">${i + 1}. ${htmlEscape(opt)} ${i === q.answerIndex ? '<span class="ml-2 font-black text-emerald-600">✓</span>' : ''}</li>`).join('')}
      </ol>
      <p class="mt-3 text-sm leading-6 text-slate-500">${htmlEscape(q.explanation)}</p>
      ${q.imagePage ? `<a href="assets/jlpt-pages/page-${String(q.imagePage).padStart(2, '0')}.webp" target="_blank" class="mt-3 inline-block rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:bg-slate-100">Buka gambar halaman ${q.imagePage}</a>` : ''}
    </details>
  `).join("");
}

function renderJlptPages() {
  const list = document.getElementById("jlptPageList");
  if (!list) return;
  const q = (jlptState.pageSearch || "").trim().toLowerCase();
  const pages = jlptExamPages.filter(p => {
    const haystack = `${p.page} ${p.section} ${p.title} ${p.text}`.toLowerCase();
    return !q || haystack.includes(q);
  });

  list.innerHTML = pages.map(p => `
    <details class="rounded-3xl border border-slate-200 bg-slate-50 p-4" ${p.page === 47 ? 'open' : ''}>
      <summary class="cursor-pointer list-none">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-xs font-black uppercase tracking-wider text-red-600">${htmlEscape(p.section)}</p>
            <h4 class="font-black text-slate-900">Halaman ${p.page}: ${htmlEscape(p.title)}</h4>
          </div>
          <span class="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-500">PDF</span>
        </div>
      </summary>
      <div class="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img loading="lazy" src="${htmlEscape(p.image)}" alt="Halaman PDF ${p.page}" class="w-full bg-white object-contain">
      </div>
      ${p.text ? `<details class="mt-3 rounded-2xl bg-white p-3"><summary class="cursor-pointer font-black text-slate-700">Teks hasil ekstraksi</summary><p class="mt-3 max-h-72 overflow-y-auto whitespace-pre-wrap text-sm leading-6 text-slate-500">${htmlEscape(p.text)}</p></details>` : '<p class="mt-3 text-sm text-slate-400">Halaman ini berupa gambar/kosong dari PDF.</p>'}
    </details>
  `).join("") || `<div class="rounded-3xl bg-white p-6 text-center font-bold text-slate-500">Tidak ada halaman yang cocok.</div>`;
}

function initJlptSection() {
  if (!document.getElementById("jlpt")) return;
  renderJlptStats();
  renderJlptAnswerKeys();
  newJlptQuestion();
  renderJlptBank();
  renderJlptPages();

  document.getElementById("jlptMode")?.addEventListener("change", newJlptQuestion);
  document.getElementById("jlptBankFilter")?.addEventListener("change", e => {
    jlptState.bankFilter = e.target.value;
    renderJlptBank();
  });
  document.getElementById("jlptPageSearch")?.addEventListener("input", e => {
    jlptState.pageSearch = e.target.value;
    renderJlptPages();
  });
}

window.addEventListener("DOMContentLoaded", initJlptSection);
