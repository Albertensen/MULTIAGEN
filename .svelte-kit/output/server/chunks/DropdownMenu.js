import { f as fallback, d as attr_class, h as attr_style, j as slot, b as bind_props } from "./index2.js";
function DropdownMenu($$renderer, $$props) {
  let className = fallback($$props["className"], "");
  let style = fallback($$props["style"], "");
  $$renderer.push(`<div${attr_class(`rounded-xl! p-0.5! border border-gray-100 dark:border-gray-800 z-50 bg-white text-gray-900 dark:bg-gray-850 dark:text-white shadow-lg ${className} [&_button:hover]:bg-gray-50/40! dark:[&_button:hover]:bg-gray-800/40! [&_a:hover]:bg-gray-50/40! dark:[&_a:hover]:bg-gray-800/40! [&_button:hover]:text-gray-900 dark:[&_button:hover]:text-gray-100 [&_a:hover]:text-gray-900 dark:[&_a:hover]:text-gray-100 [&>button]:flex [&>button]:w-full [&>button]:h-[1.6875rem]! [&>button]:items-center [&>button]:gap-2! [&>button]:rounded-xl! [&>button]:bg-transparent [&>button]:px-2! [&>button]:text-[13px]! [&>button]:font-normal! [&>a]:flex [&>a]:w-full [&>a]:h-[1.6875rem]! [&>a]:items-center [&>a]:gap-2! [&>a]:rounded-xl! [&>a]:bg-transparent [&>a]:px-2! [&>a]:text-[13px]! [&>a]:font-normal! [&_button_svg]:size-3.5! [&_a_svg]:size-3.5! [&>hr]:my-0.5 [&>hr]:mx-1`)}${attr_style(style)}><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { className, style });
}
export {
  DropdownMenu as D
};
//# sourceMappingURL=DropdownMenu.js.map
