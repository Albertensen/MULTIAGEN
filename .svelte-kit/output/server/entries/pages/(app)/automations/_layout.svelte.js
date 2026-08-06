import { m as getContext, o as setContext, d as attr_class, c as store_get, k as escape_html, j as slot, u as unsubscribe_stores, a as attr, i as spread_props } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { h as showSidebar, m as mobile } from "../../../../chunks/index3.js";
import { a as WEBUI_API_BASE_URL, f as formatNumber } from "../../../../chunks/index4.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
import { T as Tooltip } from "../../../../chunks/Tooltip.js";
const getAutomationItems = async (token, query, status, page, folder_id) => {
  let error = null;
  const searchParams = new URLSearchParams();
  {
    searchParams.append("page", page.toString());
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/automations/list?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    const total = writable(null);
    let itemName = null;
    let HeaderActions = null;
    let headerActionProps = {};
    const setHeader = ({
      itemName: nextItemName = null,
      actions = null,
      actionProps = {}
    }) => {
      itemName = nextItemName;
      HeaderActions = actions;
      headerActionProps = actionProps;
    };
    const clearHeader = () => {
      itemName = null;
      HeaderActions = null;
      headerActionProps = {};
    };
    const refreshCount = async () => {
      const res = await getAutomationItems(localStorage.token, null, "all", 1).catch(() => null);
      if (res) {
        total.set(res.total);
      }
    };
    setContext("automationsLayout", {
      total,
      setTotal: (value) => total.set(value),
      refreshCount,
      setHeader,
      clearHeader
    });
    $$renderer2.push(`<div${attr_class(`flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} max-w-full`)}><div class="flex h-full min-h-0 flex-col"><div class="shrink-0 px-2.5 pt-2 pb-1"><div class="flex items-center gap-0.5 md:gap-1">`);
    if (store_get($$store_subs ??= {}, "$mobile", mobile)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div${attr_class(`${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "md:hidden" : ""} flex flex-none items-center`)}>`);
      Tooltip($$renderer2, {
        content: store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Sidebar"),
        children: ($$renderer3) => {
          $$renderer3.push(`<button id="sidebar-toggle-button" class="flex size-7 items-center justify-center text-gray-400 transition"${attr("aria-label", store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Sidebar"))} type="button">`);
          Sidebar($$renderer3, { className: "size-4" });
          $$renderer3.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex w-full min-w-0 items-center"><div class="flex min-w-0 flex-1 items-center gap-1 py-1">`);
    if (itemName) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button class="min-w-fit px-1 text-sm select-none transition"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Back"))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Automations"))}</button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="min-w-fit px-1 text-sm select-none">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Automations"))}</span>`);
    }
    $$renderer2.push(`<!--]--> <span class="text-sm text-gray-500 dark:text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$total", total) === null ? "" : formatNumber(store_get($$store_subs ??= {}, "$total", total)))}</span> `);
    if (itemName) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="text-sm text-gray-300 dark:text-gray-800 px-2">/</span> <span class="min-w-0 flex-1 truncate text-sm text-gray-900 dark:text-white">${escape_html(itemName)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (HeaderActions) {
      $$renderer2.push("<!--[0-->");
      if (HeaderActions) {
        $$renderer2.push("<!--[-->");
        HeaderActions($$renderer2, spread_props([headerActionProps]));
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="min-h-0 flex-1 overflow-hidden"><!--[-->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
