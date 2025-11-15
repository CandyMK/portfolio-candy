import { useEffect, useRef, useState } from "react";

export default function TypingTitle() {
  const titleRef = useRef(null);

  const beforeName = "Hi, I'm ";
  const name = "Candy Maurentia Kwan";
  const afterName = "<br />and you can call me";
  const nickname = " Candy!";

  const fullText = beforeName + name + afterName + nickname;

  useEffect(() => {
    const el = titleRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startTyping();
      }
    });

    observer.observe(el);

    function startTyping() {
      el.innerHTML = "";
      let index = 0;

      const interval = setInterval(() => {
        const current = fullText.slice(0, index);
        
        let result = current
          .replace(name, `<span class="gradient-text">${name}</span>`)
          .replace(nickname, `<span class="gradient-text">${nickname}</span>`); 

        el.innerHTML = result;

        index++;

        if (index > fullText.length) {
          clearInterval(interval);
        }
      }, 40);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <h1 ref={titleRef} className="hero-title"></h1>
  );
}
