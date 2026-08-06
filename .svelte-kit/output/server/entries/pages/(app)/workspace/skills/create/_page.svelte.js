import { f as fallback, m as getContext, u as unsubscribe_stores, b as bind_props, c as store_get, k as escape_html, a as attr } from "../../../../../../chunks/index2.js";
import { a as toast } from "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { g as goto } from "../../../../../../chunks/client.js";
import { u as user, T as skills } from "../../../../../../chunks/index3.js";
import { u as updateSkillAccessGrants, c as createNewSkill, g as getSkills } from "../../../../../../chunks/index11.js";
import { T as Tooltip } from "../../../../../../chunks/Tooltip.js";
import { a as AccessControlModal, A as AccessButton } from "../../../../../../chunks/AccessButton.js";
import { C as ChevronLeft } from "../../../../../../chunks/MemberSelector.js";
import "../../../../../../chunks/index4.js";
import "@sveltejs/kit/internal";
import "../../../../../../chunks/exports.js";
import "../../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../../chunks/root.js";
import "../../../../../../chunks/state.svelte.js";
function SkillEditor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let onSubmit = $$props["onSubmit"];
    let edit = fallback($$props["edit"], false);
    let skill = fallback($$props["skill"], null);
    let clone = fallback($$props["clone"], false);
    let disabled = fallback($$props["disabled"], false);
    const i18n = getContext("i18n");
    let loading = false;
    let name = "";
    let id = "";
    let description = "";
    let content = "";
    let accessGrants = [];
    let showAccessControlModal = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AccessControlModal($$renderer3, {
        accessRoles: ["read", "write"],
        share: store_get($$store_subs ??= {}, "$user", user)?.permissions?.sharing?.skills || store_get($$store_subs ??= {}, "$user", user)?.role === "admin",
        sharePublic: store_get($$store_subs ??= {}, "$user", user)?.permissions?.sharing?.public_skills || store_get($$store_subs ??= {}, "$user", user)?.role === "admin",
        shareUsers: (store_get($$store_subs ??= {}, "$user", user)?.permissions?.access_grants?.allow_users ?? true) || store_get($$store_subs ??= {}, "$user", user)?.role === "admin",
        onChange: async () => {
          if (edit && skill?.id) {
            try {
              await updateSkillAccessGrants(localStorage.token, skill.id, accessGrants);
              toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Saved"));
            } catch (error) {
              toast.error(`${error}`);
            }
          }
        },
        get show() {
          return showAccessControlModal;
        },
        set show($$value) {
          showAccessControlModal = $$value;
          $$settled = false;
        },
        get accessGrants() {
          return accessGrants;
        },
        set accessGrants($$value) {
          accessGrants = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="flex h-full w-full min-w-0 flex-col overflow-hidden"><form class="flex h-full min-h-0 min-w-0 flex-col"><button class="mb-1 flex h-6 w-fit items-center gap-1 rounded-md text-xs text-gray-400 transition-colors duration-75 hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-300" type="button">`);
      ChevronLeft($$renderer3, { className: "size-3", strokeWidth: "2" });
      $$renderer3.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Back"))}</span></button> <div class="flex shrink-0 items-start gap-2 pb-2 px-1"><div class="min-w-0 flex-1">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g. Code Review Guidelines"),
        placement: "top-start",
        children: ($$renderer4) => {
          $$renderer4.push(`<input class="w-full bg-transparent text-sm outline-hidden" type="text"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill Name"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill Name"))}${attr("value", name)} required=""${attr("disabled", disabled, true)}/>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="mt-0.5 flex min-w-0 items-center gap-2 text-xs text-gray-500">`);
      if (edit) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="shrink-0 truncate font-mono"${attr("title", id)}>${escape_html(id)}</div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        Tooltip($$renderer3, {
          className: "min-w-[8rem] flex-1",
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g. code-review-guidelines"),
          placement: "top-start",
          children: ($$renderer4) => {
            $$renderer4.push(`<input class="w-full bg-transparent font-mono outline-hidden disabled:text-gray-500" type="text"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill ID"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill ID"))}${attr("value", id)} required=""${attr("disabled", edit, true)}/>`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer3.push(`<!--]--> `);
      Tooltip($$renderer3, {
        className: "flex min-w-0 flex-1 items-center",
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g. Step-by-step instructions for code reviews"),
        placement: "top-start",
        children: ($$renderer4) => {
          $$renderer4.push(`<input class="w-full bg-transparent outline-hidden" type="text"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill Description"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill Description"))}${attr("value", description)}${attr("disabled", disabled, true)}/>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div> <div class="flex shrink-0 items-center gap-1 pr-0.5">`);
      if (!disabled) {
        $$renderer3.push("<!--[0-->");
        AccessButton($$renderer3, {});
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<span class="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-850">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Read Only"))}</span>`);
      }
      $$renderer3.push(`<!--]--></div></div> <div class="min-h-0 flex-1 overflow-hidden rounded-lg bg-gray-50/60 dark:bg-white/[0.03]">`);
      if (disabled) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="h-full overflow-y-auto px-3 py-2"><pre class="whitespace-pre-wrap font-mono text-[11px] leading-relaxed">${escape_html(content)}</pre></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<textarea class="h-full w-full resize-none bg-transparent px-3 py-2 font-mono text-[11px] leading-relaxed outline-hidden placeholder:text-gray-400 dark:placeholder:text-gray-600"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter skill instructions in markdown..."))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill Instructions"))} required="">`);
        const $$body = escape_html(content);
        if ($$body) {
          $$renderer3.push(`${$$body}`);
        }
        $$renderer3.push(`</textarea>`);
      }
      $$renderer3.push(`<!--]--></div> `);
      if (!disabled) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex shrink-0 justify-end py-2"><button class="flex h-7 items-center gap-1.5 rounded-lg bg-gray-900 px-2.5 text-xs text-white transition hover:bg-black disabled:opacity-60 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white" type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(edit ? "Save" : "Save & Create"))} `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></button></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></form></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { onSubmit, edit, skill, clone, disabled });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let skill = null;
    let clone = false;
    const onSubmit = async (_skill) => {
      const res = await createNewSkill(localStorage.token, _skill).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Skill created successfully"));
        await skills.set(await getSkills(localStorage.token));
        await goto();
      }
    };
    $$renderer2.push(`<!---->`);
    {
      SkillEditor($$renderer2, { skill, onSubmit, clone });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
