// test.html 전용: 공부 습관 자가진단 로직

const GROUPS = {
  nt: {
    name: "NT 분석가형",
    tagClass: "tag-nt",
    types: "INTJ · INTP · ENTJ · ENTP",
    desc: "원리와 논리를 이해해야 몰입하는 전략가 타입이에요. 개념 구조를 파악하고 스스로 최적화된 학습 시스템을 만들 때 가장 큰 효율을 냅니다.",
    url: "nt.html",
  },
  nf: {
    name: "NF 외교관형",
    tagClass: "tag-nf",
    types: "INFJ · INFP · ENFJ · ENFP",
    desc: "의미와 공감으로 움직이는 타입이에요. 공부하는 이유를 스스로 납득하고, 감정과 동기를 잘 관리할 때 몰입도가 크게 올라갑니다.",
    url: "nf.html",
  },
  sj: {
    name: "SJ 관리자형",
    tagClass: "tag-sj",
    types: "ISTJ · ISFJ · ESTJ · ESFJ",
    desc: "계획과 성실함의 정석 타입이에요. 체계적인 계획표와 반복 학습으로 꾸준하고 안정적인 성과를 쌓아갑니다.",
    url: "sj.html",
  },
  sp: {
    name: "SP 탐험가형",
    tagClass: "tag-sp",
    types: "ISTP · ISFP · ESTP · ESFP",
    desc: "실전과 감각을 믿는 행동파 타입이에요. 이론보다 실습, 계획보다 순발력으로 몸으로 부딪히며 배울 때 가장 잘 흡수합니다.",
    url: "sp.html",
  },
};

const QUESTIONS = [
  {
    text: "1. 새로운 내용을 공부할 때 나는...",
    options: [
      { v: "nt", t: "전체 개념의 원리와 이유부터 파악한다" },
      { v: "nf", t: "나에게 어떤 의미가 있는지부터 생각한다" },
      { v: "sj", t: "정해진 순서와 계획대로 차근차근 본다" },
      { v: "sp", t: "일단 문제부터 풀어보며 감을 잡는다" },
    ],
  },
  {
    text: "2. 시험 기간 계획을 세울 때 나는...",
    options: [
      { v: "nt", t: "가장 효율적인 나만의 경로를 스스로 설계한다" },
      { v: "nf", t: "목표와 동기를 떠올리며 계획을 짠다" },
      { v: "sj", t: "세세한 시간표를 만들어 그대로 지킨다" },
      { v: "sp", t: "큰 틀만 잡고 상황에 따라 유동적으로 움직인다" },
    ],
  },
  {
    text: "3. 이해가 안 되는 부분이 있을 때 나는...",
    options: [
      { v: "nt", t: "원리를 끝까지 파고들어 논리적으로 이해한다" },
      { v: "nf", t: "친구에게 물어보거나 함께 이야기하며 이해한다" },
      { v: "sj", t: "교재를 순서대로 다시 꼼꼼히 정독한다" },
      { v: "sp", t: "관련 문제를 여러 개 풀면서 감으로 이해한다" },
    ],
  },
  {
    text: "4. 내 노트 정리 스타일은...",
    options: [
      { v: "nt", t: "개념 간 관계를 도식화한 구조도" },
      { v: "nf", t: "색깔과 그림으로 감성적으로 꾸민 노트" },
      { v: "sj", t: "목차별로 깔끔하게 정리된 회독용 노트" },
      { v: "sp", t: "필요한 것만 간단히, 노트보다는 문제풀이 위주" },
    ],
  },
  {
    text: "5. 그룹 스터디에 대한 내 생각은...",
    options: [
      { v: "nt", t: "비효율적일 때가 많아 혼자가 편하다" },
      { v: "nf", t: "함께 이야기하며 배우는 게 좋다" },
      { v: "sj", t: "정해진 규칙이 있는 스터디면 도움이 된다" },
      { v: "sp", t: "자유롭게 서로 문제를 내며 노는 것처럼 하는 게 좋다" },
    ],
  },
  {
    text: "6. 벼락치기에 대한 내 생각은...",
    options: [
      { v: "nt", t: "미리 전략을 세워두면 벼락치기는 피하는 편이다" },
      { v: "nf", t: "마감이 임박하면 불안해서 힘들다" },
      { v: "sj", t: "계획대로 미리 끝내는 걸 선호한다" },
      { v: "sp", t: "오히려 마감 직전 집중력이 폭발한다" },
    ],
  },
  {
    text: "7. 오답 노트를 만들 때 나는...",
    options: [
      { v: "nt", t: "틀린 이유를 논리적으로 분석해 기록한다" },
      { v: "nf", t: "그때 느낀 감정과 교훈을 함께 적는다" },
      { v: "sj", t: "유형별로 꼼꼼하게 분류해 반복 확인한다" },
      { v: "sp", t: "노트 정리보다 다시 풀어보는 게 낫다고 생각한다" },
    ],
  },
  {
    text: "8. 나를 공부하게 만드는 자극제는...",
    options: [
      { v: "nt", t: "지적 호기심과 성장" },
      { v: "nf", t: "의미와 가치, 응원해주는 사람들" },
      { v: "sj", t: "목표 달성과 책임감" },
      { v: "sp", t: "눈앞의 보상과 실전 경험" },
    ],
  },
  {
    text: "9. 시험 직전 마지막으로 하는 점검은...",
    options: [
      { v: "nt", t: "큰 개념과 원리를 다시 한 번 정리한다" },
      { v: "nf", t: "마음을 다잡고 스스로에게 응원의 말을 건넨다" },
      { v: "sj", t: "체크리스트로 준비물과 범위를 점검한다" },
      { v: "sp", t: "실전처럼 문제 몇 개를 풀며 감을 조율한다" },
    ],
  },
  {
    text: "10. 나에게 잘 맞는 공부 환경은...",
    options: [
      { v: "nt", t: "조용하고 방해 없는 몰입 공간" },
      { v: "nf", t: "편안하고 나만의 감성이 담긴 공간" },
      { v: "sj", t: "정돈되어 있고 계획표가 붙어있는 공간" },
      { v: "sp", t: "자유롭게 이동 가능하고 활동적인 공간" },
    ],
  },
];

