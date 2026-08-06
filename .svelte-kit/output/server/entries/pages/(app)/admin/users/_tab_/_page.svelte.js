import "clsx";
import { m as getContext, c as store_get, u as unsubscribe_stores } from "../../../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../../../chunks/exports.js";
import "../../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../../chunks/root.js";
import "../../../../../../chunks/state.svelte.js";
import { c as config, Q as adminUserCount, R as adminGroupCount } from "../../../../../../chunks/index3.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { f as formatNumber } from "../../../../../../chunks/index4.js";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/localizedFormat.js";
import "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "dompurify";
/* empty css                                                           */
import "dayjs/plugin/calendar.js";
import "marked";
/* empty css                                                                   */
function Users($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let usersSeatLimit;
    getContext("i18n");
    let selectedTab;
    const scrollToTab = (tabId) => {
      const tabElement = document.getElementById(tabId);
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    };
    {
      const pathParts = store_get($$store_subs ??= {}, "$page", page).url.pathname.split("/");
      const tabFromPath = pathParts[pathParts.length - 1];
      selectedTab = ["overview", "groups"].includes(tabFromPath) ? tabFromPath : "overview";
    }
    if (selectedTab) {
      scrollToTab(selectedTab);
    }
    usersSeatLimit = store_get($$store_subs ??= {}, "$config", config)?.license_metadata?.seats ?? null;
    usersSeatLimit !== null && (store_get($$store_subs ??= {}, "$adminUserCount", adminUserCount) ?? 0) > usersSeatLimit;
    store_get($$store_subs ??= {}, "$adminUserCount", adminUserCount) === null ? null : usersSeatLimit !== null ? `${formatNumber(store_get($$store_subs ??= {}, "$adminUserCount", adminUserCount))} of ${formatNumber(usersSeatLimit)}` : formatNumber(store_get($$store_subs ??= {}, "$adminUserCount", adminUserCount));
    store_get($$store_subs ??= {}, "$adminGroupCount", adminGroupCount) === null ? null : formatNumber(store_get($$store_subs ??= {}, "$adminGroupCount", adminGroupCount));
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Users($$renderer);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
