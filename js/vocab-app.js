const vocabState = {
  search: "",
  category: "all",
  flashIndex: 0,
  flashReveal: false,
  quiz: null,
  score: 0,
  answered: 0,
};

const LS_VOCAB_LEARNED = "nihongo_n5_vocab_learned";
const LS_VOCAB_SCORE = "nihongo_n5_vocab_last_score";

function getVocabLearned() {
  try { return JSON.parse(localStorage.getItem(LS_VOCAB_LEARNED)) || []; }
  catch { return []; }
}

function setVocabLearned(ids) {
  localStorage.setItem(LS_VOCAB_LEARNED, JSON.stringify(ids));
}

function isVocabLearned(id) {
  return getVocabLearned().includes(id);
}

function toggleVocabLearned(id) {
  const learned = getVocabLearned();
  const next = learned.includes(id) ? learned.filter(item => item !== id) : [...learned, id];
  setVocabLearned(next);
  renderVocabAll();
}

function normalizeVocab(text) {
  return String(text || "").toLowerCase().trim();
}

function getFilteredVocab() {
  const q = normalizeVocab(vocabState.search);
  return vocabData.filter(item => {
    const matchCategory = vocabState.category === "all" || item.category === vocabState.category;
    if (!matchCategory) return false;
    if (!q) return true;
    return normalizeVocab(`${item.jp} ${item.romaji} ${item.arti} ${item.category}`).includes(q);
  });
}

function renderVocabStats() {
  const learned = getVocabLearned();
  const total = vocabData.length;
  const percent = total ? Math.round((learned.length / total) * 100) : 0;
  const totalEl = document.getElementById("vocabTotal");
  if (!totalEl) return;
  totalEl.textContent = total;
  document.getElementById("vocabCategoryTotal").textContent = vocabCategories.length;
  document.getElementById("vocabLearnedTotal").textContent = learned.length;
  document.getElementById("vocabPercent").textContent = percent + "%";
  document.getElementById("vocabProgressBar").style.width = percent + "%";
}

function renderVocabFilters() {
  const select = document.getElementById("vocabCategory");
  if (!select) return;
  select.innerHTML = `<option value="all">Semua kategori</option>` + vocabCategories.map(cat => `<option value="${cat.name}">${cat.name} (${cat.count})</option>`).join("");
  select.value = vocabState.category;
}

function renderVocabList() {
  const container = document.getElementById("vocabList");
  const count = document.getElementById("vocabResultCount");
  if (!container || !count) return;
  const items = getFilteredVocab();
  count.textContent = `${items.length} kosakata ditampilkan`;
  if (!items.length) {
    container.innerHTML = `<div class="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">Tidak ada kosakata yang cocok.</div>`;
    return;
  }
  container.innerHTML = items.slice(0, 220).map(item => {
    const learned = isVocabLearned(item.id);
    return `
      <article class="rounded-3xl border ${learned ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'} p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div class="flex items-start justify-between gap-3">
          <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-600">${item.category}</span>
          <button onclick="toggleVocabLearned(${item.id})" class="rounded-full ${learned ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'} px-3 py-1 text-xs font-black">${learned ? 'Selesai' : 'Tandai'}</button>
        </div>
        <h3 class="mt-4 text-2xl font-black text-slate-950">${item.jp}</h3>
        <p class="mt-1 font-bold text-red-600">${item.romaji || '-'}</p>
        <p class="mt-3 rounded-2xl bg-slate-50 px-4 py-3 font-semibold text-slate-700">${item.arti}</p>
      </article>
    `;
  }).join("");
  if (items.length > 220) {
    container.innerHTML += `<div class="col-span-full rounded-3xl border border-slate-200 bg-white p-5 text-center text-sm font-bold text-slate-500">Menampilkan 220 dari ${items.length} kosakata. Gunakan pencarian/filter untuk mempersempit hasil.</div>`;
  }
}

function renderVocabFlashcard() {
  const card = vocabData[vocabState.flashIndex % vocabData.length];
  const box = document.getElementById("vocabFlashcardBox");
  if (!box || !card) return;
  const learned = isVocabLearned(card.id);
  box.innerHTML = `
    <div class="mb-4 flex items-center justify-between gap-3">
      <span class="rounded-full bg-red-100 px-3 py-1 text-sm font-black text-red-600">${card.category}</span>
      <span class="rounded-full ${learned ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'} px-3 py-1 text-xs font-black">${learned ? 'Selesai' : 'Belum'}</span>
    </div>
    <div class="flex min-h-44 items-center justify-center rounded-[2rem] bg-slate-950 p-8 text-center">
      <p class="text-4xl font-black text-white md:text-5xl">${card.jp}</p>
    </div>
    <div class="mt-5 rounded-3xl border border-slate-200 bg-white p-5 ${vocabState.flashReveal ? '' : 'blur-sm select-none'}">
      <p class="text-sm font-black uppercase tracking-wider text-slate-400">Romaji</p>
      <p class="mt-1 text-xl font-black text-red-600">${card.romaji || '-'}</p>
      <p class="mt-4 text-sm font-black uppercase tracking-wider text-slate-400">Arti</p>
      <p class="mt-1 text-lg font-bold text-slate-700">${card.arti}</p>
    </div>
  `;
}

