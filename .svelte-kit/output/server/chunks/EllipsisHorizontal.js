import { f as fallback, a as attr, d as attr_class, g as clsx, k as escape_html, b as bind_props } from "./root.js";
function Textarea($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let value = fallback($$props["value"], "");
    let placeholder = fallback($$props["placeholder"], "");
    let rows = fallback($$props["rows"], 1);
    let minSize = fallback($$props["minSize"], null);
    let maxSize = fallback($$props["maxSize"], null);
    let required = fallback($$props["required"], false);
    let readonly = fallback($$props["readonly"], false);
    let className = fallback($$props["className"], "w-full rounded-lg px-3.5 py-2 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden  h-full");
    let ariaLabel = fallback($$props["ariaLabel"], null);
    let onInput = fallback($$props["onInput"], () => {
    });
    let onBlur = fallback($$props["onBlur"], () => {
    });
    $$renderer2.push(`<textarea${attr("placeholder", placeholder)}${attr("aria-label", ariaLabel || placeholder)}${attr_class(clsx(className))} style="field-sizing: content;"${attr("rows", rows)}${attr("required", required, true)}${attr("readonly", readonly, true)}>`);
    const $$body = escape_html(value);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea>`);
    bind_props($$props, {
      value,
      placeholder,
      rows,
      minSize,
      maxSize,
      required,
      readonly,
      className,
      ariaLabel,
      onInput,
      onBlur
    });
  });
}
function EllipsisHorizontal($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
export {
  EllipsisHorizontal as E,
  Textarea as T
};
//# sourceMappingURL=EllipsisHorizontal.js.map
