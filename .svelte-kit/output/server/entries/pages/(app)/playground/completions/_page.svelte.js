import "clsx";
import { o as getContext, a as attr, c as store_get, k as escape_html, e as ensure_array_like, u as unsubscribe_stores } from "../../../../../chunks/root.js";
import "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/state.svelte.js";
import { w as models } from "../../../../../chunks/index2.js";
import "../../../../../chunks/index3.js";
function Completions($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let text = "";
    let selectedModelId = "";
    $$renderer2.push(`<div class="flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><div class="flex flex-col h-full px-2.5"><div class="pt-0.5 pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"><div class="h-full w-full flex flex-col"><div class="flex-1"><textarea id="text-completion-textarea" class="w-full h-full p-3 bg-transparent border border-gray-100/30 dark:border-gray-850/30 outline-hidden resize-none rounded-lg text-sm"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("You're a helpful assistant."))}>`);
    const $$body = escape_html(text);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></div></div></div> <div class="pb-3 flex justify-between items-center"><div class="flex-1">`);
    $$renderer2.select(
      {
        class: "bg-transparent border border-gray-100/30 dark:border-gray-850/30 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden w-full",
        value: selectedModelId
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$models", models));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let model = each_array[$$index];
          $$renderer3.option({ value: model.id, class: "bg-gray-50 dark:bg-gray-700" }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(model.name)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div> <div class="flex gap-2 shrink-0 ml-2">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Run"))}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Completions($$renderer);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
