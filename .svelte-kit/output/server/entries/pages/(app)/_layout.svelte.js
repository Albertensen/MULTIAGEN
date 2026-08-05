import { f as fallback, d as attr_class, g as clsx, a as attr, b as bind_props, o as getContext, c as store_get, k as escape_html, u as unsubscribe_stores, t as stringify, j as slot, e as ensure_array_like, v as store_set, s as sanitize_props, l as rest_props, w as invalid_default_snippet } from "../../../chunks/root.js";
import { a as toast } from "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "idb";
import fileSaver from "file-saver";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { a as WEBUI_API_BASE_URL, W as WEBUI_BASE_URL, g as generateInitialsImage, b as WEBUI_BUILD_HASH, c as WEBUI_VERSION, f as formatNumber, d as copyToClipboard } from "../../../chunks/index3.js";
import { u as user, s as settings, c as config, f as folders, g as getChatPinnedStatusById, a as getChatById, b as chatId, d as selectedFolder, m as mobile, h as showSidebar, i as markChatUnreadById, j as updateChatFolderIdById, r as refreshChatList, k as archiveChatById, l as cloneChatById, n as getChatListByFolderId, o as getChatsByFolderId, p as tags, q as getChatList, v as getChatListBySearchText, w as models, x as pinnedNotes, y as socket, z as isApp, A as showSearch, W as WEBUI_NAME, B as channels, C as pinnedChats, D as chats, E as getAllTags, F as setChatReadAt, G as getSharedChatList, H as deleteSharedChatById, I as toolServers, J as terminalServers, K as showSettings, L as showChangelog } from "../../../chunks/index2.js";
import { t as tick, o as onDestroy, c as createEventDispatcher } from "../../../chunks/index-server.js";
import { v4 } from "uuid";
import "sortablejs";
import { g as goto } from "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { g as getSharedFolderChats, u as updateFolderById, a as getFolderById, c as createNewFolder, m as markFolderChatsReadById, b as getFolders, d as getSharedFolders } from "../../../chunks/index5.js";
import DOMPurify from "dompurify";
import "clsx";
import { g as getUsage, a as getToolServersData, b as getBackendConfig, c as getModels, d as getChangelog } from "../../../chunks/index6.js";
import { E as EmojiPicker, g as getSessionUser, G as GarbageBin, P as PinSlash$1, a as Pin$1 } from "../../../chunks/PinSlash.js";
import { D as Dropdown } from "../../../chunks/Dropdown.js";
import { D as DropdownMenu } from "../../../chunks/DropdownMenu.js";
import { T as Tooltip } from "../../../chunks/Tooltip.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { M as Modal } from "../../../chunks/Modal.js";
import { X as XMark, S as Share, D as Download, E as EditPencil, C as ChatCheck, F as Folder$1, A as ArchiveBox, T as Trash, a as ShareChatModal, b as FolderModal, c as FolderShareModal, d as FolderMenu, g as getVoices, e as getOrchestratorPolicy, f as getOrchestratorLifecycle, L as Link, h as Document, i as CodeBracket, s as setModelsConfig, j as setDefaultPromptSuggestions, k as getModelsConfig, l as setToolServerConnections, m as setTerminalServerConnections, n as getTerminalServers } from "../../../chunks/Document.js";
import { E as Emoji, P as Portal, L as Link_preview_content, a as Link_preview, b as Link_preview_trigger, u as updateUserSettings } from "../../../chunks/UserStatusLinkPreview.js";
import { D as DropdownSub } from "../../../chunks/DropdownSub.js";
import "fast-deep-equal";
import { C as Clipboard, S as Sparkles$1, D as DocumentDuplicate, a as CheckCircle } from "../../../chunks/FileItemModal.svelte_svelte_type_style_lang.js";
import "panzoom";
import dayjs from "dayjs";
import "dayjs/locale/af.js";
import "dayjs/locale/am.js";
import "dayjs/locale/ar.js";
import "dayjs/locale/az.js";
import "dayjs/locale/be.js";
import "dayjs/locale/bg.js";
import "dayjs/locale/bi.js";
import "dayjs/locale/bm.js";
import "dayjs/locale/bn.js";
import "dayjs/locale/bo.js";
import "dayjs/locale/br.js";
import "dayjs/locale/bs.js";
import "dayjs/locale/ca.js";
import "dayjs/locale/cs.js";
import "dayjs/locale/cv.js";
import "dayjs/locale/cy.js";
import "dayjs/locale/da.js";
import "dayjs/locale/de.js";
import "dayjs/locale/dv.js";
import "dayjs/locale/el.js";
import "dayjs/locale/en.js";
import "dayjs/locale/eo.js";
import "dayjs/locale/es.js";
import "dayjs/locale/eu.js";
import "dayjs/locale/fa.js";
import "dayjs/locale/fi.js";
import "dayjs/locale/fo.js";
import "dayjs/locale/fr.js";
import "dayjs/locale/fy.js";
import "dayjs/locale/ga.js";
import "dayjs/locale/gd.js";
import "dayjs/locale/gl.js";
import "dayjs/locale/gu.js";
import "dayjs/locale/he.js";
import "dayjs/locale/hi.js";
import "dayjs/locale/hr.js";
import "dayjs/locale/ht.js";
import "dayjs/locale/hu.js";
import "dayjs/locale/id.js";
import "dayjs/locale/is.js";
import "dayjs/locale/it.js";
import "dayjs/locale/ja.js";
import "dayjs/locale/jv.js";
import "dayjs/locale/ka.js";
import "dayjs/locale/kk.js";
import "dayjs/locale/km.js";
import "dayjs/locale/kn.js";
import "dayjs/locale/ko.js";
import "dayjs/locale/ku.js";
import "dayjs/locale/ky.js";
import "dayjs/locale/lb.js";
import "dayjs/locale/lo.js";
import "dayjs/locale/lt.js";
import "dayjs/locale/lv.js";
import "dayjs/locale/me.js";
import "dayjs/locale/mi.js";
import "dayjs/locale/mk.js";
import "dayjs/locale/ml.js";
import "dayjs/locale/mn.js";
import "dayjs/locale/mr.js";
import "dayjs/locale/ms.js";
import "dayjs/locale/mt.js";
import "dayjs/locale/my.js";
import "dayjs/locale/nb.js";
import "dayjs/locale/ne.js";
import "dayjs/locale/nl.js";
import "dayjs/locale/nn.js";
import "dayjs/locale/pl.js";
import "dayjs/locale/pt.js";
import "dayjs/locale/ro.js";
import "dayjs/locale/ru.js";
import "dayjs/locale/rw.js";
import "dayjs/locale/sd.js";
import "dayjs/locale/se.js";
import "dayjs/locale/si.js";
import "dayjs/locale/sk.js";
import "dayjs/locale/sl.js";
import "dayjs/locale/sq.js";
import "dayjs/locale/sr.js";
import "dayjs/locale/ss.js";
import "dayjs/locale/sv.js";
import "dayjs/locale/sw.js";
import "dayjs/locale/ta.js";
import "dayjs/locale/te.js";
import "dayjs/locale/tet.js";
import "dayjs/locale/tg.js";
import "dayjs/locale/th.js";
import "dayjs/locale/tk.js";
import "dayjs/locale/tlh.js";
import "dayjs/locale/tr.js";
import "dayjs/locale/tzl.js";
import "dayjs/locale/tzm.js";
import "dayjs/locale/uk.js";
import "dayjs/locale/ur.js";
import "dayjs/locale/uz.js";
import "dayjs/locale/vi.js";
import "dayjs/locale/yo.js";
import "dayjs/locale/zh.js";
import "dayjs/locale/zh-tw.js";
import "dayjs/locale/et.js";
import "dayjs/locale/en-gb.js";
import "dayjs/plugin/duration.js";
import "dayjs/plugin/relativeTime.js";
import { marked } from "marked";
/* empty css                                                          */
/* empty css                                                  */
import "../../../chunks/pyodideSandboxHost.js";
import "../../../chunks/codemirror.js";
/* empty css                                                        */
import "i18next";
import { C as ConfirmDialog, S as SensitiveInput } from "../../../chunks/ConfirmDialog.js";
import { M as Messages, E as EyeSlash } from "../../../chunks/Messages.js";
import { L as Loader, F as FileItemModal, D as Database$1 } from "../../../chunks/Loader.js";
import { C as Collapsible, a as ChevronUp, D as Download$1 } from "../../../chunks/Download.js";
import { L as Lock, H as Hashtag, g as getChannelWebhooks, u as updateChannelById, c as createNewChannel, a as getChannels } from "../../../chunks/Lock.js";
import { A as AccessControl } from "../../../chunks/AccessControl.js";
import { M as MemberSelector, C as ChevronLeft } from "../../../chunks/MemberSelector.js";
import { X as XMark$1 } from "../../../chunks/XMark.js";
import { P as Plus } from "../../../chunks/Plus.js";
import { C as ChevronDown$1 } from "../../../chunks/ChevronDown.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import calendar from "dayjs/plugin/calendar.js";
import { S as Sidebar } from "../../../chunks/Sidebar.js";
import { C as Check, S as Search$1 } from "../../../chunks/Check.js";
import { T as Textarea, E as EllipsisHorizontal } from "../../../chunks/EllipsisHorizontal.js";
import "../../../chunks/index4.js";
import { S as Switch_1 } from "../../../chunks/Switch.js";
import { w as writable } from "../../../chunks/index.js";
import { s as searchFiles, g as getFileCount } from "../../../chunks/index7.js";
import { A as AccessButton, a as AccessControlModal, L as LockClosed } from "../../../chunks/AccessButton.js";
import { A as AdjustmentsHorizontal } from "../../../chunks/AdjustmentsHorizontal.js";
import "socket.io-client";
import { d as deleteAllModels, g as getBaseModelTags, a as getBaseModels, M as ModelEditor, u as updateModelAccessGrants, b as updateModelById, c as createNewModel, e as getModelById } from "../../../chunks/ModelEditor.js";
import { S as Select } from "../../../chunks/Select.js";
/* empty css                                                   */
import { h as html } from "../../../chunks/html.js";
var TTS_RESPONSE_SPLIT = /* @__PURE__ */ ((TTS_RESPONSE_SPLIT2) => {
  TTS_RESPONSE_SPLIT2["PUNCTUATION"] = "punctuation";
  TTS_RESPONSE_SPLIT2["PARAGRAPHS"] = "paragraphs";
  TTS_RESPONSE_SPLIT2["NONE"] = "none";
  return TTS_RESPONSE_SPLIT2;
})(TTS_RESPONSE_SPLIT || {});
const createNewNote = async (token, note) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...note
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
const getPinnedNoteList = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/notes/pinned`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res ?? [];
};
const createNoteHandler = async (title, md, html2) => {
  const res = await createNewNote(localStorage.token, {
    // YYYY-MM-DD
    title,
    data: {
      content: {
        json: null,
        html: "",
        md: ""
      }
    },
    meta: null,
    access_grants: []
  }).catch((error) => {
    toast.error(`${error}`);
    return null;
  });
  if (res) {
    return res;
  }
};
function EmojiFace($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function UserStatusModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let onSave = fallback($$props["onSave"], () => {
    });
    let emoji = "";
    let message = "";
    let loading = false;
    const highContrastInputClass = "rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 py-1.5 text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const init = async () => {
      emoji = store_get($$store_subs ??= {}, "$user", user)?.status_emoji || "";
      message = store_get($$store_subs ??= {}, "$user", user)?.status_message || "";
      await tick();
      const input = document.getElementById("status-message");
      if (input) {
        input.focus();
        input.select();
      }
    };
    const resetHandler = () => {
      emoji = "";
      message = "";
      loading = false;
    };
    if (show) {
      init();
    } else {
      resetHandler();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-4 pt-3 pb-1"><div class="text-sm self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Set your status"))}</div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div><div class="text-xs text-gray-500 mb-1.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Status"))}</div> <div class="flex items-center px-2.5 py-2 gap-3 border border-gray-100/50 dark:border-gray-850/50 rounded-xl">`);
          EmojiPicker($$renderer4, {
            onClose: () => {
            },
            onSubmit: (name) => {
              /* @__PURE__ */ console.log(name);
              emoji = name;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<div class="flex items-center">`);
              if (emoji) {
                $$renderer5.push("<!--[0-->");
                Emoji($$renderer5, { shortCode: emoji });
              } else {
                $$renderer5.push("<!--[-1-->");
                EmojiFace($$renderer5, {});
              }
              $$renderer5.push(`<!--]--></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <input id="status-message" type="text"${attr("value", message)}${attr_class(`w-full flex-1 text-sm ${store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? highContrastInputClass : "bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("What's on your mind?"))} autocomplete="off" required=""/> <button type="button">`);
          XMark($$renderer4, {});
          $$renderer4.push(`<!----></button></div></div> <div class="flex justify-end pt-3 text-sm font-normal gap-1.5"><button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${loading ? " cursor-not-allowed" : ""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
          if (loading) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="ml-2 self-center">`);
            Spinner($$renderer4, {});
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, onSave });
  });
}
function Calendar($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Clock($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M12 6L12 12L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Code($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M13.5 6L10 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function HelpCircle($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 18.01L12.01 17.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function LogOut($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Map$1($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Notes($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143" stroke="currentColor" stroke-linecap="round"></path><path d="M6 17L20 17" stroke="currentColor" stroke-linecap="round"></path><path d="M6 21L20 21" stroke="currentColor" stroke-linecap="round"></path><path d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 7L15 7" stroke="currentColor" stroke-linecap="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Pin($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M9.5 14.5L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function PinSlash($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M9.5 14.5L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.67602 7.8896L6.69713 7.78823L5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.7879 16M11.4847 7L15.1568 2.67141L21.0065 8.5211L16.6991 12.175" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Settings($$renderer, $$props) {
  let className = fallback($$props["className"], "w-5 h-5");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor" aria-hidden="true"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Key($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12ZM10 12H22V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 12V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function User($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Workspace($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M13.9922 17H16.9922M19.9922 17H16.9922M16.9922 17V14M16.9922 17V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 9.4V4.6C4 4.26863 4.26863 4 4.6 4H9.4C9.73137 4 10 4.26863 10 4.6V9.4C10 9.73137 9.73137 10 9.4 10H4.6C4.26863 10 4 9.73137 4 9.4Z" stroke="currentColor"${attr("stroke-width", strokeWidth)}></path><path d="M4 19.4V14.6C4 14.2686 4.26863 14 4.6 14H9.4C9.73137 14 10 14.2686 10 14.6V19.4C10 19.7314 9.73137 20 9.4 20H4.6C4.26863 20 4 19.7314 4 19.4Z" stroke="currentColor"${attr("stroke-width", strokeWidth)}></path><path d="M14 9.4V4.6C14 4.26863 14.2686 4 14.6 4H19.4C19.7314 4 20 4.26863 20 4.6V9.4C20 9.73137 19.7314 10 19.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z" stroke="currentColor"${attr("stroke-width", strokeWidth)}></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function UserMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let role = fallback($$props["role"], "");
    let profile = fallback($$props["profile"], false);
    let help = fallback($$props["help"], false);
    let className = fallback($$props["className"], "w-[240px]");
    let align = fallback($$props["align"], "end");
    let showActiveUsers = fallback($$props["showActiveUsers"], true);
    let showUserStatusModal = false;
    const DEFAULT_PINNED_ITEMS = ["notes", "workspace"];
    let usage = null;
    const getUsageInfo = async () => {
      const res = await getUsage(localStorage.token).catch((error) => {
        /* @__PURE__ */ console.error("Error fetching usage info:", error);
      });
      if (res) {
        usage = res;
      } else {
        usage = null;
      }
    };
    const handleDropdownChange = (state) => {
      if (state && (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_public_active_users_count || role === "admin")) {
        getUsageInfo();
      }
    };
    store_get($$store_subs ??= {}, "$settings", settings)?.pinnedMenuItems ?? DEFAULT_PINNED_ITEMS;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      UserStatusModal($$renderer3, {
        onSave: async () => {
          user.set(await getSessionUser(localStorage.token));
        },
        get show() {
          return showUserStatusModal;
        },
        set show($$value) {
          showUserStatusModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Dropdown($$renderer3, {
        onOpenChange: handleDropdownChange,
        align,
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!--[-->`);
          slot($$renderer4, $$props, "default", {}, null);
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content">`);
            DropdownMenu($$renderer4, {
              className: `${stringify(className)} font-sans text-xs`,
              children: ($$renderer5) => {
                if (store_get($$store_subs ??= {}, "$user", user)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div><button class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-xs w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none text-left" type="button"><div class="self-center shrink-0 size-4.5 flex items-center justify-center"><img${attr("src", `${WEBUI_API_BASE_URL}/users/${store_get($$store_subs ??= {}, "$user", user).id}/profile/image`)} alt="" class="size-4.5 rounded-full object-cover"/></div> <div class="self-center min-w-0 flex-1 truncate">${escape_html(store_get($$store_subs ??= {}, "$user", user).name)}</div> `);
                  if (showActiveUsers && (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_public_active_users_count || role === "admin") && usage?.user_count) {
                    $$renderer5.push("<!--[0-->");
                    Tooltip($$renderer5, {
                      content: usage?.model_ids && usage?.model_ids.length > 0 ? `${store_get($$store_subs ??= {}, "$i18n", i18n).t("Running")}: ${usage.model_ids.join(", ")} ✨` : store_get($$store_subs ??= {}, "$i18n", i18n).t("Active Users"),
                      children: ($$renderer6) => {
                        $$renderer6.push(`<div class="ml-auto flex shrink-0 items-center justify-end gap-1 rounded-full px-1.5 py-0.5 text-[11px] leading-none text-gray-500 dark:text-gray-400"><span class="size-1.5 rounded-full bg-green-500"></span> <span>${escape_html(usage.user_count)}</span></div>`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></button></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (profile) {
                  $$renderer5.push("<!--[0-->");
                  if (store_get($$store_subs ??= {}, "$user", user)?.status_emoji || store_get($$store_subs ??= {}, "$user", user)?.status_message) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="user-menu-status"><button class="w-full h-[1.6875rem] gap-2 rounded-xl px-2 hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none text-xs flex items-center text-left" type="button">`);
                    if (store_get($$store_subs ??= {}, "$user", user)?.status_emoji) {
                      $$renderer5.push("<!--[0-->");
                      $$renderer5.push(`<div class="self-center shrink-0 size-4.5 flex items-center justify-center">`);
                      Emoji($$renderer5, {
                        className: "size-3.5",
                        shortCode: store_get($$store_subs ??= {}, "$user", user)?.status_emoji
                      });
                      $$renderer5.push(`<!----></div>`);
                    } else {
                      $$renderer5.push("<!--[-1-->");
                    }
                    $$renderer5.push(`<!--]--> `);
                    Tooltip($$renderer5, {
                      content: store_get($$store_subs ??= {}, "$user", user)?.status_message,
                      className: "self-center line-clamp-2 flex-1 text-left",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$user", user)?.status_message)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <div class="self-center">`);
                    Tooltip($$renderer5, {
                      content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Clear status"),
                      children: ($$renderer6) => {
                        $$renderer6.push(`<button class="flex size-5 items-center justify-center" type="button">`);
                        XMark($$renderer6, { className: "size-3.5 opacity-50", strokeWidth: "1.5" });
                        $$renderer6.push(`<!----></button>`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----></div></button></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                    $$renderer5.push(`<div class="user-menu-status"><button class="w-full h-[1.6875rem] gap-2 rounded-xl px-2 hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none text-xs flex items-center text-left" type="button"><div class="self-center shrink-0 size-4.5 flex items-center justify-center">`);
                    EmojiFace($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                    $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Update your status"))}</div></button></div>`);
                  }
                  $$renderer5.push(`<!--]-->`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (profile) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<hr class="border-gray-50/30 dark:border-gray-800/30 my-0.5 mx-1 p-0"/>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.models || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.knowledge || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.prompts || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.tools || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.skills) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="flex items-center w-full"><a href="/workspace" draggable="false" class="flex flex-1 h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none"><div class="self-center">`);
                  Workspace($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Workspace"))}</div></a> `);
                  {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if ((store_get($$store_subs ??= {}, "$config", config)?.features?.enable_notes ?? false) && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.notes ?? true))) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="flex items-center w-full"><a href="/notes" draggable="false" class="flex flex-1 h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none"><div class="self-center">`);
                  Notes($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Notes"))}</div></a> `);
                  {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_calendar && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.calendar)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="flex items-center w-full"><a href="/calendar" draggable="false" class="flex flex-1 h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none"><div class="self-center">`);
                  Calendar($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Calendar"))}</div></a> `);
                  {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_automations && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.automations)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="flex items-center w-full"><a href="/automations" draggable="false" class="flex flex-1 h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none"><div class="self-center">`);
                  Clock($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Automations"))}</div></a> `);
                  {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (role === "admin") {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="flex items-center w-full"><a href="/playground" draggable="false" class="flex flex-1 h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none"><div class="self-center">`);
                  Code($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Playground"))}</div></a> `);
                  {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (help) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<hr class="border-gray-50/30 dark:border-gray-800/30 my-0.5 mx-1 p-0"/> `);
                  if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin") {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<a href="https://docs.openwebui.com" target="_blank" draggable="false" class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none" id="chat-share-button"><div class="self-center">`);
                    HelpCircle($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Documentation"))}</div></a> <a href="https://github.com/open-webui/open-webui/releases" target="_blank" draggable="false" class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none" id="chat-share-button"><div class="self-center">`);
                    Map$1($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Releases"))}</div></a>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--> <button class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none" type="button" id="chat-share-button"><div class="self-center">`);
                  Key($$renderer5, { className: "size-3.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Keyboard"))}</div></button>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <hr class="border-gray-50/30 dark:border-gray-800/30 my-0.5 mx-1 p-0"/> `);
                if (role === "admin") {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<a href="/admin" draggable="false" class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none"><div class="self-center">`);
                  User($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Admin Panel"))}</div></a>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <button class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none" type="button"><div class="self-center">`);
                Settings($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings"))}</div></button> <button class="flex h-[1.6875rem] items-center gap-2 rounded-xl px-2 text-[13px] w-full hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition cursor-pointer select-none" type="button"><div class="self-center">`);
                LogOut($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                $$renderer5.push(`<!----></div> <div class="self-center truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Sign Out"))}</div></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          }
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, role, profile, help, className, align, showActiveUsers });
  });
}
function Copy($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ChatMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let shareHandler = $$props["shareHandler"];
    let moveChatHandler = $$props["moveChatHandler"];
    let cloneChatHandler = $$props["cloneChatHandler"];
    let archiveChatHandler = $$props["archiveChatHandler"];
    let renameHandler = $$props["renameHandler"];
    let deleteHandler = $$props["deleteHandler"];
    let onClose = $$props["onClose"];
    let markUnreadHandler = fallback($$props["markUnreadHandler"], () => {
    });
    let chatId2 = fallback($$props["chatId"], "");
    let show = false;
    let pinned = false;
    let onPinChange = fallback($$props["onPinChange"], () => {
    });
    const checkPinned = async () => {
      pinned = await getChatPinnedStatusById(localStorage.token, chatId2);
    };
    if (show) {
      checkPinned();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      Dropdown($$renderer3, {
        onOpenChange: (state) => {
          if (state === false) {
            onClose();
          }
        },
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("More"),
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              slot($$renderer5, $$props, "default", {}, null);
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content">`);
            DropdownMenu($$renderer4, {
              className: "select-none min-w-[200px] transition",
              children: ($$renderer5) => {
                if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user).permissions?.chat?.share ?? true)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                  Share($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Share"))}</div></button>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user).permissions?.chat?.export ?? true)) {
                  $$renderer5.push("<!--[0-->");
                  DropdownSub($$renderer5, {
                    contentClass: "select-none z-50",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full"><div class="flex items-center line-clamp-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export chat (.json)"))}</div></button> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full"><div class="flex items-center line-clamp-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Plain text (.txt)"))}</div></button> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 select-none w-full"><div class="flex items-center line-clamp-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("PDF document (.pdf)"))}</div></button>`);
                    },
                    $$slots: {
                      default: true,
                      trigger: ($$renderer6) => {
                        $$renderer6.push(`<button slot="trigger" draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                        Download($$renderer6, { className: "size-3.5", strokeWidth: "1.5" });
                        $$renderer6.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Download"))}</div></button>`);
                      }
                    }
                  });
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                EditPencil($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Rename"))}</div></button> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                ChatCheck($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Mark as unread"))}</div></button> <hr class="border-gray-50/30 dark:border-gray-800/30 mx-1 my-0.5"/> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                if (pinned) {
                  $$renderer5.push("<!--[0-->");
                  PinSlash($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Unpin"))}</div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  Pin($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Pin"))}</div>`);
                }
                $$renderer5.push(`<!--]--></button> `);
                if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.chat?.import ?? true)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                  Copy($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Clone"))}</div></button>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (chatId2 && store_get($$store_subs ??= {}, "$folders", folders).length > 0) {
                  $$renderer5.push("<!--[0-->");
                  DropdownSub($$renderer5, {
                    contentClass: "select-none z-50 max-h-52 overflow-y-auto scrollbar-hidden",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!--[-->`);
                      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$folders", folders).sort((a, b) => b.updated_at - a.updated_at));
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let folder = each_array[$$index];
                        $$renderer6.push(`<button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 overflow-hidden w-full"><div class="shrink-0">`);
                        Folder$1($$renderer6, { className: "size-3.5" });
                        $$renderer6.push(`<!----></div> <div class="truncate">${escape_html(folder?.name ?? "Folder")}</div></button>`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: {
                      default: true,
                      trigger: ($$renderer6) => {
                        $$renderer6.push(`<button slot="trigger" draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 select-none w-full">`);
                        Folder$1($$renderer6, { className: "size-3.5" });
                        $$renderer6.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Move"))}</div></button>`);
                      }
                    }
                  });
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                ArchiveBox($$renderer5, { className: "size-3.5", strokeWidth: "1.7" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Archive"))}</div></button> <button draggable="false" class="flex h-[1.6875rem] gap-2 items-center rounded-xl px-2 text-[13px] cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 w-full">`);
                Trash($$renderer5, { className: "size-3.5", strokeWidth: "1.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</div></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          }
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      shareHandler,
      moveChatHandler,
      cloneChatHandler,
      archiveChatHandler,
      renameHandler,
      deleteHandler,
      onClose,
      markUnreadHandler,
      chatId: chatId2,
      onPinChange
    });
  });
}
function GlobeAlt($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor" aria-hidden="true"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ChatHoverPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let messagesContainerId;
    const i18n = getContext("i18n");
    let chatId2 = fallback($$props["chatId"], "");
    let title = fallback($$props["title"], "");
    let openPreview = fallback($$props["openPreview"], false);
    let side = fallback($$props["side"], "right");
    let align = fallback($$props["align"], "start");
    let sideOffset = fallback($$props["sideOffset"], 12);
    let selectedModels = [""];
    let history = null;
    let previewReady = false;
    let loading = false;
    let error = "";
    let requestedChatId = "";
    let loadToken = 0;
    const scrollPreviewToBottom = async () => {
      await tick();
      requestAnimationFrame(() => {
      });
      setTimeout(
        () => {
        },
        80
      );
    };
    const loadChatPreview = async (id) => {
      if (!id || loading || requestedChatId === id) return;
      const token = ++loadToken;
      requestedChatId = id;
      loading = true;
      error = "";
      previewReady = false;
      history = null;
      selectedModels = [""];
      const chat = await getChatById(localStorage.token, id).catch(() => null);
      if (token !== loadToken) return;
      if (chat?.chat?.history) {
        selectedModels = Array.isArray(chat.chat.models) ? chat.chat.models : [chat.chat.models ?? ""];
        history = chat.chat.history;
        previewReady = true;
        scrollPreviewToBottom();
      } else if (chat) {
        previewReady = true;
      } else {
        error = store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to load chat preview");
      }
      loading = false;
    };
    onDestroy(() => {
      loadToken += 1;
    });
    messagesContainerId = `chat-hover-preview-messages-${chatId2}`;
    if (openPreview && chatId2 && requestedChatId !== chatId2) {
      loadChatPreview(chatId2);
    }
    if (openPreview && previewReady) {
      scrollPreviewToBottom();
    }
    if (openPreview) {
      $$renderer2.push("<!--[0-->");
      Portal($$renderer2, {
        children: ($$renderer3) => {
          Link_preview_content($$renderer3, {
            class: "z-[9999] hidden max-h-[min(17.5rem,calc(100vh-1.5rem))] w-[20rem] max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_-28px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition md:block dark:bg-gray-850 dark:text-white dark:ring-white/10",
            side,
            align,
            sideOffset,
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="border-b border-gray-50/60 px-3 py-2 dark:border-gray-800/25"><div class="truncate text-[13px] font-medium leading-5 text-gray-900 dark:text-gray-100">${escape_html(title || store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat"))}</div></div> <div${attr("id", messagesContainerId)} class="max-h-[min(15rem,calc(100vh-4rem))] overflow-y-auto bg-white scrollbar-hover @container dark:bg-gray-850">`);
              if (loading) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="flex w-full items-center justify-center py-8 text-gray-500 dark:text-gray-400">`);
                Spinner($$renderer4, { className: "size-5" });
                $$renderer4.push(`<!----></div>`);
              } else if (error) {
                $$renderer4.push("<!--[1-->");
                $$renderer4.push(`<div class="flex w-full items-center justify-center px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-400">${escape_html(error)}</div>`);
              } else if (previewReady) {
                $$renderer4.push("<!--[2-->");
                Messages($$renderer4, {
                  className: "flex w-full pt-2 pb-0 [&_.message-listitem]:!mb-1 [&_.message-listitem]:!max-w-none [&_.message-listitem]:!px-3 [&_.pb-18]:!pb-1.5 [&_.markdown-prose]:!text-xs [&_.markdown-prose]:!leading-snug [&_.whitespace-pre-wrap]:!text-xs [&_.whitespace-pre-wrap]:!leading-snug [&_.text-\\[0\\.9375rem\\]]:!text-xs [&_.text-sm]:!text-xs [&_.tool-call-body_pre]:!text-[11px] [&_.rounded-3xl]:!rounded-2xl [&_.chat-user_.rounded-3xl]:!bg-gray-50 dark:[&_.chat-user_.rounded-3xl]:!bg-gray-800 [&_.px-4]:!px-3 [&_.py-3]:!py-2 [&_.py-1\\.5]:!py-1",
                  chatId: `chat-hover-preview-${chatId2}`,
                  user: store_get($$store_subs ??= {}, "$user", user),
                  prompt: "",
                  readOnly: true,
                  compactPreview: true,
                  selectedModels,
                  atSelectedModel: null,
                  history,
                  autoScroll: true,
                  messagesContainerId,
                  messagesCount: 8,
                  sendMessage: () => {
                  },
                  continueResponse: () => {
                  },
                  regenerateResponse: () => {
                  },
                  mergeResponses: () => {
                  },
                  chatActionHandler: () => {
                  }
                });
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div>`);
            },
            $$slots: { default: true }
          });
        }
      });
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { chatId: chatId2, title, openPreview, side, align, sideOffset });
  });
}
function MoreHorizontal($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M20 12.5C20.2761 12.5 20.5 12.2761 20.5 12C20.5 11.7239 20.2761 11.5 20 11.5C19.7239 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.7239 12.5 20 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12.5C4.27614 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.27614 11.5 4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Sparkles($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z" stroke="currentColor" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
const invisibleDragImage = new Image();
invisibleDragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
let closeActiveHoverPreview = null;
function ChatItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let effectiveReadAt, unread, showInlineActions;
    const i18n = getContext("i18n");
    const dispatch = createEventDispatcher();
    let className = fallback($$props["className"], "");
    let id = $$props["id"];
    let title = $$props["title"];
    let createdAt = fallback($$props["createdAt"], null);
    let updatedAt = fallback($$props["updatedAt"], null);
    let lastReadAt = fallback($$props["lastReadAt"], null);
    let active = fallback($$props["active"], false);
    let selected = fallback($$props["selected"], false);
    let shiftKey = fallback($$props["shiftKey"], false);
    let readonly = fallback($$props["readonly"], false);
    let ownerName = fallback($$props["ownerName"], null);
    let ownerUserId = fallback($$props["ownerUserId"], null);
    let onReadStateChange = fallback($$props["onReadStateChange"], () => {
    });
    let onDragEnd = fallback($$props["onDragEnd"], () => {
    });
    function formatTimeAgo(timestamp) {
      const now = Date.now();
      const diff = now - timestamp * 1e3;
      const seconds = Math.floor(diff / 1e3);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const years = Math.floor(days / 365);
      if (years > 0) return store_get($$store_subs ??= {}, "$i18n", i18n).t("{{COUNT}}y", { COUNT: years, context: "time_ago" });
      if (weeks > 0) return store_get($$store_subs ??= {}, "$i18n", i18n).t("{{COUNT}}w", { COUNT: weeks, context: "time_ago" });
      if (days > 0) return store_get($$store_subs ??= {}, "$i18n", i18n).t("{{COUNT}}d", { COUNT: days, context: "time_ago" });
      if (hours > 0) return store_get($$store_subs ??= {}, "$i18n", i18n).t("{{COUNT}}h", { COUNT: hours, context: "time_ago" });
      if (minutes > 0) return store_get($$store_subs ??= {}, "$i18n", i18n).t("{{COUNT}}m", { COUNT: minutes, context: "time_ago" });
      return store_get($$store_subs ??= {}, "$i18n", i18n).t("1m", { context: "time_ago" });
    }
    let mouseOver = false;
    let openPreview = false;
    const closeHoverPreview = () => {
      if (openPreview) {
        openPreview = false;
      }
    };
    let viewedAt = null;
    const markUnreadHandler = async () => {
      const res = await markChatUnreadById(localStorage.token, id).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (!res) return;
      viewedAt = null;
      lastReadAt = res.last_read_at ?? 0;
      onReadStateChange(res);
    };
    let showShareChatModal = false;
    let confirmEdit = false;
    let chatTitle$1 = title;
    const cloneChatHandler = async (id2) => {
      if (!(store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.chat?.import ?? true))) {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Access prohibited"));
        return;
      }
      const res = await cloneChatById(localStorage.token, id2, store_get($$store_subs ??= {}, "$i18n", i18n).t("Clone of {{TITLE}}", { TITLE: title })).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        goto(`/c/${res.id}`);
        await refreshChatList(localStorage.token, { refreshPinned: true });
      }
    };
    let archiving = false;
    const archiveChatHandler = async (id2) => {
      if (archiving) return;
      archiving = true;
      try {
        await archiveChatById(localStorage.token, id2);
        if (store_get($$store_subs ??= {}, "$chatId", chatId) === id2) {
          await goto("/");
          chatId.set("");
        }
        dispatch("change");
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat archived."));
      } catch (error) {
        /* @__PURE__ */ console.error("Error archiving chat:", error);
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to archive chat."));
      } finally {
        archiving = false;
      }
    };
    const moveChatHandler = async (chatId2, folderId) => {
      if (chatId2 && folderId) {
        const res = await updateChatFolderIdById(localStorage.token, chatId2, folderId).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          await refreshChatList(localStorage.token, { refreshPinned: true });
          toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat moved successfully"));
        }
      } else {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to move chat"));
      }
    };
    let generating = false;
    let dragged = false;
    let showDeleteConfirm = false;
    const renameHandler = async () => {
      chatTitle$1 = title;
      confirmEdit = true;
      openPreview = false;
      await tick();
      setTimeout(
        () => {
          const input = document.getElementById(`chat-title-input-${id}`);
          if (input) {
            input.focus();
            input.select();
          }
        },
        0
      );
    };
    if (openPreview && closeActiveHoverPreview !== closeHoverPreview) {
      closeActiveHoverPreview?.();
      closeActiveHoverPreview = closeHoverPreview;
    }
    if (id === store_get($$store_subs ??= {}, "$chatId", chatId)) {
      viewedAt = updatedAt ?? Date.now() / 1e3;
    }
    effectiveReadAt = Math.max(lastReadAt ?? 0, viewedAt ?? 0) || null;
    unread = id !== store_get($$store_subs ??= {}, "$chatId", chatId) && !active && (effectiveReadAt === null || updatedAt !== null && updatedAt > effectiveReadAt);
    showInlineActions = id === store_get($$store_subs ??= {}, "$chatId", chatId) || confirmEdit || mouseOver || selected;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ShareChatModal($$renderer3, {
        chatId: id,
        get show() {
          return showShareChatModal;
        },
        set show($$value) {
          showShareChatModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete chat?"),
        get show() {
          return showDeleteConfirm;
        },
        set show($$value) {
          showDeleteConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-500 flex-1 line-clamp-3">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("This will delete"))} <span class="font-normal">${escape_html(title)}</span>.</div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div id="sidebar-chat-group"${attr_class(` w-full ${stringify(className)} relative group`)}${attr("draggable", !confirmEdit && !readonly)}>`);
      if (confirmEdit) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div id="sidebar-chat-item"${attr_class(` w-full flex justify-between rounded-xl px-2 py-[6px] ${id === store_get($$store_subs ??= {}, "$chatId", chatId) || confirmEdit ? store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "bg-black/[0.035] dark:bg-white/[0.06] selected" : "bg-black/[0.035] dark:bg-white/[0.045] selected" : selected ? store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "bg-black/[0.035] dark:bg-white/[0.055] selected" : "bg-black/[0.035] dark:bg-white/[0.045] selected" : "hover:bg-gray-50 dark:hover:bg-gray-900 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"} whitespace-nowrap text-ellipsis relative transition ${""}`)}><input${attr("id", `chat-title-input-${stringify(id)}`)}${attr("value", chatTitle$1)} class="bg-transparent w-full outline-hidden mr-10"${attr("placeholder", "")}${attr("disabled", generating, true)}/></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        Link_preview($$renderer3, {
          openDelay: 300,
          closeDelay: 0,
          disabled: store_get($$store_subs ??= {}, "$mobile", mobile) || confirmEdit || dragged,
          get open() {
            return openPreview;
          },
          set open($$value) {
            openPreview = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            Link_preview_trigger($$renderer4, {
              id: "sidebar-chat-item",
              class: ` w-full flex justify-between rounded-xl px-2 py-[6px] ${id === store_get($$store_subs ??= {}, "$chatId", chatId) || confirmEdit ? store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "bg-black/[0.035] dark:bg-white/[0.06] selected" : "bg-black/[0.035] dark:bg-white/[0.045] selected" : selected ? store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "bg-black/[0.035] dark:bg-white/[0.055] selected" : "bg-black/[0.035] dark:bg-white/[0.045] selected" : " hover:bg-gray-50 dark:hover:bg-gray-900 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"}  whitespace-nowrap text-ellipsis transition`,
              href: `/c/${stringify(id)}`,
              "aria-current": id === store_get($$store_subs ??= {}, "$chatId", chatId) ? "page" : void 0,
              onclick: () => {
                openPreview = false;
                if (store_get($$store_subs ??= {}, "$selectedFolder", selectedFolder)) {
                  selectedFolder.set(null);
                }
                if (store_get($$store_subs ??= {}, "$mobile", mobile)) {
                  showSidebar.set(false);
                }
                unread = false;
                lastReadAt = Date.now() / 1e3;
              },
              ondblclick: async (e) => {
                if (readonly) return;
                e.preventDefault();
                e.stopPropagation();
                renameHandler();
              },
              draggable: "false",
              children: ($$renderer5) => {
                if (ownerUserId) {
                  $$renderer5.push("<!--[0-->");
                  Tooltip($$renderer5, {
                    content: ownerName || "Unknown",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<img${attr("src", `/api/v1/users/${stringify(ownerUserId)}/profile/image`)} alt="" class="size-3.5 rounded-full shrink-0 object-cover mr-1.5"/>`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (active) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="shrink-0 self-center pr-2">`);
                  Spinner($$renderer5, { className: "size-3" });
                  $$renderer5.push(`<!----></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <div class="flex self-center flex-1 w-full min-w-0">`);
                if (unread) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="shrink-0 self-center pr-2.5 flex transition-opacity duration-300"><div class="size-1.5 bg-sky-500 rounded-full"></div></div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <div dir="auto"${attr_class(`text-left self-center overflow-hidden w-full h-[20px] truncate ${unread ? "font-normal text-gray-800 dark:text-gray-200" : ""} ${showInlineActions && !readonly ? "pr-12" : ""}`)}>${escape_html(title)}</div></div> `);
                if ((updatedAt ?? createdAt) && !showInlineActions) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<div class="shrink-0 self-center text-[10px] text-gray-400 dark:text-gray-500 pl-2">${escape_html(formatTimeAgo(updatedAt ?? createdAt))}</div>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            ChatHoverPreview($$renderer4, {
              chatId: id,
              title: chatTitle$1 || title,
              openPreview,
              side: "right",
              align: "center"
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer3.push(`<!--]--> `);
      if (!readonly) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div id="sidebar-chat-item-menu"${attr_class(`${showInlineActions ? "selected" : "invisible group-hover:visible"} absolute ${className === "pr-2" ? "right-[8px]" : "right-1"} inset-y-0 mr-1.5 flex items-center`)}>`);
        if (confirmEdit) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex self-center items-center space-x-1.5 z-10 translate-y-[0.5px] -translate-x-[0.5px]">`);
          Tooltip($$renderer3, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Generate"),
            children: ($$renderer4) => {
              $$renderer4.push(`<button class="flex size-5 items-center justify-center self-center dark:hover:text-white transition disabled:cursor-not-allowed" id="generate-title-button"${attr("disabled", generating, true)}>`);
              Sparkles($$renderer4, { strokeWidth: "1.5" });
              $$renderer4.push(`<!----></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div class="flex self-center z-10 items-end">`);
          ChatMenu($$renderer3, {
            chatId: id,
            cloneChatHandler: () => {
              cloneChatHandler(id);
            },
            shareHandler: () => {
              showShareChatModal = true;
            },
            moveChatHandler,
            archiveChatHandler: () => {
              archiveChatHandler(id);
            },
            renameHandler,
            deleteHandler: () => {
              showDeleteConfirm = true;
            },
            markUnreadHandler,
            onClose: () => {
            },
            onPinChange: async () => {
            },
            children: ($$renderer4) => {
              $$renderer4.push(`<button aria-label="Chat Menu" class="flex size-5 items-center justify-center self-center dark:hover:text-white transition m-0">`);
              MoreHorizontal($$renderer4, { className: "size-3.5", strokeWidth: "2" });
              $$renderer4.push(`<!----></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          if (id === store_get($$store_subs ??= {}, "$chatId", chatId)) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<button id="delete-chat-button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))} class="hidden">`);
            MoreHorizontal($$renderer3, { className: "size-3.5", strokeWidth: "2" });
            $$renderer3.push(`<!----></button>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
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
    bind_props($$props, {
      className,
      id,
      title,
      createdAt,
      updatedAt,
      lastReadAt,
      active,
      selected,
      shiftKey,
      readonly,
      ownerName,
      ownerUserId,
      onReadStateChange,
      onDragEnd
    });
  });
}
function Folder($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    const dispatch = createEventDispatcher();
    let open = fallback($$props["open"], true);
    let id = fallback($$props["id"], "");
    let name = fallback($$props["name"], "");
    let collapsible = fallback($$props["collapsible"], true);
    let className = fallback($$props["className"], "");
    let buttonClassName = fallback($$props["buttonClassName"], "text-gray-600 dark:text-gray-400");
    let chevron = fallback($$props["chevron"], true);
    let onAddLabel = fallback($$props["onAddLabel"], "");
    let onAdd = fallback($$props["onAdd"], null);
    let dragAndDrop = fallback($$props["dragAndDrop"], true);
    let folderElement;
    const onDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (folderElement.contains(e.target)) {
        /* @__PURE__ */ console.log("Dropped on the Button");
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
          for (const item of Array.from(e.dataTransfer.items)) {
            if (item.kind === "file") {
              const file = item.getAsFile();
              if (file && file.type === "application/json") {
                /* @__PURE__ */ console.log("Dropped file is a JSON file!");
                const reader = new FileReader();
                reader.onload = async function(event) {
                  try {
                    const fileContent = JSON.parse(event.target.result);
                    /* @__PURE__ */ console.log("Parsed JSON Content: ", fileContent);
                    open = true;
                    dispatch("import", fileContent);
                  } catch (error) {
                    /* @__PURE__ */ console.error("Error parsing JSON file:", error);
                  }
                };
                reader.readAsText(file);
              } else {
                /* @__PURE__ */ console.error("Only JSON file types are supported.");
              }
            } else {
              open = true;
              try {
                const dataTransfer = e.dataTransfer.getData("text/plain");
                if (dataTransfer) {
                  const data = JSON.parse(dataTransfer);
                  /* @__PURE__ */ console.log(data);
                  dispatch("drop", data);
                } else {
                  /* @__PURE__ */ console.log("Dropped text data is empty or not text/plain.");
                }
              } catch (error) {
                /* @__PURE__ */ console.log("Dropped data is not valid JSON text or is empty. Ignoring drop event for this type of data.");
              } finally {
              }
              break;
            }
          }
        }
      }
    };
    const onDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    onDestroy(() => {
      if (!dragAndDrop) {
        return;
      }
      folderElement.removeEventListener("dragover", onDragOver);
      folderElement.removeEventListener("drop", onDrop);
      folderElement.removeEventListener("dragleave", onDragLeave);
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div${attr_class(`relative ${stringify(className)}`)}>`);
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
    bind_props($$props, {
      open,
      id,
      name,
      collapsible,
      className,
      buttonClassName,
      chevron,
      onAddLabel,
      onAdd,
      dragAndDrop
    });
  });
}
function ChevronRight($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const dispatch = createEventDispatcher();
    let open = fallback($$props["open"], true);
    let id = fallback($$props["id"], "");
    let name = fallback($$props["name"], "");
    let collapsible = fallback($$props["collapsible"], true);
    let className = fallback($$props["className"], "");
    let buttonClassName = fallback($$props["buttonClassName"], "");
    let contentClassName = fallback($$props["contentClassName"], "px-1.5");
    let onAddLabel = fallback($$props["onAddLabel"], "");
    let onAdd = fallback($$props["onAdd"], null);
    let dragAndDrop = fallback($$props["dragAndDrop"], true);
    let sectionElement;
    const onDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!sectionElement.contains(e.target)) {
        return;
      }
      if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
        for (const item of Array.from(e.dataTransfer.items)) {
          if (item.kind === "file") {
            const file = item.getAsFile();
            if (file && file.type === "application/json") {
              const reader = new FileReader();
              reader.onload = async function(event) {
                try {
                  const fileContent = JSON.parse(event.target?.result);
                  open = true;
                  dispatch("import", fileContent);
                } catch (error) {
                  /* @__PURE__ */ console.error("Error parsing JSON file:", error);
                }
              };
              reader.readAsText(file);
            }
          } else {
            open = true;
            try {
              const dataTransfer = e.dataTransfer.getData("text/plain");
              if (dataTransfer) {
                dispatch("drop", JSON.parse(dataTransfer));
              }
            } catch {
            } finally {
            }
            break;
          }
        }
      }
    };
    const onDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    onDestroy(() => {
      if (!dragAndDrop) {
        return;
      }
      sectionElement.removeEventListener("dragover", onDragOver);
      sectionElement.removeEventListener("drop", onDrop);
      sectionElement.removeEventListener("dragleave", onDragLeave);
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div${attr_class(`relative ${stringify(className)}`)}>`);
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
    bind_props($$props, {
      open,
      id,
      name,
      collapsible,
      className,
      buttonClassName,
      contentClassName,
      onAddLabel,
      onAdd,
      dragAndDrop
    });
  });
}
function ChevronDown($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function RecursiveFolder($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    const { saveAs } = fileSaver;
    let folderRegistry = fallback($$props["folderRegistry"], () => ({}), true);
    let open = fallback($$props["open"], false);
    let folders2 = $$props["folders"];
    let folderId = $$props["folderId"];
    let shiftKey = fallback($$props["shiftKey"], false);
    let className = fallback($$props["className"], "");
    let deleteFolderContents = fallback($$props["deleteFolderContents"], true);
    let parentDragged = fallback($$props["parentDragged"], false);
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onItemMove = fallback($$props["onItemMove"], () => {
    });
    let onFolderUnreadCounts = fallback($$props["onFolderUnreadCounts"], () => {
    });
    let showFolderModal = false;
    let showShareModal = false;
    let showCreateSubFolderModal = false;
    let createSubFolderParentId = null;
    let dragged = false;
    const formatUnreadCount = (count) => new Intl.NumberFormat(void 0, { notation: "compact", compactDisplay: "short" }).format(count);
    const isUnreadChat = (chat) => !(chat.active ?? false) && (chat.last_read_at == null || typeof chat.updated_at === "number" && typeof chat.last_read_at === "number" && chat.updated_at > chat.last_read_at);
    const sortFolderChats = (items) => [...items].sort((a, b) => Number(isUnreadChat(b)) - Number(isUnreadChat(a)) || Number(b.updated_at ?? 0) - Number(a.updated_at ?? 0));
    const mergeFolderChats = (items, nextItems) => {
      const merged = [...items];
      const indexById = new Map(merged.map((chat, index) => [chat.id, index]));
      for (const chat of nextItems) {
        if (!chat?.id) {
          continue;
        }
        const index = indexById.get(chat.id);
        if (index === void 0) {
          indexById.set(chat.id, merged.length);
          merged.push(chat);
        } else {
          merged[index] = { ...merged[index], ...chat };
        }
      }
      return sortFolderChats(merged);
    };
    const applyReadState = (data) => {
      if (data?.folder_unread_counts) {
        onFolderUnreadCounts(data.folder_unread_counts);
      }
      if (typeof data?.last_read_at === "number") {
        folderRegistry[folderId]?.setChatReadAt?.(data.chat_id, data.last_read_at);
      }
    };
    const markAllReadHandler = async () => {
      const res = await markFolderChatsReadById(localStorage.token, folderId).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (!res) return;
      if (res.folder_unread_counts) {
        onFolderUnreadCounts(res.folder_unread_counts);
      }
      for (const readFolderId of res.folder_ids ?? []) {
        if (readFolderId !== folderId) {
          folderRegistry[readFolderId]?.setFolderItems?.();
        }
      }
      if (chats2) {
        chats2 = sortFolderChats(chats2.map((chat) => !chat.user_id || chat.user_id === store_get($$store_subs ??= {}, "$user", user)?.id ? { ...chat, last_read_at: chat.updated_at } : chat));
      }
    };
    const dragImage = new Image();
    dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    onDestroy(() => {
    });
    let showDeleteConfirm = false;
    const updateHandler = async ({ name, meta, data }) => {
      if (name === "") {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder name cannot be empty."));
        return;
      }
      const currentName = folders2[folderId].name;
      name = name.trim();
      folders2[folderId].name = name;
      const res = await updateFolderById(localStorage.token, folderId, { name, ...meta ? { meta } : {}, ...data ? { data } : {} }).catch((error) => {
        toast.error(`${error}`);
        folders2[folderId].name = currentName;
        return null;
      });
      if (res) {
        folders2[folderId].name = name;
        if (data) {
          folders2[folderId].data = data;
        }
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder updated successfully"));
        if (store_get($$store_subs ??= {}, "$selectedFolder", selectedFolder)?.id === folderId) {
          const folder = await getFolderById(localStorage.token, folderId).catch((error) => {
            toast.error(`${error}`);
            return null;
          });
          if (folder) {
            await selectedFolder.set(folder);
          }
        }
      }
    };
    const SIDEBAR_CHATS_PAGE_SIZE = 10;
    let chats2 = null;
    let chatsPage = 1;
    let hasMoreChats = false;
    let chatsLoading = false;
    let queuedReload = false;
    let pendingUpsertChats = [];
    const setFolderItems = async (append = false) => {
      await tick();
      if (open && chatsLoading) {
        if (!append) {
          queuedReload = true;
        }
        return;
      }
      if (open) {
        const nextPage = append ? chatsPage + 1 : 1;
        chatsLoading = true;
        try {
          const res = await getSharedFolderChats(localStorage.token, folderId, { page: nextPage });
          const nextChats = res?.chats ?? [];
          const merged = append ? mergeFolderChats(chats2 ?? [], nextChats) : nextChats;
          chats2 = mergeFolderChats(merged, pendingUpsertChats);
          pendingUpsertChats = pendingUpsertChats.filter((pendingChat) => !nextChats.some((chat) => chat.id === pendingChat.id));
          chatsPage = nextPage;
          hasMoreChats = res?.has_more ?? nextChats.length === SIDEBAR_CHATS_PAGE_SIZE;
        } catch (error) {
          const fallback2 = await getChatListByFolderId(localStorage.token, folderId, nextPage).catch((error2) => {
            toast.error(`${error2}`);
            return [];
          });
          const fallbackChats = fallback2 ?? [];
          const merged = append ? mergeFolderChats(chats2 ?? [], fallbackChats) : fallbackChats;
          chats2 = mergeFolderChats(merged, pendingUpsertChats);
          pendingUpsertChats = pendingUpsertChats.filter((pendingChat) => !fallbackChats.some((chat) => chat.id === pendingChat.id));
          chatsPage = nextPage;
          hasMoreChats = (fallback2?.length ?? 0) === SIDEBAR_CHATS_PAGE_SIZE;
        } finally {
          chatsLoading = false;
          if (queuedReload) {
            queuedReload = false;
            setFolderItems();
          }
        }
      } else if (!open) {
        chats2 = null;
        chatsPage = 1;
        hasMoreChats = false;
        queuedReload = false;
      }
    };
    const exportHandler = async () => {
      const chats3 = await getChatsByFolderId(localStorage.token, folderId).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (!chats3) {
        return;
      }
      const blob = new Blob([JSON.stringify(chats3)], { type: "application/json" });
      saveAs(blob, `folder-${folders2[folderId].name}-export-${Date.now()}.json`);
    };
    const createSubFolderHandler = async ({ name, meta, data, parent_id }) => {
      if (name === "") {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder name cannot be empty."));
        return;
      }
      name = name.trim();
      const res = await createNewFolder(localStorage.token, { name, data, meta, parent_id }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder created successfully"));
      }
    };
    if (!open && chats2 !== null) {
      chats2 = null;
      chatsPage = 1;
      hasMoreChats = false;
    }
    if (open && chats2 === null) {
      setFolderItems();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete folder?"),
        get show() {
          return showDeleteConfirm;
        },
        set show($$value) {
          showDeleteConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3 mb-2">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(`Are you sure you want to delete "{{NAME}}"?`, { NAME: folders2[folderId].name }))}</div> <div class="flex items-center gap-1.5"><input type="checkbox"${attr("checked", deleteFolderContents, true)}/> <div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete all contents inside this folder"))}</div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      FolderModal($$renderer3, {
        edit: true,
        folderId,
        onSubmit: updateHandler,
        get show() {
          return showFolderModal;
        },
        set show($$value) {
          showFolderModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FolderModal($$renderer3, {
        parentId: createSubFolderParentId,
        onSubmit: createSubFolderHandler,
        get show() {
          return showCreateSubFolderModal;
        },
        set show($$value) {
          showCreateSubFolderModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FolderShareModal($$renderer3, {
        folder: folders2[folderId],
        get show() {
          return showShareModal;
        },
        set show($$value) {
          showShareModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div${attr_class(`relative ${stringify(className)}`)}${attr("draggable", !folders2[folderId]?.shared)}>`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      Collapsible($$renderer3, {
        className: "w-full",
        buttonClassName: "w-full",
        onChange: (state) => {
        },
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="w-full group"><div${attr("id", `folder-${stringify(folderId)}-button`)}${attr_class(`relative w-full py-1 px-1.5 rounded-xl flex items-center gap-1.5 hover:bg-gray-50/40 dark:hover:bg-gray-800/40 transition ${store_get($$store_subs ??= {}, "$selectedFolder", selectedFolder)?.id === folderId ? "bg-gray-100/80 dark:bg-gray-850/50 selected" : ""}`)} role="button" tabindex="0"><button class="text-gray-600 dark:text-gray-400 transition-all p-1 hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-lg">`);
          if (folders2[folderId]?.meta?.icon) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex group-hover:hidden transition-all">`);
            Emoji($$renderer4, {
              className: "size-3.5",
              shortCode: folders2[folderId].meta.icon
            });
            $$renderer4.push(`<!----></div> <div class="hidden group-hover:flex transition-all p-[1px]">`);
            if (open) {
              $$renderer4.push("<!--[0-->");
              ChevronDown($$renderer4, { className: " size-3", strokeWidth: "1.5" });
            } else {
              $$renderer4.push("<!--[-1-->");
              ChevronRight($$renderer4, { className: " size-3", strokeWidth: "1.5" });
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="flex group-hover:hidden transition-all">`);
            Folder$1($$renderer4, { className: "size-3.5", strokeWidth: "1.5" });
            $$renderer4.push(`<!----></div> <div class="hidden group-hover:flex transition-all p-[1px]">`);
            if (open) {
              $$renderer4.push("<!--[0-->");
              ChevronDown($$renderer4, { className: " size-3", strokeWidth: "1.5" });
            } else {
              $$renderer4.push("<!--[-1-->");
              ChevronRight($$renderer4, { className: " size-3", strokeWidth: "1.5" });
            }
            $$renderer4.push(`<!--]--></div>`);
          }
          $$renderer4.push(`<!--]--></button> <div class="translate-y-[0.5px] flex min-w-0 flex-1 items-center gap-1.5 pr-6 text-start">`);
          {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="min-w-0 truncate">${escape_html(folders2[folderId].name)}</div> `);
            if (!folders2[folderId]?.shared && (folders2[folderId]?.unread_count ?? 0) > 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-md bg-sky-500/10 px-1 text-[10px] font-semibold leading-4 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300"${attr("title", store_get($$store_subs ??= {}, "$i18n", i18n).t("Unread"))}>${escape_html(formatUnreadCount(folders2[folderId].unread_count))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]--></div> `);
          if (!folders2[folderId]?.shared || folders2[folderId]?.permission === "write") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300">`);
            FolderMenu($$renderer4, {
              onEdit: () => {
                showFolderModal = true;
              },
              onShare: () => {
                showShareModal = true;
              },
              onDelete: () => {
                showDeleteConfirm = true;
              },
              onExport: () => {
                exportHandler();
              },
              onCreateSubFolder: () => {
                createSubFolderParentId = folderId;
                showCreateSubFolderModal = true;
              },
              onMarkAllRead: markAllReadHandler,
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex size-5 items-center justify-center self-center dark:hover:text-white transition m-0 touch-auto">`);
                MoreHorizontal($$renderer5, { className: "size-3.5", strokeWidth: "2" });
                $$renderer5.push(`<!----></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div>`);
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content" class="w-full">`);
            if ((folders2[folderId]?.childrenIds ?? []).length > 0 || (chats2 ?? []).length > 0 || hasMoreChats) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900">`);
              if (folders2[folderId]?.childrenIds) {
                $$renderer4.push("<!--[0-->");
                const children = folders2[folderId]?.childrenIds.map((id) => folders2[id]).sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true, sensitivity: "base" }));
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(children);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let childFolder = each_array[$$index];
                  RecursiveFolder($$renderer4, {
                    folders: folders2,
                    folderId: childFolder.id,
                    shiftKey,
                    parentDragged: dragged,
                    onItemMove,
                    onDelete,
                    onFolderUnreadCounts,
                    get folderRegistry() {
                      return folderRegistry;
                    },
                    set folderRegistry($$value) {
                      folderRegistry = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer4.push(`<!---->`);
                }
                $$renderer4.push(`<!--]-->`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> <!--[-->`);
              const each_array_1 = ensure_array_like(chats2 ?? []);
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let chat = each_array_1[$$index_1];
                ChatItem($$renderer4, {
                  id: chat.id,
                  title: chat.title,
                  createdAt: chat.created_at,
                  updatedAt: chat.updated_at,
                  lastReadAt: chat.last_read_at,
                  active: chat.active ?? false,
                  ownerName: folders2[folderId]?.shared ? chat.owner_name ?? null : null,
                  ownerUserId: folders2[folderId]?.shared && chat.owner_name ? chat.user_id : null,
                  readonly: chat.user_id !== store_get($$store_subs ??= {}, "$user", user)?.id,
                  shiftKey,
                  onReadStateChange: applyReadState
                });
              }
              $$renderer4.push(`<!--]--> `);
              if (hasMoreChats) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<button class="w-full px-2 py-0.5 text-left text-[11px] text-gray-400 transition hover:text-gray-700 disabled:cursor-not-allowed dark:text-gray-600 dark:hover:text-gray-300"${attr("disabled", chatsLoading, true)}>`);
                if (chatsLoading) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<div class="flex gap-1 px-2 py-1.5" aria-label="Loading"><span class="size-1 rounded-full bg-gray-400 animate-pulse dark:bg-gray-600"></span> <span class="size-1 rounded-full bg-gray-400 animate-pulse [animation-delay:150ms] dark:bg-gray-600"></span> <span class="size-1 rounded-full bg-gray-400 animate-pulse [animation-delay:300ms] dark:bg-gray-600"></span></div>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                  $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show more"))}`);
                }
                $$renderer4.push(`<!--]--></button>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> `);
            if (chats2 === null && chatsLoading) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="flex gap-1 px-2 py-1.5" aria-label="Loading"><span class="size-1 rounded-full bg-gray-400 animate-pulse dark:bg-gray-600"></span> <span class="size-1 rounded-full bg-gray-400 animate-pulse [animation-delay:150ms] dark:bg-gray-600"></span> <span class="size-1 rounded-full bg-gray-400 animate-pulse [animation-delay:300ms] dark:bg-gray-600"></span></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      folderRegistry,
      open,
      folders: folders2,
      folderId,
      shiftKey,
      className,
      deleteFolderContents,
      parentDragged,
      onDelete,
      onItemMove,
      onFolderUnreadCounts,
      setFolderItems
    });
  });
}
function Folders($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let folderRegistry = fallback($$props["folderRegistry"], () => ({}), true);
    let folders2 = fallback($$props["folders"], () => ({}), true);
    let shiftKey = fallback($$props["shiftKey"], false);
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onFolderUnreadCounts = fallback($$props["onFolderUnreadCounts"], () => {
    });
    let ownedList = [];
    let sharedList = [];
    const onItemMove = (e) => {
      if (e.originFolderId) {
        folderRegistry[e.originFolderId]?.setFolderItems();
      }
    };
    {
      const rootKeys = Object.keys(folders2).filter((key) => {
        const f = folders2[key];
        if (!f.name) return false;
        if (f.shared) {
          return !f.parent_id || !folders2[f.parent_id];
        }
        return f.parent_id === null;
      }).sort((a, b) => (folders2[a].name ?? "").localeCompare(folders2[b].name ?? "", void 0, { numeric: true, sensitivity: "base" }));
      ownedList = rootKeys.filter((key) => !folders2[key].shared);
      sharedList = rootKeys.filter((key) => folders2[key].shared);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!--[-->`);
      const each_array = ensure_array_like(ownedList);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let folderId = each_array[$$index];
        RecursiveFolder($$renderer3, {
          className: "",
          folders: folders2,
          folderId,
          shiftKey,
          onDelete,
          onItemMove,
          onFolderUnreadCounts,
          get folderRegistry() {
            return folderRegistry;
          },
          set folderRegistry($$value) {
            folderRegistry = $$value;
            $$settled = false;
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      if (sharedList.length > 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="w-full pl-2.5 text-[11px] text-gray-400 dark:text-gray-600 pt-2 pb-0.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Shared"))}</div> <!--[-->`);
        const each_array_1 = ensure_array_like(sharedList);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let folderId = each_array_1[$$index_1];
          RecursiveFolder($$renderer3, {
            className: "",
            folders: folders2,
            folderId,
            shiftKey,
            onDelete,
            onItemMove,
            onFolderUnreadCounts,
            get folderRegistry() {
              return folderRegistry;
            },
            set folderRegistry($$value) {
              folderRegistry = $$value;
              $$settled = false;
            }
          });
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
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
    bind_props($$props, {
      folderRegistry,
      folders: folders2,
      shiftKey,
      onDelete,
      onFolderUnreadCounts
    });
  });
}
function Visibility($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let onChange = fallback($$props["onChange"], () => {
    });
    let state = fallback($$props["state"], "private");
    $$renderer2.push(`<div class="rounded-lg flex flex-col gap-2"><div><div class="text-xs font-normal mb-2.5 text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Visibility"))}</div> <div class="flex gap-2.5 items-center mb-1"><div><div class="p-2 bg-black/5 dark:bg-white/5 rounded-full">`);
    if (state === "private") {
      $$renderer2.push("<!--[0-->");
      Lock($$renderer2, { className: "w-5 h-5", strokeWidth: "1.8" });
    } else {
      $$renderer2.push("<!--[-1-->");
      Hashtag($$renderer2, { className: "w-5 h-5", strokeWidth: "1.8" });
    }
    $$renderer2.push(`<!--]--></div></div> <div>`);
    $$renderer2.select(
      {
        id: "models",
        class: "outline-hidden bg-transparent text-sm font-normal block w-fit pr-10 max-w-full placeholder-gray-400",
        value: state === "private" ? "private" : "public"
      },
      ($$renderer3) => {
        $$renderer3.option({ class: "text-gray-700", value: "public", selected: true }, ($$renderer4) => {
          $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Public"))}`);
        });
        $$renderer3.option({ class: "text-gray-700", value: "private", selected: true }, ($$renderer4) => {
          $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Private"))}`);
        });
      }
    );
    $$renderer2.push(` <div class="text-xs text-gray-400 font-normal">`);
    if (state === "private") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Only invited users can access"))}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Visible to all users"))}`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { onChange, state });
  });
}
function WebhookItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let webhook = $$props["webhook"];
    let expanded = fallback($$props["expanded"], false);
    let onClick = fallback($$props["onClick"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onUpdate = fallback($$props["onUpdate"], (changes) => {
    });
    let name = webhook.name;
    let image = webhook.profile_image_url || "";
    if (name !== webhook.name || image !== (webhook.profile_image_url || "")) {
      onUpdate({ name: name.trim() || webhook.name, profile_image_url: image });
    }
    $$renderer2.push(`<input type="file" hidden="" accept="image/*"/> <div class="text-xs -mx-1"><button type="button" class="w-full flex items-center gap-3 px-3.5 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition"><img${attr("src", image || `${WEBUI_BASE_URL}/static/favicon.png`)} class="rounded-full size-8 object-cover flex-shrink-0" alt=""/> <div class="flex-1 text-left min-w-0"><div class="font-normal text-gray-900 dark:text-white truncate">${escape_html(name)}</div> <div class="text-gray-500 text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Created on {{date}}", {
      date: dayjs(webhook.created_at / 1e6).format("MMM D, YYYY")
    }))} `);
    if (webhook.user?.name) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("by {{name}}", { name: webhook.user.name }))}`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    ChevronDown$1($$renderer2, {
      className: `size-3.5 text-gray-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`
    });
    $$renderer2.push(`<!----></button> `);
    if (expanded) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-1 mb-3 px-3.5 py-3 border border-gray-100 dark:border-gray-850 rounded-2xl"><div class="flex items-center gap-3"><button type="button" class="shrink-0 rounded-xl overflow-hidden hover:opacity-80 transition"><img${attr("src", image || `${WEBUI_BASE_URL}/static/favicon.png`)} class="size-8 object-cover" alt=""/></button> <div class="flex-1"><div class="text-gray-500 text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</div> <input type="text" class="w-full text-sm bg-transparent outline-none placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Webhook Name"))}/></div> <div class="flex items-center gap-1">`);
      Tooltip($$renderer2, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy URL"),
        children: ($$renderer3) => {
          $$renderer3.push(`<button type="button" class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">`);
          Clipboard($$renderer3, { className: "size-4 text-gray-500" });
          $$renderer3.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Tooltip($$renderer2, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"),
        children: ($$renderer3) => {
          $$renderer3.push(`<button type="button" class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">`);
          GarbageBin($$renderer3, { className: "size-4 text-gray-500" });
          $$renderer3.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { webhook, expanded, onClick, onDelete, onUpdate });
  });
}
function WebhooksModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let channel = fallback($$props["channel"], null);
    let webhooks = [];
    let isLoading = false;
    let isSaving = false;
    let showDeleteConfirmDialog = false;
    let selectedWebhookId = null;
    let pendingChanges = {};
    const loadWebhooks = async () => {
      isLoading = true;
      try {
        webhooks = await getChannelWebhooks(localStorage.token, channel.id);
      } catch {
        webhooks = [];
      }
      isLoading = false;
    };
    if (show && channel) {
      loadWebhooks();
      selectedWebhookId = null;
      pendingChanges = {};
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (channel) {
        $$renderer3.push("<!--[0-->");
        Modal($$renderer3, {
          size: "sm",
          get show() {
            return show;
          },
          set show($$value) {
            show = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 mb-1"><div class="flex w-full justify-between items-center mr-3"><div class="self-center text-base flex gap-1.5 items-center"><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Webhooks"))}</div> <span class="text-sm text-gray-500">${escape_html(webhooks.length)}</span></div> <button type="button" class="px-3 py-1.5 gap-1 rounded-xl bg-gray-100/50 dark:bg-gray-850/50 text-black dark:text-white transition font-normal text-xs flex items-center justify-center"${attr("disabled", isSaving, true)}>`);
            Plus($$renderer4, { className: "size-3.5" });
            $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("New Webhook"))}</span></button></div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
            XMark$1($$renderer4, { className: "size-4" });
            $$renderer4.push(`<!----></button></div> <div class="flex flex-col w-full px-4 pb-4 dark:text-gray-200"><form class="flex flex-col w-full">`);
            if (isLoading) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="flex justify-center py-10">`);
              Spinner($$renderer4, { className: "size-5" });
              $$renderer4.push(`<!----></div>`);
            } else if (webhooks.length > 0) {
              $$renderer4.push("<!--[1-->");
              $$renderer4.push(`<div class="w-full py-2"><!--[-->`);
              const each_array = ensure_array_like(webhooks);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let webhook = each_array[$$index];
                WebhookItem($$renderer4, {
                  webhook,
                  expanded: selectedWebhookId === webhook.id,
                  onClick: () => {
                    selectedWebhookId = selectedWebhookId === webhook.id ? null : webhook.id;
                  },
                  onDelete: () => {
                    showDeleteConfirmDialog = true;
                  },
                  onUpdate: (changes) => {
                    pendingChanges[webhook.id] = changes;
                  }
                });
              }
              $$renderer4.push(`<!--]--></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<div class="text-gray-500 text-xs text-center py-8 px-10">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No webhooks yet"))}</div>`);
            }
            $$renderer4.push(`<!--]--> <div class="flex justify-end text-sm font-normal gap-1.5"><button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${""}`)} type="submit"${attr("disabled", isSaving, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
            {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></button></div></form></div></div>`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
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
    bind_props($$props, { show, channel });
  });
}
function ChannelModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let onSubmit = fallback($$props["onSubmit"], () => {
    });
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let channel = fallback($$props["channel"], null);
    let edit = fallback($$props["edit"], false);
    let channelTypes = ["group", "dm"];
    let type = "";
    let name = "";
    let isPrivate = null;
    let accessGrants = [];
    let userIds = [];
    let loading = false;
    const onTypeChange = (type2) => {
      if (type2 === "group") {
        if (isPrivate === null) {
          isPrivate = true;
        }
      } else {
        isPrivate = null;
      }
    };
    const init = () => {
      if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin") {
        channelTypes = ["", "group", "dm"];
      } else {
        channelTypes = ["group", "dm"];
      }
      type = channel?.type ?? channelTypes[0];
      if (channel) {
        name = channel?.name ?? "";
        if (type === "group") {
          isPrivate = typeof channel?.is_private === "boolean" ? channel.is_private : true;
        } else {
          isPrivate = null;
        }
        accessGrants = channel?.access_grants ?? [];
        userIds = channel?.user_ids ?? [];
      }
    };
    let showDeleteConfirmDialog = false;
    let showWebhooksModal = false;
    const resetHandler = () => {
      type = "";
      name = "";
      accessGrants = [];
      userIds = [];
      loading = false;
    };
    if (name) {
      name = name.replace(/\s/g, "-").toLocaleLowerCase();
    }
    onTypeChange(type);
    if (show) {
      init();
    } else {
      resetHandler();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "md",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-4 pt-3 pb-1"><div class="text-sm self-center">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Channel"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create Channel"))}`);
          }
          $$renderer4.push(`<!--]--></div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full">`);
          if (!edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex flex-col w-full mt-2 mb-1"><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Channel Type"))}</div> <div class="flex-1">`);
            Tooltip($$renderer4, {
              content: type === "dm" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("A private conversation between you and selected users") : type === "group" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("A collaboration channel where people join as members") : store_get($$store_subs ??= {}, "$i18n", i18n).t("A discussion channel where access is controlled by groups and permissions"),
              placement: "top-start",
              children: ($$renderer5) => {
                $$renderer5.select(
                  {
                    class: "w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden",
                    value: type
                  },
                  ($$renderer6) => {
                    $$renderer6.push(`<!--[-->`);
                    const each_array = ensure_array_like(channelTypes);
                    for (let channelTypeIdx = 0, $$length = each_array.length; channelTypeIdx < $$length; channelTypeIdx++) {
                      let channelType = each_array[channelTypeIdx];
                      $$renderer6.option({ value: channelType, selected: channelTypeIdx === 0 }, ($$renderer7) => {
                        if (channelType === "group") {
                          $$renderer7.push("<!--[0-->");
                          $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Group Channel"))}`);
                        } else if (channelType === "dm") {
                          $$renderer7.push("<!--[1-->");
                          $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Direct Message"))}`);
                        } else if (channelType === "") {
                          $$renderer7.push("<!--[2-->");
                          $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Channel"))}`);
                        } else {
                          $$renderer7.push("<!--[-1-->");
                        }
                        $$renderer7.push(`<!--]-->`);
                      });
                    }
                    $$renderer6.push(`<!--]-->`);
                  }
                );
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="text-gray-300 dark:text-gray-700 text-xs">`);
          if (type === "") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Discussion channel where access is based on groups and permissions"))}`);
          } else if (type === "group") {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Collaboration channel where people join as members"))}`);
          } else if (type === "dm") {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Private conversation between selected users"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex flex-col w-full mt-2"><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Channel Name"))} <span class="text-xs text-gray-200 dark:text-gray-800 ml-0.5">`);
          if (type === "dm") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Optional"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></span></div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${attr("value", name)}${attr("placeholder", `${store_get($$store_subs ??= {}, "$i18n", i18n).t("new-channel")}`)} autocomplete="off"${attr("required", type !== "dm", true)} max="100"/></div></div> `);
          if (type !== "dm") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="-mx-2 mb-1 mt-2.5 px-2">`);
            if (type === "") {
              $$renderer4.push("<!--[0-->");
              AccessControl($$renderer4, {
                accessRoles: ["read", "write"],
                get accessGrants() {
                  return accessGrants;
                },
                set accessGrants($$value) {
                  accessGrants = $$value;
                  $$settled = false;
                }
              });
            } else if (type === "group") {
              $$renderer4.push("<!--[1-->");
              Visibility($$renderer4, {
                state: isPrivate ? "private" : "public",
                onChange: (value) => {
                  if (value === "private") {
                    isPrivate = true;
                  } else {
                    isPrivate = false;
                  }
                  /* @__PURE__ */ console.log(value, isPrivate);
                }
              });
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (["dm"].includes(type)) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div>`);
            MemberSelector($$renderer4, {
              includeGroups: false,
              get userIds() {
                return userIds;
              },
              set userIds($$value) {
                userIds = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex w-full mt-2 items-center justify-between"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Webhooks"))}</div> <button class="text-xs bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden text-left" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</button></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex justify-end pt-3 text-sm font-normal gap-1.5">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="px-3.5 py-1.5 text-sm font-normal dark:bg-black dark:hover:bg-black/90 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${loading ? " cursor-not-allowed" : ""}`)} type="submit"${attr("disabled", loading, true)}>`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Update"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create"))}`);
          }
          $$renderer4.push(`<!--]--> `);
          if (loading) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="ml-2 self-center">`);
            Spinner($$renderer4, {});
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to delete this channel?"),
        confirmLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"),
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      WebhooksModal($$renderer3, {
        channel,
        get show() {
          return showWebhooksModal;
        },
        set show($$value) {
          showWebhooksModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, onSubmit, onUpdate, channel, edit });
  });
}
function ChannelItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let className = fallback($$props["className"], "");
    let channel = $$props["channel"];
    let showEditChannelModal = false;
    const hasPublicReadGrant = (grants) => Array.isArray(grants) && grants.some((grant) => grant?.principal_type === "user" && grant?.principal_id === "*" && grant?.permission === "read");
    const isPublicChannel = (channel2) => {
      if (channel2?.type === "group") {
        if (typeof channel2?.is_private === "boolean") {
          return !channel2.is_private;
        }
        return hasPublicReadGrant(channel2?.access_grants);
      }
      return hasPublicReadGrant(channel2?.access_grants);
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ChannelModal($$renderer3, {
        channel,
        edit: true,
        onUpdate,
        onSubmit: async (payload) => {
          const { name, is_private, access_grants, group_ids, user_ids } = payload ?? {};
          const res = await updateChannelById(localStorage.token, channel.id, { name, is_private, access_grants, group_ids, user_ids }).catch((error) => {
            toast.error(error.message);
          });
          if (res) {
            toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Channel updated successfully"));
          }
          onUpdate();
        },
        get show() {
          return showEditChannelModal;
        },
        set show($$value) {
          showEditChannelModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div id="sidebar-channel-item"${attr_class(` w-full ${stringify(className)} rounded-xl flex relative group hover:bg-gray-100 dark:hover:bg-gray-900 ${store_get($$store_subs ??= {}, "$page", page).url.pathname === `/channels/${channel.id}` ? "bg-gray-100 dark:bg-gray-900 selected" : ""} ${channel?.type === "dm" ? "px-1 py-[3px]" : "p-1"} ${channel?.unread_count > 0 ? "font-normal dark:text-white text-black" : " dark:text-gray-400 text-gray-600"} cursor-pointer select-none`)}><a class="w-full flex justify-between"${attr("href", `/channels/${stringify(channel.id)}`)} draggable="false"><div class="flex items-center gap-1"><div>`);
      if (channel?.type === "dm") {
        $$renderer3.push("<!--[0-->");
        if (channel?.users) {
          $$renderer3.push("<!--[0-->");
          const channelMembers = channel.users.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id);
          $$renderer3.push(`<div class="flex ml-[1px] mr-0.5 relative"><!--[-->`);
          const each_array = ensure_array_like(channelMembers.slice(0, 2));
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            let u = each_array[index];
            $$renderer3.push(`<img${attr("src", `${WEBUI_API_BASE_URL}/users/${u.id}/profile/image`)}${attr("alt", u.name)}${attr_class(` size-5.5 rounded-full border-2 border-white dark:border-gray-900 ${index === 1 ? "-ml-2.5" : ""}`)}/>`);
          }
          $$renderer3.push(`<!--]--> `);
          if (channelMembers.length === 1) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="absolute bottom-0 right-0"><span class="relative flex size-2">`);
            if (channelMembers[0]?.is_active) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--> <span${attr_class(`relative inline-flex size-2 rounded-full ${channelMembers[0]?.is_active ? "bg-green-500" : "bg-gray-300 dark:bg-gray-700"} border-[1.5px] border-white dark:border-gray-900`)}></span></span></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          User($$renderer3, { className: "size-4 ml-1 mr-0.5", strokeWidth: "1.5" });
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="size-4 justify-center flex items-center ml-1">`);
        if (isPublicChannel(channel)) {
          $$renderer3.push("<!--[0-->");
          Hashtag($$renderer3, { className: "size-3", strokeWidth: "1.8" });
        } else {
          $$renderer3.push("<!--[-1-->");
          Lock($$renderer3, { className: "size-3.5", strokeWidth: "1.7" });
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="text-left self-center overflow-hidden w-full line-clamp-1 flex-1 pr-1 flex items-center gap-2.5">`);
      if (channel?.name) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<span class="line-clamp-1">${escape_html(channel.name)}</span>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<span class="shrink-0 line-clamp-1">${escape_html(channel?.users?.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id).map((u) => u.name).join(", "))}</span> `);
        if (channel?.users?.length === 2) {
          $$renderer3.push("<!--[0-->");
          const dmUser = channel.users.find((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id);
          if (dmUser?.status_emoji || dmUser?.status_message) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<span class="flex gap-1.5 line-clamp-1">`);
            if (dmUser?.status_emoji) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<div class="self-center shrink-0">`);
              Emoji($$renderer3, { className: "size-3.5", shortCode: dmUser?.status_emoji });
              $$renderer3.push(`<!----></div>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--> <div class="line-clamp-1 italic">${escape_html(dmUser?.status_message)}</div></span>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></div></div> <div class="flex items-center">`);
      if (channel?.unread_count > 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="text-xs py-[1px] px-2 rounded-xl bg-gray-100 text-black dark:bg-gray-800 dark:text-white font-normal whitespace-nowrap">${escape_html(new Intl.NumberFormat(store_get($$store_subs ??= {}, "$i18n", i18n).locale, { notation: "compact", compactDisplay: "short" }).format(channel.unread_count))}</div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></a> `);
      if (["dm"].includes(channel?.type)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="ml-0.5 mr-1 invisible group-hover:visible self-center flex items-center dark:text-gray-300"><button type="button" class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto">`);
        XMark($$renderer3, { className: "size-3.5" });
        $$renderer3.push(`<!----></button></div>`);
      } else if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || channel.user_id === store_get($$store_subs ??= {}, "$user", user)?.id) {
        $$renderer3.push("<!--[1-->");
        $$renderer3.push(`<div class="ml-0.5 mr-1 invisible group-hover:visible self-center flex items-center dark:text-gray-300"><button type="button" class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto">`);
        Settings($$renderer3, { className: "size-3.5", strokeWidth: "1.5" });
        $$renderer3.push(`<!----></button></div>`);
      } else {
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
    bind_props($$props, { onUpdate, className, channel });
  });
}
function Search($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M17 17L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function SearchInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let placeholder = fallback($$props["placeholder"], "");
    let value = fallback($$props["value"], "");
    let showClearButton = fallback($$props["showClearButton"], false);
    let onFocus = fallback($$props["onFocus"], () => {
    });
    let onKeydown = fallback($$props["onKeydown"], (e) => {
    });
    let lastWord = "";
    let options = [
      {
        name: "tag:",
        description: store_get($$store_subs ??= {}, "$i18n", i18n).t("search for tags")
      },
      {
        name: "folder:",
        description: store_get($$store_subs ??= {}, "$i18n", i18n).t("search for folders")
      },
      {
        name: "pinned:",
        description: store_get($$store_subs ??= {}, "$i18n", i18n).t("search for pinned chats")
      },
      {
        name: "shared:",
        description: store_get($$store_subs ??= {}, "$i18n", i18n).t("search for shared chats")
      },
      {
        name: "archived:",
        description: store_get($$store_subs ??= {}, "$i18n", i18n).t("search for archived chats")
      }
    ];
    const initItems = async () => {
      /* @__PURE__ */ console.log("initItems", lastWord);
      await tick();
      if (lastWord.startsWith("tag:")) {
        [
          ...store_get($$store_subs ??= {}, "$tags", tags),
          {
            id: "none",
            name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Untagged")
          }
        ].filter((tag) => {
          const tagName = lastWord.slice(4);
          if (tagName) {
            const tagId = tagName.replaceAll(" ", "_").toLowerCase();
            if (tag.id !== tagId) {
              return tag.id.startsWith(tagId);
            } else {
              return false;
            }
          } else {
            return true;
          }
        }).map((tag) => {
          return { id: tag.id, name: tag.name, type: "tag" };
        });
      } else if (lastWord.startsWith("folder:")) {
        [...store_get($$store_subs ??= {}, "$folders", folders)].filter((folder) => {
          const folderName = lastWord.slice(7);
          if (folderName) {
            const id = folder.name.replaceAll(" ", "_").toLowerCase();
            const folderId = folderName.replaceAll(" ", "_").toLowerCase();
            if (id !== folderId) {
              return id.startsWith(folderId);
            } else {
              return false;
            }
          } else {
            return true;
          }
        }).map((folder) => {
          return {
            id: folder.name.replaceAll(" ", "_").toLowerCase(),
            name: folder.name,
            type: "folder"
          };
        });
      } else if (lastWord.startsWith("pinned:")) {
        [
          { id: "true", name: "true", type: "pinned" },
          { id: "false", name: "false", type: "pinned" }
        ].filter((item) => {
          const pinnedValue = lastWord.slice(7);
          if (pinnedValue) {
            return item.id.startsWith(pinnedValue) && item.id !== pinnedValue;
          } else {
            return true;
          }
        });
      } else if (lastWord.startsWith("shared:")) {
        [
          { id: "true", name: "true", type: "shared" },
          { id: "false", name: "false", type: "shared" }
        ].filter((item) => {
          const sharedValue = lastWord.slice(7);
          if (sharedValue) {
            return item.id.startsWith(sharedValue) && item.id !== sharedValue;
          } else {
            return true;
          }
        });
      } else if (lastWord.startsWith("archived:")) {
        [
          { id: "true", name: "true", type: "archived" },
          { id: "false", name: "false", type: "archived" }
        ].filter((item) => {
          const archivedValue = lastWord.slice(9);
          if (archivedValue) {
            return item.id.startsWith(archivedValue) && item.id !== archivedValue;
          } else {
            return true;
          }
        });
      } else ;
    };
    lastWord = value ? value.split(" ").at(-1) : value;
    options.filter((option) => {
      return option.name.startsWith(lastWord);
    });
    if (lastWord && lastWord !== null) {
      initItems();
    }
    $$renderer2.push(`<div class="px-1 mb-1 flex justify-center space-x-2 relative z-10" id="search-container"><div class="flex w-full rounded-xl" id="chat-search"><div class="self-center py-2 rounded-l-xl bg-transparent dark:text-gray-300">`);
    Search($$renderer2, {});
    $$renderer2.push(`<!----></div> <input id="search-input" class="w-full rounded-r-xl py-1.5 pl-2.5 text-sm bg-transparent dark:text-gray-300 outline-hidden"${attr("placeholder", placeholder ? placeholder : store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))} autocomplete="off" maxlength="500"${attr("value", value)}/> `);
    if (
      // Ignore keydown fired while confirming an IME composition (e.g. Japanese/Chinese/Korean)
      // so confirming the composition with Enter doesn't trigger search actions (#26172).
      // if the user types something, reset to the top selection.
      showClearButton && value
    ) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">`);
      XMark($$renderer2, { className: "size-3", strokeWidth: "1.5" });
      $$renderer2.push(`<!----></button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { placeholder, value, showClearButton, onFocus, onKeydown });
  });
}
function SearchModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    dayjs.extend(calendar);
    dayjs.extend(localizedFormat);
    let show = fallback($$props["show"], false);
    let onClose = fallback($$props["onClose"], () => {
    });
    let showShareChatModal = false;
    let showDeleteConfirm = false;
    let menuChatId = "";
    let menuChatTitle = "";
    let editingChatId = null;
    let editingChatTitle = "";
    let shiftKey = false;
    const onShiftKeyDown = (e) => {
      if (e.key === "Shift") shiftKey = true;
    };
    const onShiftKeyUp = (e) => {
      if (e.key === "Shift") shiftKey = false;
    };
    let generating = false;
    const refreshSidebar = async () => {
      await refreshChatList(localStorage.token, { refreshPinned: true });
    };
    const cloneChatHandler = async (id) => {
      const chat = chatList?.find((c) => c.id === id);
      const res = await cloneChatById(localStorage.token, id, store_get($$store_subs ??= {}, "$i18n", i18n).t("Clone of {{TITLE}}", { TITLE: chat?.title ?? "Chat" })).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        await refreshSidebar();
        await searchHandler();
      }
    };
    const archiveChatHandler = async (id) => {
      try {
        await archiveChatById(localStorage.token, id);
        chatList = chatList?.filter((c) => c.id !== id) ?? null;
        if (store_get($$store_subs ??= {}, "$currentChatId", chatId) === id) {
          await goto("/");
          chatId.set("");
        }
        await refreshSidebar();
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat archived."));
      } catch (error) {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to archive chat."));
      }
    };
    const moveChatHandler = async (chatId2, folderId) => {
      if (chatId2 && folderId) {
        const res = await updateChatFolderIdById(localStorage.token, chatId2, folderId).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          chatList = chatList?.filter((c) => c.id !== chatId2) ?? null;
          await refreshSidebar();
          toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat moved successfully"));
        }
      }
    };
    const renameHandler = async (id) => {
      editingChatId = id;
      editingChatTitle = chatList?.find((c) => c.id === id)?.title ?? "";
      await tick();
      const input = document.getElementById(`search-chat-title-input-${id}`);
      if (input) {
        input.focus();
        input.select();
      }
    };
    let actions = [
      {
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Start a new conversation"),
        onClick: async () => {
          await goto(`/${query ? `?q=${query}` : ""}`);
          show = false;
          onClose();
        },
        icon: EditPencil
      }
    ];
    let query = "";
    let page2 = 1;
    let chatList = null;
    let allChatsLoaded = false;
    let searchDebounceTimeout;
    let selectedIdx = null;
    let selectedChat = null;
    let selectedModels = [""];
    let history = null;
    let messages = null;
    const messagesContainerId = "chat-preview";
    const searchFilterPrefixes = ["tag:", "folder:", "pinned:", "archived:", "shared:"];
    const getSnippetQuery = (query2) => {
      return query2.trim().split(/\s+/).filter((word) => !searchFilterPrefixes.some((prefix) => word.toLowerCase().startsWith(prefix))).join(" ").trim();
    };
    const getHighlightedSnippet = (snippet, query2) => {
      const match = getSnippetQuery(query2).toLowerCase();
      const matchIndex = match ? snippet.toLowerCase().indexOf(match) : -1;
      if (matchIndex === -1) {
        return [{ text: snippet, highlight: false }];
      }
      const start = Math.max(matchIndex - 60, 0);
      const end = Math.min(matchIndex + match.length + 80, snippet.length);
      const visibleSnippet = `${start > 0 ? "..." : ""}${snippet.slice(start, end)}${end < snippet.length ? "..." : ""}`;
      const index = visibleSnippet.toLowerCase().indexOf(match);
      return [
        { text: visibleSnippet.slice(0, index), highlight: false },
        {
          text: visibleSnippet.slice(index, index + match.length),
          highlight: true
        },
        {
          text: visibleSnippet.slice(index + match.length),
          highlight: false
        }
      ].filter((part) => part.text);
    };
    const scrollPreviewToBottom = async () => {
      await tick();
      requestAnimationFrame(() => {
      });
      setTimeout(
        () => {
        },
        80
      );
    };
    const loadChatPreview = async (selectedIdx2) => {
      if (!chatList || chatList.length === 0 || selectedIdx2 === null) {
        selectedChat = null;
        messages = null;
        history = null;
        selectedModels = [""];
        return;
      }
      const selectedChatIdx = selectedIdx2 - actions.length;
      if (selectedChatIdx < 0 || selectedChatIdx >= chatList.length) {
        selectedChat = null;
        messages = null;
        history = null;
        selectedModels = [""];
        return;
      }
      const chatId2 = chatList[selectedChatIdx].id;
      const chat = await getChatById(localStorage.token, chatId2).catch(async (error) => {
        return null;
      });
      if (chat) {
        selectedChat = chat;
        if (chat?.chat?.history) {
          selectedModels = (chat?.chat?.models ?? void 0) !== void 0 ? chat?.chat?.models : [chat?.chat?.models ?? ""];
          history = chat?.chat?.history;
          messages = [];
          await scrollPreviewToBottom();
        } else {
          messages = [];
        }
      } else {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to load chat preview"));
        selectedChat = null;
        messages = null;
        history = null;
        selectedModels = [""];
        return;
      }
    };
    const searchHandler = async () => {
      if (!show) {
        return;
      }
      if (searchDebounceTimeout) {
        clearTimeout(searchDebounceTimeout);
      }
      page2 = 1;
      chatList = null;
      if (query === "") {
        chatList = await getChatList(localStorage.token, page2);
      } else {
        searchDebounceTimeout = setTimeout(
          async () => {
            chatList = await getChatListBySearchText(localStorage.token, query, page2);
            if ((chatList ?? []).length === 0) {
              allChatsLoaded = true;
            } else {
              allChatsLoaded = false;
            }
          },
          500
        );
      }
      selectedChat = null;
      messages = null;
      history = null;
      selectedModels = [""];
      if ((chatList ?? []).length === 0) {
        allChatsLoaded = true;
      } else {
        allChatsLoaded = false;
      }
    };
    const onKeyDown = (e) => {
      if (e.isComposing || e.keyCode === 229) {
        return;
      }
      const searchOptions = document.getElementById("search-options-container");
      if (searchOptions || !show) {
        return;
      }
      if (editingChatId) {
        return;
      }
      if (e.code === "Escape") {
        show = false;
        onClose();
      } else if (e.code === "Enter") {
        const item2 = document.querySelector(`[data-arrow-selected="true"]`);
        if (item2) {
          item2?.click();
          show = false;
        }
        return;
      } else if (e.code === "ArrowDown") {
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
          if (document.activeElement === searchInput) {
            searchInput.blur();
            selectedIdx = 0;
            return;
          }
        }
        selectedIdx = Math.min(selectedIdx + 1, (chatList ?? []).length - 1 + actions.length);
      } else if (e.code === "ArrowUp") {
        if (selectedIdx === 0) {
          const searchInput = document.getElementById("search-input");
          if (searchInput) {
            if (document.activeElement !== searchInput) {
              searchInput.focus();
              selectedIdx = 0;
              return;
            }
          }
        }
        selectedIdx = Math.max(selectedIdx - 1, 0);
      }
      const item = document.querySelector(`[data-arrow-selected="true"]`);
      item?.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
    };
    onDestroy(() => {
      if (searchDebounceTimeout) {
        clearTimeout(searchDebounceTimeout);
      }
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keydown", onShiftKeyDown);
      document.removeEventListener("keyup", onShiftKeyUp);
    });
    if (chatList) {
      loadChatPreview(selectedIdx);
    }
    if (show) {
      searchHandler();
    } else {
      editingChatId = null;
      editingChatTitle = "";
      generating = false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ShareChatModal($$renderer3, {
        chatId: menuChatId,
        get show() {
          return showShareChatModal;
        },
        set show($$value) {
          showShareChatModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete chat?"),
        get show() {
          return showDeleteConfirm;
        },
        set show($$value) {
          showDeleteConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-500 flex-1 line-clamp-3">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("This will delete"))} <span class="font-normal">${escape_html(menuChatTitle)}</span>.</div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Modal($$renderer3, {
        size: "xl",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="py-2.5 dark:text-gray-300 text-gray-700"><div class="px-3.5 pb-1">`);
          SearchInput($$renderer4, {
            placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"),
            showClearButton: true,
            onFocus: () => {
              selectedIdx = null;
              messages = null;
            },
            onKeydown: (e) => {
              if (e.code === "Enter" && (chatList ?? []).length > 0) {
                const item2 = document.querySelector(`[data-arrow-selected="true"]`);
                if (item2) {
                  item2?.click();
                }
                show = false;
                return;
              } else if (e.code === "ArrowDown") {
                selectedIdx = Math.min(selectedIdx + 1, (chatList ?? []).length - 1 + actions.length);
              } else if (e.code === "ArrowUp") {
                selectedIdx = Math.max(selectedIdx - 1, 0);
              } else {
                selectedIdx = 0;
              }
              const item = document.querySelector(`[data-arrow-selected="true"]`);
              item?.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
            },
            get value() {
              return query;
            },
            set value($$value) {
              query = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex px-3.5 pb-0.5"><div class="flex flex-col overflow-y-auto h-96 md:h-[40rem] max-h-full scrollbar-hidden w-full flex-1 pr-2"><div class="w-full text-xs text-gray-500 dark:text-gray-500 font-normal pb-2 px-2">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Actions"))}</div> <!--[-->`);
          const each_array = ensure_array_like(actions);
          for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
            let action = each_array[idx];
            $$renderer4.push(`<button${attr_class(`w-full flex items-center rounded-lg text-sm py-1.5 px-2.5 hover:bg-gray-50/70 dark:hover:bg-gray-850/50 ${selectedIdx === idx ? "bg-gray-50/70 dark:bg-gray-850/50" : ""}`)}${attr("data-arrow-selected", selectedIdx === idx ? "true" : void 0)} draggable="false"><div class="pr-2">`);
            if (action.icon) {
              $$renderer4.push("<!--[-->");
              action.icon($$renderer4, {});
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(`</div> <div class="flex-1 text-left"><div class="text-ellipsis line-clamp-1 w-full">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(action.label))}</div></div></button>`);
          }
          $$renderer4.push(`<!--]--> `);
          if (chatList) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div aria-hidden="true" class="h-px my-3"></div> `);
            if (chatList.length === 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-xs text-gray-500 dark:text-gray-400 text-center px-5 py-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No results found"))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <!--[-->`);
            const each_array_1 = ensure_array_like(chatList);
            for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
              let chat = each_array_1[idx];
              if (idx === 0 || idx > 0 && chat.time_range !== chatList[idx - 1].time_range) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div${attr_class(`w-full text-xs text-gray-500 dark:text-gray-500 font-normal ${idx === 0 ? "" : "pt-4"} pb-1.5 px-2`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(chat.time_range))}</div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> <div${attr_class(`w-full flex justify-between items-center rounded-lg text-sm py-1.5 pl-2.5 pr-32 hover:bg-gray-50/70 dark:hover:bg-gray-850/50 group/item relative ${selectedIdx === idx + actions.length ? "bg-gray-50/70 dark:bg-gray-850/50" : ""}`)}${attr("data-arrow-selected", selectedIdx === idx + actions.length ? "true" : void 0)}>`);
              if (editingChatId === chat.id) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="flex-1 min-w-0"><input${attr("id", `search-chat-title-input-${stringify(chat.id)}`)}${attr("value", editingChatTitle)} class="bg-transparent w-full outline-none"${attr("placeholder", generating ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Generating...") : "")}${attr("disabled", generating, true)}/></div> <div class="flex items-center shrink-0 pl-1">`);
                Tooltip($$renderer4, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Generate"),
                  children: ($$renderer5) => {
                    $$renderer5.push(`<button class="self-center dark:hover:text-white transition disabled:cursor-not-allowed"${attr("disabled", generating, true)}>`);
                    if (generating) {
                      $$renderer5.push("<!--[0-->");
                      Spinner($$renderer5, { className: "size-4" });
                    } else {
                      $$renderer5.push("<!--[-1-->");
                      Sparkles$1($$renderer5, { strokeWidth: "2" });
                    }
                    $$renderer5.push(`<!--]--></button>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`<a class="flex-1 min-w-0"${attr("href", `/c/${stringify(chat.id)}`)} draggable="false"><div class="text-ellipsis line-clamp-1 w-full">${escape_html(chat?.title)}</div> `);
                if (chat?.snippet) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<div class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5"><!--[-->`);
                  const each_array_2 = ensure_array_like(getHighlightedSnippet(chat.snippet, query));
                  for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                    let part = each_array_2[$$index_1];
                    if (part.highlight) {
                      $$renderer4.push("<!--[0-->");
                      $$renderer4.push(`<mark class="rounded bg-yellow-200/70 px-0.5 text-inherit dark:bg-yellow-500/30">${escape_html(part.text)}</mark>`);
                    } else {
                      $$renderer4.push("<!--[-1-->");
                      $$renderer4.push(`${escape_html(part.text)}`);
                    }
                    $$renderer4.push(`<!--]-->`);
                  }
                  $$renderer4.push(`<!--]--></div>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]--></a>`);
              }
              $$renderer4.push(`<!--]--> <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3 pl-6 shrink-0"><div class="text-gray-500 dark:text-gray-400 text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(dayjs(chat?.updated_at * 1e3).calendar(null, {
                sameDay: "[Today]",
                nextDay: "[Tomorrow]",
                nextWeek: "dddd",
                lastDay: "[Yesterday]",
                lastWeek: "[Last] dddd",
                sameElse: "L"
              })))}</div> `);
              if (editingChatId !== chat.id) {
                $$renderer4.push("<!--[0-->");
                if (shiftKey) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<div class="flex items-center space-x-1.5">`);
                  Tooltip($$renderer4, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Archive"),
                    className: "flex items-center",
                    children: ($$renderer5) => {
                      $$renderer5.push(`<button class="self-center dark:hover:text-white transition" type="button">`);
                      ArchiveBox($$renderer5, { className: "size-4 translate-y-[0.5px]", strokeWidth: "2" });
                      $$renderer5.push(`<!----></button>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!----> `);
                  Tooltip($$renderer4, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"),
                    children: ($$renderer5) => {
                      $$renderer5.push(`<button class="self-center dark:hover:text-white transition" type="button">`);
                      GarbageBin($$renderer5, { strokeWidth: "2" });
                      $$renderer5.push(`<!----></button>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!----></div>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                  $$renderer4.push(`<div class="flex items-center">`);
                  ChatMenu($$renderer4, {
                    chatId: chat.id,
                    shareHandler: () => {
                      menuChatId = chat.id;
                      showShareChatModal = true;
                    },
                    moveChatHandler,
                    cloneChatHandler: () => {
                      cloneChatHandler(chat.id);
                    },
                    archiveChatHandler: () => {
                      archiveChatHandler(chat.id);
                    },
                    renameHandler: () => {
                      renameHandler(chat.id);
                    },
                    deleteHandler: () => {
                      menuChatId = chat.id;
                      menuChatTitle = chat.title;
                      showDeleteConfirm = true;
                    },
                    onClose: () => {
                    },
                    onPinChange: async () => {
                      await refreshSidebar();
                      await searchHandler();
                    },
                    children: ($$renderer5) => {
                      $$renderer5.push(`<button aria-label="Chat Menu" class="self-center dark:hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!----></div>`);
                }
                $$renderer4.push(`<!--]-->`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div></div>`);
            }
            $$renderer4.push(`<!--]--> `);
            if (!allChatsLoaded) {
              $$renderer4.push("<!--[0-->");
              Loader($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="w-full flex justify-center py-4 text-xs animate-pulse items-center gap-2">`);
                  Spinner($$renderer5, { className: " size-4" });
                  $$renderer5.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading..."))}</div></div>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="w-full h-full flex justify-center items-center">`);
            Spinner($$renderer4, { className: "size-5" });
            $$renderer4.push(`<!----></div>`);
          }
          $$renderer4.push(`<!--]--></div> <div${attr("id", messagesContainerId)} class="hidden md:flex md:flex-1 w-full overflow-y-auto h-96 md:h-[40rem] scrollbar-hidden @container">`);
          if (messages === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="w-full h-full flex justify-center items-center text-gray-500 dark:text-gray-400 text-sm">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a conversation to preview"))}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="w-full h-full flex flex-col">`);
            Messages($$renderer4, {
              className: "h-full flex pt-4 pb-8 w-full",
              chatId: `chat-preview-${selectedChat?.id ?? ""}`,
              user: store_get($$store_subs ??= {}, "$user", user),
              readOnly: true,
              selectedModels,
              autoScroll: true,
              messagesContainerId,
              messagesCount: 8,
              sendMessage: () => {
              },
              continueResponse: () => {
              },
              regenerateResponse: () => {
              },
              get history() {
                return history;
              },
              set history($$value) {
                history = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div>`);
          }
          $$renderer4.push(`<!--]--></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, onClose });
  });
}
function PinnedModelItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let model = fallback($$props["model"], null);
    let shiftKey = fallback($$props["shiftKey"], false);
    let onClick = fallback($$props["onClick"], () => {
    });
    let onUnpin = fallback($$props["onUnpin"], () => {
    });
    if (model) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-center text-gray-800 dark:text-gray-200 cursor-grab relative group"${attr("data-id", model?.id)}><a class="grow flex items-center space-x-2 rounded-xl px-2 py-[7px] group-hover:bg-gray-100 dark:group-hover:bg-gray-900 transition"${attr("href", `/?model=${stringify(model?.id)}`)} draggable="false"><div class="self-center shrink-0"><img${attr("src", `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${model.id}&lang=${store_get($$store_subs ??= {}, "$i18n", i18n).language}`)} class="size-4 rounded-full" alt="logo"/></div> <div class="flex self-center translate-y-[0.5px]"><div class="self-center text-[13px] leading-5 line-clamp-1">${escape_html(model?.name ?? model.id)}</div></div></a> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { model, shiftKey, onClick, onUnpin });
  });
}
function PinnedModelList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let selectedChatId = fallback($$props["selectedChatId"], null);
    let shiftKey = fallback($$props["shiftKey"], false);
    let pinnedModels = [];
    onDestroy(() => {
    });
    $$renderer2.push(`<div class="mt-0.5 pb-1.5" id="pinned-models-list"><!--[-->`);
    const each_array = ensure_array_like(pinnedModels);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let modelId = each_array[$$index];
      const model = store_get($$store_subs ??= {}, "$models", models).find((model2) => model2.id === modelId);
      if (model) {
        $$renderer2.push("<!--[0-->");
        PinnedModelItem($$renderer2, {
          model,
          shiftKey,
          onClick: () => {
            selectedChatId = null;
            chatId.set("");
            if (store_get($$store_subs ??= {}, "$mobile", mobile)) {
              showSidebar.set(false);
            }
          },
          onUnpin: (store_get($$store_subs ??= {}, "$settings", settings)?.pinnedModels ?? []).includes(modelId) ? () => {
            const pinnedModels2 = store_get($$store_subs ??= {}, "$settings", settings).pinnedModels.filter((id) => id !== modelId);
            settings.set({
              ...store_get($$store_subs ??= {}, "$settings", settings),
              pinnedModels: pinnedModels2
            });
            updateUserSettings(localStorage.token, { ui: store_get($$store_subs ??= {}, "$settings", settings) });
          } : null
        });
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { selectedChatId, shiftKey });
  });
}
function PinnedNoteList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let sortedPinnedNotes;
    const i18n = getContext("i18n");
    let selectedChatId = fallback($$props["selectedChatId"], null);
    sortedPinnedNotes = (() => {
      const order = store_get($$store_subs ??= {}, "$settings", settings)?.pinnedNotesOrder;
      if (!order || order.length === 0) return store_get($$store_subs ??= {}, "$pinnedNotes", pinnedNotes);
      const orderMap = new Map(order.map((id, idx) => [id, idx]));
      return [
        ...store_get($$store_subs ??= {}, "$pinnedNotes", pinnedNotes)
      ].sort((a, b) => {
        const aIdx = orderMap.has(a.id) ? orderMap.get(a.id) : Infinity;
        const bIdx = orderMap.has(b.id) ? orderMap.get(b.id) : Infinity;
        return aIdx - bIdx;
      });
    })();
    $$renderer2.push(`<div class="mt-0.5 pb-1.5" id="pinned-notes-list"><!--[-->`);
    const each_array = ensure_array_like(sortedPinnedNotes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let note = each_array[$$index];
      $$renderer2.push(`<div class="flex items-center text-gray-800 dark:text-gray-200 cursor-grab relative group rounded-xl px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 transition"${attr("data-id", note.id)}><a class="grow flex items-center gap-2.5 text-[13px] leading-5"${attr("href", `/notes/${note.id}`)} draggable="false"><div class="self-center">`);
      Notes($$renderer2, { className: "size-3.5", strokeWidth: "1.5" });
      $$renderer2.push(`<!----></div> <div class="flex-1 text-ellipsis line-clamp-1">${escape_html(note.title)}</div></a> <button class="invisible group-hover:visible self-center p-0.5 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Unpin"))}>`);
      XMark($$renderer2, { className: "size-3.5", strokeWidth: "1.5" });
      $$renderer2.push(`<!----></button></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { selectedChatId });
  });
}
const CONFIGURABLE_SHORTCUTS = [
  "newChat",
  "newTemporaryChat",
  "deleteChat",
  "openModelSelector",
  "toggleDictation",
  "navigateChatUp",
  "navigateChatDown",
  "search",
  "openSettings",
  "showShortcuts",
  "toggleSidebar",
  "toggleControls",
  "closeModal",
  "focusInput",
  "generateMessagePair",
  "regenerateResponse",
  "copyLastCodeBlock",
  "copyLastResponse"
  /* COPY_LAST_RESPONSE */
];
const DEFAULT_KEYBINDINGS = {
  [
    "newChat"
    /* NEW_CHAT */
  ]: "Cmd+Shift+O",
  [
    "newTemporaryChat"
    /* NEW_TEMPORARY_CHAT */
  ]: "Cmd+Shift+'",
  [
    "deleteChat"
    /* DELETE_CHAT */
  ]: "Cmd+Shift+Backspace",
  [
    "openModelSelector"
    /* OPEN_MODEL_SELECTOR */
  ]: "Cmd+Shift+M",
  [
    "toggleDictation"
    /* TOGGLE_DICTATION */
  ]: "Cmd+Shift+L",
  [
    "navigateChatUp"
    /* NAVIGATE_CHAT_UP */
  ]: "",
  [
    "navigateChatDown"
    /* NAVIGATE_CHAT_DOWN */
  ]: "",
  [
    "search"
    /* SEARCH */
  ]: "Cmd+K",
  [
    "openSettings"
    /* OPEN_SETTINGS */
  ]: "Cmd+.",
  [
    "showShortcuts"
    /* SHOW_SHORTCUTS */
  ]: "Cmd+/",
  [
    "toggleSidebar"
    /* TOGGLE_SIDEBAR */
  ]: "Cmd+Shift+S",
  [
    "toggleControls"
    /* TOGGLE_CONTROLS */
  ]: "",
  [
    "closeModal"
    /* CLOSE_MODAL */
  ]: "Escape",
  [
    "focusInput"
    /* FOCUS_INPUT */
  ]: "Shift+Escape",
  [
    "generateMessagePair"
    /* GENERATE_MESSAGE_PAIR */
  ]: "Cmd+Shift+Enter",
  [
    "regenerateResponse"
    /* REGENERATE_RESPONSE */
  ]: "Cmd+R",
  [
    "copyLastCodeBlock"
    /* COPY_LAST_CODE_BLOCK */
  ]: "Cmd+Shift+;",
  [
    "copyLastResponse"
    /* COPY_LAST_RESPONSE */
  ]: "Cmd+Shift+C"
};
const keybindings = writable({ ...DEFAULT_KEYBINDINGS });
function isConfigurableShortcut(id) {
  return CONFIGURABLE_SHORTCUTS.includes(id);
}
const IS_MAC = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.userAgent);
function formatChordPart(part) {
  if (IS_MAC) {
    switch (part) {
      case "Cmd":
        return "⌘";
      case "Ctrl":
        return "⌃";
      case "Alt":
        return "⌥";
      case "Shift":
        return "⇧";
      case "Backspace":
        return "⌫";
      case "Escape":
        return "Esc";
      case "Enter":
        return "↩︎";
      case "Tab":
        return "⇥";
    }
  }
  if (part === "Cmd") return "Ctrl";
  if (part === "Escape") return "Esc";
  return part;
}
function formatChord(chord) {
  if (!chord) return "";
  const parts = chord.split("+").map(formatChordPart);
  return IS_MAC ? parts.join("") : parts.join("+");
}
const shortcuts = {
  //Chat
  [
    "newChat"
    /* NEW_CHAT */
  ]: {
    name: "New Chat",
    keys: ["mod", "shift", "O"],
    category: "Chat",
    configurable: true
  },
  [
    "newTemporaryChat"
    /* NEW_TEMPORARY_CHAT */
  ]: {
    name: "New Temporary Chat",
    keys: ["mod", "shift", `'`],
    category: "Chat",
    configurable: true
  },
  [
    "deleteChat"
    /* DELETE_CHAT */
  ]: {
    name: "Delete Chat",
    keys: ["mod", "shift", "Backspace"],
    category: "Chat",
    configurable: true
  },
  [
    "openModelSelector"
    /* OPEN_MODEL_SELECTOR */
  ]: {
    name: "Open Model Selector",
    keys: ["mod", "shift", "M"],
    category: "Chat",
    configurable: true
  },
  [
    "toggleDictation"
    /* TOGGLE_DICTATION */
  ]: {
    name: "Toggle Dictation",
    keys: ["mod", "shift", "L"],
    category: "Chat",
    configurable: true
  },
  [
    "navigateChatUp"
    /* NAVIGATE_CHAT_UP */
  ]: {
    name: "Navigate to Previous Chat",
    keys: [],
    category: "Chat",
    configurable: true
  },
  [
    "navigateChatDown"
    /* NAVIGATE_CHAT_DOWN */
  ]: {
    name: "Navigate to Next Chat",
    keys: [],
    category: "Chat",
    configurable: true
  },
  //Global
  [
    "search"
    /* SEARCH */
  ]: {
    name: "Search",
    keys: ["mod", "K"],
    category: "Global",
    configurable: true
  },
  [
    "openSettings"
    /* OPEN_SETTINGS */
  ]: {
    name: "Open Settings",
    keys: ["mod", "."],
    category: "Global",
    configurable: true
  },
  [
    "showShortcuts"
    /* SHOW_SHORTCUTS */
  ]: {
    name: "Show Shortcuts",
    keys: ["mod", "/"],
    category: "Global",
    configurable: true
  },
  [
    "toggleSidebar"
    /* TOGGLE_SIDEBAR */
  ]: {
    name: "Toggle Sidebar",
    keys: ["mod", "shift", "S"],
    category: "Global",
    configurable: true
  },
  [
    "toggleControls"
    /* TOGGLE_CONTROLS */
  ]: {
    name: "Toggle Controls",
    keys: [],
    category: "Global",
    configurable: true
  },
  [
    "closeModal"
    /* CLOSE_MODAL */
  ]: {
    name: "Close Modal",
    keys: ["Escape"],
    category: "Global",
    configurable: true
  },
  //Input
  [
    "focusInput"
    /* FOCUS_INPUT */
  ]: {
    name: "Focus Chat Input",
    keys: ["shift", "Escape"],
    category: "Input",
    configurable: true
  },
  [
    "acceptAutocomplete"
    /* ACCEPT_AUTOCOMPLETE */
  ]: {
    name: "Accept Autocomplete Generation\nJump to Prompt Variable",
    keys: ["Tab"],
    category: "Input"
  },
  [
    "preventFileCreation"
    /* PREVENT_FILE_CREATION */
  ]: {
    name: "Prevent File Creation",
    keys: ["mod", "shift", "V"],
    category: "Input",
    tooltip: 'Only active when "Paste Large Text as File" setting is toggled on.'
  },
  [
    "attachFile"
    /* ATTACH_FILE */
  ]: {
    name: "Attach File From Knowledge",
    keys: ["#"],
    category: "Input"
  },
  [
    "addPrompt"
    /* ADD_PROMPT */
  ]: {
    name: "Add Custom Prompt",
    keys: ["/"],
    category: "Input"
  },
  [
    "talkToModel"
    /* TALK_TO_MODEL */
  ]: {
    name: "Talk to Model",
    keys: ["@"],
    category: "Input"
  },
  //Message
  [
    "generateMessagePair"
    /* GENERATE_MESSAGE_PAIR */
  ]: {
    name: "Generate Message Pair",
    keys: ["mod", "shift", "Enter"],
    category: "Message",
    configurable: true,
    tooltip: "Only active when the chat input is in focus."
  },
  [
    "regenerateResponse"
    /* REGENERATE_RESPONSE */
  ]: {
    name: "Regenerate Response",
    keys: ["mod", "R"],
    category: "Message",
    configurable: true
  },
  [
    "stopGenerating"
    /* STOP_GENERATING */
  ]: {
    name: "Stop Generating",
    keys: ["Escape"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus and an LLM is generating a response."
  },
  [
    "navigatePromptHistoryUp"
    /* NAVIGATE_PROMPT_HISTORY_UP */
  ]: {
    name: "Edit Last Message",
    keys: ["ArrowUp"],
    category: "Message",
    tooltip: "Only can be triggered when the chat input is in focus."
  },
  [
    "copyLastResponse"
    /* COPY_LAST_RESPONSE */
  ]: {
    name: "Copy Last Response",
    keys: ["mod", "shift", "C"],
    category: "Message",
    configurable: true
  },
  [
    "copyLastCodeBlock"
    /* COPY_LAST_CODE_BLOCK */
  ]: {
    name: "Copy Last Code Block",
    keys: ["mod", "shift", ";"],
    category: "Message",
    configurable: true
  },
  //Voice
  [
    "toggleMute"
    /* TOGGLE_MUTE */
  ]: {
    name: "Toggle Mute",
    keys: ["M"],
    category: "Voice",
    tooltip: "Only active during Voice Mode."
  }
};
function HotkeyHint($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let name = $$props["name"];
    let className = fallback($$props["className"], "");
    store_get($$store_subs ??= {}, "$settings", settings)?.keyboardShortcuts !== false;
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { name, className });
  });
}
function Sidebar_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let pinnedItems, activeMenuItemId;
    const i18n = getContext("i18n");
    const DEFAULT_PINNED_ITEMS = ["notes", "workspace"];
    let shiftKey = false;
    let selectedChatId = null;
    let showCreateChannel = false;
    let chatListReady = false;
    let allChatsLoaded = false;
    let showCreateFolderModal = false;
    let showPinnedModels = false;
    let showPinnedNotes = false;
    let showChannels = false;
    let showFolders = false;
    let showChatsMenu = false;
    let folders$1 = {};
    let folderRegistry = {};
    let sharedFolders = [];
    const isMenuItemVisible = (id) => {
      switch (id) {
        case "notes":
          return (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_notes ?? false) && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.notes ?? true));
        case "workspace":
          return store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.models || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.knowledge || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.prompts || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.tools || store_get($$store_subs ??= {}, "$user", user)?.permissions?.workspace?.skills;
        case "automations":
          return store_get($$store_subs ??= {}, "$config", config)?.features?.enable_automations && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.automations);
        case "calendar":
          return store_get($$store_subs ??= {}, "$config", config)?.features?.enable_calendar && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.calendar);
        case "playground":
          return store_get($$store_subs ??= {}, "$user", user)?.role === "admin";
        default:
          return false;
      }
    };
    const getMenuItemMeta = (id) => {
      const items = {
        notes: { label: "Notes", href: "/notes", iconType: "note" },
        workspace: {
          label: "Workspace",
          href: "/workspace",
          iconType: "workspace"
        },
        automations: {
          label: "Automations",
          href: "/automations",
          iconType: "automations"
        },
        calendar: { label: "Calendar", href: "/calendar", iconType: "calendar" },
        playground: {
          label: "Playground",
          href: "/playground",
          iconType: "playground"
        }
      };
      return items[id];
    };
    const menuItemPathPrefixes = {
      notes: "/notes",
      workspace: "/workspace",
      calendar: "/calendar",
      automations: "/automations",
      playground: "/playground"
    };
    const getActiveMenuItemId = (pathname) => {
      for (const [id, pathPrefix] of Object.entries(menuItemPathPrefixes)) {
        if (pathname === pathPrefix || pathname.startsWith(`${pathPrefix}/`)) {
          return id;
        }
      }
      return null;
    };
    const initFolders = async () => {
      if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_folders === false) {
        return;
      }
      const folderList = await getFolders(localStorage.token).catch((error) => {
        return [];
      });
      folders.set(folderList.sort((a, b) => b.updated_at - a.updated_at));
      folders$1 = {};
      for (const folder of folderList) {
        folders$1[folder.id] = { ...folders$1[folder.id] || {}, ...folder };
      }
      for (const folder of folderList) {
        if (folder.parent_id) {
          if (!folders$1[folder.parent_id]) {
            folders$1[folder.parent_id] = {};
          }
          folders$1[folder.parent_id].childrenIds = folders$1[folder.parent_id].childrenIds ? [...folders$1[folder.parent_id].childrenIds, folder.id] : [folder.id];
          folders$1[folder.parent_id].childrenIds.sort((a, b) => {
            return folders$1[b].updated_at - folders$1[a].updated_at;
          });
        }
      }
      try {
        sharedFolders = await getSharedFolders(localStorage.token);
      } catch (e) {
        sharedFolders = [];
      }
      for (const sf of sharedFolders) {
        if (folders$1[sf.id]) continue;
        folders$1[sf.id] = { ...sf, shared: true };
      }
      for (const sf of sharedFolders) {
        if (folders$1[sf.id]?.shared && sf.parent_id && folders$1[sf.parent_id]) {
          folders$1[sf.parent_id].childrenIds = folders$1[sf.parent_id].childrenIds ? [.../* @__PURE__ */ new Set([...folders$1[sf.parent_id].childrenIds, sf.id])] : [sf.id];
        }
      }
    };
    const initSharedFolders = async () => {
      await initFolders();
    };
    const createFolder = async ({ name, data, parent_id }) => {
      name = name?.trim();
      if (!name) {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder name cannot be empty."));
        return;
      }
      const siblings = Object.values(folders$1).filter((folder) => folder.parent_id === parent_id);
      if (siblings.find((folder) => folder.name.toLowerCase() === name.toLowerCase())) {
        let i = 1;
        while (siblings.find((folder) => folder.name.toLowerCase() === `${name} ${i}`.toLowerCase())) {
          i++;
        }
        name = `${name} ${i}`;
      }
      const tempId = v4();
      folders$1 = {
        ...folders$1,
        [tempId]: {
          id: tempId,
          name,
          parent_id,
          created_at: Date.now(),
          updated_at: Date.now()
        }
      };
      const res = await createNewFolder(localStorage.token, { name, data, parent_id }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        await initFolders();
        showFolders = true;
      }
    };
    const initChannels = async () => {
      const res = await getChannels(localStorage.token).catch((error) => {
        return null;
      });
      if (res) {
        await channels.set(res.sort((a, b) => ["", null, "group", "dm"].indexOf(a.type) - ["", null, "group", "dm"].indexOf(b.type)));
      }
    };
    const initChatList = async () => {
      /* @__PURE__ */ console.log("initChatList");
      allChatsLoaded = false;
      chatListReady = false;
      initFolders();
      initSharedFolders();
      await Promise.all([
        (async () => {
          /* @__PURE__ */ console.log("Init tags");
          const _tags = await getAllTags(localStorage.token);
          tags.set(_tags);
        })(),
        (async () => {
          if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_notes && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.notes ?? true))) {
            /* @__PURE__ */ console.log("Init pinned notes");
            const _pinnedNotes = await getPinnedNoteList(localStorage.token).catch(() => []);
            pinnedNotes.set(_pinnedNotes);
          }
        })(),
        (async () => {
          /* @__PURE__ */ console.log("Init chat list");
          await refreshChatRows();
        })()
      ]);
    };
    const refreshChatRows = async () => {
      const result = await refreshChatList(localStorage.token, { refreshPinned: true });
      if (result.accepted) {
        await initFolders();
        await Promise.all(Object.values(folderRegistry).map((folder) => folder?.setFolderItems?.()));
        allChatsLoaded = result.allLoaded;
        chatListReady = true;
      }
    };
    const applyFolderUnreadCounts = (folderUnreadCounts) => {
      folders$1 = Object.fromEntries(Object.entries(folders$1).map(([id, folder]) => [
        id,
        id in folderUnreadCounts ? { ...folder, unread_count: folderUnreadCounts[id] } : folder
      ]));
      folders.update((folderList) => folderList.map((folder) => folder.id in folderUnreadCounts ? { ...folder, unread_count: folderUnreadCounts[folder.id] } : folder));
    };
    const applyChatReadState = (data) => {
      if (data?.folder_unread_counts) {
        applyFolderUnreadCounts(data.folder_unread_counts);
      }
      if (data?.chat_id && typeof data?.last_read_at === "number") {
        setChatReadAt(data.chat_id, data.last_read_at);
        for (const folder of Object.values(folderRegistry)) {
          folder?.setChatReadAt?.(data.chat_id, data.last_read_at);
        }
      }
    };
    const isWindows = /Windows/i.test(navigator.userAgent);
    store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.chat?.import ?? true);
    selectedChatId = store_get($$store_subs ??= {}, "$chatId", chatId) || null;
    pinnedItems = store_get($$store_subs ??= {}, "$settings", settings)?.pinnedMenuItems ?? DEFAULT_PINNED_ITEMS;
    activeMenuItemId = getActiveMenuItemId(store_get($$store_subs ??= {}, "$page", page).url.pathname);
    if (store_get($$store_subs ??= {}, "$selectedFolder", selectedFolder)) {
      initFolders();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ChannelModal($$renderer3, {
        onSubmit: async (payload) => {
          let { type, name, is_private, access_grants, group_ids, user_ids } = payload ?? {};
          name = name?.trim();
          if (type === "dm") {
            if (!user_ids || user_ids.length === 0) {
              toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Please select at least one user for Direct Message channel."));
              return;
            }
          } else {
            if (!name) {
              toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Channel name cannot be empty."));
              return;
            }
          }
          const res = await createNewChannel(localStorage.token, { type, name, is_private, access_grants, group_ids, user_ids }).catch((error) => {
            toast.error(`${error}`);
            return null;
          });
          if (res) {
            store_get($$store_subs ??= {}, "$socket", socket).emit("join-channels", {
              auth: {
                token: store_get($$store_subs ??= {}, "$user", user)?.token
              }
            });
            await initChannels();
            showCreateChannel = false;
            showChannels = true;
            goto(`/channels/${res.id}`);
          }
        },
        get show() {
          return showCreateChannel;
        },
        set show($$value) {
          showCreateChannel = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FolderModal($$renderer3, {
        onSubmit: async (folder) => {
          await createFolder(folder);
          showCreateFolderModal = false;
        },
        get show() {
          return showCreateFolderModal;
        },
        set show($$value) {
          showCreateFolderModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (store_get($$store_subs ??= {}, "$showSidebar", showSidebar)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(` ${store_get($$store_subs ??= {}, "$isApp", isApp) ? " ml-[4.5rem] md:ml-0" : ""} fixed md:hidden z-40 top-0 right-0 left-0 bottom-0 bg-black/60 w-full min-h-screen h-screen flex justify-center overflow-hidden overscroll-contain`)}></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      SearchModal($$renderer3, {
        onClose: () => {
          if (store_get($$store_subs ??= {}, "$mobile", mobile)) {
            showSidebar.set(false);
          }
        },
        get show() {
          return store_get($$store_subs ??= {}, "$showSearch", showSearch);
        },
        set show($$value) {
          store_set(showSearch, $$value);
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <button id="sidebar-new-chat-button" class="hidden"></button> `);
      if (!store_get($$store_subs ??= {}, "$mobile", mobile) && !store_get($$store_subs ??= {}, "$showSidebar", showSidebar)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="w-[42px] shrink-0 py-1 px-1 flex flex-col justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-50/30 dark:hover:bg-gray-800/30 h-full z-10 transition-all border-e-[0.5px] border-gray-50 dark:border-gray-850/30" id="sidebar" role="navigation"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat history"))}><button${attr_class(`flex flex-col flex-1 ${isWindows ? "cursor-pointer" : "cursor-[e-resize]"}`)}><div class="pb-1">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Sidebar"),
          placement: "right",
          children: ($$renderer4) => {
            $$renderer4.push(`<button${attr_class(`flex size-8.5 items-center justify-center transition group ${isWindows ? "cursor-pointer" : "cursor-[e-resize]"}`)}${attr("aria-label", store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Sidebar"))}><div class="self-center flex size-[30px] items-center justify-center rounded-lg transition group-hover:bg-gray-50 dark:group-hover:bg-gray-900"><img${attr("src", `${stringify(WEBUI_BASE_URL)}/static/favicon.png`)} class="sidebar-new-chat-icon size-5 rounded-full group-hover:hidden" alt=""/> `);
            Sidebar($$renderer4, { className: "size-4 hidden group-hover:flex" });
            $$renderer4.push(`<!----></div></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div class="-gap-0.5"><div>`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("New Chat"),
          placement: "right",
          children: ($$renderer4) => {
            $$renderer4.push(`<a class="cursor-pointer flex size-8 items-center justify-center transition group" href="/" draggable="false"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("New Chat"))}><div class="self-center flex size-[30px] items-center justify-center rounded-lg transition group-hover:bg-gray-50 dark:group-hover:bg-gray-900">`);
            EditPencil($$renderer4, { className: "size-4", strokeWidth: "1.5" });
            $$renderer4.push(`<!----></div></a>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div>`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"),
          placement: "right",
          children: ($$renderer4) => {
            $$renderer4.push(`<button class="cursor-pointer flex size-8 items-center justify-center transition group" draggable="false"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))}><div class="self-center flex size-[30px] items-center justify-center rounded-lg transition group-hover:bg-gray-50 dark:group-hover:bg-gray-900">`);
            Search($$renderer4, { className: "size-4", strokeWidth: "1.5" });
            $$renderer4.push(`<!----></div></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <!--[-->`);
        const each_array = ensure_array_like(pinnedItems);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let itemId = each_array[$$index];
          const meta = getMenuItemMeta(itemId);
          if (meta && isMenuItemVisible(itemId)) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div>`);
            Tooltip($$renderer3, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n).t(meta.label),
              placement: "right",
              children: ($$renderer4) => {
                $$renderer4.push(`<a class="cursor-pointer flex size-8 items-center justify-center transition group"${attr("href", meta.href)} draggable="false"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t(meta.label))}><div${attr_class(` self-center flex size-[30px] items-center justify-center rounded-lg transition ${itemId === activeMenuItemId ? store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "bg-black/[0.035] dark:bg-white/[0.06]" : "bg-black/[0.035] dark:bg-white/[0.045]" : "group-hover:bg-gray-50 dark:group-hover:bg-gray-900"}`)}>`);
                if (itemId === "notes") {
                  $$renderer4.push("<!--[0-->");
                  Notes($$renderer4, { className: "size-4", strokeWidth: "1.5" });
                } else if (itemId === "workspace") {
                  $$renderer4.push("<!--[1-->");
                  Workspace($$renderer4, { className: "size-4", strokeWidth: "1.5" });
                } else if (itemId === "automations") {
                  $$renderer4.push("<!--[2-->");
                  Clock($$renderer4, { className: "size-4", strokeWidth: "1.5" });
                } else if (itemId === "calendar") {
                  $$renderer4.push("<!--[3-->");
                  Calendar($$renderer4, { className: "size-4", strokeWidth: "1.5" });
                } else if (itemId === "playground") {
                  $$renderer4.push("<!--[4-->");
                  Code($$renderer4, { className: "size-4", strokeWidth: "1.5" });
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]--></div></a>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div></button> <div><div><div class="flex justify-center items-center">`);
        if (store_get($$store_subs ??= {}, "$user", user) !== void 0 && store_get($$store_subs ??= {}, "$user", user) !== null) {
          $$renderer3.push("<!--[0-->");
          UserMenu($$renderer3, {
            role: store_get($$store_subs ??= {}, "$user", user)?.role,
            profile: store_get($$store_subs ??= {}, "$config", config)?.features?.enable_user_status ?? true,
            children: ($$renderer4) => {
              $$renderer4.push(`<button type="button" class="cursor-pointer flex size-8.5 items-center justify-center transition group"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("User menu"))}><div class="self-center relative flex size-[30px] items-center justify-center rounded-lg transition group-hover:bg-gray-50 dark:group-hover:bg-gray-900"><img${attr("src", `${WEBUI_API_BASE_URL}/users/${store_get($$store_subs ??= {}, "$user", user)?.id}/profile/image`)} class="size-5.5 object-cover rounded-full"${attr("alt", store_get($$store_subs ??= {}, "$i18n", i18n).t("Open User Profile Menu"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Open User Profile Menu"))}/> `);
              if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_user_status) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="absolute -bottom-0.5 -right-0.5"><span class="relative flex size-2.5"><span class="relative inline-flex size-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span></span></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div></button>`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->  `);
      if (store_get($$store_subs ??= {}, "$showSidebar", showSidebar)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div id="sidebar" role="navigation"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat history"))}${attr_class(`h-screen max-h-[100dvh] min-h-screen select-none ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? `${store_get($$store_subs ??= {}, "$mobile", mobile) ? "bg-gray-50 dark:bg-gray-950" : "bg-gray-50/70 dark:bg-gray-950/70"} z-50` : " bg-transparent z-0 "} ${store_get($$store_subs ??= {}, "$isApp", isApp) ? `ml-[4.5rem] md:ml-0 ` : " transition-all duration-300 "} shrink-0 text-gray-700 dark:text-gray-300 text-[13px] leading-5 fixed top-0 left-0 overflow-x-hidden `)}${attr("data-state", store_get($$store_subs ??= {}, "$showSidebar", showSidebar))}><div${attr_class(` my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[var(--sidebar-width)] overflow-x-hidden scrollbar-hidden z-50 border-e border-gray-50 dark:border-gray-850/30 ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "" : "invisible"}`)}><div class="sidebar px-1 pt-1.5 pb-1 flex justify-between space-x-1 text-gray-600 dark:text-gray-400 sticky top-0 z-10 -mb-2"><a class="flex items-center rounded-xl size-8.5 h-full justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition no-drag-region" href="/" draggable="false"><img crossorigin="anonymous"${attr("src", `${stringify(WEBUI_BASE_URL)}/static/favicon.png`)} class="sidebar-new-chat-icon size-5 rounded-full" alt=""/></a> <a href="/" class="flex flex-1 px-0.5"><div id="sidebar-webui-name" class="self-center font-normal text-gray-700 dark:text-gray-200">${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}</div></a> `);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Sidebar"),
          placement: "bottom",
          children: ($$renderer4) => {
            $$renderer4.push(`<button${attr_class(`flex size-[30px] justify-center items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition ${isWindows ? "cursor-pointer" : "cursor-[w-resize]"}`)}${attr("aria-label", store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Sidebar"))}><div class="self-center">`);
            Sidebar($$renderer4, { className: "size-4" });
            $$renderer4.push(`<!----></div></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <div${attr_class(`${"invisible"} sidebar-bg-gradient-to-b bg-linear-to-b from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mb-6`)}></div></div> <div class="relative flex flex-col flex-1 overflow-y-auto scrollbar-hidden pt-2.5 pb-2.5"><div class="pb-1"><div class="px-1 flex justify-center text-gray-700 dark:text-gray-300"><a id="sidebar-new-chat-button" class="group grow flex items-center space-x-2 rounded-xl px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900 transition outline-none" href="/" draggable="false"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("New Chat"))}><div class="self-center flex size-4 shrink-0 items-center justify-center">`);
        EditPencil($$renderer3, { className: " size-4", strokeWidth: "1.5" });
        $$renderer3.push(`<!----></div> <div class="flex flex-1 self-center translate-y-[0.5px]"><div class="self-center text-[13px] leading-5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("New Chat"))}</div></div> `);
        HotkeyHint($$renderer3, { name: "newChat", className: " group-hover:visible invisible" });
        $$renderer3.push(`<!----></a></div> <div class="px-1 flex justify-center text-gray-700 dark:text-gray-300"><button id="sidebar-search-button" class="group grow flex items-center space-x-2 rounded-xl px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900 transition outline-none" draggable="false"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))}><div class="self-center flex size-4 shrink-0 items-center justify-center">`);
        Search($$renderer3, { strokeWidth: "1.5", className: "size-4" });
        $$renderer3.push(`<!----></div> <div class="flex flex-1 self-center translate-y-[0.5px]"><div class="self-center text-[13px] leading-5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))}</div></div> `);
        HotkeyHint($$renderer3, { name: "search", className: " group-hover:visible invisible" });
        $$renderer3.push(`<!----></button></div> <div id="pinned-menu-items-list"><!--[-->`);
        const each_array_1 = ensure_array_like(pinnedItems);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let itemId = each_array_1[$$index_1];
          const meta = getMenuItemMeta(itemId);
          if (meta && isMenuItemVisible(itemId)) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="px-1 flex justify-center text-gray-700 dark:text-gray-300"${attr("data-id", itemId)}><a${attr("id", `sidebar-${stringify(itemId)}-button`)}${attr_class(`grow flex items-center space-x-2 rounded-xl px-2 py-1.5 transition ${itemId === activeMenuItemId ? store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "bg-black/[0.035] dark:bg-white/[0.06]" : "bg-black/[0.035] dark:bg-white/[0.045]" : "hover:bg-gray-50 dark:hover:bg-gray-900"}`)}${attr("href", meta.href)} draggable="false"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t(meta.label))}><div class="self-center flex size-4 shrink-0 items-center justify-center">`);
            if (itemId === "notes") {
              $$renderer3.push("<!--[0-->");
              Notes($$renderer3, { className: "size-4", strokeWidth: "1.5" });
            } else if (itemId === "workspace") {
              $$renderer3.push("<!--[1-->");
              Workspace($$renderer3, { className: "size-4", strokeWidth: "1.5" });
            } else if (itemId === "automations") {
              $$renderer3.push("<!--[2-->");
              Clock($$renderer3, { className: "size-4", strokeWidth: "1.5" });
            } else if (itemId === "calendar") {
              $$renderer3.push("<!--[3-->");
              Calendar($$renderer3, { className: "size-4", strokeWidth: "1.5" });
            } else if (itemId === "playground") {
              $$renderer3.push("<!--[4-->");
              Code($$renderer3, { className: "size-4", strokeWidth: "1.5" });
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--></div> <div class="flex self-center translate-y-[0.5px]"><div class="self-center text-[13px] leading-5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(meta.label))}</div></div></a></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div></div> `);
        if ((store_get($$store_subs ??= {}, "$models", models) ?? []).length > 0 && ((store_get($$store_subs ??= {}, "$settings", settings)?.pinnedModels ?? []).length > 0 || store_get($$store_subs ??= {}, "$config", config)?.default_pinned_models)) {
          $$renderer3.push("<!--[0-->");
          Section($$renderer3, {
            id: "sidebar-models",
            className: "mt-0.5",
            name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Models"),
            dragAndDrop: false,
            get open() {
              return showPinnedModels;
            },
            set open($$value) {
              showPinnedModels = $$value;
              $$settled = false;
            },
            children: ($$renderer4) => {
              PinnedModelList($$renderer4, {
                shiftKey,
                get selectedChatId() {
                  return selectedChatId;
                },
                set selectedChatId($$value) {
                  selectedChatId = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if ((store_get($$store_subs ??= {}, "$config", config)?.features?.enable_notes ?? false) && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.notes ?? true)) && store_get($$store_subs ??= {}, "$pinnedNotes", pinnedNotes).length > 0) {
          $$renderer3.push("<!--[0-->");
          Section($$renderer3, {
            id: "sidebar-pinned-notes",
            className: "mt-0.5",
            name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Notes"),
            dragAndDrop: false,
            onAdd: async () => {
              const note = await createNoteHandler("New Note");
              if (note) {
                goto(`/notes/${note.id}`);
              }
            },
            onAddLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("New Note"),
            get open() {
              return showPinnedNotes;
            },
            set open($$value) {
              showPinnedNotes = $$value;
              $$settled = false;
            },
            children: ($$renderer4) => {
              PinnedNoteList($$renderer4, {
                get selectedChatId() {
                  return selectedChatId;
                },
                set selectedChatId($$value) {
                  selectedChatId = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_channels && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.channels ?? true))) {
          $$renderer3.push("<!--[0-->");
          Section($$renderer3, {
            id: "sidebar-channels",
            className: "mt-0.5",
            name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Channels"),
            dragAndDrop: false,
            onAdd: store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.channels ?? true) ? async () => {
              await tick();
              setTimeout(
                () => {
                  showCreateChannel = true;
                },
                0
              );
            } : null,
            onAddLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Create Channel"),
            get open() {
              return showChannels;
            },
            set open($$value) {
              showChannels = $$value;
              $$settled = false;
            },
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$channels", channels));
              for (let channelIdx = 0, $$length = each_array_2.length; channelIdx < $$length; channelIdx++) {
                let channel = each_array_2[channelIdx];
                ChannelItem($$renderer4, {
                  channel,
                  onUpdate: async () => {
                    await initChannels();
                  }
                });
                $$renderer4.push(`<!----> `);
                if (channelIdx < store_get($$store_subs ??= {}, "$channels", channels).length - 1 && channel.type !== store_get($$store_subs ??= {}, "$channels", channels)[channelIdx + 1]?.type) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<hr class="border-gray-100/40 dark:border-gray-800/10 my-1.5 w-full"/>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_folders && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.folders ?? true))) {
          $$renderer3.push("<!--[0-->");
          Section($$renderer3, {
            id: "sidebar-folders",
            className: "mt-0.5",
            name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Folders"),
            onAdd: () => {
              showCreateFolderModal = true;
            },
            onAddLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("New Folder"),
            get open() {
              return showFolders;
            },
            set open($$value) {
              showFolders = $$value;
              $$settled = false;
            },
            children: ($$renderer4) => {
              Folders($$renderer4, {
                folders: folders$1,
                shiftKey,
                onFolderUnreadCounts: applyFolderUnreadCounts,
                onDelete: (folderId) => {
                  selectedFolder.set(null);
                  initChatList();
                },
                get folderRegistry() {
                  return folderRegistry;
                },
                set folderRegistry($$value) {
                  folderRegistry = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        Section($$renderer3, {
          id: "sidebar-chats",
          className: "mt-0.5",
          name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Chats"),
          children: ($$renderer4) => {
            if (store_get($$store_subs ??= {}, "$pinnedChats", pinnedChats).length > 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="mb-1"><div class="flex flex-col space-y-1 rounded-xl">`);
              Folder($$renderer4, {
                id: "sidebar-pinned-chats",
                buttonClassName: " text-gray-500",
                name: store_get($$store_subs ??= {}, "$i18n", i18n).t("Pinned"),
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900 text-gray-700 dark:text-gray-300"><!--[-->`);
                  const each_array_3 = ensure_array_like(store_get($$store_subs ??= {}, "$pinnedChats", pinnedChats));
                  for (let idx = 0, $$length = each_array_3.length; idx < $$length; idx++) {
                    let chat = each_array_3[idx];
                    ChatItem($$renderer5, {
                      className: "",
                      id: chat.id,
                      title: chat.title,
                      createdAt: chat.created_at,
                      updatedAt: chat.updated_at,
                      lastReadAt: chat.last_read_at,
                      active: chat.active ?? false,
                      shiftKey,
                      selected: selectedChatId === chat.id,
                      onReadStateChange: applyChatReadState
                    });
                  }
                  $$renderer5.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="flex-1 flex flex-col overflow-y-auto scrollbar-hidden"><div class="pt-1.5">`);
            if (store_get($$store_subs ??= {}, "$chats", chats)) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<!--[-->`);
              const each_array_4 = ensure_array_like(store_get($$store_subs ??= {}, "$chats", chats));
              for (let idx = 0, $$length = each_array_4.length; idx < $$length; idx++) {
                let chat = each_array_4[idx];
                if (idx === 0 || idx > 0 && chat.time_range !== store_get($$store_subs ??= {}, "$chats", chats)[idx - 1].time_range) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<div${attr_class(`w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-normal ${idx === 0 ? "" : "pt-4"} pb-1`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(chat.time_range))}</div>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]--> `);
                ChatItem($$renderer4, {
                  className: "",
                  id: chat.id,
                  title: chat.title,
                  createdAt: chat.created_at,
                  updatedAt: chat.updated_at,
                  lastReadAt: chat.last_read_at,
                  active: chat.active ?? false,
                  shiftKey,
                  selected: selectedChatId === chat.id,
                  onReadStateChange: applyChatReadState
                });
                $$renderer4.push(`<!---->`);
              }
              $$renderer4.push(`<!--]--> `);
              if (chatListReady && !allChatsLoaded) {
                $$renderer4.push("<!--[0-->");
                Loader($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">`);
                    Spinner($$renderer5, { className: " size-4" });
                    $$renderer5.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading..."))}</div></div>`);
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]-->`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">`);
              Spinner($$renderer4, { className: " size-4" });
              $$renderer4.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading..."))}</div></div>`);
            }
            $$renderer4.push(`<!--]--></div></div>`);
          },
          $$slots: {
            default: true,
            action: ($$renderer4) => {
              {
                Dropdown($$renderer4, {
                  align: "end",
                  get show() {
                    return showChatsMenu;
                  },
                  set show($$value) {
                    showChatsMenu = $$value;
                    $$settled = false;
                  },
                  children: ($$renderer5) => {
                    Tooltip($$renderer5, {
                      content: store_get($$store_subs ??= {}, "$i18n", i18n).t("More"),
                      children: ($$renderer6) => {
                        $$renderer6.push(`<button type="button" class="flex items-center justify-center w-7 h-7 rounded-lg text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition-colors duration-100"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("More"))}>`);
                        MoreHorizontal($$renderer6, { className: "size-3.5", strokeWidth: "2" });
                        $$renderer6.push(`<!----></button>`);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: {
                    default: true,
                    content: ($$renderer5) => {
                      $$renderer5.push(`<div slot="content">`);
                      DropdownMenu($$renderer5, {
                        className: "min-w-[170px]",
                        children: ($$renderer6) => {
                          $$renderer6.push(`<button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                          Check($$renderer6, { className: "size-3.5" });
                          $$renderer6.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Mark all as read"))}</div></button>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!----></div>`);
                    }
                  }
                });
              }
            }
          }
        });
        $$renderer3.push(`<!----></div> <div class="px-1 pt-1 pb-1.5 sticky bottom-0 z-10 -mt-2 sidebar"><div class="sidebar-bg-gradient-to-t bg-linear-to-t from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mt-6"></div> <div class="flex flex-col">`);
        if (store_get($$store_subs ??= {}, "$user", user) !== void 0 && store_get($$store_subs ??= {}, "$user", user) !== null) {
          $$renderer3.push("<!--[0-->");
          UserMenu($$renderer3, {
            role: store_get($$store_subs ??= {}, "$user", user)?.role,
            profile: store_get($$store_subs ??= {}, "$config", config)?.features?.enable_user_status ?? true,
            className: "w-[calc(var(--sidebar-width)-1rem)]",
            children: ($$renderer4) => {
              $$renderer4.push(`<button type="button" class="flex items-center rounded-xl py-1.5 px-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-900 transition"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("User menu"))}><div class="self-center mr-3 relative flex-shrink-0"><img${attr("src", `${WEBUI_API_BASE_URL}/users/${store_get($$store_subs ??= {}, "$user", user)?.id}/profile/image`)} class="size-5.5 object-cover rounded-full"${attr("alt", store_get($$store_subs ??= {}, "$i18n", i18n).t("Open User Profile Menu"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Open User Profile Menu"))}/> `);
              if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_user_status) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="absolute -bottom-0.5 -right-0.5"><span class="relative flex size-2.5"><span class="relative inline-flex size-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span></span></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div> <div class="self-center font-normal truncate">${escape_html(store_get($$store_subs ??= {}, "$user", user)?.name)}</div></button>`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div></div></div> `);
        if (!store_get($$store_subs ??= {}, "$mobile", mobile)) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="relative flex items-center justify-center group border-l border-gray-50 dark:border-gray-850/30 hover:border-gray-200 dark:hover:border-gray-800 transition z-20" id="sidebar-resizer" role="separator"><div class="absolute -left-1.5 -right-1.5 -top-0 -bottom-0 z-20 cursor-col-resize bg-transparent"></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
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
  });
}
function UpdatePassword($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex flex-col text-sm"><div class="flex items-center justify-between gap-2.5"><div class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Change Password"))}</div> <button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show"))}</button></div> <p class="mt-0.5 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Update the password used for email and password sign-in."))}</p> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></form>`);
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
function UserProfileImage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let profileImageUrl = $$props["profileImageUrl"];
    let user2 = fallback($$props["user"], null);
    let imageClassName = fallback($$props["imageClassName"], "size-14 md:size-18");
    let variant = fallback($$props["variant"], "default");
    let displayName = fallback($$props["displayName"], "");
    $$renderer2.push(`<input id="profile-image-input" type="file" hidden="" accept="image/*"/> `);
    if (
      // Calculate the aspect ratio of the image
      // Calculate the new width and height to fit within 250x250
      // Set the canvas size
      // Calculate the position to center the image
      // Draw the image on the canvas
      // Get the base64 representation of the compressed image
      // Display the compressed image
      variant === "account"
    ) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mb-2 flex items-center gap-4"><button class="group relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200 transition-all duration-200 hover:ring-2 hover:ring-gray-300 dark:bg-white/8 dark:ring-white/10 dark:hover:ring-white/20" type="button"><img${attr("src", profileImageUrl !== "" ? profileImageUrl : generateInitialsImage(user2?.name))} alt="profile" class="h-full w-full object-cover"/> <div class="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/40"><svg class="h-4 w-4 text-white opacity-0 drop-shadow-sm transition-opacity duration-200 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"></path></svg></div></button> <div class="flex flex-col gap-1"><span class="text-xs text-gray-600 dark:text-gray-400">${escape_html(displayName || user2?.name)}</span> <div class="flex flex-wrap items-center gap-2"><button class="text-[0.6875rem] text-gray-500 transition-colors duration-100 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Upload Photo"))}</button> <span class="text-[0.6875rem] text-gray-300 dark:text-gray-700">·</span> <button class="text-[0.6875rem] text-gray-500 transition-colors duration-100 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove"))}</button> <span class="text-[0.6875rem] text-gray-300 dark:text-gray-700">·</span> <button class="text-[0.6875rem] text-gray-500 transition-colors duration-100 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Initials"))}</button> <span class="text-[0.6875rem] text-gray-300 dark:text-gray-700">·</span> <button class="text-[0.6875rem] text-gray-500 transition-colors duration-100 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Gravatar"))}</button></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex flex-col self-start group"><div class="self-center flex"><button class="relative rounded-full dark:bg-gray-700" type="button"><img${attr("src", profileImageUrl !== "" ? profileImageUrl : generateInitialsImage(user2?.name))} alt="profile"${attr_class(` rounded-full ${stringify(imageClassName)} object-cover`)}/> <div class="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition"><div class="p-1 rounded-full bg-white text-black border-gray-100 shadow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3"><path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"></path></svg></div></div></button></div> <div class="flex flex-col w-full justify-center mt-2"><button class="text-xs text-center text-gray-500 rounded-lg py-0.5 opacity-0 group-hover:opacity-100 transition-all" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove"))}</button> <button class="rounded-lg py-0.5 text-center text-xs text-gray-600 opacity-0 transition-all group-hover:opacity-100 dark:text-gray-400" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Initials"))}</button> <button class="rounded-lg py-0.5 text-center text-xs text-gray-600 opacity-0 transition-all group-hover:opacity-100 dark:text-gray-400" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Gravatar"))}</button></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { profileImageUrl, user: user2, imageClassName, variant, displayName });
  });
}
function UserSettingField($$renderer, $$props) {
  let label = fallback($$props["label"], "");
  let description = fallback($$props["description"], "");
  let forId = fallback($$props["forId"], "");
  let className = fallback($$props["className"], "");
  $$renderer.push(`<div${attr_class(clsx(className))}>`);
  if (label) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<label class="text-xs text-gray-600 dark:text-gray-400"${attr("for", forId || void 0)}>${escape_html(label)}</label>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div${attr_class(clsx(label ? "mt-1" : ""))}><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div> `);
  if (description) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="mt-0.5 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { label, description, forId, className });
}
function UserSettingRow($$renderer, $$props) {
  let label = fallback($$props["label"], "");
  let description = fallback($$props["description"], "");
  let className = fallback($$props["className"], "");
  let labelClassName = fallback($$props["labelClassName"], "");
  $$renderer.push(`<div${attr_class(`flex items-center justify-between gap-2.5 ${stringify(className)}`)}><div${attr_class(`min-w-0 text-xs text-gray-600 dark:text-gray-400 ${stringify(labelClassName)}`)}><!--[-->`);
  slot($$renderer, $$props, "label", {}, () => {
    $$renderer.push(`${escape_html(label)}`);
  });
  $$renderer.push(`<!--]--></div> <div class="shrink-0"><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div></div> `);
  if (description) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="-mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { label, description, className, labelClassName });
}
function SettingsSelect($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "value",
    "id",
    "name",
    "ariaLabel",
    "placeholder",
    "required",
    "disabled",
    "className",
    "selectClassName"
  ]);
  let value = fallback($$props["value"], "");
  let id = fallback($$props["id"], "");
  let name = fallback($$props["name"], "");
  let ariaLabel = fallback($$props["ariaLabel"], "");
  let placeholder = fallback($$props["placeholder"], "");
  let required = fallback($$props["required"], false);
  let disabled = fallback($$props["disabled"], false);
  let className = fallback($$props["className"], "w-fit max-w-full");
  let selectClassName = fallback($$props["selectClassName"], "");
  $$renderer.push(`<div${attr_class(`relative inline-flex ${stringify(className)}`)}>`);
  $$renderer.select(
    {
      ...$$restProps,
      value,
      id: id || void 0,
      name: name || void 0,
      "aria-label": ariaLabel || void 0,
      title: placeholder || void 0,
      required,
      disabled,
      class: `h-7 w-full max-w-full appearance-none truncate rounded-lg border border-gray-100/50 !bg-gray-50/40 ps-2.5 pe-8 text-left text-xs text-gray-700 outline-hidden transition-colors ![background-image:none] [appearance:none] [field-sizing:content] [-webkit-appearance:none] focus:border-blue-400 disabled:opacity-50 dark:border-white/[0.04] dark:!bg-white/[0.03] dark:text-gray-300 dark:focus:border-blue-500 ${stringify(selectClassName)}`
    },
    ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!--]-->`);
    },
    void 0,
    void 0,
    void 0,
    void 0,
    true
  );
  $$renderer.push(` `);
  ChevronDown$1($$renderer, {
    className: "pointer-events-none absolute end-2 top-1/2 size-3.5 -translate-y-1/2 text-gray-400 dark:text-gray-500",
    strokeWidth: "2"
  });
  $$renderer.push(`<!----></div>`);
  bind_props($$props, {
    value,
    id,
    name,
    ariaLabel,
    placeholder,
    required,
    disabled,
    className,
    selectClassName
  });
}
function UserSettingSection($$renderer, $$props) {
  let title = fallback($$props["title"], "");
  let first = fallback($$props["first"], false);
  let className = fallback($$props["className"], "");
  $$renderer.push(`<section${attr_class(`w-full ${first ? "" : "mt-4"} ${stringify(className)}`)}>`);
  if (title) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<h3 class="mb-2 text-xs text-gray-600 dark:text-gray-400">${escape_html(title)}</h3>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div class="flex flex-col gap-2.5"><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div></section>`);
  bind_props($$props, { title, first, className });
}
function Account($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    let profileImageUrl = "";
    let name = "";
    let bio = "";
    let _gender = "";
    let gender = "";
    let dateOfBirth = "";
    let variableRows = [];
    let variableModalOpen = false;
    let variableFormKey = "";
    let variableFormValue = "";
    const textareaClass = "w-full resize-y rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 py-1.5 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const inputClass = "h-7 w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const variableValueClass = "w-full resize-none rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 py-1.5 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    const variableRowClass = "flex w-full items-center gap-1.5";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div id="tab-account" class="flex h-full flex-col text-sm"><div class="flex-1 min-h-0 w-full overflow-y-auto scrollbar-hover pr-1.5"><h2 class="mb-4 text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Account"))}</h2> `);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Profile"),
        first: true,
        children: ($$renderer4) => {
          UserProfileImage($$renderer4, {
            user: store_get($$store_subs ??= {}, "$user", user),
            variant: "account",
            displayName: store_get($$store_subs ??= {}, "$user", user)?.name,
            get profileImageUrl() {
              return profileImageUrl;
            },
            set profileImageUrl($$value) {
              profileImageUrl = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> `);
          UserSettingField($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set the display name shown across your account."),
            children: ($$renderer5) => {
              $$renderer5.push(`<input${attr_class(clsx(inputClass))} type="text"${attr("value", name)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))} required=""${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter your name"))}/>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingField($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Bio"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Add optional profile context visible where profiles are shown."),
            children: ($$renderer5) => {
              Textarea($$renderer5, {
                className: textareaClass,
                minSize: 60,
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Bio"),
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Share your background and interests"),
                get value() {
                  return bio;
                },
                set value($$value) {
                  bio = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingField($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Gender"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the gender value stored on your profile."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                className: "w-full",
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Gender"),
                get value() {
                  return _gender;
                },
                set value($$value) {
                  _gender = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.option({ value: "", selected: true }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Prefer not to say"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "male" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Male"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "female" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Female"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "custom" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}`);
                  });
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (_gender === "custom") {
                $$renderer5.push("<!--[0-->");
                $$renderer5.push(`<input class="mt-1 h-7 w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500" type="text" required=""${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom Gender"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter your gender"))}${attr("value", gender)}/>`);
              } else {
                $$renderer5.push("<!--[-1-->");
              }
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingField($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Birth Date"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set the birth date saved with your profile."),
            children: ($$renderer5) => {
              $$renderer5.push(`<input class="h-7 w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500 dark:scheme-dark" type="date"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Birth Date"))}${attr("value", dateOfBirth)} required=""/>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <section class="mt-4 w-full"><div class="mb-0.5 flex items-center justify-between gap-2 text-xs text-gray-600 dark:text-gray-400"><div class="flex min-w-0 items-center gap-1.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("User Variables"))} <span class="text-gray-400 dark:text-gray-600">${escape_html(variableRows.length)}</span></div> <button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add"))}</button></div> <div class="flex flex-col gap-1 py-1"><!--[-->`);
      const each_array = ensure_array_like(variableRows);
      for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
        let row = each_array[idx];
        $$renderer3.push(`<div${attr_class(clsx(variableRowClass))}><div class="min-w-0 truncate font-mono text-xs text-gray-700 dark:text-gray-300">${escape_html(row.key || store_get($$store_subs ??= {}, "$i18n", i18n).t("key_name"))}</div> <div class="min-w-0 flex-1 truncate text-xs text-gray-500 dark:text-gray-500">${escape_html(row.value || store_get($$store_subs ??= {}, "$i18n", i18n).t("Empty"))}</div> <button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit"))}</button></div>`);
      }
      $$renderer3.push(`<!--]--> `);
      if (variableRows.length === 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="text-xs text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No user variables configured."))}</div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Use these in model system prompts as {{example}}.", { example: "{{user.variables.key_name}}" }))}</div></section> `);
      if (store_get($$store_subs ??= {}, "$config", config)?.features.enable_login_form && store_get($$store_subs ??= {}, "$config", config)?.features.enable_password_change_form) {
        $$renderer3.push("<!--[0-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Password"),
          children: ($$renderer4) => {
            UpdatePassword($$renderer4);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if ((store_get($$store_subs ??= {}, "$config", config)?.features?.enable_api_keys ?? true) && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.api_keys ?? false))) {
        $$renderer3.push("<!--[0-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("API keys"),
          children: ($$renderer4) => {
            UserSettingRow($$renderer4, {
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Show or hide sensitive account secrets."),
              children: ($$renderer5) => {
                $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show"))}</button>`);
              },
              $$slots: {
                default: true,
                label: ($$renderer5) => {
                  $$renderer5.push(`<span slot="label">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Secrets"))}</span>`);
                }
              }
            });
            $$renderer4.push(`<!----> `);
            {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="shrink-0 flex w-full justify-end pt-3 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></div> `);
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return variableModalOpen;
        },
        set show($$value) {
          variableModalOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<form class="p-4"><h2 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">${escape_html(
            store_get($$store_subs ??= {}, "$i18n", i18n).t("Add User Variable")
          )}</h2> <div class="mb-1 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Key"))}</div> <input${attr_class(clsx(inputClass))} type="text"${attr("value", variableFormKey)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Variable key"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("key_name"))} autocomplete="off" spellcheck="false"/> <div class="mb-1 mt-3 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Value"))}</div> `);
          Textarea($$renderer4, {
            className: variableValueClass,
            rows: "6",
            minSize: 132,
            ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Variable value"),
            placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Value"),
            get value() {
              return variableFormValue;
            },
            set value($$value) {
              variableFormValue = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> <div class="mt-4 flex items-center justify-between gap-2"><div>`);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex items-center gap-3"><button class="text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"))}</button> <button class="rounded-full bg-black px-3.5 py-1.5 text-sm font-normal text-white transition hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Done"))}</button></div></div></form>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function About($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let version = { latest: "" };
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    $$renderer2.push(`<div id="tab-about" class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("About"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
    UserSettingSection($$renderer2, {
      title: `${store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME)} ${store_get($$store_subs ??= {}, "$i18n", i18n).t("Version")}`,
      first: true,
      children: ($$renderer3) => {
        UserSettingRow($$renderer3, {
          description: store_get($$store_subs ??= {}, "$i18n", i18n).t("View the installed version and check release updates."),
          children: ($$renderer4) => {
            if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_version_update_check) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<button${attr_class(clsx(actionButtonClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Check for updates"))}</button>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: {
            default: true,
            label: ($$renderer4) => {
              $$renderer4.push(`<div slot="label" class="flex flex-col text-xs text-gray-600 dark:text-gray-400"><div class="flex gap-1">`);
              Tooltip($$renderer4, {
                content: WEBUI_BUILD_HASH,
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->v${escape_html(WEBUI_VERSION)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_version_update_check) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<a${attr("href", `https://github.com/open-webui/open-webui/releases/tag/v${stringify(version.latest)}`)} target="_blank">${escape_html(
                  store_get($$store_subs ??= {}, "$i18n", i18n).t("Checking for updates...")
                )}</a>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div> <button${attr_class(clsx(actionButtonClass))}><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("See what's new"))}</div></button></div>`);
            }
          }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    UserSettingSection($$renderer2, {
      title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Community"),
      children: ($$renderer3) => {
        if (store_get($$store_subs ??= {}, "$config", config)?.license_metadata) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="text-xs text-gray-600 dark:text-gray-400">`);
          if (!store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME).includes("Open WebUI")) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<span>${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}</span> -`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> <span class="capitalize">${escape_html(store_get($$store_subs ??= {}, "$config", config)?.license_metadata?.type)}</span> license purchased by <span class="capitalize">${escape_html(store_get($$store_subs ??= {}, "$config", config)?.license_metadata?.organization_name)}</span></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400 dark:text-gray-600"><a class="hover:text-gray-700 dark:hover:text-gray-400" href="https://discord.gg/5rJgQTnV4s" target="_blank">Discord</a> <a class="hover:text-gray-700 dark:hover:text-gray-400" href="https://twitter.com/OpenWebUI" target="_blank">X</a> <a class="hover:text-gray-700 dark:hover:text-gray-400" href="https://github.com/open-webui/open-webui" target="_blank">GitHub</a></div>`);
        }
        $$renderer3.push(`<!--]--> <div class="text-xs text-gray-400 dark:text-gray-500">Emoji graphics provided by <a href="https://github.com/jdecked/twemoji" target="_blank">Twemoji</a>, licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a>.</div> <div class="text-xs text-gray-400 dark:text-gray-500">Copyright (c) ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} <a href="https://openwebui.com" target="_blank" class="underline">Open WebUI Inc.</a> <a href="https://github.com/open-webui/open-webui/blob/main/LICENSE" target="_blank">All rights reserved.</a></div> <div class="text-xs text-gray-400 dark:text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Created by"))} <a class="text-gray-500 dark:text-gray-400" href="https://github.com/tjbck" target="_blank">Tim J. Baek</a></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function General$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let getModels2 = $$props["getModels"];
    let selectedTheme = "system";
    let languages = [];
    let lang = store_get($$store_subs ??= {}, "$i18n", i18n).language;
    let system = "";
    let showAdvanced = false;
    const systemPromptTextareaClass = "w-full resize-y rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 py-1.5 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col h-full justify-between text-sm" id="tab-general"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("General"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("WebUI Settings"),
        first: true,
        children: ($$renderer4) => {
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Theme"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the color theme used by the interface."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Theme"),
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a theme"),
                get value() {
                  return selectedTheme;
                },
                set value($$value) {
                  selectedTheme = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.option({ value: "system" }, ($$renderer7) => {
                    $$renderer7.push(`⚙️ ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("System"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "dark" }, ($$renderer7) => {
                    $$renderer7.push(`🌑 ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Dark"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "oled-dark" }, ($$renderer7) => {
                    $$renderer7.push(`🌃 ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OLED Dark"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "light" }, ($$renderer7) => {
                    $$renderer7.push(`☀️ ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Light"))}`);
                  });
                  $$renderer6.push(` `);
                  if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_easter_eggs) {
                    $$renderer6.push("<!--[0-->");
                    $$renderer6.option({ value: "her" }, ($$renderer7) => {
                      $$renderer7.push(`🌷 Her`);
                    });
                  } else {
                    $$renderer6.push("<!--[-1-->");
                  }
                  $$renderer6.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Language"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the language used for interface text."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Language"),
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a language"),
                get value() {
                  return lang;
                },
                set value($$value) {
                  lang = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!--[-->`);
                  const each_array = ensure_array_like(languages);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let language = each_array[$$index];
                    $$renderer6.option({ value: language["code"] }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(language["title"])}`);
                    });
                  }
                  $$renderer6.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          if (store_get($$store_subs ??= {}, "$i18n", i18n).language === "en-US" && !(store_get($$store_subs ??= {}, "$config", config)?.license_metadata ?? false)) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="-mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">Couldn't find your language? <a class="font-normal underline text-gray-400 dark:text-gray-600" href="https://github.com/open-webui/open-webui/blob/main/docs/CONTRIBUTING.md#-translations-and-internationalization" target="_blank">Help us translate Open WebUI!</a></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions.chat?.controls ?? true) && (store_get($$store_subs ??= {}, "$user", user)?.permissions.chat?.system_prompt ?? true)) {
        $$renderer3.push("<!--[0-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("System Prompt"),
          children: ($$renderer4) => {
            UserSettingField($$renderer4, {
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set the default system prompt for new chats."),
              children: ($$renderer5) => {
                Textarea($$renderer5, {
                  className: systemPromptTextareaClass,
                  rows: "4",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter system prompt here"),
                  get value() {
                    return system;
                  },
                  set value($$value) {
                    system = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions.chat?.controls ?? true) && (store_get($$store_subs ??= {}, "$user", user)?.permissions.chat?.params ?? true)) {
        $$renderer3.push("<!--[0-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Advanced Parameters"),
          children: ($$renderer4) => {
            UserSettingRow($$renderer4, {
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Show or hide custom generation parameters."),
              children: ($$renderer5) => {
                $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button"${attr("aria-expanded", showAdvanced)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show"))}</button>`);
              },
              $$slots: {
                default: true,
                label: ($$renderer5) => {
                  $$renderer5.push(`<span slot="label">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Model parameters"))}</span>`);
                }
              }
            });
            $$renderer4.push(`<!----> `);
            {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="shrink-0 flex justify-end pt-3 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings, getModels: getModels2 });
  });
}
function Minus($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ManageFloatingActionButtonsModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let onSave = fallback($$props["onSave"], () => {
    });
    let floatingActionButtons = fallback($$props["floatingActionButtons"], null);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        className: "bg-white dark:bg-gray-900 rounded-4xl",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between text-gray-900 dark:text-white px-4 pt-3 pb-1"><h1 class="text-sm font-medium self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Quick Actions"))}</h1> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close modal"))}>`);
          XMark$1($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 text-gray-600 dark:text-gray-400"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full px-1"><div><div class="text-xs flex items-center justify-between mb-2"><div class="font-normal">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Actions"))}</div> <div class="flex items-center gap-2 text-gray-500 dark:text-gray-500"><button type="button">`);
          if (floatingActionButtons === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button> `);
          if (floatingActionButtons !== null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button type="button">`);
            Plus($$renderer4, { className: "size-4 " });
            $$renderer4.push(`<!----></button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div> `);
          if (floatingActionButtons === null || floatingActionButtons.length === 0) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="text-gray-500 dark:text-gray-400 text-xs w-full text-center py-5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default action buttons will be used."))}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(floatingActionButtons);
            for (let buttonIdx = 0, $$length = each_array.length; buttonIdx < $$length; buttonIdx++) {
              let button = each_array[buttonIdx];
              $$renderer4.push(`<div class="py-1 flex w-full justify-between items-start"><div class="flex flex-col items-start pr-2"><input class="self-center text-xs outline-none w-20"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Button Label"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Button Label"))}${attr("value", button.label)}/> <input class="self-center text-xs outline-none w-20 text-gray-600 dark:text-gray-400"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Button ID"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Button ID"))}${attr("value", button.id)}/></div> <div class="flex items-center gap-2 w-full">`);
              Textarea($$renderer4, {
                className: " self-center text-xs w-full outline-none",
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Button Prompt"),
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Button Prompt"),
                minSize: 30,
                get value() {
                  return button.prompt;
                },
                set value($$value) {
                  button.prompt = $$value;
                  $$settled = false;
                }
              });
              $$renderer4.push(`<!----></div> <button class="pl-3 text-xs flex rounded-sm transition"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove action"))} type="button">`);
              Minus($$renderer4, { className: "h-4 w-4" });
              $$renderer4.push(`<!----></button></div> <hr class="border-gray-50 dark:border-gray-850/30 my-2"/>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]--></div> <div class="flex justify-end text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form></div></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, onSave, floatingActionButtons });
  });
}
function ManageImageCompressionModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let size = fallback($$props["size"], null);
    let onSave = fallback($$props["onSave"], () => {
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        className: "bg-white dark:bg-gray-900 rounded-4xl",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between text-gray-900 dark:text-white px-4 pt-3 pb-1"><h1 class="text-sm font-medium self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</h1> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close modal"))}>`);
          XMark$1($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 text-gray-600 dark:text-gray-400"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full px-1"><div><div><div class="py-0.5 flex flex-col w-full text-sm"><div id="image-compression-size-label" class="mb-2 text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Image Max Compression Size"))}</div> <div class="p-1 flex-1 flex gap-2"><div class="flex-1"><label class="sr-only" for="image-comp-width">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Image Max Compression Size width"))}</label> <input id="image-comp-width"${attr("value", size.width)} type="number" class="h-7 w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-center text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500" min="0"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Width"))}/></div> <div class="self-center text-gray-500 dark:text-gray-400">`);
          XMark$1($$renderer4, {});
          $$renderer4.push(`<!----></div> <div class="flex-1"><label class="sr-only" for="image-comp-height">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Image Max Compression Size height"))}</label> <input id="image-comp-height"${attr("value", size.height)} type="number" class="h-7 w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-center text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500" min="0"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Height"))}/></div></div></div></div></div> <div class="flex justify-end text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form></div></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, size, onSave });
  });
}
function Interface$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let titleAutoGenerate = true;
    let autoFollowUps = true;
    let autoTags = true;
    let responseAutoCopy = false;
    let widescreenMode = false;
    let scrollOnBranchChange = true;
    let scrollOnResponseGeneration = true;
    let showFilesOnTerminalSelect = true;
    let userLocation = false;
    let showUsername = false;
    let highContrastMode = false;
    let detectArtifacts = true;
    let displayMultiModelResponsesInTabs = false;
    let richTextInput = true;
    let showFormattingToolbar = false;
    let insertPromptAsRichText = false;
    let promptAutocomplete = false;
    let largeTextAsFile = false;
    let insertSuggestionPrompt = false;
    let keepFollowUpPrompts = false;
    let insertFollowUpPrompt = false;
    let regenerateMenu = true;
    let enableMessageQueue = true;
    let chatBubble = true;
    let copyFormatted = false;
    let temporaryChatByDefault = false;
    let chatFadeStreamingText = true;
    let collapseCodeBlocks = false;
    let renderMarkdownInUserMessages = true;
    let renderMarkdownInAssistantMessages = true;
    let expandDetails = false;
    let renderMarkdownInPreviews = true;
    let showChatTitleInTab = true;
    let showFloatingActionButtons = true;
    let floatingActionButtons = null;
    let imageCompression = false;
    let imageCompressionSize = { width: "", height: "" };
    let imageCompressionInChannels = true;
    let stylizedPdfExport = true;
    let showUpdateToast = true;
    let showChangelog2 = true;
    let showEmojiInCall = false;
    let voiceInterruption = false;
    let hapticFeedback = false;
    let iframeSandboxAllowSameOrigin = false;
    let iframeSandboxAllowForms = false;
    let showManageFloatingActionButtonsModal = false;
    let showManageImageCompressionModal = false;
    const settingRowClass = "flex items-center justify-between gap-2.5";
    const settingLabelClass = "min-w-0 text-xs text-gray-600 dark:text-gray-400";
    const settingControlClass = "flex shrink-0 items-center justify-end gap-1.5";
    const sectionHeadingClass = "mt-4 text-xs text-gray-400 dark:text-gray-600";
    const firstSectionHeadingClass = "text-xs text-gray-400 dark:text-gray-600";
    const settingDescriptionClass = "mt-1.5 text-[0.6875rem] text-gray-400 dark:text-gray-600";
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ManageFloatingActionButtonsModal($$renderer3, {
        floatingActionButtons,
        onSave: (buttons) => {
          floatingActionButtons = buttons;
          saveSettings({ floatingActionButtons });
        },
        get show() {
          return showManageFloatingActionButtonsModal;
        },
        set show($$value) {
          showManageFloatingActionButtonsModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ManageImageCompressionModal($$renderer3, {
        size: imageCompressionSize,
        onSave: (size) => {
          saveSettings({ imageCompressionSize: size });
        },
        get show() {
          return showManageImageCompressionModal;
        },
        set show($$value) {
          showManageImageCompressionModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form id="tab-interface" class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Interface"))}</h2> <input type="file" hidden="" accept="image/*"/> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5"><div class="flex flex-col gap-2.5"><h3${attr_class(clsx(firstSectionHeadingClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("UI"))}</h3> <div><div${attr_class(clsx(settingRowClass))}><label id="ui-scale-label"${attr_class(clsx(settingLabelClass))} for="ui-scale-slider">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("UI Scale"))}</label> <div${attr_class(clsx(settingControlClass))}><button${attr_class(clsx(actionButtonClass))} aria-live="polite" type="button">`);
      {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
      }
      $$renderer3.push(`<!--]--></button></div></div> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Set a local zoom level for the app interface."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="high-contrast-mode-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("High Contrast Mode"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "high-contrast-mode-label",
        tooltip: true,
        get state() {
          return highContrastMode;
        },
        set state($$value) {
          highContrastMode = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Increase contrast for controls and input surfaces."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="use-chat-title-as-tab-title-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Display Chat Title in Tab"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "use-chat-title-as-tab-title-label",
        tooltip: true,
        get state() {
          return showChatTitleInTab;
        },
        set state($$value) {
          showChatTitleInTab = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Use the active chat title as the browser tab title."))}</p></div> <div><div id="allow-user-location-label"${attr_class(clsx(settingRowClass))}><div${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow User Location"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "allow-user-location-label",
        tooltip: true,
        get state() {
          return userLocation;
        },
        set state($$value) {
          userLocation = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Share your current location with features that can use it."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="haptic-feedback-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Haptic Feedback"))} (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Android"))})</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "haptic-feedback-label",
        tooltip: true,
        get state() {
          return hapticFeedback;
        },
        set state($$value) {
          hapticFeedback = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Use device vibration feedback on supported Android devices."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="copy-formatted-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy Formatted Text"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "copy-formatted-label",
        tooltip: true,
        get state() {
          return copyFormatted;
        },
        set state($$value) {
          copyFormatted = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy rich formatted content instead of plain text."))}</p></div> `);
      if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div><div${attr_class(clsx(settingRowClass))}><div id="toast-notifications-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Toast Notifications for New Updates"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "toast-notifications-label",
          tooltip: true,
          get state() {
            return showUpdateToast;
          },
          set state($$value) {
            showUpdateToast = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show update toasts to admins when new versions are available."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="whats-new-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(`Show "What's New" Modal on Login`))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "whats-new-label",
          tooltip: true,
          get state() {
            return showChangelog2;
          },
          set state($$value) {
            showChangelog2 = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Open the changelog modal after sign-in when enabled."))}</p></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div${attr_class(clsx(sectionHeadingClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat"))}</div> <div><div${attr_class(clsx(settingRowClass))}><div id="enable-message-queue-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enable Message Queue"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "enable-message-queue-label",
        tooltip: true,
        get state() {
          return enableMessageQueue;
        },
        set state($$value) {
          enableMessageQueue = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Queue outgoing messages instead of interrupting active responses."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="chat-direction-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat Direction"))}</div> <button aria-labelledby="chat-direction-label chat-direction-mode"${attr_class(clsx(actionButtonClass))} type="button"><span id="chat-direction-mode">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Auto"))}</span></button></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose automatic, left-to-right, or right-to-left text flow."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="landing-page-mode-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Landing Page Mode"))}</div> <button aria-labelledby="landing-page-mode-label notification-sound-state"${attr_class(clsx(actionButtonClass))} type="button"><span id="notification-sound-state">${escape_html(
        store_get($$store_subs ??= {}, "$i18n", i18n).t("Default")
      )}</span></button></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose whether the app opens to the default home or chat view."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="chat-background-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat Background Image"))}</div> <button aria-labelledby="chat-background-label background-image-url-state"${attr_class(clsx(actionButtonClass))} type="button"><span id="background-image-url-state">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Upload"))}</span></button></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Upload or reset the image shown behind chat content."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="chat-bubble-ui-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat Bubble UI"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        tooltip: true,
        ariaLabelledbyId: "chat-bubble-ui-label",
        get state() {
          return chatBubble;
        },
        set state($$value) {
          chatBubble = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Render messages in compact bubble containers."))}</p></div> `);
      if (!store_get($$store_subs ??= {}, "$settings", settings).chatBubble) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div><div${attr_class(clsx(settingRowClass))}><div id="chat-bubble-username-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Display the Username Instead of You in the Chat"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "chat-bubble-username-label",
          tooltip: true,
          get state() {
            return showUsername;
          },
          set state($$value) {
            showUsername = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show your username label instead of You in chat bubbles."))}</p></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div><div${attr_class(clsx(settingRowClass))}><div id="widescreen-mode-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Widescreen Mode"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "widescreen-mode-label",
        tooltip: true,
        get state() {
          return widescreenMode;
        },
        set state($$value) {
          widescreenMode = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Use a wider chat layout on large displays."))}</p></div> `);
      if (store_get($$store_subs ??= {}, "$user", user).role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.chat?.temporary) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div><div${attr_class(clsx(settingRowClass))}><div id="temp-chat-default-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Temporary Chat by Default"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "temp-chat-default-label",
          tooltip: true,
          get state() {
            return temporaryChatByDefault;
          },
          set state($$value) {
            temporaryChatByDefault = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Start new chats as temporary unless changed."))}</p></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div><div${attr_class(clsx(settingRowClass))}><div id="fade-streaming-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Fade Effect for Streaming Text"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "fade-streaming-label",
        tooltip: true,
        get state() {
          return chatFadeStreamingText;
        },
        set state($$value) {
          chatFadeStreamingText = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Fade streaming text as it arrives."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="render-markdown-user-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Render Markdown in User Messages"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "render-markdown-user-label",
        tooltip: true,
        get state() {
          return renderMarkdownInUserMessages;
        },
        set state($$value) {
          renderMarkdownInUserMessages = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Format Markdown syntax in your own messages."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="render-markdown-assistant-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Render Markdown in Assistant Messages"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "render-markdown-assistant-label",
        tooltip: true,
        get state() {
          return renderMarkdownInAssistantMessages;
        },
        set state($$value) {
          renderMarkdownInAssistantMessages = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Format Markdown syntax in assistant responses."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="auto-generation-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Title Auto-Generation"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "auto-generation-label",
        tooltip: true,
        get state() {
          return titleAutoGenerate;
        },
        set state($$value) {
          titleAutoGenerate = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Generate chat titles automatically from conversation content."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div${attr_class(clsx(settingLabelClass))} id="follow-up-auto-generation-label">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Follow-Up Auto-Generation"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "follow-up-auto-generation-label",
        tooltip: true,
        get state() {
          return autoFollowUps;
        },
        set state($$value) {
          autoFollowUps = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Generate suggested follow-up prompts after responses."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="chat-tags-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat Tags Auto-Generation"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "chat-tags-label",
        tooltip: true,
        get state() {
          return autoTags;
        },
        set state($$value) {
          autoTags = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Generate tags for chats automatically."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="auto-copy-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Auto-Copy Response to Clipboard"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "auto-copy-label",
        tooltip: true,
        get state() {
          return responseAutoCopy;
        },
        set state($$value) {
          responseAutoCopy = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy the latest assistant response when it completes."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="response-auto-scroll-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Response Auto-Scroll"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "response-auto-scroll-label",
        tooltip: true,
        get state() {
          return scrollOnResponseGeneration;
        },
        set state($$value) {
          scrollOnResponseGeneration = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Follow assistant responses as they are generated."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="insert-suggestion-prompt-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Insert Suggestion Prompt to Input"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "insert-suggestion-prompt-label",
        tooltip: true,
        get state() {
          return insertSuggestionPrompt;
        },
        set state($$value) {
          insertSuggestionPrompt = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Place selected suggestion text into the composer."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="keep-follow-up-prompts-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Keep Follow-Up Prompts in Chat"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "keep-follow-up-prompts-label",
        tooltip: true,
        get state() {
          return keepFollowUpPrompts;
        },
        set state($$value) {
          keepFollowUpPrompts = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Keep generated follow-up prompts visible in the chat."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="insert-follow-up-prompt-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Insert Follow-Up Prompt to Input"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "insert-follow-up-prompt-label",
        tooltip: true,
        get state() {
          return insertFollowUpPrompt;
        },
        set state($$value) {
          insertFollowUpPrompt = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Insert selected follow-up prompts directly into the composer."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="regenerate-menu-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Regenerate Menu"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "regenerate-menu-label",
        tooltip: true,
        get state() {
          return regenerateMenu;
        },
        set state($$value) {
          regenerateMenu = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show the regenerate action menu for assistant responses."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="always-collapse-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Always Collapse Code Blocks"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "always-collapse-label",
        tooltip: true,
        get state() {
          return collapseCodeBlocks;
        },
        set state($$value) {
          collapseCodeBlocks = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Collapse code blocks by default."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="always-expand-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Always Expand Details"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "always-expand-label",
        tooltip: true,
        get state() {
          return expandDetails;
        },
        set state($$value) {
          expandDetails = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Open detail blocks by default."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="render-markdown-in-previews-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Render Markdown in Previews"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "render-markdown-in-previews-label",
        tooltip: true,
        get state() {
          return renderMarkdownInPreviews;
        },
        set state($$value) {
          renderMarkdownInPreviews = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Format Markdown in previews and compact content surfaces."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="keep-followup-prompts-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Display Multi-model Responses in Tabs"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "keep-followup-prompts-label",
        tooltip: true,
        get state() {
          return displayMultiModelResponsesInTabs;
        },
        set state($$value) {
          displayMultiModelResponsesInTabs = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Group multi-model responses into tabs."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="scroll-on-branch-change-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Scroll On Branch Change"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "scroll-on-branch-change-label",
        tooltip: true,
        get state() {
          return scrollOnBranchChange;
        },
        set state($$value) {
          scrollOnBranchChange = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Scroll to the active branch when switching response branches."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="show-files-on-terminal-select-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show Files on Terminal Select"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "show-files-on-terminal-select-label",
        tooltip: true,
        get state() {
          return showFilesOnTerminalSelect;
        },
        set state($$value) {
          showFilesOnTerminalSelect = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Open the file browser after selecting a terminal."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="stylized-pdf-export-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Stylized PDF Export"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "stylized-pdf-export-label",
        tooltip: true,
        get state() {
          return stylizedPdfExport;
        },
        set state($$value) {
          stylizedPdfExport = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Use styled formatting when exporting chats to PDF."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><label id="floating-action-buttons-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Floating Quick Actions"))}</label> <div${attr_class(clsx(settingControlClass))}>`);
      if (showFloatingActionButtons) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<button${attr_class(clsx(actionButtonClass))} type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Modal To Manage Floating Quick Actions"))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</button>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "floating-action-buttons-label",
        tooltip: true,
        get state() {
          return showFloatingActionButtons;
        },
        set state($$value) {
          showFloatingActionButtons = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show the floating quick-action toolbar in chat."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="web-search-in-chat-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Web Search in Chat"))}</div> <button aria-labelledby="web-search-in-chat-label web-search-state"${attr_class(clsx(actionButtonClass))} type="button"><span id="web-search-state">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span></button></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Set web search availability for new chats."))}</p></div> <div${attr_class(clsx(sectionHeadingClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Input"))}</div> <div><div${attr_class(clsx(settingRowClass))}><div id="enter-key-behavior-label ctrl-enter-to-send-state"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter Key Behavior"))}</div> <button aria-labelledby="enter-key-behavior-label"${attr_class(clsx(actionButtonClass))} type="button"><span id="ctrl-enter-to-send-state">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter to Send"))}</span></button></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose whether Enter sends immediately or uses Ctrl+Enter."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="rich-input-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Rich Text Input for Chat"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        tooltip: true,
        ariaLabelledbyId: "rich-input-label",
        get state() {
          return richTextInput;
        },
        set state($$value) {
          richTextInput = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Use the rich composer instead of a plain textarea."))}</p></div> `);
      if (store_get($$store_subs ??= {}, "$config", config)?.features?.enable_autocomplete_generation) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div><div${attr_class(clsx(settingRowClass))}><div id="prompt-autocompletion-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Prompt Autocompletion"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "prompt-autocompletion-label",
          tooltip: true,
          get state() {
            return promptAutocomplete;
          },
          set state($$value) {
            promptAutocomplete = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Suggest completions while composing prompts."))}</p></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (richTextInput) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div><div${attr_class(clsx(settingRowClass))}><div id="show-formatting-toolbar-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show Formatting Toolbar"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "show-formatting-toolbar-label",
          tooltip: true,
          get state() {
            return showFormattingToolbar;
          },
          set state($$value) {
            showFormattingToolbar = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show formatting controls in the rich text composer."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="insert-prompt-as-rich-text-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Insert Prompt as Rich Text"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "insert-prompt-as-rich-text-label",
          tooltip: true,
          get state() {
            return insertPromptAsRichText;
          },
          set state($$value) {
            insertPromptAsRichText = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Paste inserted prompts as rich text when possible."))}</p></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div><div${attr_class(clsx(settingRowClass))}><div id="paste-large-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Paste Large Text as File"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        tooltip: true,
        ariaLabelledbyId: "paste-large-label",
        get state() {
          return largeTextAsFile;
        },
        set state($$value) {
          largeTextAsFile = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Convert long pasted text into a file attachment."))}</p></div> <div${attr_class(clsx(sectionHeadingClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Artifacts"))}</div> <div><div${attr_class(clsx(settingRowClass))}><div id="detect-artifacts-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Detect Artifacts Automatically"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "detect-artifacts-label",
        tooltip: true,
        get state() {
          return detectArtifacts;
        },
        set state($$value) {
          detectArtifacts = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Detect generated artifacts and show them in the artifact workspace."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="iframe-sandbox-allow-same-origin-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("iframe Sandbox Allow Same Origin"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "iframe-sandbox-allow-same-origin-label",
        tooltip: true,
        get state() {
          return iframeSandboxAllowSameOrigin;
        },
        set state($$value) {
          iframeSandboxAllowSameOrigin = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow artifacts to access same-origin browser APIs inside the sandbox."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="iframe-sandbox-allow-forms-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("iframe Sandbox Allow Forms"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "iframe-sandbox-allow-forms-label",
        tooltip: true,
        get state() {
          return iframeSandboxAllowForms;
        },
        set state($$value) {
          iframeSandboxAllowForms = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow forms inside sandboxed artifact iframes."))}</p></div> <div${attr_class(clsx(sectionHeadingClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"))}</div> <div><div${attr_class(clsx(settingRowClass))}><div${attr_class(clsx(settingLabelClass))} id="allow-voice-interruption-in-call-label">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow Voice Interruption in Call"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "allow-voice-interruption-in-call-label",
        tooltip: true,
        get state() {
          return voiceInterruption;
        },
        set state($$value) {
          voiceInterruption = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Let speech interrupt the assistant during a voice call."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="display-emoji-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Display Emoji in Call"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "display-emoji-label",
        tooltip: true,
        get state() {
          return showEmojiInCall;
        },
        set state($$value) {
          showEmojiInCall = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show emoji feedback in the call interface."))}</p></div> <div${attr_class(clsx(sectionHeadingClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("File"))}</div> <div><div${attr_class(clsx(settingRowClass))}><div id="default-upload-mode-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default Upload Mode"))}</div> <button aria-labelledby="default-upload-mode-label default-upload-mode-state"${attr_class(clsx(actionButtonClass))} type="button"><span id="default-upload-mode-state">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Using Focused Retrieval"))}</span></button></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Attach files with full content or focused retrieval by default."))}</p></div> <div><div${attr_class(clsx(settingRowClass))}><div id="image-compression-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Image Compression"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
      if (imageCompression) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<button${attr_class(clsx(actionButtonClass))} type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Modal To Manage Image Compression"))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</button>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "image-compression-label",
        tooltip: true,
        get state() {
          return imageCompression;
        },
        set state($$value) {
          imageCompression = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Compress uploaded images before sending or storage."))}</p></div> `);
      if (imageCompression) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div><div${attr_class(clsx(settingRowClass))}><div id="image-compression-in-channels-label"${attr_class(clsx(settingLabelClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Compress Images in Channels"))}</div> <div${attr_class(clsx(settingControlClass))}>`);
        Switch_1($$renderer3, {
          ariaLabelledbyId: "image-compression-in-channels-label",
          tooltip: true,
          get state() {
            return imageCompressionInChannels;
          },
          set state($$value) {
            imageCompressionInChannels = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div> <p${attr_class(clsx(settingDescriptionClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Apply image compression to channel uploads too."))}</p></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></div> <div class="shrink-0 flex justify-end text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
const jsonRequest = async (url, token, method = "GET", body) => {
  let error = null;
  const res = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    ...{}
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
const getNotificationEvents = async (token) => {
  const data = await jsonRequest(`${WEBUI_API_BASE_URL}/notifications/events`, token);
  return data?.events ?? data ?? [];
};
const getNotificationTargets = async (token) => jsonRequest(`${WEBUI_API_BASE_URL}/notifications/targets`, token);
function Notifications($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let canUseWebhooks;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let notificationEnabled = false;
    let notificationSound = true;
    let targets = [];
    let events = [
      {
        event: "chat.finished",
        label: "Chat finished",
        description: "A chat run finished successfully."
      },
      {
        event: "chat.failed",
        label: "Chat failed",
        description: "A chat run failed."
      }
    ];
    let loadingTargets = false;
    let formOpen = false;
    let form = { id: "", url: "", events: [], delivery: "away" };
    let loadedTargets = false;
    const loadTargets = async () => {
      if (!canUseWebhooks) {
        return;
      }
      loadingTargets = true;
      loadedTargets = true;
      try {
        const [eventResult, targetResult] = await Promise.allSettled([
          getNotificationEvents(localStorage.token),
          getNotificationTargets(localStorage.token)
        ]);
        if (eventResult.status === "fulfilled" && eventResult.value?.length) {
          events = eventResult.value;
        }
        if (targetResult.status === "fulfilled") {
          targets = targetResult.value.targets ?? [];
        } else {
          toast.error(`${targetResult.reason}`);
        }
      } catch (error) {
        toast.error(`${error}`);
      } finally {
        loadingTargets = false;
      }
    };
    canUseWebhooks = store_get($$store_subs ??= {}, "$config", config)?.features?.enable_user_webhooks && (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.webhooks ?? false));
    if (canUseWebhooks && !loadedTargets) {
      void loadTargets();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div id="tab-notifications" class="flex h-full flex-col text-sm"><div class="flex-1 min-h-0 w-full overflow-y-auto scrollbar-hover pr-1.5"><h2 class="mb-4 text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Notifications"))}</h2> <div class="flex flex-col gap-2.5"><label class="flex cursor-pointer items-center justify-between"><span class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Browser Notifications"))}</span> `);
      Switch_1($$renderer3, {
        state: notificationEnabled,
        ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Browser Notifications")
      });
      $$renderer3.push(`<!----></label> <p class="-mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow browser notifications for completed responses."))}</p> <label class="flex cursor-pointer items-center justify-between"><span class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Notification Sound"))}</span> `);
      Switch_1($$renderer3, {
        ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Notification Sound"),
        get state() {
          return notificationSound;
        },
        set state($$value) {
          notificationSound = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></label> `);
      if (canUseWebhooks) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="mt-3 flex items-center justify-between"><span class="text-xs font-medium text-gray-700 dark:text-gray-300">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Notification Targets"))}</span> <button class="flex h-6 w-6 items-center justify-center rounded-lg text-gray-400 transition-colors duration-75 hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-300" type="button"${attr("title", store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Notification Target"))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Notification Target"))}>`);
        Plus($$renderer3, { className: "size-3.5", strokeWidth: "2" });
        $$renderer3.push(`<!----></button></div> `);
        if (loadingTargets) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<p class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading..."))}</p>`);
        } else if (!targets.length) {
          $$renderer3.push("<!--[1-->");
          $$renderer3.push(`<p class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No notification targets configured."))}</p>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div class="flex flex-col"><!--[-->`);
          const each_array = ensure_array_like(targets);
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            let target = each_array[index];
            const alertLabels = events.filter((event) => target.events.includes(event.event)).map((event) => event.label).join(", ");
            $$renderer3.push(`<div class="flex items-center gap-3 px-1 py-1.5"><div class="min-w-0 flex-1"><div class="flex min-w-0 items-center gap-2"><span class="truncate text-[0.71875rem] text-gray-700 dark:text-gray-300">${escape_html(target.id)}</span> <span class="shrink-0 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Webhook"))}</span> `);
            if (target.is_default) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<span class="shrink-0 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--></div> <div class="truncate text-[0.625rem] leading-tight text-gray-400 dark:text-gray-600">${escape_html(target.config?.url_masked)}</div> <div class="truncate text-[0.625rem] leading-tight text-gray-400 dark:text-gray-600">${escape_html(alertLabels || store_get($$store_subs ??= {}, "$i18n", i18n).t("No chat alerts"))} `);
            if (target.events.length) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`· ${escape_html(target.delivery === "away" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Only when away") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Always"))}`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--></div></div> <div class="flex shrink-0 items-center gap-2"><button class="text-[0.625rem] text-gray-400 transition-colors duration-100 hover:text-gray-600 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Send Test"))}</button> `);
            if (!target.is_default) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<button class="text-[0.625rem] text-gray-400 transition-colors duration-100 hover:text-gray-600 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Make Default"))}</button>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--> <button class="text-[0.625rem] text-gray-400 transition-colors duration-100 hover:text-gray-600 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit"))}</button> <button class="text-[0.625rem] text-gray-400 transition-colors duration-100 hover:text-gray-600 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove"))}</button></div> <div class="flex w-9 shrink-0 justify-end">`);
            Switch_1($$renderer3, {
              state: target.enabled,
              ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled")
            });
            $$renderer3.push(`<!----></div></div> `);
            if (index < targets.length - 1) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<hr class="my-1 h-px border-0 bg-gray-100/50 dark:bg-white/[0.03]"/>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></div></div> `);
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return formOpen;
        },
        set show($$value) {
          formOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="p-4"><h2 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Notification Target"))}</h2> <div class="text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Target ID for notify"))}</div> <input${attr("value", form.id)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Target ID"))} autocomplete="off" spellcheck="false" class="block w-full bg-transparent py-0.5 font-mono text-[0.8125rem] text-gray-700 outline-none placeholder:text-gray-300 dark:text-gray-300 dark:placeholder:text-gray-700"/> <div class="mt-2 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Webhook"))}</div> <input type="url"${attr("value", form.url)}${attr("placeholder", "https://hooks.slack.com/services/...")} autocomplete="off" spellcheck="false" class="block w-full bg-transparent py-0.5 font-mono text-[0.8125rem] text-gray-700 outline-none placeholder:text-gray-300 dark:text-gray-300 dark:placeholder:text-gray-700"/> <div class="mt-3 mb-1 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Automatic Events"))}</div> <div class="flex flex-wrap gap-1"><!--[-->`);
          const each_array_1 = ensure_array_like(events);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let event = each_array_1[$$index_1];
            $$renderer4.push(`<button${attr_class(`h-6 rounded-md px-2 text-[0.6875rem] transition-colors ${form.events.includes(event.event) ? "bg-gray-200/60 text-gray-900 dark:bg-white/10 dark:text-white" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"}`)} type="button">${escape_html(event.label)}</button>`);
          }
          $$renderer4.push(`<!--]--></div> `);
          if (form.events.length) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="mt-3 mb-1 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Automatic Delivery"))}</div> <div class="flex gap-1"><!--[-->`);
            const each_array_2 = ensure_array_like(["away", "always"]);
            for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
              let mode = each_array_2[$$index_2];
              $$renderer4.push(`<button${attr_class(`h-6 rounded-md px-2 text-[0.6875rem] transition-colors ${form.delivery === mode ? "bg-gray-200/60 text-gray-900 dark:bg-white/10 dark:text-white" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"}`)} type="button">${escape_html(mode === "away" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Only when away") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Always"))}</button>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <p class="mt-3 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("The notify tool always sends to an enabled target, regardless of automatic event settings."))}</p> <div class="mt-4 flex justify-end gap-3"><button class="text-[0.8125rem] text-gray-400 transition-colors duration-100 hover:text-gray-600 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"))}</button> <button class="text-[0.8125rem] text-gray-700 transition-colors duration-100 hover:text-gray-900 disabled:opacity-30 dark:text-gray-300 dark:hover:text-white" type="button"${attr("disabled", !form.url.trim(), true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function ShortcutItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let id = fallback($$props["id"], void 0);
    let shortcut = $$props["shortcut"];
    let isMac = $$props["isMac"];
    let compact = fallback($$props["compact"], false);
    let keysOnly = fallback($$props["keysOnly"], false);
    const i18n = getContext("i18n");
    function formatKey(key) {
      switch (key) {
        case "mod":
          return isMac ? "⌘" : "Ctrl";
        case "shift":
          return isMac ? "⇧" : "Shift";
        case "alt":
          return isMac ? "⌥" : "Alt";
      }
      const lowerKey = key.toLowerCase();
      switch (lowerKey) {
        case "backspace":
        case "delete":
          return isMac ? "⌫" : "Delete";
        case "escape":
          return "Esc";
        case "enter":
          return isMac ? "↩︎" : "Enter";
        case "tab":
          return isMac ? "⇥" : "Tab";
        case "arrowup":
          return "↑";
        case "arrowdown":
          return "↓";
        case "quote":
          return "'";
        case "period":
          return ".";
        case "slash":
          return "/";
        case "semicolon":
          return ";";
        default:
          if (lowerKey.startsWith("key") || lowerKey.startsWith("digit")) {
            return key.slice(-1).toUpperCase();
          }
          return key.toUpperCase();
      }
    }
    function visibleKeys(keys) {
      return keys.filter((key) => !(key.toLowerCase() === "delete" && keys.includes("Backspace")));
    }
    function formatKeys(keys) {
      return visibleKeys(keys).map(formatKey).join(isMac ? "" : " + ");
    }
    function displayKeys() {
      if (id && isConfigurableShortcut(id)) {
        return formatChord(store_get($$store_subs ??= {}, "$keybindings", keybindings)[id]) || store_get($$store_subs ??= {}, "$i18n", i18n).t("Unassigned");
      }
      return formatKeys(shortcut.keys);
    }
    if (keysOnly) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="inline-flex min-h-[1.125rem] max-w-[9.5rem] shrink-0 items-center justify-center rounded-full bg-gray-100 px-[0.4375rem] py-0.5 text-center text-[0.625rem] font-medium leading-none text-gray-500 dark:bg-white/6 dark:text-gray-400">${escape_html(displayKeys())}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attr_class(clsx(compact ? "min-w-0 flex-1 text-[0.71875rem] leading-tight text-gray-700 dark:text-gray-300" : "flex min-h-8 w-full items-center gap-3 px-1 py-1.5"))}><div${attr_class(clsx(compact ? "" : "min-w-0 flex-1 text-[0.71875rem] leading-tight text-gray-700 dark:text-gray-300"))}>`);
      if (shortcut.tooltip) {
        $$renderer2.push("<!--[0-->");
        Tooltip($$renderer2, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t(shortcut.tooltip),
          children: ($$renderer3) => {
            $$renderer3.push(`<span class="inline-flex max-w-full items-baseline gap-1"><span class="truncate whitespace-pre-line">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(shortcut.name))}</span> <span class="text-[0.625rem] text-gray-400 dark:text-gray-600">*</span></span>`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<span class="whitespace-pre-line">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(shortcut.name))}</span>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (!compact) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="inline-flex min-h-[1.125rem] max-w-[9.5rem] shrink-0 items-center justify-center rounded-full bg-gray-100 px-[0.4375rem] py-0.5 text-center text-[0.625rem] font-medium leading-none text-gray-500 dark:bg-white/6 dark:text-gray-400">${escape_html(displayKeys())}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { id, shortcut, isMac, compact, keysOnly });
  });
}
function Shortcuts($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let categorizedShortcuts = {};
    let isMac = false;
    let recordingShortcut = null;
    let enableKeyboardShortcuts = true;
    const getConflict = (id, chord) => {
      if (!isConfigurableShortcut(id) || !chord) return null;
      for (const [otherId, otherChord] of Object.entries(store_get($$store_subs ??= {}, "$keybindings", keybindings))) {
        if (otherId !== id && otherChord === chord) return otherId;
      }
      return null;
    };
    {
      const allShortcuts = Object.entries(shortcuts).filter(([, shortcut]) => {
        if (!shortcut.setting) {
          return true;
        }
        return store_get($$store_subs ??= {}, "$settings", settings)[shortcut.setting.id] === shortcut.setting.value;
      });
      categorizedShortcuts = allShortcuts.reduce(
        (acc, [id, shortcut]) => {
          const category = shortcut.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push({ id, shortcut });
          return acc;
        },
        {}
      );
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div id="tab-shortcuts" class="flex h-full flex-col text-sm"><div class="mb-4 flex items-center justify-between"><h2 class="text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Keyboard"))}</h2> <button class="text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset Defaults"))}</button></div> <div class="mb-3"><div class="flex items-center justify-between gap-2.5"><div id="enable-keyboard-shortcuts-label" class="min-w-0 text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enable Keyboard Shortcuts"))}</div> <div class="flex shrink-0 items-center justify-end gap-1.5">`);
      Switch_1($$renderer3, {
        ariaLabelledbyId: "enable-keyboard-shortcuts-label",
        tooltip: true,
        get state() {
          return enableKeyboardShortcuts;
        },
        set state($$value) {
          enableKeyboardShortcuts = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div> <p class="mt-1.5 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("When disabled, keyboard shortcuts will not trigger any actions."))}</p></div> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5"><div class="flex items-center gap-2 px-1 pb-1"><span class="flex-1 text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Command"))}</span> <span class="w-[9.5rem] shrink-0 text-right text-[0.625rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Key"))}</span></div> <!--[-->`);
      const each_array = ensure_array_like(Object.entries(categorizedShortcuts));
      for (let categoryIndex = 0, $$length = each_array.length; categoryIndex < $$length; categoryIndex++) {
        let [category, items] = each_array[categoryIndex];
        $$renderer3.push(`<div${attr_class(clsx(categoryIndex > 0 ? "mt-3" : ""))}><div class="px-1 pb-0.5 pt-1 text-xs text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(category))}</div> <div class="divide-y divide-gray-100/70 dark:divide-white/[0.03]"><!--[-->`);
        const each_array_1 = ensure_array_like(items);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let { id, shortcut } = each_array_1[$$index];
          const configurable = isConfigurableShortcut(id);
          const chord = configurable ? store_get($$store_subs ??= {}, "$keybindings", keybindings)[id] : "";
          const conflict = configurable ? getConflict(id, chord) : null;
          $$renderer3.push(`<div class="flex min-h-8 w-full items-center gap-3 px-1 py-1.5">`);
          ShortcutItem($$renderer3, { id, shortcut, isMac, compact: true });
          $$renderer3.push(`<!----> <div class="flex w-[9.5rem] shrink-0 items-center justify-end gap-1">`);
          if (configurable) {
            $$renderer3.push("<!--[0-->");
            if (recordingShortcut === id) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<span class="inline-flex min-h-[1.125rem] items-center rounded-full bg-gray-100 px-[0.4375rem] py-0.5 text-[0.625rem] font-medium leading-none text-gray-500 dark:bg-white/6 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Press keys..."))}</span>`);
            } else if (chord) {
              $$renderer3.push("<!--[1-->");
              $$renderer3.push(`<button class="inline-flex min-h-[1.125rem] items-center rounded-full bg-gray-100 px-[0.4375rem] py-0.5 text-center text-[0.625rem] font-medium leading-none text-gray-500 dark:bg-white/6 dark:text-gray-400"${attr("title", store_get($$store_subs ??= {}, "$i18n", i18n).t("Click to rebind"))}>${escape_html(formatChord(chord))}</button>`);
            } else {
              $$renderer3.push("<!--[-1-->");
              $$renderer3.push(`<button class="text-[0.625rem] text-gray-500 transition hover:text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Unassigned"))}</button>`);
            }
            $$renderer3.push(`<!--]--> `);
            if (conflict) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<span class="text-[0.5625rem] text-amber-500"${attr("title", store_get($$store_subs ??= {}, "$i18n", i18n).t("Also bound to {{action}}", {
                action: store_get($$store_subs ??= {}, "$i18n", i18n).t(shortcuts[conflict]?.name ?? conflict)
              }))}>!</span>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[-1-->");
            ShortcutItem($$renderer3, { id, shortcut, isMac, keysOnly: true });
          }
          $$renderer3.push(`<!--]--></div></div>`);
        }
        $$renderer3.push(`<!--]--></div></div>`);
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function Audio$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let speechAutoSend = false;
    let responseAutoPlayback = false;
    let nonLocalVoices = false;
    let STTEngine = "";
    let STTLanguage = "";
    let TTSEngine = "";
    let TTSEngineConfig = {};
    let TTSModel = null;
    let TTSModelProgress = null;
    let voices = [];
    let voice = "";
    let playbackRate = 1;
    const inputClass = "h-7 w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const getVoices$1 = async () => {
      if (TTSEngine === "browser-kokoro") {
        if (!TTSModel) {
          await loadKokoro();
        }
        voices = Object.entries(TTSModel.voices).map(([key, value]) => {
          return { id: key, name: value.name, localService: false };
        });
      } else {
        if (store_get($$store_subs ??= {}, "$config", config).audio.tts.engine === "") {
          const getVoicesLoop = setInterval(
            async () => {
              voices = await speechSynthesis.getVoices();
              if (voices.length > 0) {
                clearInterval(getVoicesLoop);
              }
            },
            100
          );
        } else {
          const res = await getVoices(localStorage.token).catch((e) => {
            toast.error(`${e}`);
          });
          if (res) {
            /* @__PURE__ */ console.log(res);
            voices = res.voices;
          }
        }
      }
    };
    const onTTSEngineChange = async () => {
      if (TTSEngine === "browser-kokoro") {
        await loadKokoro();
      }
    };
    const loadKokoro = async () => {
      if (TTSEngine === "browser-kokoro") {
        voices = [];
        if (TTSEngineConfig?.dtype) {
          TTSModel = null;
          TTSModelProgress = null;
          const model_id = "onnx-community/Kokoro-82M-v1.0-ONNX";
          const { KokoroTTS } = await import("kokoro-js");
          TTSModel = await KokoroTTS.from_pretrained(model_id, {
            dtype: TTSEngineConfig.dtype,
            // Options: "fp32", "fp16", "q8", "q4", "q4f16"
            device: !!navigator?.gpu ? "webgpu" : "wasm",
            // Detect WebGPU
            progress_callback: (e) => {
              TTSModelProgress = e;
              /* @__PURE__ */ console.log(e);
            }
          });
          await getVoices$1();
        }
      }
    };
    if (TTSEngine && TTSEngineConfig) {
      onTTSEngineChange();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form id="tab-audio" class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Audio"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("STT Settings"),
        first: true,
        children: ($$renderer4) => {
          if (store_get($$store_subs ??= {}, "$config", config).audio.stt.engine !== "web") {
            $$renderer4.push("<!--[0-->");
            UserSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech-to-Text Engine"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the engine used to transcribe voice input."),
              children: ($$renderer5) => {
                SettingsSelect($$renderer5, {
                  ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech-to-Text Engine"),
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select an engine"),
                  get value() {
                    return STTEngine;
                  },
                  set value($$value) {
                    STTEngine = $$value;
                    $$settled = false;
                  },
                  children: ($$renderer6) => {
                    $$renderer6.option({ value: "" }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}`);
                    });
                    $$renderer6.push(` `);
                    $$renderer6.option({ value: "web" }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Web API"))}`);
                    });
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            UserSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Language"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set a speech recognition language or leave it blank to detect automatically."),
              children: ($$renderer5) => {
                Tooltip($$renderer5, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The language of the input audio. Supplying the input language in ISO-639-1 (e.g. en) format will improve accuracy and latency. Leave blank to automatically detect the language."),
                  placement: "top",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<input type="text"${attr("value", STTLanguage)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech-to-Text Language"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g. en"))} class="h-7 w-24 rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-right text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500"/>`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Instant Auto-Send After Voice Transcription"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Send transcribed voice input immediately after speech recognition finishes."),
            children: ($$renderer5) => {
              Switch_1($$renderer5, {
                state: speechAutoSend,
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Instant Auto-Send After Voice Transcription")
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Settings"),
        children: ($$renderer4) => {
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Text-to-Speech Engine"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the engine used to read assistant responses aloud."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Text-to-Speech Engine"),
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select an engine"),
                get value() {
                  return TTSEngine;
                },
                set value($$value) {
                  TTSEngine = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.option({ value: "" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "browser-kokoro" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Kokoro.js (Browser)"))}`);
                  });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          if (TTSEngine === "browser-kokoro") {
            $$renderer4.push("<!--[0-->");
            UserSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Kokoro.js Dtype"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select the local model precision used by Kokoro.js."),
              children: ($$renderer5) => {
                SettingsSelect($$renderer5, {
                  ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Kokoro.js Dtype"),
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select dtype"),
                  get value() {
                    return TTSEngineConfig.dtype;
                  },
                  set value($$value) {
                    TTSEngineConfig.dtype = $$value;
                    $$settled = false;
                  },
                  children: ($$renderer6) => {
                    $$renderer6.option({ value: "", disabled: true, selected: true }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Select dtype"))}`);
                    });
                    $$renderer6.push(` `);
                    $$renderer6.option({ value: "fp32" }, ($$renderer7) => {
                      $$renderer7.push(`fp32`);
                    });
                    $$renderer6.push(` `);
                    $$renderer6.option({ value: "fp16" }, ($$renderer7) => {
                      $$renderer7.push(`fp16`);
                    });
                    $$renderer6.push(` `);
                    $$renderer6.option({ value: "q8" }, ($$renderer7) => {
                      $$renderer7.push(`q8`);
                    });
                    $$renderer6.push(` `);
                    $$renderer6.option({ value: "q4" }, ($$renderer7) => {
                      $$renderer7.push(`q4`);
                    });
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Auto-Playback Response"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Play assistant responses aloud automatically."),
            children: ($$renderer5) => {
              Switch_1($$renderer5, {
                state: responseAutoPlayback,
                ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Auto-Playback Response")
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech Playback Speed"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Adjust how quickly spoken responses are played."),
            children: ($$renderer5) => {
              $$renderer5.push(`<div class="relative flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600"><input type="number" min="0" step="0.01"${attr("value", playbackRate)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech Playback Speed"))} class="h-7 w-16 rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-right text-xs text-gray-700 outline-hidden transition-colors focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:focus:border-blue-500"/> x</div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (TTSEngine === "browser-kokoro") {
        $$renderer3.push("<!--[0-->");
        if (TTSModel) {
          $$renderer3.push("<!--[0-->");
          UserSettingSection($$renderer3, {
            title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"),
            children: ($$renderer4) => {
              UserSettingField($$renderer4, {
                label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set Voice"),
                description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the Kokoro.js voice used for speech output."),
                children: ($$renderer5) => {
                  $$renderer5.push(`<input list="voice-list"${attr_class(clsx(inputClass))}${attr("value", voice)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a voice"))}/> <datalist id="voice-list"><!--[-->`);
                  const each_array = ensure_array_like(voices);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let voice2 = each_array[$$index];
                    $$renderer5.option({ value: voice2.id }, ($$renderer6) => {
                      $$renderer6.push(`${escape_html(voice2.name)}`);
                    });
                  }
                  $$renderer5.push(`<!--]--></datalist>`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
          UserSettingSection($$renderer3, {
            title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"),
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">`);
              Spinner($$renderer4, { className: "size-4" });
              $$renderer4.push(`<!----> <div class="shimmer">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading Kokoro.js..."))}
							${escape_html(TTSModelProgress && TTSModelProgress.status === "progress" ? `(${Math.round(TTSModelProgress.progress * 10) / 10}%)` : "")}</div></div> <div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Please do not close the settings page while loading the model."))}</div>`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
      } else if (store_get($$store_subs ??= {}, "$config", config).audio.tts.engine === "") {
        $$renderer3.push("<!--[1-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"),
          children: ($$renderer4) => {
            UserSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set Voice"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the browser voice used for speech output."),
              children: ($$renderer5) => {
                SettingsSelect($$renderer5, {
                  className: "w-full",
                  ariaLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"),
                  get value() {
                    return voice;
                  },
                  set value($$value) {
                    voice = $$value;
                    $$settled = false;
                  },
                  children: ($$renderer6) => {
                    $$renderer6.option({ value: "", selected: voice !== "" }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}`);
                    });
                    $$renderer6.push(` <!--[-->`);
                    const each_array_1 = ensure_array_like(voices.filter((v) => nonLocalVoices || v.localService === true));
                    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                      let _voice = each_array_1[$$index_1];
                      $$renderer6.option(
                        {
                          value: _voice.name,
                          class: "bg-gray-100 dark:bg-gray-700",
                          selected: voice === _voice.name
                        },
                        ($$renderer7) => {
                          $$renderer7.push(`${escape_html(_voice.name)}`);
                        }
                      );
                    }
                    $$renderer6.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            UserSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow non-local voices"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Include voices that are not provided by a local speech service."),
              children: ($$renderer5) => {
                Switch_1($$renderer5, {
                  get state() {
                    return nonLocalVoices;
                  },
                  set state($$value) {
                    nonLocalVoices = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      } else if (store_get($$store_subs ??= {}, "$config", config).audio.tts.engine !== "") {
        $$renderer3.push("<!--[2-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"),
          children: ($$renderer4) => {
            UserSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set Voice"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the configured text-to-speech service voice."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input list="voice-list"${attr_class(clsx(inputClass))}${attr("value", voice)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a voice"))}/> <datalist id="voice-list"><!--[-->`);
                const each_array_2 = ensure_array_like(voices);
                for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                  let voice2 = each_array_2[$$index_2];
                  $$renderer5.option({ value: voice2.id }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(voice2.name)}`);
                  });
                }
                $$renderer5.push(`<!--]--></datalist>`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="shrink-0 flex justify-end text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function LinkSlash($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path d="M7.14286 16.9953C6.75006 16.9953 6.36756 16.9525 6 16.8715C3.70973 16.3665 2 14.3761 2 11.9977C2 9.284 4.22573 7.07548 7 7.00195" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3184 9.63429C12.7858 8.73635 11.9737 7.96977 11 7.4989" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8571 6.99999C17.2499 6.99999 17.6324 7.04278 18 7.12383C20.2903 7.62884 22 9.6192 22 11.9976C22 14.7577 19.6975 16.9952 16.8571 16.9952C16.581 16.9952 15.4776 16.9952 15.1429 16.9952C12.317 16.9952 10 14.4893 10 11.9976C10 11.9976 10 11 10.5 10.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ChatsModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    dayjs.extend(localizedFormat);
    dayjs.extend(calendar);
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let title = fallback($$props["title"], "Chats");
    let emptyPlaceholder = fallback($$props["emptyPlaceholder"], "");
    let shareUrl = fallback($$props["shareUrl"], false);
    let showUserInfo = fallback($$props["showUserInfo"], false);
    let showSearch2 = fallback($$props["showSearch"], true);
    let readOnly = fallback($$props["readOnly"], false);
    let count = fallback($$props["count"], null);
    let query = fallback($$props["query"], "");
    let orderBy = fallback($$props["orderBy"], "updated_at");
    let direction = fallback(
      $$props["direction"],
      "desc"
      // 'asc' or 'desc'
    );
    let chatList = fallback($$props["chatList"], null);
    let allChatsLoaded = fallback($$props["allChatsLoaded"], false);
    let chatListLoading = fallback($$props["chatListLoading"], false);
    let showDeleteConfirmDialog = false;
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let loadHandler = fallback($$props["loadHandler"], null);
    let unarchiveHandler = fallback($$props["unarchiveHandler"], null);
    let unshareHandler = fallback($$props["unshareHandler"], null);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Modal($$renderer3, {
        size: "lg",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-4 pt-3 pb-1"><div class="flex items-center gap-2 text-sm font-medium self-center"><div>${escape_html(title)}</div> `);
          if (count !== null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="text-sm font-medium text-gray-500 dark:text-gray-500">${escape_html(formatNumber(count))}</div>`);
          } else if (chatList) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div class="text-sm font-medium text-gray-500 dark:text-gray-500">${escape_html(formatNumber(chatList.length))}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))} class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-col w-full px-5 pb-4 dark:text-gray-200">`);
          if (showSearch2) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex w-full space-x-2 mt-0.5 mb-1.5"><div class="flex flex-1"><div class="self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"${attr("value", query)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search Chats"))} maxlength="500"/> `);
            if (query) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="self-center pl-1.5 pr-1 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">`);
              XMark$1($$renderer4, { className: "size-3", strokeWidth: "2" });
              $$renderer4.push(`<!----></button></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">`);
          if (chatList) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="w-full">`);
            if (chatList.length > 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="flex text-xs font-normal mb-1.5">`);
              if (showUserInfo) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="px-1.5 py-1 w-32">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("User"))}</div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> <button${attr_class(`px-1.5 py-1 cursor-pointer select-none ${showUserInfo ? "flex-1" : "basis-3/5"}`)}><div class="flex gap-1.5 items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Title"))} `);
              if (orderBy === "title") {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<span class="font-normal">`);
                if (direction === "asc") {
                  $$renderer4.push("<!--[0-->");
                  ChevronUp($$renderer4, { className: "size-2" });
                } else {
                  $$renderer4.push("<!--[-1-->");
                  ChevronDown$1($$renderer4, { className: "size-2" });
                }
                $$renderer4.push(`<!--]--></span>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`<span class="invisible">`);
                ChevronUp($$renderer4, { className: "size-2" });
                $$renderer4.push(`<!----></span>`);
              }
              $$renderer4.push(`<!--]--></div></button> <button${attr_class(`px-1.5 py-1 cursor-pointer select-none hidden sm:flex ${showUserInfo ? "w-28" : "sm:basis-2/5"} justify-end`)}><div class="flex gap-1.5 items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Updated at"))} `);
              if (orderBy === "updated_at") {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<span class="font-normal">`);
                if (direction === "asc") {
                  $$renderer4.push("<!--[0-->");
                  ChevronUp($$renderer4, { className: "size-2" });
                } else {
                  $$renderer4.push("<!--[-1-->");
                  ChevronDown$1($$renderer4, { className: "size-2" });
                }
                $$renderer4.push(`<!--]--></span>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`<span class="invisible">`);
                ChevronUp($$renderer4, { className: "size-2" });
                $$renderer4.push(`<!----></span>`);
              }
              $$renderer4.push(`<!--]--></div></button></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="text-left text-sm w-full mb-3 max-h-[22rem] overflow-y-scroll">`);
            if (chatList.length === 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-xs text-gray-500 dark:text-gray-400 text-center px-5 min-h-20 w-full h-full flex justify-center items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No results found"))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <!--[-->`);
            const each_array = ensure_array_like(chatList);
            for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
              let chat = each_array[idx];
              if ((idx === 0 || idx > 0 && chat.time_range !== chatList[idx - 1].time_range) && chat?.time_range) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div${attr_class(`w-full text-xs text-gray-500 dark:text-gray-500 font-normal ${idx === 0 ? "" : "pt-5"} pb-2 px-2`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(chat.time_range))}</div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> <div class="w-full flex items-center rounded-lg text-sm py-2 px-3 hover:bg-gray-50/70 dark:hover:bg-gray-850/50" draggable="false">`);
              if (showUserInfo && chat.user_id) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="w-32 shrink-0 flex items-center gap-2"><img${attr("src", `${stringify(WEBUI_API_BASE_URL)}/users/${stringify(chat.user_id)}/profile/image`)}${attr("alt", chat.user_name || "User")} class="size-5 rounded-full object-cover shrink-0"/> <span class="text-xs text-gray-600 dark:text-gray-400 truncate">${escape_html(chat.user_name || "Unknown")}</span></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> <a${attr_class(clsx(showUserInfo ? "flex-1" : "basis-3/5"))}${attr("href", shareUrl ? `/s/${chat.id}` : `/c/${chat.id}`)}><div class="text-ellipsis line-clamp-1 w-full">${escape_html(chat?.title)}</div></a> <div${attr_class(`${showUserInfo ? "w-28" : "basis-2/5"} flex items-center justify-end`)}><div class="hidden sm:flex text-gray-500 dark:text-gray-400 text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(dayjs(chat?.updated_at * 1e3).calendar(null, {
                sameDay: "[Today]",
                nextDay: "[Tomorrow]",
                nextWeek: "dddd",
                lastDay: "[Yesterday]",
                lastWeek: "[Last] dddd",
                sameElse: "L"
              })))}</div> `);
              if (!readOnly) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="flex justify-end pl-2.5 text-gray-600 dark:text-gray-300">`);
                if (unarchiveHandler) {
                  $$renderer4.push("<!--[0-->");
                  Tooltip($$renderer4, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Unarchive Chat"),
                    children: ($$renderer5) => {
                      $$renderer5.push(`<button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Unarchive Chat"))} class="self-center w-fit px-1 text-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"></path></svg></button>`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]--> `);
                if (unshareHandler && chat.share_id) {
                  $$renderer4.push("<!--[0-->");
                  Tooltip($$renderer4, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy Share Link"),
                    children: ($$renderer5) => {
                      $$renderer5.push(`<button class="self-center w-fit px-1 text-sm rounded-xl">`);
                      Clipboard($$renderer5, { class: "size-4", strokeWidth: "1.5" });
                      $$renderer5.push(`<!----></button>`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]--> `);
                Tooltip($$renderer4, {
                  content: unshareHandler ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Unshare Chat") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete Chat"),
                  children: ($$renderer5) => {
                    $$renderer5.push(`<button class="self-center w-fit px-1 text-sm rounded-xl">`);
                    if (unshareHandler) {
                      $$renderer5.push("<!--[0-->");
                      LinkSlash($$renderer5, {});
                    } else {
                      $$renderer5.push("<!--[-1-->");
                      $$renderer5.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg>`);
                    }
                    $$renderer5.push(`<!--]--></button>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div></div>`);
            }
            $$renderer4.push(`<!--]--> `);
            if (!allChatsLoaded && loadHandler) {
              $$renderer4.push("<!--[0-->");
              Loader($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">`);
                  Spinner($$renderer5, { className: " size-4" });
                  $$renderer5.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading..."))}</div></div>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div> `);
            if (query === "") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<!--[-->`);
              slot($$renderer4, $$props, "footer", {}, null);
              $$renderer4.push(`<!--]-->`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="w-full h-full flex justify-center items-center min-h-20">`);
            Spinner($$renderer4, { className: "size-5" });
            $$renderer4.push(`<!----></div>`);
          }
          $$renderer4.push(`<!--]--></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      show,
      title,
      emptyPlaceholder,
      shareUrl,
      showUserInfo,
      showSearch: showSearch2,
      readOnly,
      count,
      query,
      orderBy,
      direction,
      chatList,
      allChatsLoaded,
      chatListLoading,
      onUpdate,
      onDelete,
      loadHandler,
      unarchiveHandler,
      unshareHandler
    });
  });
}
function SharedChatsModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let loading = false;
    let chatList = null;
    let page2 = 1;
    let query = "";
    let orderBy = "updated_at";
    let direction = "desc";
    let allChatsLoaded = false;
    let chatListLoading = false;
    let searchDebounceTimeout;
    let showUnshareAllConfirmDialog = false;
    let filter = {};
    const searchHandler = async () => {
      if (!show) {
        return;
      }
      if (searchDebounceTimeout) {
        clearTimeout(searchDebounceTimeout);
      }
      page2 = 1;
      chatList = null;
      if (query === "") {
        chatList = await getSharedChatList(localStorage.token, page2, filter);
      } else {
        searchDebounceTimeout = setTimeout(
          async () => {
            chatList = await getSharedChatList(localStorage.token, page2, filter);
          },
          500
        );
      }
      if ((chatList ?? []).length === 0) {
        allChatsLoaded = true;
      } else {
        allChatsLoaded = false;
      }
    };
    const loadMoreChats = async () => {
      chatListLoading = true;
      page2 += 1;
      let newChatList = [];
      if (query) {
        newChatList = await getSharedChatList(localStorage.token, page2, filter);
      } else {
        newChatList = await getSharedChatList(localStorage.token, page2, filter);
      }
      allChatsLoaded = newChatList.length === 0;
      if (newChatList.length > 0) {
        chatList = [...chatList || [], ...newChatList];
      }
      chatListLoading = false;
    };
    const unshareHandler = async (chatId2) => {
      const res = await deleteSharedChatById(localStorage.token, chatId2).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res === true) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat unshared successfully."));
        onUpdate();
        init();
      } else if (res === false) {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to unshare chat."));
      }
    };
    const init = async () => {
      chatList = await getSharedChatList(localStorage.token);
    };
    filter = {
      ...query ? { query } : {},
      ...orderBy ? { order_by: orderBy } : {},
      ...direction ? { direction } : {}
    };
    if (filter !== null) {
      searchHandler();
    }
    if (show) {
      init();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to unshare all shared chats? This will remove all share links."),
        confirmLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Unshare All"),
        get show() {
          return showUnshareAllConfirmDialog;
        },
        set show($$value) {
          showUnshareAllConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ChatsModal($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Shared Chats"),
        emptyPlaceholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("You have no shared conversations."),
        shareUrl: false,
        chatList,
        allChatsLoaded,
        chatListLoading,
        onUpdate: () => {
          onUpdate();
          init();
        },
        loadHandler: loadMoreChats,
        unshareHandler,
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        get query() {
          return query;
        },
        set query($$value) {
          query = $$value;
          $$settled = false;
        },
        get orderBy() {
          return orderBy;
        },
        set orderBy($$value) {
          orderBy = $$value;
          $$settled = false;
        },
        get direction() {
          return direction;
        },
        set direction($$value) {
          direction = $$value;
          $$settled = false;
        },
        $$slots: {
          footer: ($$renderer4) => {
            $$renderer4.push(`<div slot="footer"><div class="flex flex-wrap text-sm font-normal gap-1.5 mt-2 m-1 justify-end w-full"><button class="px-3.5 py-1.5 font-normal hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-800 rounded-3xl"${attr("disabled", loading, true)}>`);
            {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Unshare All Shared Chats"))}`);
            }
            $$renderer4.push(`<!--]--></button></div></div>`);
          }
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, onUpdate });
  });
}
function FilesModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let files = null;
    let fileCount = null;
    let query = "";
    let orderBy = "created_at";
    let allFilesLoaded = false;
    let searchDebounceTimer;
    let showDeleteConfirmDialog = false;
    let selectedFile = null;
    let showFileItemModal = false;
    const PAGE_SIZE = 50;
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
    };
    const searchHandler = async () => {
      if (!show) return;
      files = null;
      allFilesLoaded = false;
      try {
        const pattern = query ? `*${query}*` : "*";
        const newFiles = await searchFiles(localStorage.token, pattern, 0, PAGE_SIZE);
        files = sortFiles(newFiles);
        allFilesLoaded = newFiles.length < PAGE_SIZE;
        if (!query) {
          fileCount = await getFileCount(localStorage.token);
        }
      } catch (error) {
        files = [];
        allFilesLoaded = true;
      }
    };
    const sortFiles = (fileList) => {
      return fileList.sort((a, b) => {
        let aVal = a[orderBy] ?? 0;
        let bVal = b[orderBy] ?? 0;
        {
          return aVal < bVal ? 1 : -1;
        }
      });
    };
    onDestroy(() => {
      clearTimeout(searchDebounceTimer);
    });
    if (show && query !== void 0) {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(
        () => {
          searchHandler();
        },
        300
      );
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FileItemModal($$renderer3, {
        item: selectedFile,
        edit: false,
        get show() {
          return showFileItemModal;
        },
        set show($$value) {
          showFileItemModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Modal($$renderer3, {
        size: "xl",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-4 pt-3 pb-1"><div class="flex items-center gap-2 text-sm font-medium self-center"><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Files"))}</div> `);
          if (fileCount !== null) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div class="text-sm font-medium text-gray-500 dark:text-gray-500">${escape_html(fileCount)}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))} class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-col w-full px-5 pb-4 dark:text-gray-200"><div class="flex w-full space-x-2 mb-0.5"><div class="flex flex-1"><div class="self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"${attr("value", query)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search Files"))} maxlength="500"/> `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div> <div class="flex flex-col w-full">`);
          if (files !== null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="w-full">`);
            if (files.length > 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="flex text-xs font-normal mb-1.5"><button class="px-1.5 py-1 cursor-pointer select-none basis-3/5"><div class="flex gap-1.5 items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Filename"))} `);
              {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`<span class="invisible">`);
                ChevronUp($$renderer4, { className: "size-2" });
                $$renderer4.push(`<!----></span>`);
              }
              $$renderer4.push(`<!--]--></div></button> <button class="px-1.5 py-1 cursor-pointer select-none hidden sm:flex sm:basis-2/5 justify-end"><div class="flex gap-1.5 items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Created at"))} `);
              {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<span class="font-normal">`);
                {
                  $$renderer4.push("<!--[-1-->");
                  ChevronDown$1($$renderer4, { className: "size-2" });
                }
                $$renderer4.push(`<!--]--></span>`);
              }
              $$renderer4.push(`<!--]--></div></button></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="text-left text-sm w-full mb-3 max-h-[32rem] overflow-y-scroll">`);
            if (files.length === 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-xs text-gray-500 dark:text-gray-400 text-center px-5 min-h-20 w-full h-full flex justify-center items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No files found"))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <!--[-->`);
            const each_array = ensure_array_like(files);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let file = each_array[$$index];
              $$renderer4.push(`<div class="w-full flex justify-between items-center rounded-lg text-sm py-2 px-3 hover:bg-gray-50/70 dark:hover:bg-gray-850/50 cursor-pointer"><div class="basis-3/5 min-w-0"><div class="text-ellipsis line-clamp-1">${escape_html(file.filename)}</div> <div class="text-xs text-gray-500">${escape_html(formatFileSize(file.meta?.size ?? 0))}</div></div> <div class="basis-2/5 flex items-center justify-end">`);
              Tooltip($$renderer4, {
                content: dayjs(file.created_at * 1e3).format("MMM D, YYYY h:mm A"),
                className: "hidden sm:flex text-gray-500 dark:text-gray-400 text-xs",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(dayjs(file.created_at * 1e3).format("MMM D, YYYY"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <div class="flex justify-end pl-2.5 text-gray-600 dark:text-gray-300">`);
              Tooltip($$renderer4, {
                content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete File"),
                children: ($$renderer5) => {
                  $$renderer5.push(`<button${attr_class(`self-center w-fit px-1 text-sm rounded-xl ${""}`)}>`);
                  GarbageBin($$renderer5, { class: "size-4", strokeWidth: "1.5" });
                  $$renderer5.push(`<!----></button>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div></div></div>`);
            }
            $$renderer4.push(`<!--]--> `);
            if (!allFilesLoaded) {
              $$renderer4.push("<!--[0-->");
              Loader($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">`);
                  Spinner($$renderer5, { className: "size-4" });
                  $$renderer5.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading..."))}</div></div>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="w-full h-full flex justify-center items-center min-h-20">`);
            Spinner($$renderer4, { className: "size-5" });
            $$renderer4.push(`<!----></div>`);
          }
          $$renderer4.push(`<!--]--></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show });
  });
}
function DataControls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let showArchiveConfirmDialog = false;
    let showDeleteConfirmDialog = false;
    let showSharedChatsModal = false;
    let showFilesModal = false;
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      SharedChatsModal($$renderer3, {
        get show() {
          return showSharedChatsModal;
        },
        set show($$value) {
          showSharedChatsModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FilesModal($$renderer3, {
        get show() {
          return showFilesModal;
        },
        set show($$value) {
          showFilesModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Archive All Chats"),
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to archive all chats? This action cannot be undone."),
        get show() {
          return showArchiveConfirmDialog;
        },
        set show($$value) {
          showArchiveConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete All Chats"),
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to delete all chats? This action cannot be undone."),
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div id="tab-chats" class="flex flex-col h-full text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Data Controls"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5"><input id="chat-import-input" type="file" accept=".json" hidden=""/> `);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Chats"),
        first: true,
        children: ($$renderer4) => {
          if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user).permissions?.chat?.import ?? true)) {
            $$renderer4.push("<!--[0-->");
            UserSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Import Chats"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Import chat history from a JSON export file."),
              children: ($$renderer5) => {
                $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Import"))}</button>`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user).permissions?.chat?.export ?? true)) {
            $$renderer4.push("<!--[0-->");
            UserSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Export Chats"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Download your chat history as a JSON export."),
              children: ($$renderer5) => {
                $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</button>`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Shared Chats"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Review and manage chats you have shared."),
            children: ($$renderer5) => {
              $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Archive All Chats"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Move every chat into the archive after confirmation."),
            children: ($$renderer5) => {
              $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Archive All"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete All Chats"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Permanently delete every chat after confirmation."),
            children: ($$renderer5) => {
              $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete All"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Files"),
        children: ($$renderer4) => {
          UserSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage Files"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Open the file manager for uploaded files."),
            children: ($$renderer5) => {
              $$renderer5.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</button>`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function Usage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let dailyHeatmap, heatmapData, totalHeatmapColumns, maxHeatmapColumns, visibleHeatmapColumns, heatmapCells, heatmapColumns;
    const i18n = getContext("i18n");
    const DEFAULT_HEATMAP_COLUMNS = 26;
    const MIN_MONTH_LABEL_GAP = 6;
    const buildDisplayHeatmap = (data, mode, weekly, cumulative) => {
      {
        return data;
      }
    };
    const buildHeatmapCells = (data, visibleColumns) => {
      if (data.length === 0) {
        return [];
      }
      const cells = data.slice(-Math.max(7, visibleColumns * 7));
      const trailingBlanks = Array.from({ length: (7 - cells.length % 7) % 7 }, () => null);
      return [...cells, ...trailingBlanks];
    };
    const buildMonthLabels = (cells, columns) => {
      const labels = [];
      let currentMonth = "";
      let lastLabelColumn = -MIN_MONTH_LABEL_GAP;
      cells.forEach((entry, index) => {
        if (!entry) {
          return;
        }
        const month = entry.date.slice(0, 7);
        if (month === currentMonth) {
          return;
        }
        const column = Math.floor(index / 7) + 1;
        if (column - lastLabelColumn < MIN_MONTH_LABEL_GAP) {
          currentMonth = month;
          return;
        }
        labels.push({
          label: (/* @__PURE__ */ new Date(`${entry.date}T00:00:00`)).toLocaleString(void 0, { month: "short" }),
          column,
          span: Math.min(MIN_MONTH_LABEL_GAP, columns - column + 1)
        });
        lastLabelColumn = column;
        currentMonth = month;
      });
      return labels;
    };
    new Map(store_get($$store_subs ??= {}, "$models", models).map((model) => [model.id, model.name || model.id]));
    dailyHeatmap = [];
    new Map([].map((entry) => [entry.date, entry]));
    new Map([].map((entry) => [entry.date, entry]));
    heatmapData = buildDisplayHeatmap(dailyHeatmap);
    totalHeatmapColumns = Math.max(Math.ceil(heatmapData.length / 7), 1);
    maxHeatmapColumns = Math.min(totalHeatmapColumns, DEFAULT_HEATMAP_COLUMNS);
    visibleHeatmapColumns = Math.min(totalHeatmapColumns, maxHeatmapColumns);
    heatmapCells = buildHeatmapCells(heatmapData, visibleHeatmapColumns);
    heatmapColumns = Math.max(Math.ceil(heatmapCells.length / 7), 1);
    buildMonthLabels(heatmapCells, heatmapColumns);
    $$renderer2.push(`<div class="flex h-full min-h-0 flex-col"><div class="mb-4"><h2 class="text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Usage"))}</h2></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-1 items-center justify-center">`);
      Spinner($$renderer2, { className: "size-5" });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function UndoAction($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)}${attr_class(clsx(className))}><path d="M5 5V8V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.50005 8C12.5001 8 11.0001 8 15.0001 8C15.0001 8 15.0001 8 15.0001 8C15.0001 8 20.0001 8 20.0001 12.7059C20.0001 18 15.0001 18 15.0001 18C11.5715 18 9.71434 18 6.28577 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 11.5C10.1332 10.1332 9.36683 9.36683 8 8C9.36683 6.63317 10.1332 5.86683 11.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ArchivedChats($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    dayjs.extend(localizedFormat);
    dayjs.extend(calendar);
    const i18n = getContext("i18n");
    let chatCount = null;
    let query = "";
    let showDeleteConfirmDialog = false;
    let showUnarchiveAllConfirmDialog = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to unarchive all archived chats?"),
        confirmLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Unarchive All"),
        get show() {
          return showUnarchiveAllConfirmDialog;
        },
        set show($$value) {
          showUnarchiveAllConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div id="tab-archived-chats" class="flex flex-col h-full text-sm"><div class="mb-3 flex items-center justify-between"><h2 class="text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Archived Chats"))} `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></h2></div> <div class="flex h-7 shrink-0 items-center w-full gap-2"><div class="flex min-w-0 flex-1 items-center gap-2">`);
      Search$1($$renderer3, {
        className: "size-3.5 shrink-0 text-gray-400 dark:text-gray-600"
      });
      $$renderer3.push(`<!----> <input data-settings-search="" class="min-w-0 flex-1 bg-transparent py-0.5 text-xs text-gray-700 outline-hidden placeholder:text-gray-300 dark:text-gray-300 dark:placeholder:text-gray-700"${attr("value", query)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))} maxlength="500"/> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> `);
      Dropdown($$renderer3, {
        align: "end",
        children: ($$renderer4) => {
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Actions"),
            children: ($$renderer5) => {
              $$renderer5.push(`<button class="flex h-7 items-center gap-1.5 rounded-lg bg-transparent px-1.5 text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" type="button"><span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Actions"))}</span> `);
              ChevronDown$1($$renderer5, { className: "size-3", strokeWidth: "2.5" });
              $$renderer5.push(`<!----></button>`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content">`);
            DropdownMenu($$renderer4, {
              className: "w-[170px] shadow-sm",
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent px-2 text-xs hover:text-gray-900 disabled:cursor-default disabled:opacity-30 dark:hover:text-gray-100"${attr("disabled", chatCount === 0, true)} type="button">`);
                {
                  $$renderer5.push("<!--[-1-->");
                  UndoAction($$renderer5, { className: "size-3.5 shrink-0", strokeWidth: "1.5" });
                }
                $$renderer5.push(`<!--]--> <div class="min-w-0 flex-1 truncate text-left">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Unarchive All"))}</div></button> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent px-2 text-xs hover:text-gray-900 disabled:cursor-default disabled:opacity-30 dark:hover:text-gray-100"${attr("disabled", chatCount === 0, true)} type="button">`);
                Download$1($$renderer5, { className: "size-3.5 shrink-0", strokeWidth: "1.5" });
                $$renderer5.push(`<!----> <div class="min-w-0 flex-1 truncate text-left">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</div></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          }
        }
      });
      $$renderer3.push(`<!----></div> <div class="mt-3 flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex min-h-20 items-center justify-center">`);
        Spinner($$renderer3, { className: "size-5" });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div></div>`);
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
function MemoryModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let edit;
    let show = $$props["show"];
    let memory = fallback($$props["memory"], null);
    const i18n = getContext("i18n");
    let loading = false;
    let content = "";
    let type = "user";
    let path = "";
    edit = !!memory?.id;
    if (show) {
      content = memory?.content ?? "";
      type = memory?.type ?? "user";
      path = memory?.path ?? "";
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Memory"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Memory"))}`);
          }
          $$renderer4.push(`<!--]--></div> <button class="self-center">`);
          XMark$1($$renderer4, { className: "size-5" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex w-full justify-between items-center mb-1.5"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Type"))}</div> <button type="button" class="text-xs text-gray-700 dark:text-gray-300">`);
          if (type === "user") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("User"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Context"))}`);
          }
          $$renderer4.push(`<!--]--></button></div> <textarea class="bg-transparent w-full text-sm outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700" rows="6" style="resize: vertical;"${attr("placeholder", type === "user" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Add a preference, fact, or instruction about you") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Add durable context for future chats"))}>`);
          const $$body = escape_html(content);
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
          $$renderer4.push(`</textarea> <div class="flex flex-col w-full mt-1.5"><label for="memory-path" class="mb-0.5 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Path"))} <span class="opacity-50">(${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("optional"))})</span></label> <input id="memory-path"${attr("value", path)} class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Path"))} autocomplete="off"/></div></div> <div class="flex justify-end pt-1 text-sm font-medium"><button${attr_class(`px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${""}`)} type="submit"${attr("disabled", loading, true)}>`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Update"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add"))}`);
          }
          $$renderer4.push(`<!--]--> `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, memory });
  });
}
function Personalization($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let filteredMemories;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let enableMemory = false;
    let memories = [];
    let showMemoryModal = false;
    let selectedMemory = null;
    let showClearConfirmDialog = false;
    let showDeleteConfirm = false;
    filteredMemories = memories;
    [...filteredMemories].sort((a, b) => (b.updated_at ?? 0) - (a.updated_at ?? 0));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form id="tab-personalization" class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Personalization"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      UserSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Memory"),
        first: true,
        children: ($$renderer4) => {
          UserSettingRow($$renderer4, {
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("You can personalize your interactions with LLMs by adding memories through the 'Manage' button below, making them more helpful and tailored to you.").replace(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"), store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Memory")),
            children: ($$renderer5) => {
              Switch_1($$renderer5, {
                get state() {
                  return enableMemory;
                },
                set state($$value) {
                  enableMemory = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: {
              default: true,
              label: ($$renderer5) => {
                Tooltip($$renderer5, {
                  slot: "label",
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("This is an experimental feature, it may not function as expected and is subject to change at any time."),
                  children: ($$renderer6) => {
                    $$renderer6.push(`<div class="flex items-center gap-2">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Memory"))} <span class="text-[0.625rem] uppercase text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Experimental"))}</span></div>`);
                  },
                  $$slots: { default: true }
                });
              }
            }
          });
          $$renderer4.push(`<!----> `);
          if (enableMemory) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div><div class="mb-1 flex items-center"><div class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Saved Memories"))} `);
            {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div></div> `);
            {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="flex min-h-16 w-full items-center justify-center">`);
              Spinner($$renderer4, { className: "size-4" });
              $$renderer4.push(`<!----></div>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <div class="shrink-0 flex justify-end text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Clear Memory"),
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to clear all memories? This action cannot be undone."),
        show: showClearConfirmDialog
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete Memory?"),
        show: showDeleteConfirm,
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-500 flex-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to delete this memory? This action cannot be undone."))} <div class="mt-2 max-h-32 overflow-y-auto whitespace-pre-wrap break-words rounded-lg border border-gray-100/50 bg-gray-50/40 p-2 text-xs text-gray-600 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-400">${escape_html(selectedMemory?.content)}</div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      MemoryModal($$renderer3, {
        memory: selectedMemory,
        get show() {
          return showMemoryModal;
        },
        set show($$value) {
          showMemoryModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function Cog6($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} aria-hidden="true" stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function PencilSolid($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${attr_class(clsx(className))}><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function AddConnectionModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let onSubmit = fallback($$props["onSubmit"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let show = fallback($$props["show"], false);
    let edit = fallback($$props["edit"], false);
    let ollama = fallback($$props["ollama"], false);
    let direct = fallback($$props["direct"], false);
    let connection = fallback($$props["connection"], null);
    let url = "";
    let key = "";
    let auth_type = "bearer";
    let connectionType = "external";
    let provider = "";
    let enable = true;
    let apiType = "";
    let loading = false;
    let showDeleteConfirmDialog = false;
    const inputClass = "bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700";
    const selectClass = "bg-transparent pr-5 outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700";
    const init = () => {
      if (connection) {
        url = connection.url;
        key = connection.key;
        auth_type = connection.config.auth_type ?? "bearer";
        connection.config?.headers ? JSON.stringify(connection.config.headers, null, 2) : "";
        enable = connection.config?.enable ?? true;
        connection.config?.tags ?? [];
        connection.config?.prefix_id ?? "";
        Array.isArray(connection.config?.passthrough_params) ? connection.config.passthrough_params.join(", ") : connection.config?.passthrough_params ?? "";
        connection.config?.model_ids ?? [];
        if (ollama) {
          connectionType = connection.config?.connection_type ?? "local";
        } else {
          connectionType = connection.config?.connection_type ?? "external";
          provider = connection.config?.provider ?? (connection.config?.azure ? "azure" : "");
          connection.config?.api_version ?? "";
          apiType = connection.config?.api_type ?? "";
        }
      }
    };
    provider === "azure" || (url.includes("azure.") || url.includes("cognitive.microsoft.com")) && !direct && provider === "" && !/\/openai\/v1(\/|$)/.test(url);
    if (show) {
      init();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-1.5"><h1 class="text-lg font-medium self-center font-primary">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Connection"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"))}`);
          }
          $$renderer4.push(`<!--]--></h1> <button class="self-center"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close modal"))}>`);
          XMark$1($$renderer4, { className: "size-5" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1">`);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex gap-2"><div class="flex w-full justify-between items-center"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connection Type"))}</div> <div><button type="button" class="text-xs text-gray-700 dark:text-gray-300">`);
            if (connectionType === "local") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Local"))}`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("External"))}`);
            }
            $$renderer4.push(`<!--]--></button></div></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex gap-2 mt-1.5"><div class="flex flex-col w-full"><label for="url-input"${attr_class(`mb-0.5 text-xs text-gray-500
								`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("URL"))}</label> <div class="flex-1"><input id="url-input"${attr_class(`w-full text-sm ${inputClass}`)} type="text"${attr("value", url)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"))} autocomplete="off"${attr("list", ollama ? void 0 : "suggestions")} required=""/> `);
          if (!ollama) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<datalist id="suggestions">`);
            $$renderer4.option({ value: "https://api.openai.com/v1" }, ($$renderer5) => {
            });
            $$renderer4.option({ value: "https://api.anthropic.com/v1" }, ($$renderer5) => {
            });
            $$renderer4.option(
              {
                value: "https://generativelanguage.googleapis.com/v1beta/openai"
              },
              ($$renderer5) => {
              }
            );
            $$renderer4.option({ value: "https://api.mistral.ai/v1" }, ($$renderer5) => {
            });
            $$renderer4.option({ value: "https://api.groq.com/openai/v1" }, ($$renderer5) => {
            });
            $$renderer4.option({ value: "https://openrouter.ai/api/v1" }, ($$renderer5) => {
            });
            $$renderer4.option({ value: "https://api.x.ai/v1" }, ($$renderer5) => {
            });
            $$renderer4.push(`</datalist>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div> `);
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"),
            className: "self-end -mb-1",
            children: ($$renderer5) => {
              $$renderer5.push(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition" type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <div class="flex flex-col shrink-0 self-end"><label class="sr-only" for="toggle-connection">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Toggle whether current connection is active."))}</label> `);
          Tooltip($$renderer4, {
            content: enable ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
            children: ($$renderer5) => {
              Switch_1($$renderer5, {
                id: "toggle-connection",
                get state() {
                  return enable;
                },
                set state($$value) {
                  enable = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="select-bearer-or-session"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Auth"))}</label> <div class="flex gap-2"><div class="flex-shrink-0 self-start">`);
          $$renderer4.select(
            {
              id: "select-bearer-or-session",
              class: `w-full text-sm ${selectClass}`,
              value: auth_type
            },
            ($$renderer5) => {
              $$renderer5.option({ value: "none" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("None"))}`);
              });
              $$renderer5.option({ value: "bearer" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Bearer"))}`);
              });
              if (!ollama) {
                $$renderer5.push("<!--[0-->");
                $$renderer5.option({ value: "session" }, ($$renderer6) => {
                  $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Session"))}`);
                });
                $$renderer5.push(` `);
                if (!direct) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.option({ value: "system_oauth" }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OAuth"))}`);
                  });
                  $$renderer5.push(` `);
                  $$renderer5.option({ value: "microsoft_entra_id" }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Entra ID"))}`);
                  });
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]-->`);
              } else {
                $$renderer5.push("<!--[-1-->");
              }
              $$renderer5.push(`<!--]-->`);
            }
          );
          $$renderer4.push(`</div> <div class="flex flex-1 items-center">`);
          if (auth_type === "bearer") {
            $$renderer4.push("<!--[0-->");
            SensitiveInput($$renderer4, {
              placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              required: false,
              get value() {
                return key;
              },
              set value($$value) {
                key = $$value;
                $$settled = false;
              }
            });
          } else if (auth_type === "none") {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No authentication"))}</div>`);
          } else if (auth_type === "session") {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Forwards system user session credentials to authenticate"))}</div>`);
          } else if (auth_type === "system_oauth") {
            $$renderer4.push("<!--[3-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Forwards system user OAuth access token to authenticate"))}</div>`);
          } else if (["azure_ad", "microsoft_entra_id"].includes(auth_type)) {
            $$renderer4.push("<!--[4-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Uses DefaultAzureCredential to authenticate"))}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div></div></div> `);
          if (!ollama && !direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex flex-row justify-between items-center w-full mt-1"><label for="api-type-toggle"${attr_class(`mb-0.5 text-xs text-gray-500
							`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("API Type"))}</label> <div><button type="button" id="api-type-toggle" class="text-xs text-gray-700 dark:text-gray-300">`);
            if (apiType === "responses") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Responses"))}`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chat Completions"))}`);
            }
            $$renderer4.push(`<!--]--></button></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex items-center justify-between"><button type="button" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${attr_class(`w-3 h-3 transition-transform ${""}`)}><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Advanced"))}</button></div> `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex justify-between items-center pt-3 text-sm font-medium"><div>`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="px-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <button${attr_class(`px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to delete this connection? This action cannot be undone."),
        confirmLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"),
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { onSubmit, onDelete, show, edit, ollama, direct, connection });
  });
}
function Connections$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let config2 = null;
    let showConnectionModal = false;
    const addConnectionHandler = async (connection) => {
      config2.OPENAI_API_BASE_URLS.push(connection.url);
      config2.OPENAI_API_KEYS.push(connection.key);
      config2.OPENAI_API_CONFIGS[config2.OPENAI_API_BASE_URLS.length - 1] = connection.config;
      await updateHandler();
    };
    const updateHandler = async () => {
      config2.OPENAI_API_BASE_URLS = config2.OPENAI_API_BASE_URLS.map((url) => url.replace(/\/$/, ""));
      if (config2.OPENAI_API_KEYS.length !== config2.OPENAI_API_BASE_URLS.length) {
        if (config2.OPENAI_API_KEYS.length > config2.OPENAI_API_BASE_URLS.length) {
          config2.OPENAI_API_KEYS = config2.OPENAI_API_KEYS.slice(0, config2.OPENAI_API_BASE_URLS.length);
        }
        if (config2.OPENAI_API_KEYS.length < config2.OPENAI_API_BASE_URLS.length) {
          const diff = config2.OPENAI_API_BASE_URLS.length - config2.OPENAI_API_KEYS.length;
          for (let i = 0; i < diff; i++) {
            config2.OPENAI_API_KEYS.push("");
          }
        }
      }
      await saveSettings({ directConnections: config2 });
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddConnectionModal($$renderer3, {
        direct: true,
        onSubmit: addConnectionHandler,
        get show() {
          return showConnectionModal;
        },
        set show($$value) {
          showConnectionModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form id="tab-connections" class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connections"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex h-full justify-center"><div class="my-auto">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="shrink-0 flex justify-end pt-3 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function AddToolServerModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let onSubmit = fallback($$props["onSubmit"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let show = fallback($$props["show"], false);
    let edit = fallback($$props["edit"], false);
    let direct = fallback($$props["direct"], false);
    let connection = fallback($$props["connection"], null);
    let type = "openapi";
    let url = "";
    let auth_type = "bearer";
    let key = "";
    let functionNameFilterList = "";
    let accessGrants = [];
    let id = "";
    let name = "";
    let description = "";
    let oauthClientInfo = null;
    let oauthClientId = "";
    let oauthClientSecret = "";
    let oauthServerUrl = "";
    let enable = true;
    let loading = false;
    let showAccessControlModal = false;
    let showDeleteConfirmDialog = false;
    const inputClass = "bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700";
    const selectClass = "bg-transparent pr-5 outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700";
    const init = () => {
      if (connection) {
        type = connection?.type ?? "openapi";
        url = connection.url;
        connection?.spec_type ?? "url";
        connection?.spec ?? "";
        connection?.path ?? "openapi.json";
        auth_type = connection?.auth_type ?? "bearer";
        connection?.headers ? JSON.stringify(connection.headers, null, 2) : "";
        key = connection?.key ?? "";
        id = connection.info?.id ?? "";
        name = connection.info?.name ?? "";
        description = connection.info?.description ?? "";
        oauthClientInfo = connection.info?.oauth_client_info ?? null;
        oauthClientId = connection.info?.oauth_client_id ?? "";
        oauthClientSecret = connection.info?.oauth_client_secret ?? "";
        oauthServerUrl = connection.info?.oauth_server_url ?? "";
        connection.info?.oauth_scope ?? "";
        connection.info?.oauth_resource_parameter ?? "auto";
        enable = connection.config?.enable ?? true;
        functionNameFilterList = connection.config?.function_name_filter_list ?? "";
        accessGrants = connection.config?.access_grants ?? [];
      }
    };
    if (show) {
      init();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><h1 class="text-lg font-medium self-center font-primary">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Connection"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"))}`);
          }
          $$renderer4.push(`<!--]--></h1> <div class="flex items-center gap-3"><div class="flex gap-1.5 text-xs justify-end"><button class="hover:underline" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Import"))}</button> <button class="hover:underline" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</button></div> <button class="self-center"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close Configure Connection Modal"))}>`);
          XMark$1($$renderer4, { className: "size-5" });
          $$renderer4.push(`<!----></button></div></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><input type="file" hidden="" accept=".json"/> <form class="flex flex-col w-full"><div class="px-1"><div class="flex gap-2 mb-1.5"><div class="flex w-full justify-between items-center"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Type"))}</div> <div>`);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button type="button" class="text-xs text-gray-700 dark:text-gray-300">`);
            if (["", "openapi"].includes(type)) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OpenAPI"))}`);
            } else if (type === "mcp") {
              $$renderer4.push("<!--[1-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("MCP"))} <span class="text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Streamable HTTP"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="text-xs text-gray-700 dark:text-gray-300">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OpenAPI"))}</div>`);
          }
          $$renderer4.push(`<!--]--></div></div></div> <div class="flex gap-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="enter-name"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</label></div> <div class="flex flex-1 items-center"><input id="enter-name"${attr_class(`w-full flex-1 text-sm ${inputClass}`)} type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter name"))} autocomplete="off"/></div></div> `);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="enter-id"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("ID"))} `);
            if (type !== "mcp") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="opacity-50">(${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("optional"))})</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></label></div> <div class="flex flex-1 items-center"><input id="enter-id"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", id)} placeholder="auto" autocomplete="off"${attr("required", type === "mcp", true)}/></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex flex-col w-full mt-1 mb-1.5"><label for="description"${attr_class(`mb-0.5 text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Description"))}</label> <div class="flex-1"><input id="description"${attr_class(`w-full text-sm ${inputClass}`)} type="text"${attr("value", description)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter description"))} autocomplete="off"/></div></div> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label for="api-base-url"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("URL"))}</label></div> <div class="flex flex-1 items-center"><input id="api-base-url"${attr_class(`w-full flex-1 text-sm ${inputClass}`)} type="text"${attr("value", url)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"))} autocomplete="off" required=""/> `);
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"),
            className: "shrink-0 flex items-center mr-1",
            children: ($$renderer5) => {
              $$renderer5.push(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"))} type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Tooltip($$renderer4, {
            content: enable ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
            children: ($$renderer5) => {
              Switch_1($$renderer5, {
                get state() {
                  return enable;
                },
                set state($$value) {
                  enable = $$value;
                  $$settled = false;
                }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center"><div class="flex gap-2 items-center"><div for="select-bearer-or-session"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Auth"))}</div></div> `);
          if (["oauth_2.1", "oauth_2.1_static"].includes(auth_type)) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex items-center gap-2"><div class="flex flex-col justify-end items-center shrink-0">`);
            Tooltip($$renderer4, {
              content: oauthClientInfo ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Register Again") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Register Client"),
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="text-xs underline dark:text-gray-500 dark:hover:text-gray-200 text-gray-700 hover:text-gray-900 transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Register Client"))}</button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            if (!oauthClientInfo) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-xs font-normal px-1.5 rounded-md bg-yellow-500/20 text-yellow-700 dark:text-yellow-200">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Not Registered"))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<div class="text-xs font-normal px-1.5 rounded-md bg-green-500/20 text-green-700 dark:text-green-200">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Registered"))}</div>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start">`);
          $$renderer4.select(
            {
              id: "select-bearer-or-session",
              class: `w-full text-sm ${selectClass}`,
              value: auth_type
            },
            ($$renderer5) => {
              $$renderer5.option({ value: "none" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("None"))}`);
              });
              $$renderer5.option({ value: "bearer" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Bearer"))}`);
              });
              $$renderer5.option({ value: "session" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Session"))}`);
              });
              if (!direct) {
                $$renderer5.push("<!--[0-->");
                $$renderer5.option({ value: "system_oauth" }, ($$renderer6) => {
                  $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OAuth"))}`);
                });
                $$renderer5.push(` `);
                if (type === "mcp") {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.option({ value: "oauth_2.1" }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OAuth 2.1"))}`);
                  });
                  $$renderer5.push(` `);
                  $$renderer5.option({ value: "oauth_2.1_static" }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OAuth 2.1 (Static)"))}`);
                  });
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]-->`);
              } else {
                $$renderer5.push("<!--[-1-->");
              }
              $$renderer5.push(`<!--]-->`);
            }
          );
          $$renderer4.push(`</div> <div class="flex flex-1 items-center">`);
          if (auth_type === "bearer") {
            $$renderer4.push("<!--[0-->");
            SensitiveInput($$renderer4, {
              placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              required: false,
              get value() {
                return key;
              },
              set value($$value) {
                key = $$value;
                $$settled = false;
              }
            });
          } else if (auth_type === "none") {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No authentication"))}</div>`);
          } else if (auth_type === "session") {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Forwards system user session credentials to authenticate"))}</div>`);
          } else if (auth_type === "system_oauth") {
            $$renderer4.push("<!--[3-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Forwards system user OAuth access token to authenticate"))}</div>`);
          } else if (auth_type === "oauth_2.1") {
            $$renderer4.push("<!--[4-->");
            $$renderer4.push(`<div${attr_class(`flex items-center text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Uses OAuth 2.1 Dynamic Client Registration"))}</div>`);
          } else if (auth_type === "oauth_2.1_static") {
            $$renderer4.push("<!--[5-->");
            $$renderer4.push(`<div class="flex flex-col gap-1.5 w-full mt-0.5">`);
            SensitiveInput($$renderer4, {
              placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Client ID"),
              required: false,
              get value() {
                return oauthClientId;
              },
              set value($$value) {
                oauthClientId = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----> `);
            SensitiveInput($$renderer4, {
              placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Client Secret"),
              required: false,
              get value() {
                return oauthClientSecret;
              },
              set value($$value) {
                oauthClientSecret = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----> <div class="flex flex-1 items-center"><input${attr_class(`w-full text-sm ${inputClass}`)} type="text"${attr("value", oauthServerUrl)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("OAuth Server URL"))} autocomplete="off"/></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div></div></div> <div class="flex items-center justify-between"><button type="button" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${attr_class(`w-3 h-3 transition-transform ${""}`)}><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Advanced"))}</button> `);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            AccessButton($$renderer4, { className: "mt-2" });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<hr class="border-gray-100/50 dark:border-gray-700/10 my-2.5 w-full"/> <div class="flex flex-col w-full mt-2"><label for="function-name-filter-list"${attr_class(`mb-1 text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Function Name Filter List"))}</label> <div class="flex-1"><input id="function-name-filter-list"${attr_class(`w-full text-sm ${inputClass}`)} type="text"${attr("value", functionNameFilterList)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter function name filter list (e.g. func1, !func2)"))} autocomplete="off"/></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> `);
          if (type === "mcp") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-2xl text-xs px-4 py-3 mb-2 mt-1"><span class="font-normal">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Warning"))}:</span> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("MCP support is experimental and its specification changes often, which can lead to incompatibilities. OpenAPI specification support is directly maintained by the Open WebUI team, making it the more reliable option for compatibility."))} <a class="font-normal underline" href="https://docs.openwebui.com/" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Read more →"))}</a></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex justify-between items-center pt-3 text-sm font-medium"><div>`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="px-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <button${attr_class(`px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      AccessControlModal($$renderer3, {
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
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to delete this connection? This action cannot be undone."),
        confirmLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"),
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { onSubmit, onDelete, show, edit, direct, connection });
  });
}
function WrenchAlt($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.725 2.97923 20.5061V20.5061C3.76027 21.2871 5.0266 21.2871 5.80765 20.5061L12.8787 13.435" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0502 10.6066C9.20638 8.45358 9.37134 5.6286 11.1109 3.88909C12.8504 2.14957 16.0606 1.76777 17.8284 2.82843L14.7877 5.8691L14.5051 8.98014L17.6161 8.69753L20.6568 5.65685C21.7175 7.42462 21.3357 10.6349 19.5961 12.3744C17.8566 14.1139 15.0316 14.2789 12.8786 13.435" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Connection$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onSubmit = fallback($$props["onSubmit"], () => {
    });
    let connection = fallback($$props["connection"], null);
    let direct = fallback($$props["direct"], false);
    let showConfigModal = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddToolServerModal($$renderer3, {
        edit: true,
        direct,
        connection,
        onDelete: () => {
          onDelete();
          showConfigModal = false;
        },
        onSubmit: (c) => {
          connection = c;
          onSubmit(c);
        },
        get show() {
          return showConfigModal;
        },
        set show($$value) {
          showConfigModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="flex w-full items-center gap-3 text-xs text-gray-600 dark:text-gray-400">`);
      Tooltip($$renderer3, {
        className: "w-full relative",
        content: "",
        placement: "top-start",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full"><div${attr_class(`flex-1 relative flex gap-1.5 items-center ${!(connection?.config?.enable ?? true) ? "opacity-50" : ""}`)}>`);
          Tooltip($$renderer4, {
            content: connection?.type === "mcp" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("MCP") : store_get($$store_subs ??= {}, "$i18n", i18n).t("OpenAPI"),
            children: ($$renderer5) => {
              WrenchAlt($$renderer5, {});
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          if (connection?.info?.name) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="w-full bg-transparent capitalize outline-hidden">${escape_html(connection?.info?.name ?? connection?.url)} <span class="text-gray-500">${escape_html(connection?.info?.id ?? "")}</span></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div>${escape_html(connection?.url)}</div>`);
          }
          $$renderer4.push(`<!--]--></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="flex shrink-0 items-center gap-1">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Configure"),
        className: "self-start",
        children: ($$renderer4) => {
          $$renderer4.push(`<button class="flex size-6 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-300" type="button">`);
          Cog6($$renderer4, {});
          $$renderer4.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Tooltip($$renderer3, {
        content: connection?.config?.enable ?? true ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
        children: ($$renderer4) => {
          Switch_1($$renderer4, { state: connection?.config?.enable ?? true });
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { onDelete, onSubmit, connection, direct });
  });
}
function AddTerminalServerModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let edit = fallback($$props["edit"], false);
    let direct = fallback($$props["direct"], false);
    let connection = fallback($$props["connection"], null);
    let onSubmit = fallback($$props["onSubmit"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let url = "";
    let key = "";
    let name = "";
    let id = "";
    let auth_type = "bearer";
    let showAccessControlModal = false;
    let showDeleteConfirmDialog = false;
    let accessGrants = [];
    let serverType = null;
    let verifying = false;
    let refreshing = false;
    let policyId = "";
    let policyImage = "";
    let policyEnvPairs = [];
    let policyCpu = "1";
    let policyMemory = "1Gi";
    let policyStorage = "ephemeral";
    let policyStorageSize = "5Gi";
    let policyIdleTimeout = 30;
    let lifecycleJson = "{}";
    let refreshOnlyIdle = true;
    let refreshReset = false;
    let loadingPolicy = false;
    let policyLoadError = "";
    const inputClass = "bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700";
    const selectClass = "bg-transparent pr-5 outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700";
    const stringifyJson = (value) => {
      return JSON.stringify(value && Object.keys(value).length ? value : {}, null, 2);
    };
    const init = () => {
      if (connection) {
        id = connection?.id ?? "";
        url = connection.url;
        key = connection?.key ?? "";
        name = connection?.name ?? "";
        auth_type = connection?.auth_type ?? "bearer";
        connection?.path ?? "/openapi.json";
        connection?.enabled ?? true;
        accessGrants = connection?.config?.access_grants ?? [];
        serverType = connection?.server_type ?? (connection?.policy_id ? "orchestrator" : null);
        policyId = connection?.policy_id ?? "";
        const p = {};
        policyImage = p.image ?? "";
        policyIdleTimeout = p.idle_timeout_minutes ?? 30;
        policyStorage = p.storage ? "persistent" : "ephemeral";
        policyStorageSize = p.storage ?? "5Gi";
        const env = p.env ?? {};
        policyEnvPairs = Object.entries(env).map(([k, v]) => ({ key: k, value: v }));
        policyCpu = p.cpu_limit ?? "1";
        policyMemory = p.memory_limit ?? "1Gi";
        lifecycleJson = stringifyJson({});
        refreshOnlyIdle = true;
        refreshReset = false;
        loadingPolicy = false;
        policyLoadError = "";
      } else {
        id = "";
        url = "";
        key = "";
        name = "";
        auth_type = "bearer";
        accessGrants = [];
        serverType = null;
        policyId = "";
        policyImage = "";
        policyEnvPairs = [];
        policyCpu = "1";
        policyMemory = "1Gi";
        policyStorage = "ephemeral";
        policyStorageSize = "5Gi";
        policyIdleTimeout = 30;
        lifecycleJson = "{}";
        refreshOnlyIdle = true;
        refreshReset = false;
        loadingPolicy = false;
        policyLoadError = "";
      }
    };
    const loadPolicy = async () => {
      if (!connection || serverType !== "orchestrator" || !policyId || direct) return;
      loadingPolicy = true;
      policyLoadError = "";
      try {
        let policy = null;
        try {
          policy = await getOrchestratorPolicy(localStorage.token, url, key, policyId, auth_type);
        } catch (error) {
          if (error?.status !== 404) throw error;
        }
        const lifecycle = await getOrchestratorLifecycle(localStorage.token, url, key, policyId, auth_type);
        const data = policy?.data ?? {};
        policyImage = data.image ?? "";
        policyIdleTimeout = data.idle_timeout_minutes ?? 30;
        policyStorage = data.storage ? "persistent" : "ephemeral";
        policyStorageSize = data.storage ?? "5Gi";
        policyEnvPairs = Object.entries(data.env ?? {}).map(([key2, value]) => ({ key: key2, value: String(value) }));
        policyCpu = data.cpu_limit ?? "1";
        policyMemory = data.memory_limit ?? "1Gi";
        lifecycleJson = stringifyJson(lifecycle?.data);
      } catch (error) {
        policyLoadError = error?.message || String(error);
      } finally {
        loadingPolicy = false;
      }
    };
    if (show) {
      init();
      void loadPolicy();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><h1 class="text-lg font-medium self-center font-primary">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Terminal Connection"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Terminal Connection"))}`);
          }
          $$renderer4.push(`<!--]--></h1> <button class="self-center"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}>`);
          XMark$1($$renderer4, { className: "size-5" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex gap-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="terminal-name"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</label></div> <div class="flex flex-1 items-center"><input id="terminal-name"${attr_class(`w-full flex-1 text-sm ${inputClass}`)} type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("My Terminal"))} autocomplete="off"/></div></div> `);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label for="terminal-id"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("ID"))} <span class="opacity-50">(${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("optional"))})</span></label></div> <div class="flex flex-1 items-center"><input id="terminal-id"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", id)} placeholder="auto" autocomplete="off"/></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label for="terminal-url"${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("URL"))}</label></div> <div class="flex flex-1 items-center"><input id="terminal-url"${attr_class(`w-full flex-1 text-sm ${inputClass}`)} type="text"${attr("value", url)} placeholder="http://localhost:9900" required="" autocomplete="off"/></div></div> `);
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"),
            className: "self-end -mb-1",
            children: ($$renderer5) => {
              $$renderer5.push(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition" type="button"${attr("disabled", verifying, true)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"))}>`);
              {
                $$renderer5.push("<!--[-1-->");
                $$renderer5.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg>`);
              }
              $$renderer5.push(`<!--]--></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> `);
          if (serverType === "orchestrator" && !direct) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Policy ID"))}</div></div> <div class="flex flex-1 items-center"><input id="policy-id"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", policyId)} placeholder="python-ds" autocomplete="off"${attr("disabled", edit && !!connection?.policy_id, true)}/></div></div></div> `);
            if (loadingPolicy) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="mt-2 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading policy..."))}</div>`);
            } else if (policyLoadError) {
              $$renderer4.push("<!--[1-->");
              $$renderer4.push(`<div class="mt-2 text-xs text-red-600 dark:text-red-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to load policy: {{error}}", { error: policyLoadError }))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Image"))} <span class="opacity-50">(${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("optional"))})</span></div></div> <div class="flex flex-1 items-center"><input id="policy-image"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", policyImage)} placeholder="ghcr.io/open-webui/open-terminal:latest" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("CPU"))}</div></div> <div class="flex flex-1 items-center"><input id="policy-cpu"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", policyCpu)} placeholder="1" autocomplete="off"/></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Memory"))}</div></div> <div class="flex flex-1 items-center"><input id="policy-memory"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", policyMemory)} placeholder="1Gi" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Storage"))}</div></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start">`);
            $$renderer4.select({ class: `w-full text-sm ${selectClass}`, value: policyStorage }, ($$renderer5) => {
              $$renderer5.option({ value: "ephemeral" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ephemeral"))}`);
              });
              $$renderer5.option({ value: "persistent" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Persistent"))}`);
              });
            });
            $$renderer4.push(`</div> `);
            if (policyStorage === "persistent") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="flex flex-1 items-center"><input id="policy-storage-size"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", policyStorageSize)} placeholder="5Gi" autocomplete="off"/></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Idle Timeout"))} <span class="opacity-50">(${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("min"))})</span></div></div> <div class="flex flex-1 items-center"><input id="idle-timeout"${attr_class(`w-full flex-1 text-sm font-mono ${inputClass}`)} type="number" min="0"${attr("value", policyIdleTimeout)} placeholder="30" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Environment Variables"))}</div> <button type="button" class="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">+ ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add"))}</button></div> <!--[-->`);
            const each_array = ensure_array_like(policyEnvPairs);
            for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
              let pair = each_array[idx];
              $$renderer4.push(`<div class="flex gap-1.5 mb-1"><input${attr_class(`flex-1 text-sm font-mono ${inputClass}`)} type="text"${attr("value", pair.key)} placeholder="KEY"/> <input${attr_class(`flex-[2] text-sm font-mono ${inputClass}`)} type="text"${attr("value", pair.value)} placeholder="value"/> <button type="button" class="text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition px-1">`);
              XMark$1($$renderer4, { className: "size-3" });
              $$renderer4.push(`<!----></button></div>`);
            }
            $$renderer4.push(`<!--]--></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Lifecycle JSON"))}</div></div> <textarea id="lifecycle-json"${attr_class(`w-full min-h-24 resize-y text-xs font-mono ${inputClass}`)} spellcheck="false"${attr("placeholder", `{
  "reset": {
    "schedule": "@weekly",
    "timezone": "UTC"
  }
}`)}>`);
            const $$body = escape_html(lifecycleJson);
            if ($$body) {
              $$renderer4.push(`${$$body}`);
            }
            $$renderer4.push(`</textarea></div></div> <div class="flex flex-wrap items-center justify-between gap-2 mt-2"><div class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400"><label class="flex items-center gap-1.5"><input type="checkbox"${attr("checked", refreshOnlyIdle, true)}/> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Idle only"))}</span></label> <label class="flex items-center gap-1.5"><input type="checkbox"${attr("checked", refreshReset, true)}/> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset persisted files"))}</span></label></div> <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Policy changes apply to newly provisioned terminals. Refresh matching terminals to apply them to existing terminals."))}</div> <button type="button" class="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-850 dark:hover:bg-gray-800 transition"${attr("disabled", refreshing, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Refresh Terminals"))}</button></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex items-center justify-between"><button type="button" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${attr_class(`w-3 h-3 transition-transform ${""}`)}><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Advanced"))}</button> `);
          if (!direct) {
            $$renderer4.push("<!--[0-->");
            AccessButton($$renderer4, { className: "mt-2" });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center"><div class="flex gap-2 items-center"><div${attr_class(`text-xs text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Auth"))}</div></div></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start">`);
          $$renderer4.select({ class: `w-full text-sm ${selectClass}`, value: auth_type }, ($$renderer5) => {
            $$renderer5.option({ value: "none" }, ($$renderer6) => {
              $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("None"))}`);
            });
            $$renderer5.option({ value: "bearer" }, ($$renderer6) => {
              $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Bearer"))}`);
            });
            if (!direct) {
              $$renderer5.push("<!--[0-->");
              $$renderer5.option({ value: "session" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Session"))}`);
              });
              $$renderer5.push(` `);
              $$renderer5.option({ value: "system_oauth" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OAuth"))}`);
              });
            } else {
              $$renderer5.push("<!--[-1-->");
            }
            $$renderer5.push(`<!--]-->`);
          });
          $$renderer4.push(`</div> <div class="flex flex-1 items-center">`);
          if (auth_type === "bearer") {
            $$renderer4.push("<!--[0-->");
            SensitiveInput($$renderer4, {
              placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              required: false,
              get value() {
                return key;
              },
              set value($$value) {
                key = $$value;
                $$settled = false;
              }
            });
          } else if (auth_type === "none") {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No authentication"))}</div>`);
          } else if (auth_type === "session") {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Forwards system user session credentials to authenticate"))}</div>`);
          } else if (auth_type === "system_oauth") {
            $$renderer4.push("<!--[3-->");
            $$renderer4.push(`<div${attr_class(`text-xs self-center translate-y-[1px] text-gray-500`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Forwards system user OAuth access token to authenticate"))}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div></div></div> <div class="flex justify-between items-center pt-3 text-sm font-medium"><div>`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="px-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:underline transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 disabled:opacity-50 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="submit"${attr("disabled", loadingPolicy || !!policyLoadError, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></div></form></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      AccessControlModal($$renderer3, {
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
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("Are you sure you want to delete this connection? This action cannot be undone."),
        confirmLabel: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"),
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, edit, direct, connection, onSubmit, onDelete });
  });
}
function Cloud($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4C6 4 6 8 6 10C4.33333 10 1 11 1 15C1 19 4.33333 20 6 20H18C19.6667 20 23 19 23 15C23 11 19.6667 10 18 10C18 8 18 4 12 4Z" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Connection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let connection = fallback(
      $$props["connection"],
      () => ({
        url: "",
        key: "",
        name: "",
        path: "/openapi.json",
        enabled: false
      }),
      true
    );
    let onSubmit = fallback($$props["onSubmit"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onEnable = fallback($$props["onEnable"], () => {
    });
    let onDisable = fallback($$props["onDisable"], () => {
    });
    let showConfigModal = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddTerminalServerModal($$renderer3, {
        direct: true,
        edit: true,
        connection,
        onDelete: () => {
          onDelete();
          showConfigModal = false;
        },
        onSubmit: (c) => {
          connection = c;
          onSubmit(c);
        },
        get show() {
          return showConfigModal;
        },
        set show($$value) {
          showConfigModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="flex w-full gap-2 items-center">`);
      Tooltip($$renderer3, {
        className: "w-full relative",
        content: "",
        placement: "top-start",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full"><div${attr_class(`flex-1 relative flex gap-1.5 items-center ${!connection?.enabled ? "opacity-50" : ""}`)}>`);
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Terminal"),
            children: ($$renderer5) => {
              Cloud($$renderer5, { className: "size-4", strokeWidth: "1.5" });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <div class="outline-hidden w-full bg-transparent text-xs text-gray-700 dark:text-gray-300">${escape_html(connection.name || connection.url || store_get($$store_subs ??= {}, "$i18n", i18n).t("New Terminal"))}</div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="flex gap-1 items-center">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Configure"),
        children: ($$renderer4) => {
          $$renderer4.push(`<button class="self-center p-1 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition" type="button">`);
          Cog6($$renderer4, {});
          $$renderer4.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Tooltip($$renderer3, {
        content: connection?.enabled ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
        children: ($$renderer4) => {
          Switch_1($$renderer4, { state: connection?.enabled });
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { connection, onSubmit, onDelete, onEnable, onDisable });
  });
}
function Terminals($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let servers = fallback($$props["servers"], () => [], true);
    let onChange = fallback($$props["onChange"], () => {
    });
    let showAddModal = false;
    const addServer = (server) => {
      servers = [...servers, server];
      onChange(servers);
    };
    const enableServer = (idx) => {
      servers = servers.map((s, i) => ({ ...s, enabled: i === idx }));
      onChange(servers);
    };
    const disableServer = (idx) => {
      servers = servers.map((s, i) => i === idx ? { ...s, enabled: false } : s);
      onChange(servers);
    };
    const updateServer = (idx, updated) => {
      servers = servers.map((s, i) => i === idx ? updated : s);
      onChange(servers);
    };
    const deleteServer = (idx) => {
      servers = servers.filter((_, i) => i !== idx);
      onChange(servers);
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddTerminalServerModal($$renderer3, {
        direct: true,
        onSubmit: (server) => addServer(server),
        get show() {
          return showAddModal;
        },
        set show($$value) {
          showAddModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div><div class="flex justify-between items-center mb-2"><div class="flex items-center gap-2"><div class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Terminal"))}</div></div> `);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"),
        children: ($$renderer4) => {
          $$renderer4.push(`<button class="flex size-6 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-black/5 hover:text-gray-900 dark:text-gray-600 dark:hover:bg-white/5 dark:hover:text-white" type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"))}>`);
          Plus($$renderer4, {});
          $$renderer4.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <div class="flex flex-col gap-1.5"><!--[-->`);
      const each_array = ensure_array_like(servers);
      for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
        let server = each_array[idx];
        Connection($$renderer3, {
          onSubmit: (updated) => updateServer(idx, updated),
          onDelete: () => deleteServer(idx),
          onEnable: () => enableServer(idx),
          onDisable: () => disableServer(idx),
          get connection() {
            return server;
          },
          set connection($$value) {
            server = $$value;
            $$settled = false;
          }
        });
      }
      $$renderer3.push(`<!--]--></div> `);
      if (servers.length === 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No terminal connections configured."))}</div>`);
      } else {
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
    bind_props($$props, { servers, onChange });
  });
}
function Integrations$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let servers = null;
    let terminalServerConfigs = [];
    let showConnectionModal = false;
    const helpTextClass = "text-[0.6875rem] text-gray-400 dark:text-gray-600";
    const addConnectionHandler = async (server) => {
      servers = [...servers ?? [], server];
      await updateHandler();
    };
    const updateHandler = async () => {
      await saveSettings({ toolServers: servers, terminalServers: terminalServerConfigs });
      let toolServersData = await getToolServersData(store_get($$store_subs ??= {}, "$settings", settings)?.toolServers ?? []);
      toolServersData = toolServersData.filter((data) => {
        if (data.error) {
          toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t(`Failed to connect to {{URL}} OpenAPI tool server`, { URL: data?.url }));
          return false;
        }
        return true;
      });
      toolServers.set(toolServersData);
      const existingSystemTerminals = (store_get($$store_subs ??= {}, "$terminalServers", terminalServers) ?? []).filter((t) => t.id);
      const activeTerminals = terminalServerConfigs.filter((s) => s.enabled);
      if (activeTerminals.length > 0) {
        let terminalServersData = await getToolServersData(activeTerminals.map((t) => ({
          url: t.url,
          auth_type: t.auth_type ?? "bearer",
          key: t.key ?? "",
          path: t.path ?? "/openapi.json",
          config: { enable: true }
        })));
        terminalServersData = terminalServersData.filter((data) => data && !data.error);
        terminalServers.set([...terminalServersData, ...existingSystemTerminals]);
      } else {
        terminalServers.set(existingSystemTerminals);
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddToolServerModal($$renderer3, {
        onSubmit: addConnectionHandler,
        direct: true,
        get show() {
          return showConnectionModal;
        },
        set show($$value) {
          showConnectionModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form id="tab-tools" class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Integrations"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      if (servers !== null) {
        $$renderer3.push("<!--[0-->");
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Tools"),
          first: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div><div class="mb-2 flex items-center justify-between"><div class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("External Tool Servers"))}</div> `);
            Tooltip($$renderer4, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"),
              children: ($$renderer5) => {
                $$renderer5.push(`<button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"))} class="flex size-6 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-black/5 hover:text-gray-900 dark:text-gray-600 dark:hover:bg-white/5 dark:hover:text-white" type="button">`);
                Plus($$renderer5, {});
                $$renderer5.push(`<!----></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="flex flex-col gap-1"><!--[-->`);
            const each_array = ensure_array_like(servers);
            for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
              let server = each_array[idx];
              Connection$1($$renderer4, {
                direct: true,
                onSubmit: () => updateHandler(),
                onDelete: () => {
                  servers = (servers ?? []).filter((_, i) => i !== idx);
                  updateHandler();
                },
                get connection() {
                  return server;
                },
                set connection($$value) {
                  server = $$value;
                  $$settled = false;
                }
              });
            }
            $$renderer4.push(`<!--]--></div> `);
            if ((servers ?? []).length === 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div${attr_class(clsx(helpTextClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No tool server connections configured."))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connect to your own OpenAPI compatible external tool servers."))}</div> <div${attr_class(clsx(helpTextClass))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("CORS must be properly configured by the provider to allow requests from Open WebUI."))} <a class="ml-1 text-gray-500 underline hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" href="https://github.com/open-webui/openapi-servers" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Learn more about OpenAPI tool servers."))} ↗</a></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        UserSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Terminal"),
          children: ($$renderer4) => {
            Terminals($$renderer4, {
              onChange: () => updateHandler(),
              get servers() {
                return terminalServerConfigs;
              },
              set servers($$value) {
                terminalServerConfigs = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connect to Open Terminal instances to browse files and use them as always-on tools. Only one can be active at a time."))}</div> <a class="mt-0.5 block text-[0.6875rem] text-gray-500 underline hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" href="https://github.com/open-webui/open-terminal" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Learn more about Open Terminal"))} ↗</a>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex h-full justify-center"><div class="my-auto">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="shrink-0 flex justify-end pt-3 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function DatabaseSettings($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21C4 21 4 18 4 18V12" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C18.6357 17 18.2942 17.0974 18 17.2676C17.4022 17.6134 17 18.2597 17 19C17 19.7403 17.4022 20.3866 18 20.7324C18.2942 20.9026 18.6357 21 19 21Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.3 2"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function SettingsAlt($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function UserCircle($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function SoundHigh($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"></path><path d="M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function InfoCircle($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11.5V16.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Face($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8L16 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L8 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 16C9 16 10 17 12 17C14 17 15 16 15 16" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 8L12 13L11 13" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function AppNotification($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12V15C21 18.3137 18.3137 21 15 21H9C5.68629 21 3 18.3137 3 15V9C3 5.68629 5.68629 3 9 3H12" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Keyboard($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${attr("stroke-width", strokeWidth)}${attr_class(clsx(className))}><path d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z"></path><path d="M8 14L12 10L16 14" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function UsageIcon($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"${attr("stroke-width", strokeWidth)}${attr_class(clsx(className))}><path d="M20 20H4V4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 16.5L12 9L15 12L19.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function BarsArrowUp($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Computer($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 21L17 21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L22 21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Photo($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))} aria-hidden="true"><path d="M21 7.6V20.4C21 20.7314 20.7314 21 20.4 21H7.6C7.26863 21 7 20.7314 7 20.4V7.6C7 7.26863 7.26863 7 7.6 7H20.4C20.7314 7 21 7.26863 21 7.6Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4H4.6C4.26863 4 4 4.26863 4 4.6V18" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 16.8L12.4444 15L21 18" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 13C15.6716 13 15 12.3284 15 11.5C15 10.6716 15.6716 10 16.5 10C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function QueueList($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function AdminTabIcon($$renderer, $$props) {
  let id = $$props["id"];
  let className = fallback($$props["className"], "size-3.5");
  let strokeWidth = fallback($$props["strokeWidth"], "2");
  if (id === "general") {
    $$renderer.push("<!--[0-->");
    SettingsAlt($$renderer, { className, strokeWidth });
  } else if (id === "authentication") {
    $$renderer.push("<!--[1-->");
    Lock($$renderer, { className, strokeWidth });
  } else if (id === "connections") {
    $$renderer.push("<!--[2-->");
    Link($$renderer, { className, strokeWidth });
  } else if (id === "models") {
    $$renderer.push("<!--[3-->");
    $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${attr("stroke-width", strokeWidth)}${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M4 7.5C4 5.57 7.58 4 12 4s8 1.57 8 3.5S16.42 11 12 11 4 9.43 4 7.5Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M4 7.5v4C4 13.43 7.58 15 12 15s8-1.57 8-3.5v-4"></path><path stroke-linecap="round" stroke-linejoin="round" d="M4 11.5v4C4 17.43 7.58 19 12 19s8-1.57 8-3.5v-4"></path></svg>`);
  } else if (id === "subagents") {
    $$renderer.push("<!--[4-->");
    UserCircle($$renderer, { className, strokeWidth });
  } else if (id === "evaluations") {
    $$renderer.push("<!--[5-->");
    $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${attr("stroke-width", strokeWidth)}${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M5 20V10"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 20V4"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19 20v-7"></path></svg>`);
  } else if (id === "analytics") {
    $$renderer.push("<!--[6-->");
    BarsArrowUp($$renderer, { className, strokeWidth });
  } else if (id === "integrations") {
    $$renderer.push("<!--[7-->");
    WrenchAlt($$renderer, { className, strokeWidth });
  } else if (id === "documents") {
    $$renderer.push("<!--[8-->");
    Document($$renderer, { className, strokeWidth });
  } else if (id === "web") {
    $$renderer.push("<!--[9-->");
    GlobeAlt($$renderer, { className, strokeWidth });
  } else if (id === "code-execution") {
    $$renderer.push("<!--[10-->");
    CodeBracket($$renderer, { className, strokeWidth });
  } else if (id === "interface") {
    $$renderer.push("<!--[11-->");
    Computer($$renderer, { className, strokeWidth });
  } else if (id === "audio") {
    $$renderer.push("<!--[12-->");
    SoundHigh($$renderer, { className, strokeWidth });
  } else if (id === "images") {
    $$renderer.push("<!--[13-->");
    Photo($$renderer, { className, strokeWidth });
  } else if (id === "pipelines") {
    $$renderer.push("<!--[14-->");
    QueueList($$renderer, { className, strokeWidth });
  } else if (id === "db") {
    $$renderer.push("<!--[15-->");
    Database$1($$renderer, { className, strokeWidth });
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { id, className, strokeWidth });
}
function EllipsisVertical($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function AdminSettingField($$renderer, $$props) {
  let label = fallback($$props["label"], "");
  let description = fallback($$props["description"], "");
  let forId = fallback($$props["forId"], "");
  let className = fallback($$props["className"], "");
  $$renderer.push(`<div${attr_class(clsx(className))}>`);
  if (label) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<label class="text-xs text-gray-600 dark:text-gray-400"${attr("for", forId || void 0)}>${escape_html(label)}</label>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div${attr_class(clsx(label ? "mt-1" : ""))}><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div> `);
  if (description) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="mt-0.5 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { label, description, forId, className });
}
function AdminSettingRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let label = fallback($$props["label"], "");
    let description = fallback($$props["description"], "");
    let className = fallback($$props["className"], "");
    let labelClassName = fallback($$props["labelClassName"], "");
    const labelId = `admin-setting-${v4()}`;
    $$renderer2.push(`<div${attr_class(`flex items-center justify-between gap-4 ${stringify(className)}`)}><div${attr("id", labelId)}${attr_class(`min-w-0 text-xs text-gray-600 dark:text-gray-400 ${stringify(labelClassName)}`)}><!--[-->`);
    slot($$renderer2, $$props, "label", {}, () => {
      $$renderer2.push(`${escape_html(label)}`);
    });
    $$renderer2.push(`<!--]--></div> <div class="shrink-0"><!--[-->`);
    slot($$renderer2, $$props, "default", { labelId }, null);
    $$renderer2.push(`<!--]--></div></div> `);
    if (description) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="-mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(description)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { label, description, className, labelClassName });
  });
}
function AdminSettingSection($$renderer, $$props) {
  let title = fallback($$props["title"], "");
  let first = fallback($$props["first"], false);
  let className = fallback($$props["className"], "");
  $$renderer.push(`<section${attr_class(`${first ? "" : "mt-5"} ${stringify(className)}`)}>`);
  if (title) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<h3 class="mb-2 text-xs text-gray-400 dark:text-gray-600">${escape_html(title)}</h3>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <div class="flex flex-col gap-2.5"><!--[-->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!--]--></div></section>`);
  bind_props($$props, { title, first, className });
}
function General($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("General"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function Authentication($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let ENABLE_LDAP = false;
    let LDAP_SERVER = {
      label: "",
      host: "",
      port: null,
      attribute_for_mail: "mail",
      attribute_for_username: "uid",
      app_dn: "",
      app_dn_password: "",
      search_base: "",
      search_filters: "",
      use_tls: false,
      validate_cert: false,
      certificate_path: "",
      ciphers: "",
      enable_group_management: false,
      enable_group_creation: false,
      attribute_for_groups: "memberOf"
    };
    const inputClass = "w-full h-7 rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Authentication"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      AdminSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP"),
        children: ($$renderer4) => {
          AdminSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Allow users to authenticate with an LDAP directory."),
            children: invalid_default_snippet,
            $$slots: {
              default: ($$renderer5, { labelId }) => {
                Switch_1($$renderer5, {
                  ariaLabelledbyId: labelId,
                  get state() {
                    return ENABLE_LDAP;
                  },
                  set state($$value) {
                    ENABLE_LDAP = $$value;
                    $$settled = false;
                  }
                });
              }
            }
          });
          $$renderer4.push(`<!----> `);
          if (ENABLE_LDAP) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-x-3 gap-y-2.5 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Label"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Display name for this LDAP connection."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))} required=""${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter server label"))}${attr("value", LDAP_SERVER.label)}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="grid grid-cols-1 gap-x-3 gap-y-2.5 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Host"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP server hostname or IP address."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))} required=""${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter server host"))}${attr("value", LDAP_SERVER.host)}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Port"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP server port."),
              children: ($$renderer5) => {
                Tooltip($$renderer5, {
                  placement: "top-start",
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Default to 389 or 636 if TLS is enabled"),
                  className: "w-full",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<input${attr_class(clsx(inputClass))} type="number"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter server port"))}${attr("value", LDAP_SERVER.port)}/>`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="grid grid-cols-1 gap-x-3 gap-y-2.5 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Application DN"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Bind DN used for directory search."),
              children: ($$renderer5) => {
                Tooltip($$renderer5, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The Application Account DN you bind with for search"),
                  placement: "top-start",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter Application DN"))}${attr("value", LDAP_SERVER.app_dn)}/>`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Application DN Password"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Password for the bind DN."),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter Application DN Password"),
                  required: false,
                  get value() {
                    return LDAP_SERVER.app_dn_password;
                  },
                  set value($$value) {
                    LDAP_SERVER.app_dn_password = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="grid grid-cols-1 gap-x-3 gap-y-2.5 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Attribute for Mail"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP attribute used as the user email address."),
              children: ($$renderer5) => {
                Tooltip($$renderer5, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The LDAP attribute that maps to the mail that users use to sign in."),
                  placement: "top-start",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<input${attr_class(clsx(inputClass))} required=""${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Example: mail"))}${attr("value", LDAP_SERVER.attribute_for_mail)}/>`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Attribute for Username"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP attribute used as the username."),
              children: ($$renderer5) => {
                Tooltip($$renderer5, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The LDAP attribute that maps to the username that users use to sign in."),
                  placement: "top-start",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<input${attr_class(clsx(inputClass))} required=""${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Example: sAMAccountName or uid or userPrincipalName"))}${attr("value", LDAP_SERVER.attribute_for_username)}/>`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Search Base"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Base DN used when searching for users."),
              children: ($$renderer5) => {
                Tooltip($$renderer5, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The base to search for users"),
                  placement: "top-start",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<input${attr_class(clsx(inputClass))} required=""${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Example: ou=users,dc=foo,dc=example"))}${attr("value", LDAP_SERVER.search_base)}/>`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Search Filters"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP filter used to match signing-in users."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Example: (&(objectClass=inetOrgPerson)(uid=%s))"))}${attr("value", LDAP_SERVER.search_filters)}/> <a class="mt-1 block text-[0.6875rem] text-gray-400 underline hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-300" href="https://ldap.com/ldap-filters/" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Click here for filter guides."))}</a>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TLS"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Use TLS when connecting to the LDAP server."),
              children: invalid_default_snippet,
              $$slots: {
                default: ($$renderer5, { labelId }) => {
                  Switch_1($$renderer5, {
                    ariaLabelledbyId: labelId,
                    get state() {
                      return LDAP_SERVER.use_tls;
                    },
                    set state($$value) {
                      LDAP_SERVER.use_tls = $$value;
                      $$settled = false;
                    }
                  });
                }
              }
            });
            $$renderer4.push(`<!----> `);
            if (LDAP_SERVER.use_tls) {
              $$renderer4.push("<!--[0-->");
              AdminSettingField($$renderer4, {
                label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Certificate Path"),
                description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Certificate file used for TLS verification."),
                children: ($$renderer5) => {
                  $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter certificate path"))}${attr("value", LDAP_SERVER.certificate_path)}/>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              AdminSettingRow($$renderer4, {
                label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Validate Certificate"),
                description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify the LDAP server certificate when TLS is enabled."),
                children: invalid_default_snippet,
                $$slots: {
                  default: ($$renderer5, { labelId }) => {
                    Switch_1($$renderer5, {
                      ariaLabelledbyId: labelId,
                      get state() {
                        return LDAP_SERVER.validate_cert;
                      },
                      set state($$value) {
                        LDAP_SERVER.validate_cert = $$value;
                        $$settled = false;
                      }
                    });
                  }
                }
              });
              $$renderer4.push(`<!----> `);
              AdminSettingField($$renderer4, {
                label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Ciphers"),
                description: store_get($$store_subs ??= {}, "$i18n", i18n).t("TLS cipher list for LDAP connections."),
                children: ($$renderer5) => {
                  Tooltip($$renderer5, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Default to ALL"),
                    placement: "top-start",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Example: ALL"))}${attr("value", LDAP_SERVER.ciphers)}/>`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> `);
            AdminSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Group Mapping"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Map LDAP groups to Open WebUI groups."),
              children: invalid_default_snippet,
              $$slots: {
                default: ($$renderer5, { labelId }) => {
                  Switch_1($$renderer5, {
                    ariaLabelledbyId: labelId,
                    get state() {
                      return LDAP_SERVER.enable_group_management;
                    },
                    set state($$value) {
                      LDAP_SERVER.enable_group_management = $$value;
                      $$settled = false;
                    }
                  });
                }
              }
            });
            $$renderer4.push(`<!----> `);
            if (LDAP_SERVER.enable_group_management) {
              $$renderer4.push("<!--[0-->");
              AdminSettingRow($$renderer4, {
                label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Auto-Create Groups"),
                description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Create missing groups from LDAP groups."),
                children: invalid_default_snippet,
                $$slots: {
                  default: ($$renderer5, { labelId }) => {
                    Switch_1($$renderer5, {
                      ariaLabelledbyId: labelId,
                      get state() {
                        return LDAP_SERVER.enable_group_creation;
                      },
                      set state($$value) {
                        LDAP_SERVER.enable_group_creation = $$value;
                        $$settled = false;
                      }
                    });
                  }
                }
              });
              $$renderer4.push(`<!----> `);
              AdminSettingField($$renderer4, {
                label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Group Attribute"),
                description: store_get($$store_subs ??= {}, "$i18n", i18n).t("LDAP attribute containing the user group memberships."),
                children: ($$renderer5) => {
                  Tooltip($$renderer5, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Default to memberOf"),
                    placement: "top-start",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<input${attr_class(clsx(inputClass))} placeholder="memberOf"${attr("value", LDAP_SERVER.attribute_for_groups)}/>`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
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
function Wrench($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} aria-hidden="true" stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Connections($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let OLLAMA_BASE_URLS = [""];
    let OLLAMA_API_CONFIGS = {};
    let OPENAI_API_KEYS = [""];
    let OPENAI_API_BASE_URLS = [""];
    let OPENAI_API_CONFIGS = {};
    let showAddOpenAIConnectionModal = false;
    let showAddOllamaConnectionModal = false;
    const updateOpenAIHandler = async () => {
    };
    const updateOllamaHandler = async () => {
    };
    const addOpenAIConnectionHandler = async (connection) => {
      OPENAI_API_BASE_URLS = [...OPENAI_API_BASE_URLS, connection.url];
      OPENAI_API_KEYS = [...OPENAI_API_KEYS, connection.key];
      OPENAI_API_CONFIGS[OPENAI_API_BASE_URLS.length - 1] = connection.config;
      await updateOpenAIHandler();
    };
    const addOllamaConnectionHandler = async (connection) => {
      OLLAMA_BASE_URLS = [...OLLAMA_BASE_URLS, connection.url];
      OLLAMA_API_CONFIGS[OLLAMA_BASE_URLS.length - 1] = { ...connection.config, key: connection.key };
      await updateOllamaHandler();
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddConnectionModal($$renderer3, {
        onSubmit: addOpenAIConnectionHandler,
        get show() {
          return showAddOpenAIConnectionModal;
        },
        set show($$value) {
          showAddOpenAIConnectionModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      AddConnectionModal($$renderer3, {
        ollama: true,
        onSubmit: addOllamaConnectionHandler,
        get show() {
          return showAddOllamaConnectionModal;
        },
        set show($$value) {
          showAddOllamaConnectionModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connections"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex h-full justify-center"><div class="my-auto">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
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
function TagSelector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let value = fallback($$props["value"], "");
    let placeholder = fallback($$props["placeholder"], () => store_get($$store_subs ??= {}, "$i18n", i18n).t("Tag"), true);
    let align = fallback($$props["align"], "start");
    let onChange = fallback($$props["onChange"], () => {
    });
    let triggerClass = fallback($$props["triggerClass"], "relative h-8 w-full flex items-center gap-0.5 px-1.5 py-1.5 bg-transparent rounded-xl text-[13px] font-normal text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100");
    let itemClass = fallback($$props["itemClass"], "flex h-[1.6875rem] w-full cursor-pointer items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] capitalize hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-800/40 dark:hover:text-gray-100");
    let contentClass = fallback($$props["contentClass"], "min-w-[170px]");
    let items = fallback($$props["items"], () => [], true);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Select($$renderer3, {
        items,
        placeholder,
        align,
        triggerClass,
        itemClass,
        contentClass,
        onChange: () => onChange(value),
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        $$slots: {
          trigger: ($$renderer4, { selectedLabel }) => {
            {
              $$renderer4.push(`<div class="inline-flex h-input min-w-0 flex-1 outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden capitalize">`);
              if (value) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`${escape_html(selectedLabel)}`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`${escape_html(placeholder)}`);
              }
              $$renderer4.push(`<!--]--></div> `);
              if (value) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<button class="outline-none" type="button">`);
                XMark$1($$renderer4, { className: "size-3.5" });
                $$renderer4.push(`<!----></button>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                ChevronDown$1($$renderer4, { className: "size-2.5", strokeWidth: "2.5" });
              }
              $$renderer4.push(`<!--]-->`);
            }
          },
          item: ($$renderer4, { item, selected }) => {
            {
              $$renderer4.push(`${escape_html(item.label.length > 32 ? `${item.label.slice(0, 32)}...` : item.label)} <div${attr_class(`ml-auto ${selected ? "" : "invisible"}`)}>`);
              Check($$renderer4, {});
              $$renderer4.push(`<!----></div>`);
            }
          }
        }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      value,
      placeholder,
      align,
      onChange,
      triggerClass,
      itemClass,
      contentClass,
      items
    });
  });
}
function TTSVoiceInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let query, matchedVoices;
    let id = fallback($$props["id"], "tts-voice");
    let value = fallback($$props["value"], "");
    let voices = fallback($$props["voices"], () => [], true);
    let placeholder = fallback($$props["placeholder"], "");
    let className = fallback($$props["className"], "w-full");
    let selectedIds = fallback($$props["selectedIds"], null);
    const listboxId = `${id}-options`;
    let suggestionsOpen = false;
    query = value.trim().toLowerCase();
    matchedVoices = (voices ?? []).filter((voice) => {
      const id2 = voice.id.toLowerCase();
      const name = (voice.name ?? "").toLowerCase();
      const description = (voice.description ?? voice.meta?.description ?? "").toLowerCase();
      return query === "" || id2.includes(query) || name.includes(query) || description.includes(query);
    });
    selectedIds === null ? matchedVoices.slice(0, 8) : matchedVoices;
    $$renderer2.push(`<input${attr("value", value)}${attr("id", `${id}-input`)}${attr_class(`${stringify(className)} text-sm bg-transparent outline-hidden`)} type="text"${attr("placeholder", placeholder)} role="combobox" aria-autocomplete="list"${attr("aria-controls", listboxId)}${attr("aria-expanded", suggestionsOpen)} autocomplete="off"/> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { id, value, voices, placeholder, className, selectedIds });
  });
}
function ManageModelsModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        className: "bg-white dark:bg-gray-900 rounded-4xl",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 pb-1"><div class="text-sm font-medium self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage Models"))}</div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
          XMark$1($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6">`);
          {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="py-5">`);
            Spinner($$renderer4, {});
            $$renderer4.push(`<!----></div>`);
          }
          $$renderer4.push(`<!--]--></div></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show });
  });
}
function ModelDefaultsPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let configuredParams, enabledCapabilities;
    const i18n = getContext("i18n");
    let initHandler = fallback($$props["initHandler"], () => {
    });
    let dirty = fallback($$props["dirty"], false);
    let config$1 = null;
    let modelIds = [];
    let defaultCapabilities = {};
    let defaultFeatureIds = [];
    let defaultParams = {};
    let builtinTools = {};
    let promptSuggestions = [];
    const getSnapshot = () => JSON.stringify({
      defaultCapabilities,
      defaultFeatureIds,
      defaultParams: Object.fromEntries(configuredParams),
      builtinTools,
      promptSuggestions: promptSuggestions.filter((p) => p.content !== "")
    });
    const save = async () => {
      if (!dirty) {
        return true;
      }
      const metadata = {
        capabilities: defaultCapabilities,
        ...defaultFeatureIds.length > 0 ? { defaultFeatureIds } : {},
        ...Object.keys(builtinTools).length > 0 ? { builtinTools } : {}
      };
      const res = await setModelsConfig(localStorage.token, {
        DEFAULT_MODELS: config$1?.DEFAULT_MODELS ?? null,
        DEFAULT_PINNED_MODELS: config$1?.DEFAULT_PINNED_MODELS ?? null,
        MODEL_ORDER_LIST: modelIds,
        DEFAULT_MODEL_METADATA: metadata,
        DEFAULT_MODEL_PARAMS: Object.fromEntries(configuredParams)
      }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        config$1 = res;
        promptSuggestions = promptSuggestions.filter((p) => p.content !== "");
        promptSuggestions = await setDefaultPromptSuggestions(localStorage.token, promptSuggestions);
        await config.set(await getBackendConfig());
        getSnapshot();
        dirty = false;
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Models configuration saved successfully"));
        initHandler();
        return true;
      } else {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to save models configuration"));
        return false;
      }
    };
    configuredParams = Object.entries(defaultParams ?? {}).filter(([_, value]) => value !== null && value !== "" && value !== void 0);
    enabledCapabilities = Object.entries(defaultCapabilities ?? {}).filter(([_, value]) => value);
    enabledCapabilities.filter(([key]) => ["web_search", "code_interpreter", "image_generation"].includes(key)).map(([key]) => key);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="shrink-0"><div class="flex items-center justify-between gap-4 py-0.5"><button class="min-w-0 flex-1 text-left text-xs text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Model Defaults"))}</button> <button class="shrink-0 text-[0.6875rem] text-gray-400 transition hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-300" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Configure"))}</button></div> `);
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
    bind_props($$props, { initHandler, dirty, save });
  });
}
function ModelMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let user2 = $$props["user"];
    let model = $$props["model"];
    let exportHandler = $$props["exportHandler"];
    let hideHandler = $$props["hideHandler"];
    let privacyHandler = $$props["privacyHandler"];
    let isDefaultSelected = fallback($$props["isDefaultSelected"], false);
    let isDefaultPinned = fallback($$props["isDefaultPinned"], false);
    let defaultSelectedHandler = $$props["defaultSelectedHandler"];
    let defaultPinnedHandler = $$props["defaultPinnedHandler"];
    let pinModelHandler = $$props["pinModelHandler"];
    let copyLinkHandler = $$props["copyLinkHandler"];
    let cloneHandler = $$props["cloneHandler"];
    let onClose = $$props["onClose"];
    let show = false;
    const isPublicModel = (model2) => (model2?.access_grants ?? []).some((g) => g.principal_type === "user" && g.principal_id === "*" && g.permission === "read");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Dropdown($$renderer3, {
        onOpenChange: (state) => {
          if (state === false) {
            onClose();
          }
        },
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("More"),
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              slot($$renderer5, $$props, "default", {}, null);
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content">`);
            DropdownMenu($$renderer4, {
              className: "min-w-[170px]",
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                if (model?.meta?.hidden ?? false) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
                }
                $$renderer5.push(`<!--]--> <div class="flex items-center">`);
                if (model?.meta?.hidden ?? false) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show Model"))}`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Hide Model"))}`);
                }
                $$renderer5.push(`<!--]--></div></button> <button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                Check($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">`);
                if (isDefaultSelected) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove Selected Model"))}`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Set as Selected Model"))}`);
                }
                $$renderer5.push(`<!--]--></div></button> <button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                if (isDefaultPinned) {
                  $$renderer5.push("<!--[0-->");
                  PinSlash$1($$renderer5, { className: "size-3.5" });
                } else {
                  $$renderer5.push("<!--[-1-->");
                  Pin$1($$renderer5, { className: "size-3.5" });
                }
                $$renderer5.push(`<!--]--> <div class="flex items-center">`);
                if (isDefaultPinned) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove Pinned Model"))}`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Set as Pinned Model"))}`);
                }
                $$renderer5.push(`<!--]--></div></button> <button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                if (isPublicModel(model)) {
                  $$renderer5.push("<!--[0-->");
                  LockClosed($$renderer5, { className: "size-3.5" });
                } else {
                  $$renderer5.push("<!--[-1-->");
                  GlobeAlt($$renderer5, { className: "size-3.5" });
                }
                $$renderer5.push(`<!--]--> <div class="flex items-center">`);
                if (isPublicModel(model)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Make Private"))}`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Make Public"))}`);
                }
                $$renderer5.push(`<!--]--></div></button> <button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                if ((store_get($$store_subs ??= {}, "$settings", settings)?.pinnedModels ?? []).includes(model?.id)) {
                  $$renderer5.push("<!--[0-->");
                  PinSlash$1($$renderer5, {});
                } else {
                  $$renderer5.push("<!--[-1-->");
                  Pin$1($$renderer5, {});
                }
                $$renderer5.push(`<!--]--> <div class="flex items-center">`);
                if ((store_get($$store_subs ??= {}, "$settings", settings)?.pinnedModels ?? []).includes(model?.id)) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Hide from Sidebar"))}`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Keep in Sidebar"))}`);
                }
                $$renderer5.push(`<!--]--></div></button> <button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                Link($$renderer5, {});
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy Link"))}</div></button> `);
                if (model?.is_active ?? true) {
                  $$renderer5.push("<!--[0-->");
                  $$renderer5.push(`<button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                  DocumentDuplicate($$renderer5, {});
                  $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Clone"))}</div></button>`);
                } else {
                  $$renderer5.push("<!--[-1-->");
                }
                $$renderer5.push(`<!--]--> <button class="select-none flex w-full gap-2 items-center h-[1.6875rem] px-2 text-[13px] font-normal cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40 rounded-xl">`);
                Download$1($$renderer5, {});
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</div></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          }
        }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      user: user2,
      model,
      exportHandler,
      hideHandler,
      privacyHandler,
      isDefaultSelected,
      isDefaultPinned,
      defaultSelectedHandler,
      defaultPinnedHandler,
      pinModelHandler,
      copyLinkHandler,
      cloneHandler,
      onClose
    });
  });
}
function Eye($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))} aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function DocumentArrowUp($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function AdminViewSelector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let value = fallback($$props["value"], "");
    let placeholder = fallback($$props["placeholder"], () => store_get($$store_subs ??= {}, "$i18n", i18n).t("Select view"), true);
    let align = fallback($$props["align"], "start");
    let onChange = fallback($$props["onChange"], () => {
    });
    const items = [
      {
        value: "",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("All")
      },
      {
        value: "enabled",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled")
      },
      {
        value: "disabled",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled")
      },
      {
        value: "visible",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Visible")
      },
      {
        value: "hidden",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Hidden")
      },
      {
        value: "public",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Public")
      },
      {
        value: "private",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Private")
      },
      {
        value: "selected",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Selected")
      },
      {
        value: "pinned",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Pinned")
      }
    ];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Select($$renderer3, {
        items,
        placeholder,
        align,
        triggerClass: "relative h-8 w-full flex items-center gap-0.5 px-1.5 py-1.5 bg-transparent rounded-xl text-[13px] font-normal text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100",
        labelClass: "inline-flex h-input w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden",
        onChange: () => onChange(value),
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        $$slots: {
          trigger: ($$renderer4, { selectedLabel }) => {
            {
              $$renderer4.push(`<span class="inline-flex h-input w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden">${escape_html(selectedLabel)}</span> `);
              ChevronDown$1($$renderer4, { className: "size-3.5", strokeWidth: "2.5" });
              $$renderer4.push(`<!---->`);
            }
          },
          item: ($$renderer4, { item, selected }) => {
            {
              $$renderer4.push(`${escape_html(item.label)} <div${attr_class(`ml-auto ${selected ? "" : "invisible"}`)}>`);
              Check($$renderer4, {});
              $$renderer4.push(`<!----></div>`);
            }
          }
        }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { value, placeholder, align, onChange });
  });
}
function Models($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let tabState = fallback($$props["tabState"], null);
    let modelsImportInProgress = false;
    let models$1 = null;
    let modelsConfig = null;
    let modelOrderList = [];
    let defaultModelIds = [];
    let defaultPinnedModelIds = [];
    let defaultModelIdSet = /* @__PURE__ */ new Set();
    let defaultPinnedModelIdSet = /* @__PURE__ */ new Set();
    let workspaceModels = [];
    let baseModels = [];
    let filteredModels = [];
    let selectedModelId = null;
    let showManageModal = false;
    let showResetModal = false;
    let savingModelOrder = false;
    let savingModelsSettings = false;
    let modelOrderDirty = false;
    let modelDefaultsDirty = false;
    let viewOption = "";
    let tags2 = [];
    let selectedTag = "";
    const isPublicModel = (model) => {
      return (model?.access_grants ?? []).some((g) => g.principal_type === "user" && g.principal_id === "*" && g.permission === "read");
    };
    const isSharedModel = (model) => (model?.access_grants ?? []).length > 0 && !isPublicModel(model);
    const modelAccessLabel = (model) => {
      if (isPublicModel(model)) {
        return store_get($$store_subs ??= {}, "$i18n", i18n).t("Public");
      }
      if (isSharedModel(model)) {
        return store_get($$store_subs ??= {}, "$i18n", i18n).t("Shared");
      }
      return store_get($$store_subs ??= {}, "$i18n", i18n).t("Private");
    };
    const modelAccessClass = (model) => {
      if (isPublicModel(model)) {
        return "text-[#4f7a5a] dark:text-[#8db395]";
      }
      if (isSharedModel(model)) {
        return "text-[#4f6f93] dark:text-[#8ba6c6]";
      }
      return "text-gray-500 dark:text-gray-400";
    };
    let searchValue = "";
    let canReorderModels = false;
    const init = async () => {
      models$1 = null;
      modelsConfig = await getModelsConfig(localStorage.token);
      modelOrderList = modelsConfig?.MODEL_ORDER_LIST ?? [];
      defaultModelIds = (modelsConfig?.DEFAULT_MODELS ?? "").split(",").filter((id) => id);
      defaultPinnedModelIds = (modelsConfig?.DEFAULT_PINNED_MODELS ?? "").split(",").filter((id) => id);
      tags2 = await getBaseModelTags(localStorage.token);
      if (selectedTag && !tags2.includes(selectedTag)) {
        selectedTag = "";
      }
      workspaceModels = await getBaseModels(localStorage.token, selectedTag);
      baseModels = await getModels(localStorage.token, null, true);
      const workspaceModelIds = new Set(workspaceModels.map((wm) => wm.id));
      models$1 = baseModels.filter((m) => !selectedTag || workspaceModelIds.has(m.id)).map((m) => {
        const workspaceModel = workspaceModels.find((wm) => wm.id === m.id);
        if (workspaceModel) {
          return { ...m, ...workspaceModel };
        } else {
          return { ...m, id: m.id, name: m.name, is_active: true };
        }
      });
      modelOrderList = [
        ...modelOrderList.filter((id) => models$1.some((model) => model.id === id)),
        ...models$1.map((model) => model.id).filter((id) => !modelOrderList.includes(id)).sort((a, b) => a.localeCompare(b))
      ];
      modelOrderDirty = false;
      models.set(await getModels(localStorage.token, store_get($$store_subs ??= {}, "$config", config)?.features?.enable_direct_connections && (store_get($$store_subs ??= {}, "$settings", settings)?.directConnections ?? null)));
    };
    const saveModelDefaults = async (nextDefaultModelIds, nextDefaultPinnedModelIds, successMessage) => {
      const previousDefaultModelIds = defaultModelIds;
      const previousDefaultPinnedModelIds = defaultPinnedModelIds;
      defaultModelIds = nextDefaultModelIds;
      defaultPinnedModelIds = nextDefaultPinnedModelIds;
      const res = await setModelsConfig(localStorage.token, {
        DEFAULT_MODELS: nextDefaultModelIds.join(","),
        DEFAULT_PINNED_MODELS: nextDefaultPinnedModelIds.join(","),
        MODEL_ORDER_LIST: modelsConfig?.MODEL_ORDER_LIST ?? [],
        DEFAULT_MODEL_METADATA: modelsConfig?.DEFAULT_MODEL_METADATA ?? null,
        DEFAULT_MODEL_PARAMS: modelsConfig?.DEFAULT_MODEL_PARAMS ?? null
      }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        modelsConfig = res;
        toast.success(successMessage);
      } else {
        defaultModelIds = previousDefaultModelIds;
        defaultPinnedModelIds = previousDefaultPinnedModelIds;
      }
    };
    const toggleDefaultModelHandler = async (model) => {
      const isSelected = defaultModelIdSet.has(model.id);
      const nextDefaultModelIds = isSelected ? defaultModelIds.filter((id) => id !== model.id) : [.../* @__PURE__ */ new Set([...defaultModelIds, model.id])];
      await saveModelDefaults(nextDefaultModelIds, defaultPinnedModelIds, isSelected ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Model removed from selected models") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Model added to selected models"));
    };
    const toggleDefaultPinnedModelHandler = async (model) => {
      const isPinned = defaultPinnedModelIdSet.has(model.id);
      const nextDefaultPinnedModelIds = isPinned ? defaultPinnedModelIds.filter((id) => id !== model.id) : [.../* @__PURE__ */ new Set([...defaultPinnedModelIds, model.id])];
      await saveModelDefaults(defaultModelIds, nextDefaultPinnedModelIds, isPinned ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Model removed from pinned models") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Model added to pinned models"));
    };
    const upsertModelHandler = async (model, overrides = {}, showToast = true) => {
      model = { ...model, base_model_id: null, ...overrides };
      if (workspaceModels.find((m) => m.id === model.id)) {
        const res = await updateModelById(localStorage.token, model.id, model).catch((error) => {
          return null;
        });
        if (res && showToast) {
          toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Model updated successfully"));
        }
      } else {
        const res = await createNewModel(localStorage.token, {
          meta: {},
          id: model.id,
          name: model.name,
          base_model_id: null,
          params: {},
          access_grants: [],
          ...model
        }).catch((error) => {
          return null;
        });
        if (res && showToast) {
          toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Model updated successfully"));
          await init();
        }
      }
    };
    const hideModelHandler = async (model) => {
      const updatedModel = {
        ...model,
        meta: { ...model.meta, hidden: !(model?.meta?.hidden ?? false) }
      };
      await upsertModelHandler(updatedModel, { meta: updatedModel.meta }, false);
      models$1 = models$1.map((model2) => model2.id === updatedModel.id ? updatedModel : model2);
      models.set(await getModels(localStorage.token, store_get($$store_subs ??= {}, "$config", config)?.features?.enable_direct_connections && (store_get($$store_subs ??= {}, "$settings", settings)?.directConnections ?? null)));
      toast.success(updatedModel.meta.hidden ? store_get($$store_subs ??= {}, "$i18n", i18n).t(`Model {{name}} is now hidden`, { name: updatedModel.id }) : store_get($$store_subs ??= {}, "$i18n", i18n).t(`Model {{name}} is now visible`, { name: updatedModel.id }));
    };
    const toggleModelPrivacyHandler = async (model) => {
      const nextAccessGrants = isPublicModel(model) ? [] : [
        ...model?.access_grants ?? [],
        {
          principal_type: "user",
          principal_id: "*",
          permission: "read"
        }
      ];
      const res = await updateModelAccessGrants(localStorage.token, model.id, model.name, nextAccessGrants).catch(() => null);
      if (res) {
        models$1 = models$1.map((m) => m.id === model.id ? { ...m, access_grants: res.access_grants ?? nextAccessGrants } : m);
        models.set(await getModels(localStorage.token, store_get($$store_subs ??= {}, "$config", config)?.features?.enable_direct_connections && (store_get($$store_subs ??= {}, "$settings", settings)?.directConnections ?? null)));
        toast.success(isPublicModel({ access_grants: nextAccessGrants }) ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Model is now public") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Model is now private"));
      }
    };
    const copyLinkHandler = async (model) => {
      const baseUrl = window.location.origin;
      const res = await copyToClipboard(`${baseUrl}/?model=${encodeURIComponent(model.id)}`);
      if (res) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copied link to clipboard"));
      } else {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to copy link"));
      }
    };
    const getFullModel = async (model) => workspaceModels.some((workspaceModel) => workspaceModel.id === model.id) ? await getModelById(localStorage.token, model.id).catch(() => null) ?? model : model;
    const cloneHandler = async (model) => {
      model = await getFullModel(model);
      sessionStorage.model = JSON.stringify({
        ...model,
        base_model_id: model.id,
        id: `${model.id}-clone`,
        name: `${model.name} (Clone)`
      });
      showSettings.set(false);
      await goto();
    };
    const exportModelHandler = async (model) => {
      model = await getFullModel(model);
      let blob = new Blob([JSON.stringify([model])], { type: "application/json" });
      saveAs(blob, `${model.id}-${Date.now()}.json`);
    };
    const pinModelHandler = async (modelId) => {
      let pinnedModels = store_get($$store_subs ??= {}, "$settings", settings)?.pinnedModels ?? [];
      if (pinnedModels.includes(modelId)) {
        pinnedModels = pinnedModels.filter((id) => id !== modelId);
      } else {
        pinnedModels = [.../* @__PURE__ */ new Set([...pinnedModels, modelId])];
      }
      settings.set({
        ...store_get($$store_subs ??= {}, "$settings", settings),
        pinnedModels
      });
      await updateUserSettings(localStorage.token, { ui: store_get($$store_subs ??= {}, "$settings", settings) });
    };
    onDestroy(() => {
    });
    if (typeof tabState?.id === "string" && tabState.id) {
      selectedModelId = tabState.id;
      tabState = null;
    }
    defaultModelIdSet = new Set(defaultModelIds);
    defaultPinnedModelIdSet = new Set(defaultPinnedModelIds);
    if (models$1) {
      const modelOrder = new Map(modelOrderList.map((id, idx) => [id, idx]));
      filteredModels = models$1.filter((m) => searchValue === "").filter((m) => {
        if (viewOption === "enabled") return m?.is_active ?? true;
        if (viewOption === "disabled") return !(m?.is_active ?? true);
        if (viewOption === "visible") return !(m?.meta?.hidden ?? false);
        if (viewOption === "hidden") return m?.meta?.hidden === true;
        if (viewOption === "public") return isPublicModel(m);
        if (viewOption === "private") return !isPublicModel(m);
        if (viewOption === "selected") return defaultModelIdSet.has(m.id);
        if (viewOption === "pinned") return defaultPinnedModelIdSet.has(m.id);
        return true;
      }).sort((a, b) => {
        const orderA = modelOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER;
        const orderB = modelOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER;
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        return (a?.name ?? a?.id ?? "").localeCompare(b?.name ?? b?.id ?? "");
      });
    }
    canReorderModels = viewOption === "" && selectedTag === "";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset All Models"),
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("This will delete all models including custom models and cannot be undone."),
        onConfirm: async () => {
          const res = await deleteAllModels(localStorage.token);
          if (res) {
            toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("All models deleted successfully"));
            await init();
          }
        },
        get show() {
          return showResetModal;
        },
        set show($$value) {
          showResetModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ManageModelsModal($$renderer3, {
        get show() {
          return showManageModal;
        },
        set show($$value) {
          showManageModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (models$1 !== null) {
        $$renderer3.push("<!--[0-->");
        if (selectedModelId === null) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex h-full min-h-0 flex-col text-sm"><div class="mb-2 flex items-center justify-between"><h2 class="text-sm font-medium text-gray-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Models"))} <span class="ml-2 font-normal text-gray-500 dark:text-gray-500">${escape_html(filteredModels.length)}</span></h2></div> `);
          if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<input id="models-import-input" type="file" accept=".json" hidden=""/>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> <div class="flex min-h-0 flex-1 flex-col space-y-1">`);
          ModelDefaultsPanel($$renderer3, {
            initHandler: init,
            get dirty() {
              return modelDefaultsDirty;
            },
            set dirty($$value) {
              modelDefaultsDirty = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="flex h-8 shrink-0 items-center w-full gap-2"><div class="flex min-w-0 flex-1 items-center"><div class="self-center ml-1 mr-3">`);
          Search$1($$renderer3, { className: "size-3.5" });
          $$renderer3.push(`<!----></div> <input data-settings-search="" class="w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"${attr("value", searchValue)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search Models"))}/> `);
          {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex max-w-[60%] shrink-0 items-center gap-1 overflow-x-auto scrollbar-none"><div class="flex w-fit gap-0.5 text-center text-sm rounded-full bg-transparent whitespace-nowrap">`);
          AdminViewSelector($$renderer3, {
            align: "end",
            get value() {
              return viewOption;
            },
            set value($$value) {
              viewOption = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if ((tags2 ?? []).length > 0) {
            $$renderer3.push("<!--[0-->");
            TagSelector($$renderer3, {
              align: "end",
              items: tags2.map((tag) => {
                return { value: tag, label: tag };
              }),
              onChange: async () => {
                await init();
              },
              get value() {
                return selectedTag;
              },
              set value($$value) {
                selectedTag = $$value;
                $$settled = false;
              }
            });
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div> `);
          Dropdown($$renderer3, {
            align: "end",
            children: ($$renderer4) => {
              Tooltip($$renderer4, {
                content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Actions"),
                children: ($$renderer5) => {
                  $$renderer5.push(`<button class="flex h-8 items-center gap-1.5 rounded-xl bg-transparent px-1.5 text-[13px] font-normal text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100" type="button"><span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Actions"))}</span> `);
                  ChevronDown$1($$renderer5, { className: "size-3", strokeWidth: "2.5" });
                  $$renderer5.push(`<!----></button>`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: {
              default: true,
              content: ($$renderer4) => {
                $$renderer4.push(`<div slot="content">`);
                DropdownMenu($$renderer4, {
                  className: "w-[170px] shadow-sm",
                  children: ($$renderer5) => {
                    if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin") {
                      $$renderer5.push("<!--[0-->");
                      $$renderer5.push(`<button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] disabled:pointer-events-none disabled:opacity-40 hover:text-gray-900 dark:hover:text-gray-100" type="button"${attr("disabled", modelsImportInProgress, true)}>`);
                      DocumentArrowUp($$renderer5, { className: "size-3.5" });
                      $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Import"))}</div></button> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                      Download$1($$renderer5, { className: "size-3.5" });
                      $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</div></button>`);
                    } else {
                      $$renderer5.push("<!--[-1-->");
                    }
                    $$renderer5.push(`<!--]--> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                    Wrench($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Manage"))}</div></button> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                    GarbageBin($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset"))}</div></button> <hr class="mx-1 my-0.5 border-gray-100 dark:border-gray-800"/> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                    CheckCircle($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enable All"))}</div></button> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                    Minus($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Disable All"))}</div></button> <hr class="mx-1 my-0.5 border-gray-100 dark:border-gray-800"/> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                    Eye($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show All"))}</div></button> <button class="flex h-[1.6875rem] w-full cursor-pointer select-none items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:text-gray-900 dark:hover:text-gray-100" type="button">`);
                    EyeSlash($$renderer5, { className: "size-3.5" });
                    $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Hide All"))}</div></button>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div>`);
              }
            }
          });
          $$renderer3.push(`<!----></div></div> <div${attr_class(`my-0.5 min-h-0 flex-1 space-y-px ${filteredModels.length > 0 ? "overflow-y-auto scrollbar-hover pr-1.5" : "overflow-hidden"}`)} id="model-list">`);
          if (filteredModels.length > 0) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<!--[-->`);
            const each_array = ensure_array_like(filteredModels);
            for (let modelIdx = 0, $$length = each_array.length; modelIdx < $$length; modelIdx++) {
              let model = each_array[modelIdx];
              $$renderer3.push(`<div${attr_class(`flex cursor-pointer transition w-full px-2 py-1 rounded-xl hover:bg-gray-50/70 dark:hover:bg-gray-850/50 ${model?.meta?.hidden ? "opacity-50 dark:opacity-50" : ""}`)}${attr("id", `model-item-${stringify(model.id)}`)}><div class="self-center pr-1 -ml-1 text-gray-400 dark:text-gray-600">`);
              Tooltip($$renderer3, {
                content: canReorderModels ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Drag to reorder") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Clear filters to reorder"),
                children: ($$renderer4) => {
                  EllipsisVertical($$renderer4, {
                    className: `size-4 ${canReorderModels ? "cursor-move model-item-handle" : "opacity-40"}`
                  });
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></div> <button class="flex group/item gap-2.5 w-full min-w-0 flex-1 text-left cursor-pointer" type="button"><div class="self-center"><div class="flex bg-white rounded-xl"><div${attr_class(`${model?.is_active ?? true ? "" : "opacity-50 dark:opacity-50"} bg-transparent rounded-xl`)}><img${attr("src", `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${model.id}&lang=${store_get($$store_subs ??= {}, "$i18n", i18n).language}`)} alt="modelfile profile" class="rounded-xl size-7 object-cover" loading="lazy" decoding="async"/></div></div></div> <div${attr_class(`flex min-w-0 flex-1 pr-1 self-center ${model?.is_active ?? true ? "" : "text-gray-500"}`)}>`);
              Tooltip($$renderer3, {
                content: marked.parse(!!model?.meta?.description ? model?.meta?.description : model?.ollama?.digest ? `${model?.ollama?.digest} **(${model?.ollama?.modified_at})**` : model.id),
                className: "min-w-0 flex-1",
                placement: "top-start",
                children: ($$renderer4) => {
                  $$renderer4.push(`<div class="flex min-w-0 items-center gap-1.5 text-[13px] font-normal leading-4"><span class="min-w-0 truncate">${escape_html(model.name)}</span> <span${attr_class(`shrink-0 text-[11px] font-normal leading-4 ${stringify(modelAccessClass(model))}`)}>${escape_html(modelAccessLabel(model))}</span> `);
                  if (defaultModelIdSet.has(model.id)) {
                    $$renderer4.push("<!--[0-->");
                    $$renderer4.push(`<span class="shrink-0 text-[11px] font-normal leading-4 text-gray-500 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Selected"))}</span>`);
                  } else {
                    $$renderer4.push("<!--[-1-->");
                  }
                  $$renderer4.push(`<!--]--> `);
                  if (defaultPinnedModelIdSet.has(model.id)) {
                    $$renderer4.push("<!--[0-->");
                    $$renderer4.push(`<span class="shrink-0 text-[11px] font-normal leading-4 text-gray-500 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Pinned"))}</span>`);
                  } else {
                    $$renderer4.push("<!--[-1-->");
                  }
                  $$renderer4.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></div></button> <div class="flex shrink-0 flex-row gap-0.5 items-center self-center">`);
              {
                $$renderer3.push("<!--[-1-->");
              }
              $$renderer3.push(`<!--]--> <button class="hidden sm:flex self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit"))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg></button> `);
              ModelMenu($$renderer3, {
                user: store_get($$store_subs ??= {}, "$user", user),
                model,
                exportHandler: () => {
                  exportModelHandler(model);
                },
                hideHandler: () => {
                  hideModelHandler(model);
                },
                privacyHandler: () => {
                  toggleModelPrivacyHandler(model);
                },
                isDefaultSelected: defaultModelIdSet.has(model.id),
                isDefaultPinned: defaultPinnedModelIdSet.has(model.id),
                defaultSelectedHandler: () => {
                  toggleDefaultModelHandler(model);
                },
                defaultPinnedHandler: () => {
                  toggleDefaultPinnedModelHandler(model);
                },
                pinModelHandler: () => {
                  pinModelHandler(model.id);
                },
                copyLinkHandler: () => {
                  copyLinkHandler(model);
                },
                cloneHandler: () => {
                  cloneHandler(model);
                },
                onClose: () => {
                },
                children: ($$renderer4) => {
                  $$renderer4.push(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button">`);
                  EllipsisHorizontal($$renderer4, { className: "size-3.5" });
                  $$renderer4.push(`<!----></button>`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----> <div class="ml-1">`);
              Tooltip($$renderer3, {
                content: model?.is_active ?? true ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
                children: ($$renderer4) => {
                  Switch_1($$renderer4, {
                    get state() {
                      return model.is_active;
                    },
                    set state($$value) {
                      model.is_active = $$value;
                      $$settled = false;
                    }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></div></div></div>`);
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<div class="flex h-full w-full items-center justify-center py-10"><div class="max-w-md text-center"><div class="mb-2 text-xl">😕</div> <div class="mb-1 text-sm text-gray-700 dark:text-gray-300">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No models found"))}</div> <div class="text-gray-500 text-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Try adjusting your search or filter to find what you are looking for."))}</div></div></div>`);
          }
          $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="flex items-center gap-2 px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full disabled:cursor-not-allowed disabled:opacity-40" type="button"${attr("disabled", !modelOrderDirty && !modelDefaultsDirty || savingModelOrder || savingModelsSettings, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
          {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></button></div></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          ModelEditor($$renderer3, {
            edit: true,
            model: models$1.find((m) => m.id === selectedModelId),
            preset: false,
            onSubmit: async (model) => {
              /* @__PURE__ */ console.log(model);
              await upsertModelHandler(model);
              selectedModelId = null;
              await init();
            },
            onBack: async () => {
              selectedModelId = null;
              await init();
            }
          });
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="h-full w-full flex justify-center items-center">`);
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
    bind_props($$props, { tabState });
  });
}
function Subagents($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Sub-agents"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex justify-center py-8">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></form>`);
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
function ArenaModelModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let edit = fallback($$props["edit"], false);
    let model = fallback($$props["model"], null);
    let name = "";
    let id = "";
    const generateId = () => {
      if (!edit) {
        id = name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
      }
    };
    let profileImageUrl = `${WEBUI_BASE_URL}/favicon.png`;
    let description = "";
    let selectedModelId = "";
    let modelIds = [];
    let filterMode = "include";
    let accessGrants = [];
    let loading = false;
    let showDeleteConfirmDialog = false;
    const initModel = () => {
      if (model) {
        name = model.name;
        id = model.id;
        profileImageUrl = model.meta.profile_image_url;
        description = model.meta.description;
        modelIds = model.meta.model_ids || [];
        filterMode = model.meta?.filter_mode ?? "include";
        accessGrants = model.meta.access_grants ?? [];
      }
    };
    if (name) {
      generateId();
    }
    if (show) {
      initModel();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Modal($$renderer3, {
        size: "sm",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center font-primary">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Arena Model"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Arena Model"))}`);
          }
          $$renderer4.push(`<!--]--></div> <button class="self-center">`);
          XMark$1($$renderer4, { className: "size-5" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex justify-center pb-3"><input type="file" hidden="" accept="image/*"/> <button class="relative rounded-full w-fit h-fit shrink-0" type="button"><img${attr("src", profileImageUrl)} class="size-16 rounded-full object-cover shrink-0"${attr("alt", store_get($$store_subs ??= {}, "$i18n", i18n).t("Profile"))}/> <div class="absolute flex justify-center rounded-full bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"><div class="my-auto text-white">`);
          PencilSolid($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></div></div></button></div> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Model Name"))} autocomplete="off" required=""/></div></div> <div class="flex flex-col w-full"><div class="mb-0.5 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("ID"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${attr("value", id)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Model ID"))} autocomplete="off" required=""${attr("disabled", edit, true)}/></div></div></div> <div class="flex flex-col w-full mt-2"><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Description"))}</div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${attr("value", description)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter description"))} autocomplete="off"/></div></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"/> <div class="my-2">`);
          AccessControl($$renderer4, {
            get accessGrants() {
              return accessGrants;
            },
            set accessGrants($$value) {
              accessGrants = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"/> <div class="flex flex-col w-full"><div class="mb-1 flex justify-between"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Models"))}</div> <div><button class="text-xs text-gray-500" type="button">`);
          if (filterMode === "include") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Include"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Exclude"))}`);
          }
          $$renderer4.push(`<!--]--></button></div></div> `);
          if (modelIds.length > 0) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex flex-col"><!--[-->`);
            const each_array = ensure_array_like(modelIds);
            for (let modelIdx = 0, $$length = each_array.length; modelIdx < $$length; modelIdx++) {
              let modelId = each_array[modelIdx];
              $$renderer4.push(`<div class="flex gap-2 w-full justify-between items-center"><div class="text-sm flex-1 py-1 rounded-lg">${escape_html(store_get($$store_subs ??= {}, "$models", models).find((model2) => model2.id === modelId)?.name)}</div> <div class="shrink-0"><button type="button">`);
              Minus($$renderer4, { strokeWidth: "2", className: "size-3.5" });
              $$renderer4.push(`<!----></button></div></div>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="text-gray-500 text-xs text-center py-2">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Leave empty to include all models or select specific models"))}</div>`);
          }
          $$renderer4.push(`<!--]--></div> <hr class="border-gray-100 dark:border-gray-700/10 my-2.5 w-full"/> <div class="flex items-center">`);
          $$renderer4.select(
            {
              class: `w-full py-1 text-sm rounded-lg bg-transparent ${"text-gray-500"} placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden`,
              value: selectedModelId
            },
            ($$renderer5) => {
              $$renderer5.option({ value: "" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a model"))}`);
              });
              $$renderer5.push(`<!--[-->`);
              const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$models", models).filter((m) => m?.owned_by !== "arena"));
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let model2 = each_array_1[$$index_1];
                $$renderer5.option({ value: model2.id, class: "bg-gray-50 dark:bg-gray-700" }, ($$renderer6) => {
                  $$renderer6.push(`${escape_html(model2.name)}`);
                });
              }
              $$renderer5.push(`<!--]-->`);
            }
          );
          $$renderer4.push(` <div><button type="button">`);
          Plus($$renderer4, { className: "size-3.5", strokeWidth: "2" });
          $$renderer4.push(`<!----></button></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-950 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <button${attr_class(`px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, edit, model });
  });
}
function Evaluations($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let showAddModel = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ArenaModelModal($$renderer3, {
        get show() {
          return showAddModel;
        },
        set show($$value) {
          showAddModel = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Evaluations"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex h-full justify-center"><div class="my-auto">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
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
function Analytics($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ExternalKnowledge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let testing = false;
    let showSourceModal = false;
    let connections = [];
    let items = [];
    let accessGrants = [];
    let sourceForm = {
      name: "",
      description: "",
      provider: "qdrant",
      endpoint: "",
      apiKey: "",
      timeout: 30,
      dbName: "",
      sourceName: "",
      contentField: "payload.text",
      vectorField: "",
      metadataField: "payload.metadata",
      documentIdField: "id",
      tableName: "document_chunk",
      collectionField: "collection_name",
      testQuery: ""
    };
    const endpointPlaceholder = () => {
      if (sourceForm.provider === "pgvector") {
        return "postgresql://user:password@host:5432/db";
      }
      if (sourceForm.provider === "milvus") {
        return "http://milvus.example.com:19530";
      }
      return "https://qdrant.example.com";
    };
    const connectionForItem = (item) => connections.find((connection) => connection.id === item?.meta?.external?.connection_id);
    const testFormIsValid = () => !!sourceForm.endpoint.trim() && !!sourceForm.sourceName.trim() && !!sourceForm.contentField.trim() && (sourceForm.provider === "qdrant" || !!sourceForm.vectorField.trim()) && (sourceForm.provider !== "pgvector" || !!sourceForm.tableName.trim() && !!sourceForm.collectionField.trim()) && !!sourceForm.testQuery.trim();
    const sourceFormIsValid = () => !!sourceForm.name.trim() && testFormIsValid();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "sm",
        className: "bg-white dark:bg-gray-900 rounded-4xl",
        get show() {
          return showSourceModal;
        },
        set show($$value) {
          showSourceModal = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 pb-1"><h1 class="text-sm font-medium self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Knowledge Connection"))}</h1> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))} type="button">`);
          XMark$1($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex gap-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-name">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-name" class="w-full flex-1 text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Research Knowledge"))} required=""/></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-provider">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Provider"))}</label></div> <div class="flex flex-1 items-center">`);
          SettingsSelect($$renderer4, {
            id: "external-source-provider",
            className: "w-full",
            selectClassName: "text-sm",
            get value() {
              return sourceForm.provider;
            },
            set value($$value) {
              sourceForm.provider = $$value;
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.option({ value: "qdrant" }, ($$renderer6) => {
                $$renderer6.push(`Qdrant`);
              });
              $$renderer5.push(` `);
              $$renderer5.option({ value: "milvus" }, ($$renderer6) => {
                $$renderer6.push(`Milvus`);
              });
              $$renderer5.push(` `);
              $$renderer5.option({ value: "pgvector" }, ($$renderer6) => {
                $$renderer6.push(`pgvector`);
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div></div></div> <div class="flex flex-col w-full mt-2"><label class="text-xs text-gray-500 mb-0.5" for="external-source-description">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Description"))}</label> <textarea id="external-source-description" class="w-full text-sm bg-transparent outline-hidden resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700" rows="2">`);
          const $$body = escape_html(sourceForm.description);
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
          $$renderer4.push(`</textarea></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-endpoint">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Endpoint"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-endpoint" class="w-full flex-1 text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.endpoint)}${attr("placeholder", endpointPlaceholder())} required=""/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-timeout">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Timeout"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-timeout" class="w-full text-sm bg-transparent outline-hidden" type="number"${attr("value", sourceForm.timeout)}/></div></div> `);
          if (sourceForm.provider !== "pgvector") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-api-key">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key / Token"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-api-key" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700" type="password"${attr("value", sourceForm.apiKey)} autocomplete="off"/></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> `);
          if (sourceForm.provider === "milvus") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-db-name">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Database"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-db-name" class="w-full text-sm bg-transparent outline-hidden"${attr("value", sourceForm.dbName)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}/></div></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <hr class="border-gray-100/50 dark:border-gray-700/10 my-2.5 w-full"/> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-collection">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Collection"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-collection" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.sourceName)} placeholder="research-docs" required=""/></div></div></div> `);
          if (sourceForm.provider === "pgvector") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-table">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Table"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-table" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.tableName)} placeholder="document_chunk" required=""/></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-collection-field">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Collection Field"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-collection-field" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.collectionField)} placeholder="collection_name" required=""/></div></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-content-field">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Content Field"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-content-field" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.contentField)}${attr("placeholder", sourceForm.provider === "pgvector" ? "text" : "payload.text")} required=""/></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-vector-field">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Vector Field"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-vector-field" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.vectorField)}${attr("placeholder", sourceForm.provider === "qdrant" ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Default") : "vector")}${attr("required", sourceForm.provider !== "qdrant", true)}/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-metadata-field">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Metadata Field"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-metadata-field" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.metadataField)}${attr("placeholder", sourceForm.provider === "pgvector" ? "vmetadata" : "payload.metadata")}/></div></div> <div class="flex flex-col flex-1"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-document-id-field">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Document ID Field"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-document-id-field" class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.documentIdField)} placeholder="id"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label class="text-xs text-gray-500" for="external-source-test-query">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Test Query"))}</label></div> <div class="flex flex-1 items-center"><input id="external-source-test-query" class="w-full flex-1 text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("value", sourceForm.testQuery)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Ask a test question"))} required=""/> `);
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"),
            className: "shrink-0 flex items-center mr-1",
            children: ($$renderer5) => {
              $$renderer5.push(`<button class="self-center p-1 bg-transparent hover:bg-gray-50/70 dark:hover:bg-gray-850/50 rounded-lg transition" type="button"${attr("disabled", testing, true)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Verify Connection"))}>`);
              {
                $$renderer5.push("<!--[-1-->");
                $$renderer5.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg>`);
              }
              $$renderer5.push(`<!--]--></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div class="text-xs text-gray-500 mt-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("External vectors must be generated with the same embedding model configured in Open WebUI."))}</div></div></div> <hr class="border-gray-100/50 dark:border-gray-700/10 my-2.5 w-full"/> `);
          AccessControl($$renderer4, {
            accessRoles: ["read"],
            share: true,
            sharePublic: true,
            shareUsers: true,
            get accessGrants() {
              return accessGrants;
            },
            set accessGrants($$value) {
              accessGrants = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> <div class="flex justify-between items-center pt-3 text-sm font-normal"><div></div> <button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" type="submit"${attr("disabled", !sourceFormIsValid() || true, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></div></form></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="flex w-full flex-col justify-between text-xs"><div class="mb-2 flex items-center justify-between"><div class="flex items-center gap-2 leading-none text-gray-600 dark:text-gray-400"><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("External Knowledge Sources"))}</div> <span class="inline-flex items-center text-[0.625rem] font-normal uppercase leading-none text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Experimental"))}</span></div> `);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"),
        children: ($$renderer4) => {
          $$renderer4.push(`<button class="flex size-6 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-black/5 hover:text-gray-900 dark:text-gray-600 dark:hover:bg-white/5 dark:hover:text-white" type="button">`);
          Plus($$renderer4, {});
          $$renderer4.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <div class="flex flex-col gap-1.5"><!--[-->`);
      const each_array = ensure_array_like(items);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        const connection = connectionForItem(item);
        $$renderer3.push(`<div class="flex w-full gap-2 items-center">`);
        Tooltip($$renderer3, {
          className: "w-full relative",
          content: "",
          placement: "top-start",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full"><div${attr_class(`flex-1 relative flex gap-1.5 items-center min-w-0 ${connection?.enabled === false ? "opacity-50" : ""}`)}>`);
            Tooltip($$renderer4, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Knowledge"),
              children: ($$renderer5) => {
                DatabaseSettings($$renderer5, { className: "size-4", strokeWidth: "1.5" });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="outline-hidden w-full bg-transparent text-xs min-w-0 line-clamp-1"><span>${escape_html(item.name)}</span>   <span class="text-gray-500">${escape_html(item?.meta?.external?.provider ?? connection?.provider)}
									${escape_html(item?.meta?.external?.source?.name ? `· ${item.meta.external.source.name}` : "")}</span></div></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <div class="flex gap-1 items-center">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Configure"),
          children: ($$renderer4) => {
            $$renderer4.push(`<button class="self-center p-1 bg-transparent hover:bg-gray-50/70 dark:hover:bg-gray-850/50 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed" type="button"${attr("disabled", !connection, true)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Configure"))}>`);
            Cog6($$renderer4, {});
            $$renderer4.push(`<!----></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Tooltip($$renderer3, {
          content: connection?.enabled !== false ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
          children: ($$renderer4) => {
            Switch_1($$renderer4, { state: connection?.enabled !== false });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> `);
      if (items.length === 0) {
        $$renderer3.push("<!--[1-->");
        $$renderer3.push(`<div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No external knowledge sources configured."))}</div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (items.length === 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Test must pass before a source is created."))}</div>`);
      } else {
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
function Integrations($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveSettings = $$props["saveSettings"];
    let servers = null;
    let showConnectionModal = false;
    let terminalConnections = [];
    let showAddTerminalModal = false;
    let editTerminalIdx = null;
    const addConnectionHandler = async (server) => {
      servers = [...servers ?? [], server];
      await updateHandler();
    };
    const updateHandler = async () => {
      const res = await setToolServerConnections(localStorage.token, { TOOL_SERVER_CONNECTIONS: servers }).catch((err) => {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to save connections"));
        return null;
      });
      if (res) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connections saved successfully"));
      }
    };
    const saveTerminalServers = async () => {
      const res = await setTerminalServerConnections(localStorage.token, { TERMINAL_SERVER_CONNECTIONS: terminalConnections }).catch((err) => {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to save terminal servers"));
        return null;
      });
      if (res) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Terminal servers saved"));
        const existingDirectTerminals = (store_get($$store_subs ??= {}, "$terminalServers", terminalServers) ?? []).filter((t) => !t.id);
        const systemTerminals = await getTerminalServers(localStorage.token);
        const systemEntries = systemTerminals.map((t) => ({
          id: t.id,
          url: `${WEBUI_API_BASE_URL}/terminals/${t.id}`,
          name: t.name,
          key: localStorage.token
        }));
        terminalServers.set([...existingDirectTerminals, ...systemEntries]);
      }
    };
    const addTerminalConnection = (server) => {
      terminalConnections = [
        ...terminalConnections,
        { ...server, id: server.id ?? crypto.randomUUID() }
      ];
      saveTerminalServers();
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      AddToolServerModal($$renderer3, {
        onSubmit: addConnectionHandler,
        get show() {
          return showConnectionModal;
        },
        set show($$value) {
          showConnectionModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      AddTerminalServerModal($$renderer3, {
        edit: editTerminalIdx !== null,
        connection: null,
        onSubmit: (c) => {
          {
            addTerminalConnection(c);
          }
        },
        onDelete: () => {
        },
        get show() {
          return showAddTerminalModal;
        },
        set show($$value) {
          showAddTerminalModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Integrations"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      if (servers !== null) {
        $$renderer3.push("<!--[0-->");
        AdminSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Tools"),
          first: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div><div class="mb-2 flex items-center justify-between"><div class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("External Tool Servers"))}</div> `);
            Tooltip($$renderer4, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n).t(`Add Connection`),
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="flex size-6 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-black/5 hover:text-gray-900 dark:text-gray-600 dark:hover:bg-white/5 dark:hover:text-white" type="button">`);
                Plus($$renderer5, {});
                $$renderer5.push(`<!----></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="flex flex-col gap-1"><!--[-->`);
            const each_array = ensure_array_like(servers ?? []);
            for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
              let server = each_array[idx];
              Connection$1($$renderer4, {
                onSubmit: () => {
                  updateHandler();
                },
                onDelete: () => {
                  servers = (servers ?? []).filter((_, i) => i !== idx);
                  updateHandler();
                },
                get connection() {
                  return server;
                },
                set connection($$value) {
                  server = $$value;
                  $$settled = false;
                }
              });
            }
            $$renderer4.push(`<!--]--></div> `);
            if ((servers ?? []).length === 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No tool server connections configured."))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connect to your own OpenAPI compatible external tool servers."))}</div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        AdminSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Terminal"),
          children: ($$renderer4) => {
            $$renderer4.push(`<div><div class="mb-2 flex items-center justify-between"><div class="text-xs text-gray-600 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Open Terminal"))}</div> `);
            Tooltip($$renderer4, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Connection"),
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="flex size-6 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-black/5 hover:text-gray-900 dark:text-gray-600 dark:hover:bg-white/5 dark:hover:text-white" type="button">`);
                Plus($$renderer5, {});
                $$renderer5.push(`<!----></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="flex flex-col gap-1.5"><!--[-->`);
            const each_array_1 = ensure_array_like(terminalConnections);
            for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
              let connection = each_array_1[idx];
              $$renderer4.push(`<div class="flex w-full gap-2 items-center">`);
              Tooltip($$renderer4, {
                className: "w-full relative",
                content: "",
                placement: "top-start",
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="flex w-full"><div${attr_class(`flex-1 relative flex gap-1.5 items-center ${connection?.enabled === false ? "opacity-50" : ""}`)}>`);
                  Tooltip($$renderer5, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Terminal"),
                    children: ($$renderer6) => {
                      Cloud($$renderer6, { className: "size-4", strokeWidth: "1.5" });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <div class="outline-hidden w-full bg-transparent text-xs text-gray-700 dark:text-gray-300">${escape_html(connection.name || connection.url || store_get($$store_subs ??= {}, "$i18n", i18n).t("New Terminal"))}</div></div></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <div class="flex gap-1 items-center">`);
              Tooltip($$renderer4, {
                content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Configure"),
                children: ($$renderer5) => {
                  $$renderer5.push(`<button class="self-center p-1 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition" type="button">`);
                  Cog6($$renderer5, {});
                  $$renderer5.push(`<!----></button>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Tooltip($$renderer4, {
                content: connection?.enabled !== false ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"),
                children: ($$renderer5) => {
                  Switch_1($$renderer5, { state: connection?.enabled !== false });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div></div>`);
            }
            $$renderer4.push(`<!--]--></div> `);
            if (terminalConnections.length === 0) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No terminal connections configured."))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connect to Open Terminal instances. Admins and users granted access can use file browsing and terminal tools through these servers."))}</div> <a class="mt-0.5 block text-[0.6875rem] text-gray-500 underline hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300" href="https://github.com/open-webui/open-terminal" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Learn more about Open Terminal"))} ↗</a></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        AdminSettingSection($$renderer3, {
          title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Knowledge"),
          children: ($$renderer4) => {
            ExternalKnowledge($$renderer4);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex h-full justify-center"><div class="my-auto">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveSettings });
  });
}
function Documents($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let showResetConfirm = false;
    let showResetUploadDirConfirm = false;
    let showReindexConfirm = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        get show() {
          return showResetUploadDirConfirm;
        },
        set show($$value) {
          showResetUploadDirConfirm = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        get show() {
          return showResetConfirm;
        },
        set show($$value) {
          showResetConfirm = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        get show() {
          return showReindexConfirm;
        },
        set show($$value) {
          showReindexConfirm = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Documents"))}</h2> `);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex items-center justify-center h-full">`);
        Spinner($$renderer3, { className: "size-5" });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></form>`);
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
function WebSearch($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Web Search"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function CodeExecution($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Code Execution"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function Interface($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex h-full w-full items-center justify-center">`);
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
  });
}
function Audio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    let TTS_OPENAI_API_BASE_URL = "";
    let TTS_OPENAI_API_KEY = "";
    let TTS_API_KEY = "";
    let TTS_ENGINE = "";
    let TTS_MODEL = "";
    let TTS_VOICE = "";
    let TTS_OPENAI_PARAMS = "";
    let TTS_SPLIT_ON = TTS_RESPONSE_SPLIT.PUNCTUATION;
    let TTS_AZURE_SPEECH_REGION = "";
    let TTS_AZURE_SPEECH_BASE_URL = "";
    let TTS_AZURE_SPEECH_OUTPUT_FORMAT = "";
    let TTS_MISTRAL_API_KEY = "";
    let TTS_MISTRAL_API_BASE_URL = "";
    let STT_OPENAI_API_BASE_URL = "";
    let STT_OPENAI_API_KEY = "";
    let STT_OPENAI_API_REQUEST_FORMAT = "multipart";
    let STT_ENGINE = "";
    let STT_MODEL = "";
    let STT_SUPPORTED_CONTENT_TYPES = "";
    let STT_WHISPER_MODEL = "";
    let STT_AZURE_API_KEY = "";
    let STT_AZURE_REGION = "";
    let STT_AZURE_LOCALES = "";
    let STT_AZURE_BASE_URL = "";
    let STT_AZURE_MAX_SPEAKERS = "";
    let STT_DEEPGRAM_API_KEY = "";
    let STT_MISTRAL_API_KEY = "";
    let STT_MISTRAL_API_BASE_URL = "";
    let STT_MISTRAL_USE_CHAT_COMPLETIONS = false;
    let STT_WHISPER_MODEL_LOADING = false;
    let voices = [];
    let providerVoices = [];
    let models2 = [];
    const inputClass = "w-full h-7 rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    const textareaClass = "w-full rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 py-1.5 text-xs text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Audio"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      AdminSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech-to-Text"),
        first: true,
        children: ($$renderer4) => {
          AdminSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Speech-to-Text Engine"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the transcription provider used for audio input."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select an engine"),
                get value() {
                  return STT_ENGINE;
                },
                set value($$value) {
                  STT_ENGINE = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.option({ value: "" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Whisper (Local)"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "openai" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OpenAI"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "web" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Web API"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "deepgram" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Deepgram"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "azure" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Azure AI Speech"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "mistral" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("MistralAI"))}`);
                  });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          if (STT_ENGINE !== "web") {
            $$renderer4.push("<!--[0-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Supported MIME Types"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Comma-separated audio or video MIME types accepted for upload."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_SUPPORTED_CONTENT_TYPES)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g., audio/wav,audio/mpeg,video/* (leave blank for defaults)"))}/>`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (STT_ENGINE === "openai") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"))}${attr("value", STT_OPENAI_API_BASE_URL)} required=""/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  get value() {
                    return STT_OPENAI_API_KEY;
                  },
                  set value($$value) {
                    STT_OPENAI_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            AdminSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Request Format"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select how audio is sent to the OpenAI-compatible endpoint."),
              children: ($$renderer5) => {
                SettingsSelect($$renderer5, {
                  get value() {
                    return STT_OPENAI_API_REQUEST_FORMAT;
                  },
                  set value($$value) {
                    STT_OPENAI_API_REQUEST_FORMAT = $$value;
                    $$settled = false;
                  },
                  children: ($$renderer6) => {
                    $$renderer6.option({ value: "multipart" }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Multipart Upload"))}`);
                    });
                    $$renderer6.push(` `);
                    $$renderer6.option({ value: "json" }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("JSON Base64"))}`);
                    });
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("STT Model"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input list="stt-openai-model-list"${attr_class(clsx(inputClass))}${attr("value", STT_MODEL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a model"))}/> <datalist id="stt-openai-model-list">`);
                $$renderer5.option({ value: "whisper-1" }, ($$renderer6) => {
                });
                $$renderer5.push(`</datalist>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          } else if (STT_ENGINE === "deepgram") {
            $$renderer4.push("<!--[1-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  get value() {
                    return STT_DEEPGRAM_API_KEY;
                  },
                  set value($$value) {
                    STT_DEEPGRAM_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("STT Model"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Leave model field empty to use the default model."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_MODEL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a model (optional)"))}/> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600 [&amp;_a]:text-gray-900 [&amp;_a]:hover:underline dark:[&amp;_a]:text-gray-300"><a href="https://developers.deepgram.com/docs/models" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Click here to see available models."))}</a></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          } else if (STT_ENGINE === "azure") {
            $$renderer4.push("<!--[2-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  required: true,
                  get value() {
                    return STT_AZURE_API_KEY;
                  },
                  set value($$value) {
                    STT_AZURE_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Azure Region"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_AZURE_REGION)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g., westus (leave blank for eastus)"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Language Locales"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_AZURE_LOCALES)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g., en-US,ja-JP (leave blank for auto-detect)"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Endpoint URL"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_AZURE_BASE_URL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("(leave blank for to use commercial endpoint)"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Max Speakers"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_AZURE_MAX_SPEAKERS)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g., 3, 4, 5 (leave blank for default)"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else if (STT_ENGINE === "mistral") {
            $$renderer4.push("<!--[3-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"))}${attr("value", STT_MISTRAL_API_BASE_URL)} required=""/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  get value() {
                    return STT_MISTRAL_API_KEY;
                  },
                  set value($$value) {
                    STT_MISTRAL_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("STT Model"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Leave empty to use the default model (voxtral-mini-latest)."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", STT_MODEL)} placeholder="voxtral-mini-latest"/> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600 [&amp;_a]:text-gray-900 [&amp;_a]:hover:underline dark:[&amp;_a]:text-gray-300"><a href="https://docs.mistral.ai/capabilities/audio_transcription" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Learn more about Voxtral transcription."))}</a></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingRow($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Use Chat Completions API"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Use /v1/chat/completions endpoint instead of /v1/audio/transcriptions for potentially better accuracy."),
              children: invalid_default_snippet,
              $$slots: {
                default: ($$renderer5, { labelId }) => {
                  Switch_1($$renderer5, {
                    ariaLabelledbyId: labelId,
                    get state() {
                      return STT_MISTRAL_USE_CHAT_COMPLETIONS;
                    },
                    set state($$value) {
                      STT_MISTRAL_USE_CHAT_COMPLETIONS = $$value;
                      $$settled = false;
                    }
                  });
                }
              }
            });
            $$renderer4.push(`<!---->`);
          } else if (STT_ENGINE === "") {
            $$renderer4.push("<!--[4-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("STT Model"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Open WebUI uses faster-whisper internally."),
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex w-full gap-2"><input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Set whisper model"))}${attr("value", STT_WHISPER_MODEL)}/> <button class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-900 disabled:opacity-50 dark:text-gray-500 dark:hover:bg-white/5 dark:hover:text-white" type="button"${attr("disabled", STT_WHISPER_MODEL_LOADING, true)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Update model"))}>`);
                {
                  $$renderer5.push("<!--[-1-->");
                  $$renderer5.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"></path><path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"></path></svg>`);
                }
                $$renderer5.push(`<!--]--></button></div> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600 [&amp;_a]:text-gray-900 [&amp;_a]:hover:underline dark:[&amp;_a]:text-gray-300"><a href="https://github.com/SYSTRAN/faster-whisper" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Click here to learn more about faster-whisper and see the available models."))}</a></div>`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      AdminSettingSection($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Text-to-Speech"),
        children: ($$renderer4) => {
          AdminSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Text-to-Speech Engine"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose the speech provider used for assistant audio output."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a mode"),
                get value() {
                  return TTS_ENGINE;
                },
                set value($$value) {
                  TTS_ENGINE = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.option({ value: "" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Web API"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "transformers" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Transformers"))} (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Local"))})`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "openai" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("OpenAI"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "elevenlabs" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("ElevenLabs"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "azure" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Azure AI Speech"))}`);
                  });
                  $$renderer6.push(` `);
                  $$renderer6.option({ value: "mistral" }, ($$renderer7) => {
                    $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("MistralAI"))}`);
                  });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          if (TTS_ENGINE === "openai") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"))}${attr("value", TTS_OPENAI_API_BASE_URL)} required=""/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  get value() {
                    return TTS_OPENAI_API_KEY;
                  },
                  set value($$value) {
                    TTS_OPENAI_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else if (TTS_ENGINE === "elevenlabs") {
            $$renderer4.push("<!--[1-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  required: true,
                  get value() {
                    return TTS_API_KEY;
                  },
                  set value($$value) {
                    TTS_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
          } else if (TTS_ENGINE === "azure") {
            $$renderer4.push("<!--[2-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  required: true,
                  get value() {
                    return TTS_API_KEY;
                  },
                  set value($$value) {
                    TTS_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Azure Region"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", TTS_AZURE_SPEECH_REGION)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g., westus (leave blank for eastus)"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Endpoint URL"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", TTS_AZURE_SPEECH_BASE_URL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("(leave blank for to use commercial endpoint)"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else if (TTS_ENGINE === "mistral") {
            $$renderer4.push("<!--[3-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("API Base URL"))}${attr("value", TTS_MISTRAL_API_BASE_URL)} required=""/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
              children: ($$renderer5) => {
                SensitiveInput($$renderer5, {
                  variant: "settings",
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("API Key"),
                  get value() {
                    return TTS_MISTRAL_API_KEY;
                  },
                  set value($$value) {
                    TTS_MISTRAL_API_KEY = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (TTS_ENGINE === "") {
            $$renderer4.push("<!--[0-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Voice"),
              children: ($$renderer5) => {
                SettingsSelect($$renderer5, {
                  className: "w-full",
                  get value() {
                    return TTS_VOICE;
                  },
                  set value($$value) {
                    TTS_VOICE = $$value;
                    $$settled = false;
                  },
                  children: ($$renderer6) => {
                    $$renderer6.option({ value: "", selected: TTS_VOICE !== "" }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}`);
                    });
                    $$renderer6.push(` <!--[-->`);
                    const each_array = ensure_array_like(voices);
                    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                      let voice = each_array[$$index];
                      $$renderer6.option(
                        {
                          value: voice.voiceURI,
                          class: "bg-gray-100 dark:bg-gray-700",
                          selected: TTS_VOICE === voice.voiceURI
                        },
                        ($$renderer7) => {
                          $$renderer7.push(`${escape_html(voice.name)}`);
                        }
                      );
                    }
                    $$renderer6.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          } else if (TTS_ENGINE === "transformers") {
            $$renderer4.push("<!--[1-->");
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Model"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Open WebUI uses SpeechT5 and CMU Arctic speaker embeddings."),
              children: ($$renderer5) => {
                $$renderer5.push(`<input list="tts-transformers-model-list"${attr_class(clsx(inputClass))}${attr("value", TTS_MODEL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("CMU ARCTIC speaker embedding name"))}/> <datalist id="tts-transformers-model-list">`);
                $$renderer5.option({ value: "tts-1" }, ($$renderer6) => {
                });
                $$renderer5.push(`</datalist> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600 [&amp;_a]:text-gray-900 [&amp;_a]:hover:underline dark:[&amp;_a]:text-gray-300">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("To learn more about SpeechT5,"))} <a href="https://github.com/microsoft/SpeechT5" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("click here"))}.</a> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("To see the available CMU Arctic speaker embeddings,"))} <a href="https://huggingface.co/datasets/Matthijs/cmu-arctic-xvectors" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("click here"))}.</a></div>`);
              },
              $$slots: { default: true }
            });
          } else if (TTS_ENGINE === "openai") {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Voice"),
              children: ($$renderer5) => {
                TTSVoiceInput($$renderer5, {
                  voices: providerVoices,
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a voice"),
                  className: inputClass,
                  get value() {
                    return TTS_VOICE;
                  },
                  set value($$value) {
                    TTS_VOICE = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Model"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input list="tts-model-list"${attr_class(clsx(inputClass))}${attr("value", TTS_MODEL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a model"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Additional Parameters"),
              description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter additional OpenAI-compatible TTS request parameters as JSON."),
              children: ($$renderer5) => {
                Textarea($$renderer5, {
                  className: textareaClass,
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter additional parameters in JSON format"),
                  get value() {
                    return TTS_OPENAI_PARAMS;
                  },
                  set value($$value) {
                    TTS_OPENAI_PARAMS = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          } else if (TTS_ENGINE === "elevenlabs" || TTS_ENGINE === "mistral") {
            $$renderer4.push("<!--[3-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Voice"),
              children: ($$renderer5) => {
                TTSVoiceInput($$renderer5, {
                  voices: providerVoices,
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a voice"),
                  className: inputClass,
                  get value() {
                    return TTS_VOICE;
                  },
                  set value($$value) {
                    TTS_VOICE = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Model"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input list="tts-model-list"${attr_class(clsx(inputClass))}${attr("value", TTS_MODEL)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a model"))}/>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else if (TTS_ENGINE === "azure") {
            $$renderer4.push("<!--[4-->");
            $$renderer4.push(`<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">`);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("TTS Voice"),
              children: ($$renderer5) => {
                TTSVoiceInput($$renderer5, {
                  voices: providerVoices,
                  placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Select a voice"),
                  className: inputClass,
                  get value() {
                    return TTS_VOICE;
                  },
                  set value($$value) {
                    TTS_VOICE = $$value;
                    $$settled = false;
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            AdminSettingField($$renderer4, {
              label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Output format"),
              children: ($$renderer5) => {
                $$renderer5.push(`<input${attr_class(clsx(inputClass))}${attr("value", TTS_AZURE_SPEECH_OUTPUT_FORMAT)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Select an output format"))}/> <div class="mt-1 text-[0.6875rem] text-gray-400 dark:text-gray-600 [&amp;_a]:text-gray-900 [&amp;_a]:hover:underline dark:[&amp;_a]:text-gray-300"><a href="https://learn.microsoft.com/en-us/azure/ai-services/speech-service/rest-text-to-speech?tabs=streaming#audio-outputs" target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Available list"))}</a></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <datalist id="tts-model-list"><!--[-->`);
          const each_array_1 = ensure_array_like(models2);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let model = each_array_1[$$index_1];
            $$renderer4.option({ value: model.id, class: "bg-gray-50 dark:bg-gray-700" }, ($$renderer5) => {
            });
          }
          $$renderer4.push(`<!--]--></datalist> `);
          AdminSettingRow($$renderer4, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Response Splitting"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Control how message text is split for TTS requests. 'Punctuation' splits into sentences, 'paragraphs' splits into paragraphs, and 'none' keeps the message as a single string."),
            children: ($$renderer5) => {
              SettingsSelect($$renderer5, {
                "aria-label": store_get($$store_subs ??= {}, "$i18n", i18n).t("Select how to split message text for TTS requests"),
                get value() {
                  return TTS_SPLIT_ON;
                },
                set value($$value) {
                  TTS_SPLIT_ON = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!--[-->`);
                  const each_array_2 = ensure_array_like(Object.values(TTS_RESPONSE_SPLIT));
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    let split = each_array_2[$$index_2];
                    $$renderer6.option({ value: split }, ($$renderer7) => {
                      $$renderer7.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(split.charAt(0).toUpperCase() + split.slice(1)))}`);
                    });
                  }
                  $$renderer6.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <div class="flex justify-end pt-6 text-sm font-normal"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button></div></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function Images($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let loading = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Images"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="flex justify-end pt-6 text-sm font-normal"><button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 whitespace-nowrap ${""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></button></div></form>`);
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
function Pipelines($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form class="flex h-full flex-col justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Pipelines"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5">`);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex justify-center h-full"><div class="my-auto">`);
        Spinner($$renderer3, { className: "size-6" });
        $$renderer3.push(`<!----></div></div>`);
      }
      $$renderer3.push(`<!--]--></div> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></form>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function Database($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let saveHandler = $$props["saveHandler"];
    const actionButtonClass = "text-xs text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white";
    $$renderer2.push(`<div class="flex flex-col h-full justify-between text-sm"><h2 class="text-sm font-medium text-gray-900 dark:text-white mb-4">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Database"))}</h2> <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hover pr-1.5"><input id="config-json-input" hidden="" type="file" accept=".json"/> `);
    AdminSettingSection($$renderer2, {
      title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Config"),
      first: true,
      children: ($$renderer3) => {
        AdminSettingRow($$renderer3, {
          label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Import Config"),
          description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Import admin configuration from a JSON export file."),
          children: ($$renderer4) => {
            $$renderer4.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Import"))}</button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        AdminSettingRow($$renderer3, {
          label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Export Config"),
          description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Download the current admin configuration as JSON."),
          children: ($$renderer4) => {
            $$renderer4.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    if (store_get($$store_subs ??= {}, "$config", config)?.features.enable_admin_export ?? true) {
      $$renderer2.push("<!--[0-->");
      AdminSettingSection($$renderer2, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"),
        children: ($$renderer3) => {
          AdminSettingRow($$renderer3, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Database"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Download the application database when supported."),
            children: ($$renderer4) => {
              $$renderer4.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Database"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          AdminSettingRow($$renderer3, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("All Chats"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Download every user's chat history as JSON."),
            children: ($$renderer4) => {
              $$renderer4.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          AdminSettingRow($$renderer3, {
            label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Users"),
            description: store_get($$store_subs ??= {}, "$i18n", i18n).t("Download all users as CSV."),
            children: ($$renderer4) => {
              $$renderer4.push(`<button${attr_class(clsx(actionButtonClass))} type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { saveHandler });
  });
}
function SettingsModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let modalShow = false;
    let lastShow = false;
    let tabState = null;
    const isAdminTab = (tabId) => tabId.startsWith("admin:");
    const adminTabSegment = (tabId) => tabId.replace("admin:", "");
    const adminTabPanelId = (tabId) => `tab-${tabId.replace(":", "-")}`;
    const personalSettingGroups = {
      general: "Basics",
      interface: "Basics",
      notifications: "Basics",
      shortcuts: "Basics",
      connections: "Services",
      tools: "Services",
      personalization: "Preferences",
      audio: "Preferences",
      data_controls: "Data",
      usage: "Data",
      archived_chats: "Data",
      account: "Profile",
      about: "Profile"
    };
    const adminSettingGroups = {
      "admin:general": "System",
      "admin:authentication": "System",
      "admin:connections": "AI",
      "admin:models": "AI",
      "admin:subagents": "AI",
      "admin:evaluations": "Quality",
      "admin:analytics": "Quality",
      "admin:integrations": "Tools",
      "admin:documents": "Tools",
      "admin:web": "Tools",
      "admin:code-execution": "Tools",
      "admin:pipelines": "Tools",
      "admin:interface": "Experience",
      "admin:audio": "Experience",
      "admin:images": "Experience",
      "admin:db": "Data"
    };
    const settingGroupTitle = (tabId) => (isAdminTab(tabId) ? adminSettingGroups[tabId] : personalSettingGroups[tabId]) ?? "General";
    const shouldShowSettingGroup = (tabIds, index) => index === 0 || settingGroupTitle(tabIds[index]) !== settingGroupTitle(tabIds[index - 1]);
    const settingGroupHeadingClass = (first) => `hidden md:block shrink-0 text-[0.625rem] text-gray-400 dark:text-gray-600 px-2 ${first ? "mt-0.5" : "mt-2"} mb-0.5`;
    const adminSettings = [
      {
        id: "admin:general",
        title: "General",
        keywords: [
          "general",
          "admin",
          "settings",
          "version",
          "update",
          "community",
          "channels"
        ]
      },
      {
        id: "admin:authentication",
        title: "Authentication",
        keywords: [
          "authentication",
          "auth",
          "login",
          "signup",
          "ldap",
          "oauth",
          "oidc",
          "sso",
          "roles"
        ]
      },
      {
        id: "admin:connections",
        title: "Connections",
        keywords: [
          "connections",
          "ollama",
          "openai",
          "api",
          "base url",
          "direct connections",
          "proxy"
        ]
      },
      {
        id: "admin:models",
        title: "Models",
        keywords: [
          "models",
          "pull",
          "delete",
          "create",
          "edit",
          "modelfile",
          "gguf",
          "import",
          "export"
        ]
      },
      {
        id: "admin:subagents",
        title: "Sub-agents",
        keywords: [
          "sub-agents",
          "subagents",
          "delegation",
          "background",
          "agents"
        ]
      },
      {
        id: "admin:interface",
        title: "Interface",
        keywords: [
          "interface",
          "ui",
          "appearance",
          "banners",
          "tasks",
          "prompt suggestions",
          "tags"
        ]
      },
      {
        id: "admin:audio",
        title: "Audio",
        keywords: [
          "audio",
          "voice",
          "speech",
          "tts",
          "stt",
          "whisper",
          "deepgram",
          "azure"
        ]
      },
      {
        id: "admin:images",
        title: "Images",
        keywords: [
          "images",
          "generation",
          "dalle",
          "stable diffusion",
          "comfyui",
          "automatic1111"
        ]
      },
      {
        id: "admin:evaluations",
        title: "Evaluations",
        keywords: [
          "evaluations",
          "feedback",
          "rating",
          "arena",
          "leaderboard",
          "preference"
        ]
      },
      {
        id: "admin:analytics",
        title: "Analytics",
        keywords: [
          "analytics",
          "usage",
          "stats",
          "dashboard",
          "models",
          "users",
          "messages"
        ]
      },
      {
        id: "admin:integrations",
        title: "Integrations",
        keywords: [
          "tools",
          "integrations",
          "plugins",
          "extensions",
          "functions",
          "openapi",
          "server"
        ]
      },
      {
        id: "admin:documents",
        title: "Documents",
        keywords: [
          "documents",
          "files",
          "rag",
          "knowledge",
          "upload",
          "embedding",
          "vector db"
        ]
      },
      {
        id: "admin:web",
        title: "Web Search",
        keywords: [
          "web search",
          "google",
          "bing",
          "duckduckgo",
          "serp",
          "searxng",
          "tavily",
          "exa"
        ]
      },
      {
        id: "admin:code-execution",
        title: "Code Execution",
        keywords: [
          "code execution",
          "python",
          "sandbox",
          "compiler",
          "jupyter",
          "interpreter"
        ]
      },
      {
        id: "admin:pipelines",
        title: "Pipelines",
        keywords: ["pipelines", "workflows", "filters", "valves", "middleware"]
      },
      {
        id: "admin:db",
        title: "Database",
        keywords: ["database", "export", "import", "backup", "chats", "users"]
      }
    ];
    let filteredSettings = [];
    let filteredPersonalSettings = [];
    let filteredAdminSettings = [];
    let search = "";
    const saveSettings = async (updated) => {
      /* @__PURE__ */ console.log(updated);
      await settings.set({
        ...store_get($$store_subs ??= {}, "$settings", settings),
        ...updated
      });
      await models.set(await getModels$1());
      await updateUserSettings(localStorage.token, { ui: store_get($$store_subs ??= {}, "$settings", settings) });
    };
    const getModels$1 = async () => {
      return await getModels(localStorage.token, store_get($$store_subs ??= {}, "$config", config)?.features?.enable_direct_connections ? store_get($$store_subs ??= {}, "$settings", settings)?.directConnections ?? null : null);
    };
    const adminConfigSaveHandler = async () => {
      toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
      await tick();
      await config.set(await getBackendConfig());
    };
    const tabButtonClass = (active) => `flex items-center gap-1.5 h-7 px-2 md:w-full shrink-0 rounded-lg text-xs text-left transition-colors duration-75 ${active ? "font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-white/[0.04]" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`;
    let selectedTab = "general";
    const scrollToSelectedTab = async () => {
      {
        return;
      }
    };
    if (show !== lastShow) {
      lastShow = show;
      if (show && typeof show === "object") {
        selectedTab = show.tab;
        tabState = show.state ?? null;
        show = true;
        lastShow = true;
        modalShow = true;
      } else if (typeof show === "string") {
        selectedTab = show;
        show = true;
        lastShow = true;
        modalShow = true;
      } else {
        modalShow = show;
        if (!show) {
          selectedTab = "general";
          tabState = null;
        }
      }
    }
    if (!modalShow && show !== false) {
      show = false;
      lastShow = false;
      selectedTab = "general";
      tabState = null;
    }
    if (store_get($$store_subs ??= {}, "$user", user)?.role !== "admin" && isAdminTab(selectedTab)) {
      selectedTab = "general";
    }
    if (modalShow && selectedTab) {
      scrollToSelectedTab();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "full",
        containerClassName: "p-4 sm:p-6 lg:p-8",
        className: "!w-[calc(100vw-2rem)] sm:!w-[calc(100vw-3rem)] lg:!w-[calc(100vw-4rem)] !max-w-[80rem] h-[min(54rem,calc(100dvh-4rem))] max-h-[calc(100dvh-4rem)] flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-4xl",
        get show() {
          return modalShow;
        },
        set show($$value) {
          modalShow = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<nav id="settings-tabs-container" class="shrink-0 min-w-0 md:min-h-0 flex md:flex-col border-b md:border-b-0 md:border-r border-gray-100/30 dark:border-white/[0.02] md:w-[15rem]"><button class="flex items-center gap-1.5 h-7 px-2 m-1 md:mb-0 md:w-[calc(100%-0.5rem)] shrink-0 rounded-lg text-xs text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-75" type="button">`);
          ChevronLeft($$renderer4, { className: "size-3", strokeWidth: "2" });
          $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Back"))}</span></button> <div class="hidden md:flex items-center gap-1.5 h-7 px-2 mx-1 mt-1 mb-0.5 shrink-0 rounded-lg text-xs bg-gray-50/70 dark:bg-white/[0.03]"><div class="self-center rounded-l-xl bg-transparent">`);
          Search$1($$renderer4, { className: "size-3.5", strokeWidth: "1.5" });
          $$renderer4.push(`<!----></div> <label class="sr-only" for="search-input-settings-modal">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))}</label> <input data-settings-search="" class="w-full text-xs bg-transparent py-1 outline-hidden dark:text-gray-300"${attr("value", search)} id="search-input-settings-modal"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search"))}/></div> <div class="tabs scrollbar-none flex min-w-0 flex-1 min-h-0 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto md:flex-col p-1 pl-0 md:pl-1 gap-px"><span class="hidden md:block text-[0.625rem] text-gray-400 dark:text-gray-600 px-2 mt-1.5 mb-0.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Personal"))}</span> `);
          if (filteredPersonalSettings.length > 0) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(filteredPersonalSettings);
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let tabId = each_array[index];
              if (shouldShowSettingGroup(filteredPersonalSettings, index)) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<span${attr_class(clsx(settingGroupHeadingClass(index === 0)))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(settingGroupTitle(tabId)))}</span>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> `);
              if (tabId === "general") {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-general"${attr("aria-selected", selectedTab === "general")}${attr_class(clsx(tabButtonClass(selectedTab === "general")))}>`);
                SettingsAlt($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("General"))}</span></button>`);
              } else if (tabId === "interface") {
                $$renderer4.push("<!--[1-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-interface"${attr("aria-selected", selectedTab === "interface")}${attr_class(clsx(tabButtonClass(selectedTab === "interface")))}>`);
                AdjustmentsHorizontal($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Interface"))}</span></button>`);
              } else if (tabId === "notifications") {
                $$renderer4.push("<!--[2-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-notifications"${attr("aria-selected", selectedTab === "notifications")}${attr_class(clsx(tabButtonClass(selectedTab === "notifications")))}>`);
                AppNotification($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Notifications"))}</span></button>`);
              } else if (tabId === "shortcuts") {
                $$renderer4.push("<!--[3-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-shortcuts"${attr("aria-selected", selectedTab === "shortcuts")}${attr_class(clsx(tabButtonClass(selectedTab === "shortcuts")))}>`);
                Keyboard($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Keyboard"))}</span></button>`);
              } else if (tabId === "connections") {
                $$renderer4.push("<!--[4-->");
                if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.role === "user" && store_get($$store_subs ??= {}, "$config", config)?.features?.enable_direct_connections) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<button role="tab" aria-controls="tab-connections"${attr("aria-selected", selectedTab === "connections")}${attr_class(clsx(tabButtonClass(selectedTab === "connections")))}>`);
                  Link($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                  $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Connections"))}</span></button>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]-->`);
              } else if (tabId === "tools") {
                $$renderer4.push("<!--[5-->");
                if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.role === "user" && store_get($$store_subs ??= {}, "$user", user)?.permissions?.features?.direct_tool_servers) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<button role="tab" aria-controls="tab-tools"${attr("aria-selected", selectedTab === "tools")}${attr_class(clsx(tabButtonClass(selectedTab === "tools")))}>`);
                  WrenchAlt($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                  $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Integrations"))}</span></button>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]-->`);
              } else if (tabId === "personalization") {
                $$renderer4.push("<!--[6-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-personalization"${attr("aria-selected", selectedTab === "personalization")}${attr_class(clsx(tabButtonClass(selectedTab === "personalization")))}>`);
                Face($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Personalization"))}</span></button>`);
              } else if (tabId === "audio") {
                $$renderer4.push("<!--[7-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-audio"${attr("aria-selected", selectedTab === "audio")}${attr_class(clsx(tabButtonClass(selectedTab === "audio")))}>`);
                SoundHigh($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Audio"))}</span></button>`);
              } else if (tabId === "data_controls") {
                $$renderer4.push("<!--[8-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-data-controls"${attr("aria-selected", selectedTab === "data_controls")}${attr_class(clsx(tabButtonClass(selectedTab === "data_controls")))}>`);
                DatabaseSettings($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Data Controls"))}</span></button>`);
              } else if (tabId === "usage") {
                $$renderer4.push("<!--[9-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-usage"${attr("aria-selected", selectedTab === "usage")}${attr_class(clsx(tabButtonClass(selectedTab === "usage")))}>`);
                UsageIcon($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Usage"))}</span></button>`);
              } else if (tabId === "archived_chats") {
                $$renderer4.push("<!--[10-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-archived-chats"${attr("aria-selected", selectedTab === "archived_chats")}${attr_class(clsx(tabButtonClass(selectedTab === "archived_chats")))}>`);
                ArchiveBox($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Archived Chats"))}</span></button>`);
              } else if (tabId === "account") {
                $$renderer4.push("<!--[11-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-account"${attr("aria-selected", selectedTab === "account")}${attr_class(clsx(tabButtonClass(selectedTab === "account")))}>`);
                UserCircle($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Account"))}</span></button>`);
              } else if (tabId === "about") {
                $$renderer4.push("<!--[12-->");
                $$renderer4.push(`<button role="tab" aria-controls="tab-about"${attr("aria-selected", selectedTab === "about")}${attr_class(clsx(tabButtonClass(selectedTab === "about")))}>`);
                InfoCircle($$renderer4, { className: "size-3.5", strokeWidth: "2" });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("About"))}</span></button>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" && filteredAdminSettings.length > 0) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="hidden md:block shrink-0 self-stretch h-px mx-1 my-2 bg-gray-100/40 dark:bg-white/[0.025]"></div> <span class="hidden md:block text-[0.625rem] text-gray-400 dark:text-gray-600 px-2 mb-0.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Admin"))}</span> <!--[-->`);
            const each_array_1 = ensure_array_like(filteredAdminSettings);
            for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
              let tabId = each_array_1[index];
              const tab = adminSettings.find((setting) => setting.id === tabId);
              if (shouldShowSettingGroup(filteredAdminSettings, index)) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<span${attr_class(clsx(settingGroupHeadingClass(index === 0)))}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(settingGroupTitle(tabId)))}</span>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> `);
              if (tab) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<button role="tab"${attr("aria-controls", adminTabPanelId(tab.id))}${attr("aria-selected", selectedTab === tab.id)}${attr_class(clsx(tabButtonClass(selectedTab === tab.id)))}>`);
                AdminTabIcon($$renderer4, {
                  id: adminTabSegment(tab.id),
                  className: "size-3.5",
                  strokeWidth: "2"
                });
                $$renderer4.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(tab.title))}</span></button>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> `);
          if (filteredSettings.length === 0) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="px-2 py-1 text-xs text-gray-400 dark:text-gray-600">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No matches"))}</div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></nav> <div class="flex-1 min-w-0 min-h-0 p-4 md:px-5 flex flex-col"><div class="flex-1 min-h-0 overflow-hidden">`);
          if (selectedTab === "general") {
            $$renderer4.push("<!--[0-->");
            General$1($$renderer4, { getModels: getModels$1, saveSettings });
          } else if (selectedTab === "interface") {
            $$renderer4.push("<!--[1-->");
            Interface$1($$renderer4, { saveSettings });
          } else if (selectedTab === "notifications") {
            $$renderer4.push("<!--[2-->");
            Notifications($$renderer4, { saveSettings });
          } else if (selectedTab === "shortcuts") {
            $$renderer4.push("<!--[3-->");
            Shortcuts($$renderer4, { saveSettings });
          } else if (selectedTab === "connections") {
            $$renderer4.push("<!--[4-->");
            Connections$1($$renderer4, {
              saveSettings: async (updated) => {
                await saveSettings(updated);
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
              }
            });
          } else if (selectedTab === "tools") {
            $$renderer4.push("<!--[5-->");
            Integrations$1($$renderer4, {
              saveSettings: async (updated) => {
                await saveSettings(updated);
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
              }
            });
          } else if (selectedTab === "personalization") {
            $$renderer4.push("<!--[6-->");
            Personalization($$renderer4, { saveSettings });
          } else if (selectedTab === "audio") {
            $$renderer4.push("<!--[7-->");
            Audio$1($$renderer4, { saveSettings });
          } else if (selectedTab === "data_controls") {
            $$renderer4.push("<!--[8-->");
            DataControls($$renderer4, { saveSettings });
          } else if (selectedTab === "usage") {
            $$renderer4.push("<!--[9-->");
            Usage($$renderer4);
          } else if (selectedTab === "archived_chats") {
            $$renderer4.push("<!--[10-->");
            ArchivedChats($$renderer4);
          } else if (selectedTab === "account") {
            $$renderer4.push("<!--[11-->");
            Account($$renderer4, {
              saveHandler: () => {
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
              }
            });
          } else if (selectedTab === "about") {
            $$renderer4.push("<!--[12-->");
            About($$renderer4);
          } else if (selectedTab === "admin:general") {
            $$renderer4.push("<!--[13-->");
            General($$renderer4, { saveHandler: adminConfigSaveHandler });
          } else if (selectedTab === "admin:authentication") {
            $$renderer4.push("<!--[14-->");
            Authentication($$renderer4);
          } else if (selectedTab === "admin:connections") {
            $$renderer4.push("<!--[15-->");
            Connections($$renderer4);
          } else if (selectedTab === "admin:models") {
            $$renderer4.push("<!--[16-->");
            Models($$renderer4, {
              get tabState() {
                return tabState;
              },
              set tabState($$value) {
                tabState = $$value;
                $$settled = false;
              }
            });
          } else if (selectedTab === "admin:subagents") {
            $$renderer4.push("<!--[17-->");
            Subagents($$renderer4);
          } else if (selectedTab === "admin:evaluations") {
            $$renderer4.push("<!--[18-->");
            Evaluations($$renderer4);
          } else if (selectedTab === "admin:analytics") {
            $$renderer4.push("<!--[19-->");
            Analytics($$renderer4);
          } else if (selectedTab === "admin:integrations") {
            $$renderer4.push("<!--[20-->");
            Integrations($$renderer4, { saveSettings });
          } else if (selectedTab === "admin:documents") {
            $$renderer4.push("<!--[21-->");
            Documents($$renderer4);
          } else if (selectedTab === "admin:web") {
            $$renderer4.push("<!--[22-->");
            WebSearch($$renderer4, { saveHandler: adminConfigSaveHandler });
          } else if (selectedTab === "admin:code-execution") {
            $$renderer4.push("<!--[23-->");
            CodeExecution($$renderer4, { saveHandler: adminConfigSaveHandler });
          } else if (selectedTab === "admin:interface") {
            $$renderer4.push("<!--[24-->");
            Interface($$renderer4);
          } else if (selectedTab === "admin:audio") {
            $$renderer4.push("<!--[25-->");
            Audio($$renderer4, {
              saveHandler: () => {
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
              }
            });
          } else if (selectedTab === "admin:images") {
            $$renderer4.push("<!--[26-->");
            Images($$renderer4);
          } else if (selectedTab === "admin:db") {
            $$renderer4.push("<!--[27-->");
            Database($$renderer4, {
              saveHandler: () => {
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
              }
            });
          } else if (selectedTab === "admin:pipelines") {
            $$renderer4.push("<!--[28-->");
            Pipelines($$renderer4, {
              saveHandler: () => {
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings saved successfully!"));
              }
            });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show });
  });
}
function ChangelogModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let changelog = null;
    let error = false;
    const init = async () => {
      if (changelog || error) {
        return;
      }
      changelog = await getChangelog().catch(() => {
        error = true;
        return null;
      });
    };
    const formatDate = (date) => {
      if (!date) {
        return "";
      }
      const [year, month, day] = date.split("-");
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      const monthIndex = Number(month) - 1;
      return year && monthIndex >= 0 && monthIndex < months.length && day ? `${months[monthIndex]} ${Number(day)}, ${year}` : date;
    };
    const getSectionEntries = (version, section) => {
      const entries = changelog?.[version]?.[section];
      return Array.isArray(entries) ? entries : [];
    };
    if (show) {
      init();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "lg",
        className: "bg-white dark:bg-gray-900 rounded-3xl overflow-hidden",
        containerClassName: "p-3",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex max-h-[58vh] flex-col"><div class="flex shrink-0 items-start justify-between gap-4 px-4 pb-2.5 pt-3.5 dark:text-white text-black"><div class="min-w-0"><h2 class="m-0 truncate text-base font-normal">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("What's New in"))}
					${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}</h2> <div class="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"><span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Release Notes"))}</span> <span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700"></span> <span>v${escape_html(WEBUI_VERSION)}</span></div></div> <button class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-white/10 dark:hover:text-gray-200"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}>`);
          XMark$1($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="min-h-0 flex-1 overflow-y-auto px-4 py-2 text-gray-700 scrollbar-hidden dark:text-gray-100">`);
          if (changelog) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="space-y-4"><!--[-->`);
            const each_array = ensure_array_like(Object.keys(changelog));
            for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
              let version = each_array[$$index_2];
              $$renderer4.push(`<section class="pr-1"><div class="mb-2"><h3 class="m-0 text-sm font-normal text-gray-950 dark:text-white">v${escape_html(version)}</h3> <div class="mt-0.5 text-[0.6875rem] text-gray-400 dark:text-gray-500">${escape_html(formatDate(changelog[version].date))}</div></div> <!--[-->`);
              const each_array_1 = ensure_array_like(Object.keys(changelog[version]).filter((section) => section !== "date"));
              for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
                let section = each_array_1[$$index_1];
                $$renderer4.push(`<div class="mb-3 w-full"><div${attr_class(`mb-2 text-[0.6875rem] font-normal uppercase tracking-wide ${section === "added" ? "text-blue-600 dark:text-blue-300" : section === "fixed" ? "text-green-600 dark:text-green-300" : section === "changed" ? "text-yellow-700 dark:text-yellow-300" : section === "removed" ? "text-red-600 dark:text-red-300" : "text-gray-500 dark:text-gray-400"}`)}>${escape_html(section)}</div> <div class="space-y-2 text-[0.8125rem] leading-relaxed"><!--[-->`);
                const each_array_2 = ensure_array_like(getSectionEntries(version, section));
                for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
                  let entry = each_array_2[$$index];
                  $$renderer4.push(`<div class="flex gap-2.5"><span class="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-gray-300 dark:bg-gray-700"></span> <div class="min-w-0 markdown-prose-sm !max-w-none !text-[0.8125rem] text-gray-600 dark:text-gray-300 [&amp;_*]:!my-0 [&amp;_b]:!font-normal [&amp;_strong]:!font-normal">${html(DOMPurify.sanitize(entry?.raw))}</div></div>`);
                }
                $$renderer4.push(`<!--]--></div></div>`);
              }
              $$renderer4.push(`<!--]--></section>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          } else if (error) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div class="flex flex-col items-center justify-center gap-3 py-16 text-center"><p class="text-sm text-gray-500 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Could not load release notes."))}</p> <button class="text-sm font-normal text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Retry"))}</button></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<div class="flex items-center justify-center py-16 text-sm text-gray-400 dark:text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Loading release notes..."))}</div>`);
          }
          $$renderer4.push(`<!--]--></div> <div class="flex shrink-0 justify-end px-4 pb-3.5 pt-1.5 text-sm"><button class="font-normal text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"><span class="relative">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Okay, Let's Go!"))}</span></button></div></div>`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show });
  });
}
function AccountPending($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    $$renderer2.push(`<div class="fixed w-full h-full flex z-999"><div class="absolute w-full h-full backdrop-blur-lg bg-white/10 dark:bg-gray-900/50 flex justify-center"><div class="m-auto pb-10 flex flex-col justify-center"><div class="max-w-md"><div class="text-center dark:text-white text-2xl font-normal z-50" style="white-space: pre-wrap;">`);
    if ((store_get($$store_subs ??= {}, "$config", config)?.ui?.pending_user_overlay_title ?? "").trim() !== "") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$config", config).ui.pending_user_overlay_title)}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Account Activation Pending"))}<br/> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Contact Admin for WebUI Access"))}`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-4 text-center text-sm dark:text-gray-200 w-full" style="white-space: pre-wrap;">`);
    if ((store_get($$store_subs ??= {}, "$config", config)?.ui?.pending_user_overlay_content ?? "").trim() !== "") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${html(DOMPurify.sanitize(marked.parse((store_get($$store_subs ??= {}, "$config", config)?.ui?.pending_user_overlay_content ?? "").replace(/\n/g, "<br>"))))}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Your account status is currently pending activation."))}
${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("To access the WebUI, please reach out to the administrator. Admins can manage user statuses from the Admin Panel."))}`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 text-gray-700 transition font-normal text-sm">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Check Again"))}</button> <button class="text-xs text-center w-full mt-2 text-gray-400 underline">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Sign Out"))}</button></div></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let localDBChats = [];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      SettingsModal($$renderer3, {
        get show() {
          return store_get($$store_subs ??= {}, "$showSettings", showSettings);
        },
        set show($$value) {
          store_set(showSettings, $$value);
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ChangelogModal($$renderer3, {
        get show() {
          return store_get($$store_subs ??= {}, "$showChangelog", showChangelog);
        },
        set show($$value) {
          store_set(showChangelog, $$value);
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$user", user)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="app relative"><div class="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-row justify-end">`);
        if (!["user", "admin"].includes(store_get($$store_subs ??= {}, "$user", user)?.role)) {
          $$renderer3.push("<!--[0-->");
          AccountPending($$renderer3);
        } else {
          $$renderer3.push("<!--[-1-->");
          if (localDBChats.length > 0) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="fixed w-full h-full flex z-50"><div class="absolute w-full h-full backdrop-blur-md bg-white/20 dark:bg-gray-900/50 flex justify-center"><div class="m-auto pb-44 flex flex-col justify-center"><div class="max-w-md"><div class="text-center dark:text-white text-2xl font-normal z-50">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Important Update"))}<br/> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Action Required for Chat Log Storage"))}</div> <div class="mt-4 text-center text-sm dark:text-gray-200 w-full">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Saving chat logs directly to your browser's storage is no longer supported. Please take a moment to download and delete your chat logs by clicking the button below. Don't worry, you can easily re-import your chat logs to the backend through"))} <span class="font-normal dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Settings"))} > ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Chats"))} > ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Import Chats"))}</span>. ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("This ensures that your valuable conversations are securely saved to your backend database. Thank you!"))}</div> <div class="mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 transition font-normal text-sm">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Download & Delete"))}</button> <button class="text-xs text-center w-full mt-2 text-gray-400 underline">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}</button></div></div></div></div></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> `);
          Sidebar_1($$renderer3);
          $$renderer3.push(`<!----> `);
          {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<div${attr_class(`w-full flex-1 h-full flex items-center justify-center ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "  md:max-w-[calc(100%-var(--sidebar-width))]" : " "}`)}>`);
            Spinner($$renderer3, { className: "size-5" });
            $$renderer3.push(`<!----></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
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
  });
}
export {
  _layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
