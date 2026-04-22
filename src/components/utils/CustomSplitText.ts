export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  elements: HTMLElement[] = [];

  constructor(target: any, options?: any) {
    let targets: any[] = [];
    if (Array.isArray(target)) {
      targets = target;
    } else {
      targets = [target];
    }

    targets.forEach((t) => {
      if (typeof t === "string") {
        this.elements.push(
          ...(Array.from(document.querySelectorAll(t)) as HTMLElement[])
        );
      } else if (t instanceof HTMLElement) {
        this.elements.push(t);
      } else if (t instanceof NodeList || Array.isArray(t)) {
        this.elements.push(...(Array.from(t) as HTMLElement[]));
      }
    });

    this.elements.forEach((el) => this.split(el, options));
  }

  split(el: HTMLElement, options: any) {
    // Store original text in a data attribute so we can revert
    if (!el.dataset.originalText) {
      el.dataset.originalText = el.innerText || el.textContent || "";
    }
    const text = el.dataset.originalText;
    el.innerHTML = "";

    const words = text.split(" ");
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      if (options?.wordsClass) wordSpan.className = options.wordsClass;

      const chars = word.split("");
      chars.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.style.display = "inline-block";
        if (options?.charsClass) charSpan.className = options.charsClass;
        charSpan.innerText = char;
        wordSpan.appendChild(charSpan);
        this.chars.push(charSpan);
      });

      el.appendChild(wordSpan);
      this.words.push(wordSpan);

      if (wordIndex < words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });
    
    // We just alias lines to words for simplicity to prevent animation crashes
    this.lines = this.words; 
  }

  revert() {
    this.elements.forEach((el) => {
      if (el.dataset.originalText) {
        el.innerText = el.dataset.originalText;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
