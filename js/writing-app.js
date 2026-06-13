const writingState = {
  index: 0,
  search: "",
  drawing: false,
};

const LS_WRITING_DONE = "nihongo_n5_writing_done";

function getWritingDone() {
  try { return JSON.parse(localStorage.getItem(LS_WRITING_DONE)) || []; }
  catch { return []; }
}

function setWritingDone(ids) {
  localStorage.setItem(LS_WRITING_DONE, JSON.stringify(ids));
}

function isWritingDone(id) {
  return getWritingDone().includes(id);
}

function toggleWritingDone(id) {
  const done = getWritingDone();
  const next = done.includes(id) ? done.filter(item => item !== id) : [...done, id];
  setWritingDone(next);
  renderWritingAll();
}

function getCurrentWorkbook() {
  return kanjiWorkbookData[writingState.index % kanjiWorkbookData.length];
}

function renderWritingStats() {
  const totalEl = document.getElementById("writingTotal");
  if (!totalEl) return;
  const done = getWritingDone().length;
  const total = kanjiWorkbookData.length;
  totalEl.textContent = total;
  document.getElementById("writingDone").textContent = done;
  document.getElementById("writingPercent").textContent = `${total ? Math.round(done / total * 100) : 0}%`;
}

function renderWritingCard() {
  const data = getCurrentWorkbook();
  const card = document.getElementById("writingCard");
  if (!card || !data) return;
  const done = isWritingDone(data.id);
  card.innerHTML = `
    <div class="flex flex-col gap-6 lg:flex-row">
      <div class="flex min-h-56 min-w-56 items-center justify-center rounded-[2rem] bg-slate-950 text-9xl font-black text-white">${data.kanji}</div>
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="rounded-full bg-red-100 px-3 py-1 text-sm font-black text-red-600">Workbook #${data.id}</span>
          <span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-600">${data.strokes} strokes</span>
          <span class="rounded-full ${done ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'} px-3 py-1 text-sm font-black">${done ? 'Sudah latihan' : 'Belum latihan'}</span>
        </div>
        <h3 class="mt-4 text-3xl font-black text-slate-950">${data.meaning}</h3>
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 bg-white p-4"><p class="text-xs font-black uppercase tracking-wider text-slate-400">Onyomi</p><p class="mt-2 font-bold text-slate-800">${data.onyomi || '-'}</p></div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4"><p class="text-xs font-black uppercase tracking-wider text-slate-400">Kunyomi</p><p class="mt-2 font-bold text-slate-800">${data.kunyomi || '-'}</p></div>
        </div>
        <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="text-xs font-black uppercase tracking-wider text-slate-400">Vocabulary</p><p class="mt-2 font-bold text-slate-800">${data.vocabulary || '-'}</p></div>
        <div class="mt-4 rounded-2xl bg-red-50 p-4"><p class="text-xs font-black uppercase tracking-wider text-red-600">Hint dari workbook</p><p class="mt-2 font-bold text-slate-700">${data.hint || 'Latih bentuk dan jumlah stroke dari halaman workbook.'}</p></div>
      </div>
    </div>
  `;
  const img = document.getElementById("workbookImage");
  if (img) {
    img.src = data.image;
    img.alt = `Halaman workbook kanji ${data.kanji}`;
  }
}

function getFilteredWorkbook() {
  const q = String(writingState.search || "").toLowerCase().trim();
  if (!q) return kanjiWorkbookData;
  return kanjiWorkbookData.filter(item => `${item.kanji} ${item.meaning} ${item.onyomi} ${item.kunyomi} ${item.vocabulary} ${item.hint}`.toLowerCase().includes(q));
}

function renderWritingList() {
  const list = document.getElementById("writingList");
  if (!list) return;
  const items = getFilteredWorkbook();
  list.innerHTML = items.map(item => {
    const done = isWritingDone(item.id);
    const active = item.id === getCurrentWorkbook()?.id;
    return `<button onclick="selectWorkbook(${item.id})" class="rounded-2xl border ${active ? 'border-red-400 bg-red-50' : done ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'} p-4 text-left transition hover:border-red-300">
      <div class="flex items-center justify-between gap-3">
        <span class="text-3xl font-black text-slate-950">${item.kanji}</span>
        <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-600">${item.strokes} stroke</span>
      </div>
      <p class="mt-2 text-sm font-bold text-slate-600">${item.meaning}</p>
    </button>`;
  }).join("");
}

function selectWorkbook(id) {
  const idx = kanjiWorkbookData.findIndex(item => item.id === id);
  if (idx >= 0) writingState.index = idx;
  renderWritingAll();
  clearWritingCanvas();
}

function nextWorkbook() {
  writingState.index = (writingState.index + 1) % kanjiWorkbookData.length;
  renderWritingAll();
  clearWritingCanvas();
}

function prevWorkbook() {
  writingState.index = (writingState.index - 1 + kanjiWorkbookData.length) % kanjiWorkbookData.length;
  renderWritingAll();
  clearWritingCanvas();
}

function markWritingDone() {
  const data = getCurrentWorkbook();
  if (!isWritingDone(data.id)) setWritingDone([...getWritingDone(), data.id]);
  renderWritingAll();
}

function getCanvasPoint(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const source = event.touches ? event.touches[0] : event;
  return {
    x: (source.clientX - rect.left) * (canvas.width / rect.width),
    y: (source.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function setupWritingCanvas() {
  const canvas = document.getElementById("writingCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  function start(e) {
    writingState.drawing = true;
    const p = getCanvasPoint(canvas, e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    e.preventDefault();
  }
  function move(e) {
    if (!writingState.drawing) return;
    const p = getCanvasPoint(canvas, e);
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink-color') || '#0f172a';
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    e.preventDefault();
  }
  function end() { writingState.drawing = false; }
  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);
  canvas.addEventListener("touchstart", start, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  window.addEventListener("touchend", end);
  clearWritingCanvas();
}

function clearWritingCanvas() {
  const canvas = document.getElementById("writingCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // grid background drawn with CSS; canvas remains transparent
}

function renderWritingAll() {
  renderWritingStats();
  renderWritingCard();
  renderWritingList();
}

function initWritingApp() {
  if (!document.getElementById("writingSection")) return;
  document.getElementById("writingSearch")?.addEventListener("input", e => {
    writingState.search = e.target.value;
    renderWritingList();
  });
  setupWritingCanvas();
  renderWritingAll();
}

document.addEventListener("DOMContentLoaded", initWritingApp);
