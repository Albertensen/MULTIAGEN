import { f as fallback, a as attr, d as attr_class, g as clsx, b as bind_props, m as getContext, j as slot, q as stringify, k as escape_html, c as store_get, e as ensure_array_like, u as unsubscribe_stores } from "./index2.js";
import { o as onDestroy } from "./index-server.js";
import { a as toast } from "./Toaster.svelte_svelte_type_style_lang.js";
import { u as user } from "./index3.js";
import { a as Link_preview, b as Link_preview_trigger, U as UserStatusLinkPreview, s as searchUsers } from "./UserStatusLinkPreview.js";
import { a as WEBUI_API_BASE_URL } from "./index4.js";
import { X as XMark } from "./XMark.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
import "./state.svelte.js";
import "dompurify";
import { T as Tooltip } from "./Tooltip.js";
import { S as Spinner } from "./Spinner.js";
function ChevronLeft($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
let closeActiveProfilePreview = null;
function ProfilePreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    let user2 = fallback($$props["user"], null);
    let align = fallback($$props["align"], "center");
    let side = fallback($$props["side"], "right");
    let sideOffset = fallback($$props["sideOffset"], 8);
    let openPreview = false;
    const closeProfilePreview = () => {
      if (openPreview) {
        openPreview = false;
      }
    };
    onDestroy(() => {
      if (closeActiveProfilePreview === closeProfilePreview) {
        closeActiveProfilePreview = null;
      }
    });
    if (openPreview && closeActiveProfilePreview !== closeProfilePreview) {
      closeActiveProfilePreview?.();
      closeActiveProfilePreview = closeProfilePreview;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Link_preview($$renderer3, {
        openDelay: 0,
        closeDelay: 200,
        get open() {
          return openPreview;
        },
        set open($$value) {
          openPreview = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          Link_preview_trigger($$renderer4, {
            class: "flex items-center",
            children: ($$renderer5) => {
              $$renderer5.push(`<button type="button" class="cursor-pointer no-underline! font-normal!"><!--[-->`);
              slot($$renderer5, $$props, "default", {}, null);
              $$renderer5.push(`<!--]--></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserStatusLinkPreview($$renderer4, { id: user2?.id, openPreview, side, align, sideOffset });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { user: user2, align, side, sideOffset });
  });
}
function Checkbox($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let state = fallback($$props["state"], "unchecked");
    let indeterminate = fallback($$props["indeterminate"], false);
    let disabled = fallback($$props["disabled"], false);
    let ariaLabel = fallback($$props["ariaLabel"], "");
    let disabledClassName = fallback($$props["disabledClassName"], "opacity-50 cursor-not-allowed");
    let _state = "unchecked";
    _state = state;
    $$renderer2.push(`<button${attr_class(` outline -outline-offset-1 outline-[1.5px] outline-gray-200 dark:outline-gray-600 ${state !== "unchecked" ? "bg-black outline-black " : "hover:outline-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"} text-white transition-all rounded-sm inline-block w-3.5 h-3.5 relative ${stringify(disabled ? disabledClassName : "")}`)} type="button" role="checkbox"${attr("aria-checked", indeterminate && _state !== "checked" ? "mixed" : _state === "checked")}${attr("aria-label", ariaLabel || void 0)}${attr("disabled", disabled, true)}><div class="top-0 left-0 absolute w-full flex justify-center">`);
    if (_state === "checked") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 12 4.7 4.5 9.3-9"></path></svg>`);
    } else if (indeterminate) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<svg class="w-3 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14"></path></svg>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></button>`);
    bind_props($$props, { state, indeterminate, disabled, ariaLabel, disabledClassName });
  });
}
function MemberSelector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let includeGroups = fallback($$props["includeGroups"], true);
    let includeUsers = fallback($$props["includeUsers"], true);
    let pagination = fallback($$props["pagination"], false);
    let includeSessionUser = fallback($$props["includeSessionUser"], false);
    let accessGrants = fallback($$props["accessGrants"], () => [], true);
    let groupIds = fallback($$props["groupIds"], () => [], true);
    let userIds = fallback($$props["userIds"], () => [], true);
    let filteredGroups = [];
    let selectedGroup = {};
    let selectedUsers = {};
    let page = 1;
    let users = null;
    let total = null;
    let query = "";
    let searchDebounceTimer;
    let orderBy = "name";
    let direction = "asc";
    const getUserList = async () => {
      try {
        const res = await searchUsers(localStorage.token, query, orderBy, direction, page).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          users = res.users;
          total = res.total;
        }
      } catch (err) {
        /* @__PURE__ */ console.error(err);
      }
    };
    onDestroy(() => {
      clearTimeout(searchDebounceTimer);
    });
    filteredGroups = [];
    {
      getUserList();
    }
    $$renderer2.push(`<div>`);
    if (users === null || total === null) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="my-10">`);
      Spinner($$renderer2, { className: "size-5" });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      if (groupIds.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="mx-1 mb-1.5"><div class="text-xs text-gray-500 mx-0.5 mb-1">${escape_html(groupIds.length)}
					${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("groups"))}</div> <div class="flex gap-1 flex-wrap"><!--[-->`);
        const each_array = ensure_array_like(groupIds);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let id = each_array[$$index];
          if (selectedGroup[id]) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<button type="button" class="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100/50 dark:bg-gray-850 rounded-lg text-xs"><div>${escape_html(selectedGroup[id].name)} <span class="text-xs text-gray-500">${escape_html(selectedGroup[id].member_count)}</span></div> <div>`);
            XMark($$renderer2, { className: "size-3" });
            $$renderer2.push(`<!----></div></button>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (userIds.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="mx-1 mb-1.5"><div class="text-xs text-gray-500 mx-0.5 mb-1">${escape_html(userIds.length)}
					${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("users"))}</div> <div class="flex gap-1 flex-wrap"><!--[-->`);
        const each_array_1 = ensure_array_like(userIds);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let id = each_array_1[$$index_1];
          if (selectedUsers[id]) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<button type="button" class="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100/50 dark:bg-gray-850 rounded-lg text-xs"><div>${escape_html(selectedUsers[id].name)}</div> <div>`);
            XMark($$renderer2, { className: "size-3" });
            $$renderer2.push(`<!----></div></button>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex gap-1 mb-1"><div class="flex w-full space-x-2"><div class="flex flex-1"><div class="self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"${attr("value", query)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))}/></div></div></div> `);
      if (users.length > 0 || filteredGroups.length > 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="scrollbar-hidden relative whitespace-nowrap w-full max-w-full"><div class="text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-full"><div class="w-full max-h-96 overflow-y-auto rounded-lg">`);
        if (includeGroups && filteredGroups.length > 0) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="text-xs text-gray-500 mb-1 mx-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Groups"))}</div> <div class="mb-3"><!--[-->`);
          const each_array_2 = ensure_array_like(filteredGroups);
          for (let groupIdx = 0, $$length = each_array_2.length; groupIdx < $$length; groupIdx++) {
            let group = each_array_2[groupIdx];
            $$renderer2.push(`<button class="dark:border-gray-850 text-xs flex items-center justify-between w-full" type="button"><div class="px-3 py-1.5 font-normal text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2">`);
            Tooltip($$renderer2, {
              content: group.name,
              placement: "top-start",
              children: ($$renderer3) => {
                $$renderer3.push(`<div class="font-normal truncate flex items-center gap-1">${escape_html(group.name)} <span class="text-gray-500">${escape_html(group.member_count)}</span></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer2.push(`<!----></div></div> <div class="px-3 py-1"><div class="translate-y-0.5">`);
            Checkbox($$renderer2, {
              state: (groupIds ?? []).includes(group.id) ? "checked" : "unchecked"
            });
            $$renderer2.push(`<!----></div></div></button>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (includeUsers) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="text-xs text-gray-500 mb-1 mx-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Users"))}</div> <div><!--[-->`);
          const each_array_3 = ensure_array_like(users);
          for (let userIdx = 0, $$length = each_array_3.length; userIdx < $$length; userIdx++) {
            let user$1 = each_array_3[userIdx];
            if (!accessGrants.some((grant) => grant.principal_type === "user" && grant.principal_id === user$1.id) && (includeSessionUser || user$1?.id !== store_get($$store_subs ??= {}, "$_user", user)?.id)) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<button class="dark:border-gray-850 text-xs flex items-center justify-between w-full" type="button"><div class="px-3 py-1.5 font-normal text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2">`);
              ProfilePreview($$renderer2, {
                user: user$1,
                side: "right",
                align: "center",
                sideOffset: 6,
                children: ($$renderer3) => {
                  $$renderer3.push(`<img class="rounded-2xl w-6 h-6 object-cover flex-shrink-0"${attr("src", `${WEBUI_API_BASE_URL}/users/${user$1.id}/profile/image`)} alt="user"/>`);
                },
                $$slots: { default: true }
              });
              $$renderer2.push(`<!----> `);
              Tooltip($$renderer2, {
                content: user$1.email,
                placement: "top-start",
                children: ($$renderer3) => {
                  $$renderer3.push(`<div class="font-normal truncate">${escape_html(user$1.name)}</div>`);
                },
                $$slots: { default: true }
              });
              $$renderer2.push(`<!----> `);
              if (user$1?.is_active) {
                $$renderer2.push("<!--[0-->");
                $$renderer2.push(`<div><span class="relative flex size-1.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex size-1.5 rounded-full bg-green-500"></span></span></div>`);
              } else {
                $$renderer2.push("<!--[-1-->");
              }
              $$renderer2.push(`<!--]--></div></div> <div class="px-3 py-1"><div class="translate-y-0.5">`);
              Checkbox($$renderer2, {
                state: (userIds ?? []).includes(user$1.id) ? "checked" : "unchecked"
              });
              $$renderer2.push(`<!----></div></div></button>`);
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="text-gray-500 text-xs text-center py-5 px-10">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No users were found."))}</div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      includeGroups,
      includeUsers,
      pagination,
      includeSessionUser,
      accessGrants,
      groupIds,
      userIds
    });
  });
}
export {
  ChevronLeft as C,
  MemberSelector as M,
  ProfilePreview as P
};
//# sourceMappingURL=MemberSelector.js.map
