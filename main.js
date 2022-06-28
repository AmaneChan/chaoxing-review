const t = 8000; // 间隔时间 建议在 5000 - 8000 之间

const chaps = document.querySelectorAll(".ncells a");
let i = 0;
setInterval(() => eval(chaps[i++ % chaps.length]["href"]), t);
