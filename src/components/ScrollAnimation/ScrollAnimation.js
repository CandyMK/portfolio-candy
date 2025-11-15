import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing setelah animasi pertama kali
            // observer.unobserve(entry.target);
          } else {
            // Optional: Hapus class ketika keluar viewport
            // entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe semua section yang ingin dianimasi
    const sections = document.querySelectorAll('.about, .skill, .my-work, .contact, .hero');
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return null;
};

export default ScrollAnimation;