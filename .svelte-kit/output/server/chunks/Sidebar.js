import { f as fallback, a as attr, d as attr_class, g as clsx, b as bind_props } from "./index2.js";
function Sidebar($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr_class(clsx(className))}><path d="M19 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 19C21 20.1046 20.1046 21 19 21Z"></path><path d="M9.5 21V3"></path><path d="M5.5 10L7.25 12L5.5 14"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
export {
  Sidebar as S
};
//# sourceMappingURL=Sidebar.js.map
