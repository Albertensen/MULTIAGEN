import { m as getContext, f as fallback, k as escape_html, c as store_get, a as attr, u as unsubscribe_stores, b as bind_props, p as head } from "../../../chunks/index2.js";
import "dompurify";
import "marked";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import "../../../chunks/index4.js";
import { c as config, W as WEBUI_NAME } from "../../../chunks/index3.js";
import "@sveltejs/kit";
function OnBoarding($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], true);
    let getStartedHandler = fallback($$props["getStartedHandler"], () => {
    });
    if (show) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="relative h-screen max-h-[100dvh] w-full overflow-hidden text-white"><div class="fixed top-6 left-6 z-50 sm:top-10 sm:left-10"><img id="logo" crossorigin="anonymous" src="/static/favicon.png" class="size-6 rounded-full" alt="logo"/></div> <video class="absolute inset-0 h-full w-full object-cover" src="/assets/welcome.mp4" autoplay="" muted="" loop="" playsinline="" preload="auto" poster="/assets/welcome.webp" aria-hidden="true"></video> <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div> <div class="absolute inset-0 bg-linear-to-r from-black/50 via-black/10 to-transparent"></div> <div class="relative z-10 flex h-screen max-h-[100dvh] w-full"><div class="flex w-full flex-col justify-end px-6 pb-8 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14"><div class="max-w-3xl"><div class="mb-4 text-[11px] font-medium tracking-[0.18em] uppercase opacity-35">Open WebUI</div> <h1 class="m-0 max-w-3xl text-2xl leading-[1.15] font-light tracking-tight lg:text-4xl">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Welcome to your AI home."))}</h1> <p class="mt-6 max-w-xl text-sm leading-relaxed font-light text-white/60 lg:text-base">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Run AI on your own terms. Connect any model, extend with code, and protect what matters without compromise. Your models, your data, your machine, wherever you open it."))}</p> <div class="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-7"><button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Get started"))} class="group relative z-20 inline-flex min-w-40 items-center justify-center gap-2 bg-white px-8 py-3 text-sm font-normal text-black transition hover:bg-white/90 focus:ring-2 focus:ring-white/50 focus:outline-hidden">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Get started"))} <svg class="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button> <a class="inline-flex items-center text-sm text-white/60 transition hover:text-white" href="https://docs.openwebui.com/" target="_blank" rel="noopener noreferrer">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Read the docs"))}</a></div></div></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, getStartedHandler });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    getContext("i18n");
    store_get($$store_subs ??= {}, "$config", config)?.features.enable_ldap ? "ldap" : "signin";
    let onboarding = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1s728sz", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>
		${escape_html(`${store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME)}`)}
	</title>`);
        });
      });
      OnBoarding($$renderer3, {
        getStartedHandler: () => {
          onboarding = false;
          store_get($$store_subs ??= {}, "$config", config)?.features.enable_ldap ? "ldap" : "signup";
        },
        get show() {
          return onboarding;
        },
        set show($$value) {
          onboarding = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="w-full h-screen max-h-[100dvh] text-white relative" id="auth-page"><div class="w-full h-full absolute top-0 left-0 bg-white dark:bg-black"></div> <div class="w-full absolute top-0 left-0 right-0 h-8 drag-region"></div> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
