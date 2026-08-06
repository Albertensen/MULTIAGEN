import { m as getContext, c as store_get, p as head, u as unsubscribe_stores, k as escape_html } from "../../../../chunks/index2.js";
import { M as workspaceActions, W as WEBUI_NAME } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import "dompurify";
import "../../../../chunks/index4.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let lastPath = "";
    if (store_get($$store_subs ??= {}, "$page", page).url.pathname !== lastPath) {
      lastPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
      workspaceActions.set([]);
    }
    store_get($$store_subs ??= {}, "$page", page).url.pathname.split("/")[2] ?? "";
    store_get($$store_subs ??= {}, "$workspaceActions", workspaceActions).filter((action) => action.visible ?? true);
    head("q5mosy", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>
		${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Workspace"))} / ${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}
	</title>`);
      });
    });
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
