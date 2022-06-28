# chaoxing-review
超星学习通自动复习

# Usage

进入课程，按 `F12` 打开开发者工具，复制 `main.js` 中的内容到 `console`，回车执行并关闭控制台，enjoy it！

---

`main.js`：

```javascript
const t = 8000; // 间隔时间 建议在 5000 - 8000 之间

const chaps = document.querySelectorAll(".ncells a");
let i = 0;
setInterval(() => eval(chaps[i++ % chaps.length]["href"]), t);
```