function revealVocabFlashcard() {
  vocabState.flashReveal = true;
  renderVocabFlashcard();
}

function nextVocabFlashcard() {
  vocabState.flashIndex = (vocabState.flashIndex + 1) % vocabData.length;
  vocabState.flashReveal = false;
  renderVocabFlashcard();
}

function markVocabFlashcardLearned() {
  const card = vocabData[vocabState.flashIndex % vocabData.length];
  if (!isVocabLearned(card.id)) setVocabLearned([...getVocabLearned(), card.id]);
  renderVocabAll();
}

function makeVocabQuiz() {
  const pool = getFilteredVocab().length >= 4 ? getFilteredVocab() : vocabData;
  const answer = pool[Math.floor(Math.random() * pool.length)];
  const askMeaning = Math.random() > 0.45;
  const optionField = askMeaning ? 'arti' : 'jp';
  const otherOptions = vocabData.filter(item => item.id !== answer.id).sort(() => Math.random() - .5).slice(0, 3).map(item => item[optionField]);
  const options = [...otherOptions, answer[optionField]].sort(() => Math.random() - .5);
  vocabState.quiz = { answer, askMeaning, options, correct: answer[optionField] };
  renderVocabQuiz();
}

function renderVocabQuiz() {
  const qBox = document.getElementById("vocabQuizQuestion");
  const oBox = document.getElementById("vocabQuizOptions");
  const feedback = document.getElementById("vocabQuizFeedback");
  if (!qBox || !vocabState.quiz) return;
  const q = vocabState.quiz;
  qBox.innerHTML = q.askMeaning
    ? `Apa arti dari <span class="text-red-600">${q.answer.jp}</span>? <span class="text-base text-slate-500">(${q.answer.romaji || '-'})</span>`
    : `Pilih kosakata Jepang untuk arti: <span class="text-red-600">${q.answer.arti}</span>`;
  oBox.innerHTML = q.options.map(opt => `<button onclick="answerVocabQuiz('${encodeURIComponent(opt)}')" class="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-black text-slate-800 hover:border-red-300 hover:bg-red-50">${opt}</button>`).join("");
  feedback.innerHTML = "";
  const last = localStorage.getItem(LS_VOCAB_SCORE) || "Belum ada";
  document.getElementById("vocabQuizScore").textContent = `${vocabState.score}/${vocabState.answered}`;
  document.getElementById("vocabQuizLastScore").textContent = last;
}

function answerVocabQuiz(encoded) {
  if (!vocabState.quiz) return;
  const selected = decodeURIComponent(encoded);
  const correct = selected === vocabState.quiz.correct;
  vocabState.answered++;
  if (correct) vocabState.score++;
  localStorage.setItem(LS_VOCAB_SCORE, `${vocabState.score}/${vocabState.answered}`);
  const feedback = document.getElementById("vocabQuizFeedback");
  feedback.innerHTML = `<div class="rounded-3xl ${correct ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'} p-5 font-bold">${correct ? 'Benar!' : 'Belum tepat.'} Jawaban: ${vocabState.quiz.correct}.<br><span class="text-slate-600">${vocabState.quiz.answer.jp} • ${vocabState.quiz.answer.romaji || '-'} • ${vocabState.quiz.answer.arti}</span></div>`;
  document.getElementById("vocabQuizScore").textContent = `${vocabState.score}/${vocabState.answered}`;
  document.getElementById("vocabQuizLastScore").textContent = `${vocabState.score}/${vocabState.answered}`;
}

function resetVocabQuiz() {
  vocabState.score = 0;
  vocabState.answered = 0;
  localStorage.removeItem(LS_VOCAB_SCORE);
  makeVocabQuiz();
}

function renderVocabAll() {
  renderVocabStats();
  renderVocabList();
  renderVocabFlashcard();
}

function initVocabApp() {
  if (!document.getElementById("vocabSection")) return;
  renderVocabFilters();
  const search = document.getElementById("vocabSearch");
  const category = document.getElementById("vocabCategory");
  search?.addEventListener("input", e => { vocabState.search = e.target.value; renderVocabList(); });
  category?.addEventListener("change", e => { vocabState.category = e.target.value; renderVocabList(); });
  renderVocabAll();
  makeVocabQuiz();
}

document.addEventListener("DOMContentLoaded", initVocabApp);
