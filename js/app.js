const state = {
  search: "",
  filter: "all",
  selectedKanji: null,
  flashIndex: 0,
  flashReveal: false,
  quiz: null,
  quizType: "meaning",
  score: 0,
  totalAnswered: 0,
  showRomaji: true,
  showArti: true,
};

const LS_PROGRESS = "nihongo_n5_learned";
const LS_SCORE = "nihongo_n5_last_score";

function getLearned() {
  try { return JSON.parse(localStorage.getItem(LS_PROGRESS)) || []; }
  catch { return []; }
}

function setLearned(ids) {
  localStorage.setItem(LS_PROGRESS, JSON.stringify(ids));
}

function isLearned(id) {
  return getLearned().includes(id);
}

function toggleLearned(id) {
  const learned = getLearned();
  const exists = learned.includes(id);
  const next = exists ? learned.filter(item => item !== id) : [...learned, id];
  setLearned(next);
  renderAll();
  if (state.selectedKanji?.id === id) openDetail(id);
}

function renderStats() {
  const total = kanjiData.length;
  const done = getLearned().length;
  const remaining = total - done;
  const percent = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("statTotal").textContent = total;
  document.getElementById("statDone").textContent = done;
  document.getElementById("statRemaining").textContent = remaining;
  document.getElementById("statPercent").textContent = percent + "%";
  document.getElementById("progressBar").style.width = percent + "%";
}

function normalizeText(text) {
  return String(text || "").toLowerCase().trim();
}

function getFilteredData() {
  const search = normalizeText(state.search);
  return kanjiData.filter(item => {
    const learned = isLearned(item.id);
    if (state.filter === "learned" && !learned) return false;
    if (state.filter === "unlearned" && learned) return false;
    if (!search) return true;
    const vocabText = item.kosakata.map(v => `${v.kata} ${v.reading} ${v.arti}`).join(" ");
    const haystack = normalizeText(`${item.kanji} ${item.arti} ${item.onyomi.join(" ")} ${item.kunyomi.join(" ")} ${vocabText}`);
    return haystack.includes(search);
  });
}

function renderKanjiList() {
  const data = getFilteredData();
  const container = document.getElementById("kanjiGrid");
  document.getElementById("resultCount").textContent = `${data.length} kanji ditampilkan`;
  if (!data.length) {
    container.innerHTML = `<div class="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">Tidak ada kanji yang cocok.</div>`;
    return;
  }
  container.innerHTML = data.map(item => {
    const learned = isLearned(item.id);
    return `
      <article class="group rounded-3xl border ${learned ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'} p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <button class="w-full text-left" onclick="openDetail(${item.id})">
          <div class="flex items-start justify-between gap-3">
            <div class="text-6xl font-black text-slate-900 leading-none">${item.kanji}</div>
            <span class="rounded-full ${learned ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'} px-3 py-1 text-xs font-bold">${learned ? 'Selesai' : 'Belajar'}</span>
          </div>
          <h3 class="mt-4 font-bold text-slate-900">${item.arti}</h3>
          <p class="mt-2 text-sm text-slate-500">On: ${item.onyomi.join('、')} · Kun: ${item.kunyomi.join('、')}</p>
          <p class="mt-3 rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-600">${item.kosakata[0].kata}（${item.kosakata[0].reading}）= ${item.kosakata[0].arti}</p>
        </button>
      </article>
    `;
  }).join("");
}

