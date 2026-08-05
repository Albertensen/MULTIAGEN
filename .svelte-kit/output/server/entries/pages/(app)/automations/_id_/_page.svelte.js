import { c as store_get, u as unsubscribe_stores } from "../../../../../chunks/root.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/index2.js";
import "dayjs";
import "dayjs/plugin/localizedFormat.js";
/* empty css                                                        */
import { S as Spinner } from "../../../../../chunks/Spinner.js";
import "../../../../../chunks/index3.js";
import "dompurify";
import "marked";
/* empty css                                                                */
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    store_get($$store_subs ??= {}, "$page", page).params.id;
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex h-full w-full items-center justify-center">`);
      Spinner($$renderer2, { className: "size-5" });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