function renderQuiz() {
  const form = document.getElementById("quiz-form");
  if (!form) return;

  QUESTIONS.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "question";

    const p = document.createElement("p");
    p.className = "q-text";
    p.textContent = q.text;
    block.appendChild(p);

    const optWrap = document.createElement("div");
    optWrap.className = "options";

    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + i;
      input.value = opt.v;
      input.required = true;

      input.addEventListener("change", () => {
        optWrap
          .querySelectorAll(".option")
          .forEach((el) => el.classList.remove("selected"));
        label.classList.add("selected");
        updateProgress();
      });

      const span = document.createElement("span");
      span.textContent = opt.t;

      label.appendChild(input);
      label.appendChild(span);
      optWrap.appendChild(label);
    });

    block.appendChild(optWrap);
    form.appendChild(block);
  });
}

function updateProgress() {
  const total = QUESTIONS.length;
  const answered = new Set(
    Array.from(document.querySelectorAll('#quiz-form input[type="radio"]:checked')).map(
      (el) => el.name
    )
  ).size;
  const fill = document.getElementById("progress-fill");
  if (fill) fill.style.width = Math.round((answered / total) * 100) + "%";
}

function tally() {
  const scores = { nt: 0, nf: 0, sj: 0, sp: 0 };
  document
    .querySelectorAll('#quiz-form input[type="radio"]:checked')
    .forEach((el) => {
      scores[el.value] += 1;
    });
  return scores;
}

function topGroup(scores) {
  let best = null;
  Object.entries(scores).forEach(([key, val]) => {
    if (!best || val > scores[best]) best = key;
  });
  return best;
}

function showResult(groupKey, scores) {
  const group = GROUPS[groupKey];

  document.getElementById("quiz-section").style.display = "none";

  const resultBox = document.getElementById("result-box");
  resultBox.classList.add("show");

  document.getElementById("result-tag").textContent = group.types;
  document.getElementById("result-tag").className = "eyebrow " + group.tagClass;
  document.getElementById("result-title").textContent = "당신은 " + group.name + "!";
  document.getElementById("result-desc").textContent = group.desc;

  if (scores) {
    const scoreWrap = document.getElementById("result-scores");
    scoreWrap.innerHTML = "";
    Object.keys(GROUPS).forEach((key) => {
      const chip = document.createElement("span");
      chip.className = "score-chip" + (key === groupKey ? " top" : "");
      chip.textContent = GROUPS[key].name.slice(0, 2) + " " + scores[key] + "점";
      scoreWrap.appendChild(chip);
    });
  } else {
    document.getElementById("result-scores").innerHTML = "";
  }

  document.getElementById("go-group-btn").href = group.url;

  const shareBtn = document.getElementById("share-btn");
  shareBtn.onclick = () => shareResult(groupKey, group);

  resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function shareResult(groupKey, group) {
  const url = new URL(window.location.href);
  url.search = "?result=" + groupKey;

  const shareData = {
    title: "MBTI 공부법 연구소",
    text: "나의 공부 유형은 " + group.name + "! 너는 어떤 유형일까?",
    url: url.toString(),
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(url.toString());
    alert("결과 링크가 복사되었어요! 친구에게 붙여넣기 해보세요.");
  } catch (err) {
    alert("공유 링크: " + url.toString());
  }
}

function initFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const result = params.get("result");
  if (result && GROUPS[result]) {
    document.getElementById("quiz-section").style.display = "none";
    showResult(result, null);
    return true;
  }
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();

  if (initFromQuery()) return;

  const form = document.getElementById("quiz-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const total = QUESTIONS.length;
    const answered = new Set(
      Array.from(form.querySelectorAll('input[type="radio"]:checked')).map(
        (el) => el.name
      )
    ).size;

    if (answered < total) {
      document.getElementById("hint").textContent =
        "아직 답하지 않은 문항이 있어요. 모든 질문에 답해주세요!";
      return;
    }

    const scores = tally();
    showResult(topGroup(scores), scores);
  });
});