function openDetail(id) {
  const item = kanjiData.find(k => k.id === id);
  if (!item) return;
  state.selectedKanji = item;
  const modal = document.getElementById("detailModal");
  const body = document.getElementById("detailBody");
  const learned = isLearned(item.id);
  body.innerHTML = `
    <div class="flex flex-col gap-6 md:flex-row md:items-start">
      <div class="flex min-h-48 min-w-48 items-center justify-center rounded-[2rem] bg-slate-950 text-8xl font-black text-white shadow-xl">${item.kanji}</div>
      <div class="flex-1">
        <div class="mb-4 flex flex-wrap items-center gap-3">
          <span class="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">Kanji #${item.id}</span>
          <span class="rounded-full ${learned ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'} px-3 py-1 text-sm font-bold">${learned ? 'Sudah dipelajari' : 'Belum dipelajari'}</span>
        </div>
        <h2 class="text-3xl font-black text-slate-900">${item.arti}</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 bg-white p-4"><p class="text-xs font-bold uppercase tracking-wider text-slate-400">Onyomi</p><p class="mt-2 text-lg font-bold">${item.onyomi.join('、')}</p></div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4"><p class="text-xs font-bold uppercase tracking-wider text-slate-400">Kunyomi</p><p class="mt-2 text-lg font-bold">${item.kunyomi.join('、')}</p></div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="mb-4 text-xl font-black">Kosakata dari PDF</h3>
      <div class="grid gap-4 md:grid-cols-2">
        ${item.kosakata.map(v => `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="text-2xl font-black">${v.kata}</p><p class="mt-1 text-sm text-slate-500">${v.reading}</p><p class="mt-2 font-semibold text-slate-700">${v.arti}</p></div>`).join('')}
      </div>
    </div>
    <div class="mt-8 rounded-3xl bg-red-50 p-5">
      <h3 class="font-black text-red-700">Contoh latihan kalimat</h3>
      <p class="mt-3 text-2xl font-bold">${item.kosakata[0].kata}を覚えます。</p>
      <p class="mt-1 text-slate-600">${item.kosakata[0].reading} o oboemasu.</p>
      <p class="mt-1 text-slate-700">Saya menghafal ${item.kosakata[0].arti.toLowerCase()}.</p>
    </div>
    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
      <button onclick="toggleLearned(${item.id})" class="rounded-2xl ${learned ? 'bg-slate-900' : 'bg-emerald-600'} px-5 py-3 font-bold text-white hover:opacity-90">${learned ? 'Tandai Belum Dipelajari' : 'Tandai Sudah Dipelajari'}</button>
      <button onclick="closeDetail()" class="rounded-2xl border border-slate-300 px-5 py-3 font-bold text-slate-700 hover:bg-slate-50">Tutup</button>
    </div>
  `;
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function renderFlashcard() {
  const item = kanjiData[state.flashIndex % kanjiData.length];
  const learned = isLearned(item.id);
  document.getElementById("flashKanji").textContent = item.kanji;
  document.getElementById("flashMeta").textContent = `Kanji #${item.id} dari ${kanjiData.length}`;
  document.getElementById("flashStatus").textContent = learned ? "Sudah dipelajari" : "Belum dipelajari";
  document.getElementById("flashStatus").className = `rounded-full px-3 py-1 text-xs font-bold ${learned ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`;
  const answer = document.getElementById("flashAnswer");
  if (state.flashReveal) {
    answer.innerHTML = `
      <div class="grid gap-4 md:grid-cols-3">
        <div><p class="text-xs font-bold uppercase tracking-wider text-slate-400">Arti</p><p class="mt-1 font-black">${item.arti}</p></div>
        <div><p class="text-xs font-bold uppercase tracking-wider text-slate-400">Onyomi</p><p class="mt-1 font-black">${item.onyomi.join('、')}</p></div>
        <div><p class="text-xs font-bold uppercase tracking-wider text-slate-400">Kunyomi</p><p class="mt-1 font-black">${item.kunyomi.join('、')}</p></div>
      </div>
      <div class="mt-5 rounded-2xl bg-slate-50 p-4"><p class="font-bold">${item.kosakata[0].kata}（${item.kosakata[0].reading}）</p><p class="text-slate-600">${item.kosakata[0].arti}</p></div>
    `;
  } else {
    answer.innerHTML = `<p class="text-slate-500">Klik <b>Lihat Jawaban</b> untuk menampilkan arti, onyomi, kunyomi, dan contoh kosakata.</p>`;
  }
}

function revealFlashcard() {
  state.flashReveal = !state.flashReveal;
  document.getElementById("revealBtn").textContent = state.flashReveal ? "Sembunyikan Jawaban" : "Lihat Jawaban";
  renderFlashcard();
}

function nextFlashcard() {
  state.flashIndex = (state.flashIndex + 1) % kanjiData.length;
  state.flashReveal = false;
  document.getElementById("revealBtn").textContent = "Lihat Jawaban";
  renderFlashcard();
}

function markFlashcardLearned() {
  const item = kanjiData[state.flashIndex % kanjiData.length];
  if (!isLearned(item.id)) toggleLearned(item.id);
  nextFlashcard();
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pickOptions(correct, pool) {
  const options = [correct];
  const cleanedPool = shuffle([...new Set(pool.filter(Boolean).filter(item => item !== correct && item !== '-'))]);
  for (const value of cleanedPool) {
    if (options.length >= 4) break;
    options.push(value);
  }
  return shuffle(options);
}

function createQuizQuestion() {
  const item = shuffle(kanjiData)[0];
  let question = "";
  let correct = "";
  let options = [];
  let explanation = "";

  if (state.quizType === "meaning") {
    question = `Apa arti dari kanji ${item.kanji}?`;
    correct = item.arti;
    options = pickOptions(correct, kanjiData.map(k => k.arti));
    explanation = `${item.kanji} berarti ${item.arti}. Contoh: ${item.kosakata[0].kata}（${item.kosakata[0].reading}）= ${item.kosakata[0].arti}.`;
  } else if (state.quizType === "kanji") {
    question = `Kanji mana yang berarti "${item.arti}"?`;
    correct = item.kanji;
    options = pickOptions(correct, kanjiData.map(k => k.kanji));
    explanation = `Jawaban benar adalah ${item.kanji}. Bacaan on: ${item.onyomi.join('、')}, kun: ${item.kunyomi.join('、')}.`;
  } else if (state.quizType === "onyomi") {
    const candidates = kanjiData.filter(k => k.onyomi[0] && k.onyomi[0] !== '-');
    const selected = shuffle(candidates)[0] || item;
    question = `Pilih onyomi yang tepat untuk kanji ${selected.kanji}.`;
    correct = selected.onyomi[0];
    options = pickOptions(correct, kanjiData.flatMap(k => k.onyomi));
    explanation = `Onyomi ${selected.kanji} adalah ${selected.onyomi.join('、')}.`;
  } else if (state.quizType === "kunyomi") {
    const candidates = kanjiData.filter(k => k.kunyomi[0] && k.kunyomi[0] !== '-');
    const selected = shuffle(candidates)[0] || item;
    question = `Pilih kunyomi yang tepat untuk kanji ${selected.kanji}.`;
    correct = selected.kunyomi[0];
    options = pickOptions(correct, kanjiData.flatMap(k => k.kunyomi));
    explanation = `Kunyomi ${selected.kanji} adalah ${selected.kunyomi.join('、')}.`;
  } else {
    const selected = shuffle(kanjiData)[0];
    const vocab = shuffle(selected.kosakata)[0];
    question = `Apa arti kosakata ${vocab.kata}（${vocab.reading}）?`;
    correct = vocab.arti;
    options = pickOptions(correct, kanjiData.flatMap(k => k.kosakata.map(v => v.arti)));
    explanation = `${vocab.kata} dibaca ${vocab.reading}, artinya ${vocab.arti}.`;
  }

  return { question, correct, options, explanation, answered: false };
}

function renderQuiz() {
  if (!state.quiz) state.quiz = createQuizQuestion();
  document.getElementById("quizScore").textContent = `${state.score}/${state.totalAnswered}`;
  document.getElementById("lastScore").textContent = localStorage.getItem(LS_SCORE) || "Belum ada";
  document.getElementById("quizQuestion").textContent = state.quiz.question;
  document.getElementById("quizOptions").innerHTML = state.quiz.options.map(opt => `
    <button onclick="answerQuiz('${escapeForAttr(opt)}')" class="rounded-2xl border border-slate-200 bg-white p-4 text-left font-bold text-slate-700 transition hover:border-red-400 hover:bg-red-50">${opt}</button>
  `).join("");
  document.getElementById("quizExplanation").innerHTML = "";
}

function escapeForAttr(value) {
  return String(value).replace(/'/g, "&#39;").replace(/\"/g, "&quot;");
}

function answerQuiz(answer) {
  if (!state.quiz || state.quiz.answered) return;
  const normalizedAnswer = answer.replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  const correct = normalizedAnswer === state.quiz.correct;
  state.quiz.answered = true;
  state.totalAnswered++;
  if (correct) state.score++;
  localStorage.setItem(LS_SCORE, `${state.score}/${state.totalAnswered}`);

  document.getElementById("quizScore").textContent = `${state.score}/${state.totalAnswered}`;
  document.getElementById("lastScore").textContent = localStorage.getItem(LS_SCORE);
  document.getElementById("quizExplanation").innerHTML = `
    <div class="rounded-2xl ${correct ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'} p-4">
      <p class="font-black">${correct ? 'Benar!' : 'Belum tepat.'}</p>
      <p class="mt-1">${state.quiz.explanation}</p>
    </div>
  `;

  const buttons = document.querySelectorAll("#quizOptions button");
  buttons.forEach(btn => {
    const value = btn.textContent.trim();
    btn.disabled = true;
    if (value === state.quiz.correct) btn.className = "rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-left font-bold text-emerald-700";
    else if (value === normalizedAnswer) btn.className = "rounded-2xl border border-red-300 bg-red-50 p-4 text-left font-bold text-red-700";
    else btn.className = "rounded-2xl border border-slate-200 bg-white p-4 text-left font-bold text-slate-400";
  });
}

function nextQuiz() {
  state.quiz = createQuizQuestion();
  renderQuiz();
}

function resetQuiz() {
  state.score = 0;
  state.totalAnswered = 0;
  state.quiz = createQuizQuestion();
  localStorage.removeItem(LS_SCORE);
  renderQuiz();
}

function setQuizType(type) {
  state.quizType = type;
  state.quiz = createQuizQuestion();
  renderQuiz();
}

function highlightKanji(text, focus) {
  let result = text;
  const chars = [...new Set(focus)].sort((a,b) => b.length - a.length);
  chars.forEach(ch => {
    result = result.replaceAll(ch, `<span class="rounded-md bg-red-100 px-1 font-black text-red-700">${ch}</span>`);
  });
  return result;
}

function renderConversations() {
  const container = document.getElementById("conversationList");
  container.innerHTML = conversations.map((conv, index) => `
    <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-bold text-red-600">会話 ${index + 1}</p>
          <h3 class="text-2xl font-black text-slate-900">${conv.title}</h3>
        </div>
        <div class="flex flex-wrap gap-2">${conv.focus.map(k => `<span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold">${k}</span>`).join('')}</div>
      </div>
      <div class="space-y-4">
        ${conv.lines.map(line => `
          <div class="rounded-2xl bg-slate-50 p-4">
            <p class="text-xs font-black uppercase tracking-wider text-slate-400">${line.speaker}</p>
            <p class="mt-2 text-2xl font-bold leading-relaxed">${highlightKanji(line.jp, conv.focus)}</p>
            ${state.showRomaji ? `<p class="mt-2 text-slate-500">${line.romaji}</p>` : ''}
            ${state.showArti ? `<p class="mt-1 font-semibold text-slate-700">${line.arti}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </article>
  `).join("");
}

function toggleRomaji() {
  state.showRomaji = !state.showRomaji;
  document.getElementById("toggleRomajiBtn").textContent = state.showRomaji ? "Sembunyikan Romaji" : "Tampilkan Romaji";
  renderConversations();
}

function toggleArti() {
  state.showArti = !state.showArti;
  document.getElementById("toggleArtiBtn").textContent = state.showArti ? "Sembunyikan Arti" : "Tampilkan Arti";
  renderConversations();
}

function renderAll() {
  renderStats();
  renderKanjiList();
  renderFlashcard();
  renderQuiz();
  renderConversations();
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
}

function initEvents() {
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderKanjiList();
  });

  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.filter = btn.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(item => item.className = "rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50");
      btn.className = "rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white";
      renderKanjiList();
    });
  });

  document.getElementById("quizType").addEventListener("change", e => setQuizType(e.target.value));

  document.getElementById("detailModal").addEventListener("click", (e) => {
    if (e.target.id === "detailModal") closeDetail();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initEvents();
  renderAll();
});
