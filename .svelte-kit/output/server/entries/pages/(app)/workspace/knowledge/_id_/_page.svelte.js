import "clsx";
import { m as getContext, f as fallback, b as bind_props, k as escape_html, c as store_get, a as attr, d as attr_class, u as unsubscribe_stores, g as clsx } from "../../../../../../chunks/index2.js";
import { o as onDestroy } from "../../../../../../chunks/index-server.js";
import { a as toast } from "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { v4 } from "uuid";
import "@sveltejs/kit/internal";
import "../../../../../../chunks/exports.js";
import "../../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../../chunks/root.js";
import "../../../../../../chunks/state.svelte.js";
import { s as settings } from "../../../../../../chunks/index3.js";
import { u as uploadFile } from "../../../../../../chunks/index8.js";
import { F as FilesOverlay, a as processWeb } from "../../../../../../chunks/FilesOverlay.js";
import { t as blobToFile } from "../../../../../../chunks/index4.js";
import { S as Spinner } from "../../../../../../chunks/Spinner.js";
import "dompurify";
import "dayjs";
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
import { M as Modal } from "../../../../../../chunks/Modal.js";
import { X as XMark } from "../../../../../../chunks/XMark.js";
import { T as Tooltip } from "../../../../../../chunks/Tooltip.js";
import "dayjs/plugin/localizedFormat.js";
/* empty css                                                                    */
import { C as ConfirmDialog } from "../../../../../../chunks/ConfirmDialog.js";
/* empty css                                                            */
/* empty css                                                           */
function AttachWebpageModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let onSubmit = $$props["onSubmit"];
    let url = "";
    const highContrastInputClass = "rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 py-1.5 text-gray-700 outline-hidden transition-colors placeholder:text-gray-300 focus:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:text-gray-300 dark:placeholder:text-gray-700 dark:focus:border-blue-500";
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
          $$renderer4.push(`<div class="flex flex-col h-full"><div class="flex justify-between items-center dark:text-gray-100 px-4 pt-3 pb-1"><h1 class="text-sm font-medium self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Attach Webpage"))}</h1> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close modal"))}>`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="px-5 pb-4"><form><div class="flex justify-between mb-0.5"><label for="webpage-url"${attr_class(`text-xs ${store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Webpage URLs"))}</label></div> <textarea id="webpage-url"${attr_class(`w-full flex-1 text-sm ${store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? highContrastInputClass : "bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`)} type="text" rows="3" placeholder="https://example.com" autocomplete="off" required="">`);
          const $$body = escape_html(url);
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
          $$renderer4.push(`</textarea> <div class="flex justify-end gap-2 pt-3 bg-gray-50 dark:bg-gray-900/50"><button class="px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add"))}</button></div></form></div></div>`);
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
    bind_props($$props, { show, onSubmit });
  });
}
function MicSolid($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${attr_class(clsx(className))}><path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z"></path><path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z"></path></svg>`);
  bind_props($$props, { className });
}
function AddTextContentModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let name = store_get($$store_subs ??= {}, "$i18n", i18n).t("Untitled");
    let content = "";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        size: "full",
        containerClassName: "",
        className: "h-full bg-white dark:bg-gray-900",
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="absolute top-0 right-0 p-5"><button class="self-center dark:text-white" type="button">`);
          XMark($$renderer4, { className: "size-3.5" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full h-full md:space-x-4 dark:text-gray-200"><form class="flex flex-col w-full h-full"><div class="flex-1 w-full h-full flex justify-center overflow-auto px-5 py-4"><div class="max-w-3xl py-2 md:py-10 w-full flex flex-col gap-2"><div class="shrink-0 w-full flex justify-between items-center"><div class="w-full"><input class="w-full text-3xl bg-transparent outline-hidden svelte-1bctwft" type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Title"))} required=""/></div></div> <div class="flex-1 w-full h-full"><textarea class="w-full h-full min-h-[200px] bg-transparent outline-none resize-none text-base leading-relaxed placeholder:text-gray-300 dark:placeholder:text-gray-600"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Write something..."))}>`);
          const $$body = escape_html(content);
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
          $$renderer4.push(`</textarea></div></div></div> <div class="flex flex-row items-center justify-end text-sm shrink-0 mt-1 p-4 gap-1.5"><div>`);
          {
            $$renderer4.push("<!--[-1-->");
            Tooltip($$renderer4, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Voice Input"),
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="p-2 bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-white transition rounded-full" type="button">`);
                MicSolid($$renderer5, { className: "size-5" });
                $$renderer5.push(`<!----></button>`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer4.push(`<!--]--></div> <div class="shrink-0">`);
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"),
            children: ($$renderer5) => {
              $$renderer5.push(`<button class="px-3.5 py-2 bg-black text-white dark:bg-white dark:text-black transition rounded-full" type="submit">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div></div></form></div>`);
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
function NewDirectoryModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let name = "";
    if (show) {
      name = "";
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
          $$renderer4.push(`<div><div class="flex justify-between items-center dark:text-gray-100 px-4 pt-3 pb-1"><h3 class="text-base font-normal">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("New Directory"))}</h3> <button class="self-center shrink-0 ml-2"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}>`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="px-5 pb-2 flex flex-col gap-3"><div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</div> <input class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Directory name"))}/></div></div> <div class="flex items-center justify-end px-4 pb-3.5 pt-2 gap-2"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"))}</button> <button class="px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create"))}</button></div></div>`);
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
function KnowledgeBase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let showAddWebpageModal = false;
    let showAddTextContentModal = false;
    let showNewDirectoryModal = false;
    let showSyncConfirmModal = false;
    let showResetConfirm = false;
    let knowledge = null;
    let searchDebounceTimer;
    let fileItems = null;
    let currentDirectoryId = null;
    let showDeleteDirectoryConfirm = false;
    let deleteDirectoryContents = true;
    const init = async () => {
      await getItemsPage();
    };
    const getItemsPage = async () => {
      return;
    };
    const createFileFromText = (name, content) => {
      const blob = new Blob([content], { type: "text/plain" });
      const file = blobToFile(blob, `${name}.txt`);
      /* @__PURE__ */ console.log(file);
      return file;
    };
    const uploadWeb = async (urls) => {
      if (!Array.isArray(urls)) {
        urls = [urls];
      }
      const newFileItems = urls.map((url) => ({
        type: "file",
        file: "",
        id: null,
        url,
        name: url,
        size: null,
        status: "uploading",
        error: "",
        itemId: v4()
      }));
      fileItems = [...newFileItems, ...fileItems ?? []];
      for (const fileItem of newFileItems) {
        try {
          /* @__PURE__ */ console.log(fileItem);
          const res = await processWeb(localStorage.token, "", fileItem.url, false).catch((e) => {
            /* @__PURE__ */ console.error("Error processing web URL:", e);
            return null;
          });
          if (res) {
            /* @__PURE__ */ console.log(res);
            const file = createFileFromText(
              // Use URL as filename, sanitized
              fileItem.url.replace(/[^a-z0-9]/gi, "_").toLowerCase().slice(0, 50),
              res.content
            );
            const uploadedFile = await uploadFile(localStorage.token, file, { knowledge_id: knowledge.id, directory_id: currentDirectoryId }).catch((e) => {
              toast.error(`${e}`);
              return null;
            });
            if (uploadedFile) {
              /* @__PURE__ */ console.log(uploadedFile);
              fileItems = fileItems.map((item) => {
                if (item.itemId === fileItem.itemId) {
                  item.id = uploadedFile.id;
                }
                return item;
              });
              if (uploadedFile.error) {
                console.warn("File upload warning:", uploadedFile.error);
                toast.warning(uploadedFile.error);
                fileItems = fileItems.filter((file2) => file2.id !== uploadedFile.id);
              } else {
                toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("File added successfully."));
                init();
              }
            } else {
              toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to upload file."));
            }
          } else {
            fileItems = fileItems.filter((item) => item.itemId !== fileItem.itemId);
            toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to process URL: {{url}}", { url: fileItem.url }));
          }
        } catch (e) {
          fileItems = fileItems.filter((item) => item.itemId !== fileItem.itemId);
          toast.error(`${e}`);
        }
      }
    };
    let dragged = false;
    const onDragOver = (e) => {
      e.preventDefault();
      if (e.dataTransfer?.types?.includes("Files")) {
        dragged = true;
      } else {
        dragged = false;
      }
    };
    const onDragLeave = () => {
      dragged = false;
    };
    const onDrop = async (e) => {
      e.preventDefault();
      dragged = false;
      {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("You do not have permission to upload files to this knowledge base."));
        return;
      }
    };
    onDestroy(() => {
      clearTimeout(searchDebounceTimer);
      const dropZone = document.querySelector("body");
      dropZone?.removeEventListener("dragover", onDragOver);
      dropZone?.removeEventListener("drop", onDrop);
      dropZone?.removeEventListener("dragleave", onDragLeave);
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      FilesOverlay($$renderer3, { show: dragged });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("{{count}} files selected. Only new and modified files will be uploaded. Deleted files will be removed. The folder structure will be mirrored. Continue?", { count: 0 }),
        get show() {
          return showSyncConfirmModal;
        },
        set show($$value) {
          showSyncConfirmModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      AttachWebpageModal($$renderer3, {
        onSubmit: async (e) => {
          uploadWeb(e.data);
        },
        get show() {
          return showAddWebpageModal;
        },
        set show($$value) {
          showAddWebpageModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      AddTextContentModal($$renderer3, {
        get show() {
          return showAddTextContentModal;
        },
        set show($$value) {
          showAddTextContentModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      NewDirectoryModal($$renderer3, {
        get show() {
          return showNewDirectoryModal;
        },
        set show($$value) {
          showNewDirectoryModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <input id="files-input" type="file" multiple="" hidden=""/> <div class="flex flex-col w-full h-full min-h-full" id="collection-container">`);
      {
        $$renderer3.push("<!--[-1-->");
        Spinner($$renderer3, { className: "size-5" });
      }
      $$renderer3.push(`<!--]--></div> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete directory?"),
        get show() {
          return showDeleteDirectoryConfirm;
        },
        set show($$value) {
          showDeleteDirectoryConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3 mb-2">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t(`Are you sure you want to delete this directory?`))}</div> <div class="flex items-center gap-1.5"><input type="checkbox"${attr("checked", deleteDirectoryContents, true)}/> <div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete all contents inside this directory"))}</div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset knowledge base?"),
        get show() {
          return showResetConfirm;
        },
        set show($$value) {
          showResetConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("This will remove all files and directories from this knowledge base. This action cannot be undone."))}</div>`);
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
  });
}
function _page($$renderer) {
  KnowledgeBase($$renderer);
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
