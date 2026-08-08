import { U as RETRIEVAL_API_BASE_URL } from "./index4.js";
import { f as fallback, m as getContext, k as escape_html, c as store_get, j as slot, u as unsubscribe_stores, b as bind_props } from "./index2.js";
const processYoutubeVideo = async (token, url) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/process/youtube`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url
    })
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
const processWeb = async (token, collection_name, url, process = true) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (!process) {
    searchParams.append("process", "false");
  }
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/process/web?${searchParams.toString()}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url,
      collection_name
    })
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
function AddFilesPlaceholder($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title = fallback($$props["title"], "");
    let content = fallback($$props["content"], "");
    const i18n = getContext("i18n");
    $$renderer2.push(`<div class="px-3"><div class="text-center dark:text-white text-2xl font-normal z-50" role="heading" aria-level="2">`);
    if (title) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(title)}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Files"))}`);
    }
    $$renderer2.push(`<!--]--></div> <!--[-->`);
    slot($$renderer2, $$props, "default", {}, () => {
      $$renderer2.push(`<div class="px-2 mt-2 text-center text-gray-700 dark:text-gray-200 w-full">`);
      if (content) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`${escape_html(content)}`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Drop any files here to upload"))}`);
      }
      $$renderer2.push(`<!--]--></div>`);
    });
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { title, content });
  });
}
function FilesOverlay($$renderer, $$props) {
  let show = fallback($$props["show"], false);
  if (show) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="absolute inset-0 w-full h-full flex z-[9999] touch-none pointer-events-none" id="dropzone" role="region" aria-label="Drag and Drop Container"><div class="absolute w-full h-full backdrop-blur-sm bg-gray-100/50 dark:bg-gray-900/80 flex justify-center"><div class="m-auto flex flex-col justify-center"><div class="max-w-md">`);
    AddFilesPlaceholder($$renderer, {});
    $$renderer.push(`<!----></div></div></div></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { show });
}
export {
  FilesOverlay as F,
  processWeb as a,
  processYoutubeVideo as p
};
//# sourceMappingURL=FilesOverlay.js.map
