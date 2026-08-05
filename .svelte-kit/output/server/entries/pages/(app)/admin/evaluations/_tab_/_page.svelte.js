import "clsx";
import { o as getContext, c as store_get, u as unsubscribe_stores } from "../../../../../../chunks/root.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { N as adminLeaderboardCount, O as adminFeedbackCount } from "../../../../../../chunks/index2.js";
import { f as formatNumber } from "../../../../../../chunks/index3.js";
/* empty css                                                           */
import "dompurify";
import "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "file-saver";
import "dayjs";
import "dayjs/plugin/relativeTime.js";
function Evaluations($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
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
      selectedTab = ["leaderboard", "feedback"].includes(tabFromPath) ? tabFromPath : "leaderboard";
    }
    if (selectedTab) {
      scrollToTab(selectedTab);
    }
    store_get($$store_subs ??= {}, "$adminLeaderboardCount", adminLeaderboardCount) === null ? null : formatNumber(store_get($$store_subs ??= {}, "$adminLeaderboardCount", adminLeaderboardCount));
    store_get($$store_subs ??= {}, "$adminFeedbackCount", adminFeedbackCount) === null ? null : formatNumber(store_get($$store_subs ??= {}, "$adminFeedbackCount", adminFeedbackCount));
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Evaluations($$renderer);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
