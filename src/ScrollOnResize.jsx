import { useEffect } from "react";

export default function ScrollOnResize() {
  useEffect(() => {
    const handleResize = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null;
}
