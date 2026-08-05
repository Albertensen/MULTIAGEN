import { f as fallback, o as getContext, b as bind_props, q as head, k as escape_html, c as store_get, u as unsubscribe_stores } from "./root.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { o as onDestroy } from "./index-server.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import fileSaver from "file-saver";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
import { W as WEBUI_NAME } from "./index2.js";
import "./index3.js";
import "dompurify";
import "marked";
/* empty css                                            */
/* empty css                                    */
import { S as Spinner } from "./Spinner.js";
import "dayjs/plugin/localizedFormat.js";
function Prompts($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    dayjs.extend(relativeTime);
    let showCreateOnMount = fallback($$props["showCreateOnMount"], false);
    let createModalCloseHref = fallback($$props["createModalCloseHref"], "");
    const i18n = getContext("i18n");
    let searchDebounceTimer;
    onDestroy(() => {
      clearTimeout(searchDebounceTimer);
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1jqd4z5", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>
		${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Prompts"))} / ${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}
	</title>`);
        });
      });
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="w-full h-full flex justify-center items-center">`);
        Spinner($$renderer3, { className: "size-5" });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { showCreateOnMount, createModalCloseHref });
  });
}
export {
  Prompts as P
};
//# sourceMappingURL=Prompts.js.map
