import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // 所有不需要置顶的 slug 页面前缀
  const slugPrefixes = [
    "/ewallet-casino-providers",
    "/bng-ewallet-slots",
    "/cq9-ewallet-casino-games",
    "/pegasus-ewallet-games",
    "/joker-online-slots",
    "/rich-gaming-ewallet-games",
  ];

  const isSlugPage = slugPrefixes.some(prefix =>
    pathname.startsWith(prefix) && pathname !== prefix
  );

  useEffect(() => {
    // 只有：非 slug 页 + PUSH / POP 才置顶
    if (!isSlugPage && (navigationType === "PUSH" || navigationType === "POP")) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, navigationType, isSlugPage]);

  return null;
}
