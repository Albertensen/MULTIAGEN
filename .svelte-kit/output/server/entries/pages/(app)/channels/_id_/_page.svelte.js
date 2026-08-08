import { ao as derived, aw as props_id, l as attributes, b as bind_props, k as escape_html, f as fallback, e as ensure_array_like, d as attr_class, g as clsx, a as attr, m as getContext, u as unsubscribe_stores, c as store_get, q as stringify, h as attr_style, p as head } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import { t as tick, o as onDestroy } from "../../../../../chunks/index-server.js";
import { a as toast } from "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { F as FaceSmile, P as Pane_group, a as Pane, D as Drawer } from "../../../../../chunks/FaceSmile.js";
import { g as goto } from "../../../../../chunks/client.js";
import { v4 } from "uuid";
import { u as user, s as settings, c as config, m as mobile, h as showSidebar, y as socket, ak as channelId, B as channels } from "../../../../../chunks/index3.js";
import { r as removeReaction, b as addReaction, p as pinMessage, d as updateMessage, e as deleteMessage, f as getChannelMembersById, H as Hashtag, L as Lock, h as removeMembersById, i as getChannelPinnedMessages, j as getChannelThreadMessages, s as sendMessage, k as getChannelById, l as getChannelMessages } from "../../../../../chunks/Lock.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import isToday from "dayjs/plugin/isToday.js";
import isYesterday from "dayjs/plugin/isYesterday.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import { a as WEBUI_API_BASE_URL, V as formatDate, i as getUserPosition, j as getAge, k as getFormattedDate, l as getFormattedTime, m as getCurrentDateTime, n as getUserTimezone, o as getWeekday, p as extractInputVariables, q as convertHeicToJpeg, r as compressImage } from "../../../../../chunks/index4.js";
import { M as Markdown, e as Image } from "../../../../../chunks/FileItemModal.svelte_svelte_type_style_lang.js";
import { C as ChevronRight, h as buildOutputDisplayItems, b as ProfileImage, N as Name, f as Skeleton, a as FileItem, S as StructuredOutputRenderer, d as ChatBubble, L as Loader } from "../../../../../chunks/Loader.js";
import { C as ConfirmDialog } from "../../../../../chunks/ConfirmDialog.js";
import { E as EmojiPicker, a as Pin, P as PinSlash, G as GarbageBin, g as getSessionUser } from "../../../../../chunks/PinSlash.js";
import { P as Pencil } from "../../../../../chunks/Pencil.js";
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import { C as ChevronLeft, P as ProfilePreview, M as MemberSelector } from "../../../../../chunks/MemberSelector.js";
import { d as useId, E as Emoji } from "../../../../../chunks/UserStatusLinkPreview.js";
import { S as Spinner } from "../../../../../chunks/Spinner.js";
import { u as uploadFile } from "../../../../../chunks/index8.js";
import "dompurify";
import "marked";
import "fast-deep-equal";
import "turndown";
import "@joplin/turndown-plugin-gfm";
import "../../../../../chunks/listDragHandlePlugin.js";
import "@tiptap/starter-kit";
import "@tiptap/extension-table";
import "@tiptap/extension-list";
import "@tiptap/extensions";
import "@tiptap/extension-file-handler";
import "@tiptap/extension-typography";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code";
import "@tiptap/extension-italic";
import "@tiptap/extension-code-block-lowlight";
import "@tiptap/extension-mention";
/* empty css                                                              */
/* empty css                                                                 */
import "../../../../../chunks/pyodideSandboxHost.js";
import "../../../../../chunks/codemirror.js";
import "file-saver";
import "panzoom";
/* empty css                                                        */
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../chunks/root.js";
import "../../../../../chunks/state.svelte.js";
import { S as Sidebar } from "../../../../../chunks/Sidebar.js";
import { M as Modal } from "../../../../../chunks/Modal.js";
import { X as XMark } from "../../../../../chunks/XMark.js";
import { A as ARROW_UP, y as ARROW_RIGHT, z as ARROW_LEFT, B as ARROW_DOWN, C as Context, h as attachRef, r as SPACE, q as ENTER, a as createBitsAttrs, D as END, H as HOME, p as createId, n as noop, b as boxWith, m as mergeProps } from "../../../../../chunks/create-id.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { P as Plus } from "../../../../../chunks/Plus.js";
import { i as i18n } from "../../../../../chunks/index5.js";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
const paginationAttrs = createBitsAttrs({
  component: "pagination",
  parts: ["root", "page", "prev", "next"]
});
const PaginationRootContext = new Context("Pagination.Root");
class PaginationRootState {
  static create(opts) {
    return PaginationRootContext.set(new PaginationRootState(opts));
  }
  opts;
  attachment;
  #totalPages = derived(() => {
    if (this.opts.count.current === 0) return 1;
    return Math.ceil(this.opts.count.current / this.opts.perPage.current);
  });
  get totalPages() {
    return this.#totalPages();
  }
  set totalPages($$value) {
    return this.#totalPages($$value);
  }
  #range = derived(() => {
    const start = (this.opts.page.current - 1) * this.opts.perPage.current;
    const end = Math.min(start + this.opts.perPage.current, this.opts.count.current);
    return { start: start + 1, end };
  });
  get range() {
    return this.#range();
  }
  set range($$value) {
    return this.#range($$value);
  }
  #pages = derived(() => getPageItems({
    page: this.opts.page.current,
    totalPages: this.totalPages,
    siblingCount: this.opts.siblingCount.current
  }));
  get pages() {
    return this.#pages();
  }
  set pages($$value) {
    return this.#pages($$value);
  }
  #hasPrevPage = derived(() => this.opts.page.current > 1);
  get hasPrevPage() {
    return this.#hasPrevPage();
  }
  set hasPrevPage($$value) {
    return this.#hasPrevPage($$value);
  }
  #hasNextPage = derived(() => this.opts.page.current < this.totalPages);
  get hasNextPage() {
    return this.#hasNextPage();
  }
  set hasNextPage($$value) {
    return this.#hasNextPage($$value);
  }
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
  }
  setPage(page2) {
    this.opts.page.current = page2;
  }
  getPageTriggerNodes() {
    const node = this.opts.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll("[data-pagination-page]"));
  }
  getButtonNode(type) {
    const node = this.opts.ref.current;
    if (!node) return;
    return node.querySelector(paginationAttrs.selector(type));
  }
  prevPage() {
    this.opts.page.current = Math.max(this.opts.page.current - 1, 1);
  }
  nextPage() {
    this.opts.page.current = Math.min(this.opts.page.current + 1, this.totalPages);
  }
  #snippetProps = derived(() => ({
    pages: this.pages,
    range: this.range,
    currentPage: this.opts.page.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.opts.orientation.current,
    [paginationAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaginationPageState {
  static create(opts) {
    return new PaginationPageState(opts, PaginationRootContext.get());
  }
  opts;
  root;
  attachment;
  #isSelected = derived(() => this.opts.page.current.value === this.root.opts.page.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.root.setPage(this.opts.page.current.value);
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.setPage(this.opts.page.current.value);
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-label": `Page ${this.opts.page.current.value}`,
    "data-value": `${this.opts.page.current.value}`,
    "data-selected": this.#isSelected() ? "" : void 0,
    [paginationAttrs.page]: "",
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaginationButtonState {
  static create(opts) {
    return new PaginationButtonState(opts, PaginationRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #action() {
    this.opts.type === "prev" ? this.root.prevPage() : this.root.nextPage();
  }
  #isDisabled = derived(() => {
    if (this.opts.disabled.current) return true;
    if (this.opts.type === "prev") return !this.root.hasPrevPage;
    if (this.opts.type === "next") return !this.root.hasNextPage;
    return false;
  });
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.#action();
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#action();
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [paginationAttrs[this.opts.type]]: "",
    disabled: this.#isDisabled(),
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function handleTriggerKeydown(e, node, root) {
  if (!node || !root.opts.ref.current) return;
  const items = root.getPageTriggerNodes();
  const nextButton = root.getButtonNode("next");
  const prevButton = root.getButtonNode("prev");
  if (prevButton) {
    items.unshift(prevButton);
  }
  if (nextButton) {
    items.push(nextButton);
  }
  const currentIndex = items.indexOf(node);
  const dir = getElemDirection(root.opts.ref.current);
  const { nextKey, prevKey } = getDirectionalKeys(dir, root.opts.orientation.current);
  const loop = root.opts.loop.current;
  const keyToIndex = {
    [nextKey]: currentIndex + 1,
    [prevKey]: currentIndex - 1,
    [HOME]: 0,
    [END]: items.length - 1
  };
  let itemIndex = keyToIndex[e.key];
  if (itemIndex === void 0) return;
  e.preventDefault();
  if (itemIndex < 0 && loop) {
    itemIndex = items.length - 1;
  } else if (itemIndex === items.length && loop) {
    itemIndex = 0;
  }
  const itemToFocus = items[itemIndex];
  if (!itemToFocus) return;
  itemToFocus.focus();
}
function getPageItems({ page: page2 = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let i = 2; i <= totalPages - 1; i++) {
      pagesToShow.add(i);
    }
  } else if (page2 < firstItemWithSiblings) {
    for (let i = 2; i <= Math.min(firstItemWithSiblings, totalPages); i++) {
      pagesToShow.add(i);
    }
  } else if (page2 > lastItemWithSiblings) {
    for (let i = totalPages - 1; i >= Math.max(lastItemWithSiblings, 2); i--) {
      pagesToShow.add(i);
    }
  } else {
    for (let i = Math.max(page2 - siblingCount, 2); i <= Math.min(page2 + siblingCount, totalPages); i++) {
      pagesToShow.add(i);
    }
  }
  function addPage(value) {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  }
  function addEllipsis() {
    const id = useId();
    pageItems.push({ type: "ellipsis", key: `ellipsis-${id}` });
  }
  let lastNumber = 0;
  for (const p of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (p - lastNumber > 1) {
      addEllipsis();
    }
    addPage(p);
    lastNumber = p;
  }
  return pageItems;
}
function Pagination($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      count,
      perPage = 1,
      page: page2 = 1,
      ref = null,
      siblingCount = 1,
      onPageChange = noop,
      loop = false,
      orientation = "horizontal",
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = PaginationRootState.create({
      id: boxWith(() => id),
      count: boxWith(() => count),
      perPage: boxWith(() => perPage),
      page: boxWith(() => page2, (v) => {
        page2 = v;
        onPageChange?.(v);
      }),
      loop: boxWith(() => loop),
      siblingCount: boxWith(() => siblingCount),
      orientation: boxWith(() => orientation),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived(() => mergeProps(restProps, rootState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps(), ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { page: page2, ref });
  });
}
function Pagination_prev_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      child,
      children,
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const prevButtonState = PaginationButtonState.create({
      type: "prev",
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = derived(() => mergeProps(restProps, prevButtonState.props, { type }));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pagination_next_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      child,
      children,
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const nextButtonState = PaginationButtonState.create({
      type: "next",
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = derived(() => mergeProps(restProps, nextButtonState.props, { type }));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pagination_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      page: page2,
      child,
      children,
      type = "button",
      ref = null,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const pageState = PaginationPageState.create({
      id: boxWith(() => id),
      page: boxWith(() => page2),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = derived(() => mergeProps(restProps, pageState.props, { type }));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps() })}>`);
      if (children) {
        $$renderer2.push("<!--[0-->");
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`${escape_html(page2.value)}`);
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pagination_1($$renderer, $$props) {
  let page2 = fallback($$props["page"], 0);
  let count = fallback($$props["count"], 0);
  let perPage = fallback($$props["perPage"], 20);
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="flex justify-center">`);
    {
      let children = function($$renderer3, { pages }) {
        $$renderer3.push(`<div class="my-2 flex items-center">`);
        Pagination_prev_button($$renderer3, {
          class: "mr-[25px] inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",
          children: ($$renderer4) => {
            ChevronLeft($$renderer4, { className: "size-4", strokeWidth: "2" });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <div class="flex items-center gap-2.5"><!--[-->`);
        const each_array = ensure_array_like(pages);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let page3 = each_array[$$index];
          if (page3.type === "ellipsis") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="text-sm font-normal text-foreground-alt">...</div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
            Pagination_page($$renderer3, {
              page: page3,
              class: "inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 text-sm font-normal hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-selected:bg-gray-50 data-selected:text-gray-700 data-selected:hover:bg-gray-100 dark:data-selected:bg-gray-850 dark:data-selected:text-gray-50 dark:data-selected:hover:bg-gray-800 transition",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(page3.value)}`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div> `);
        Pagination_next_button($$renderer3, {
          class: "ml-[25px]  inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",
          children: ($$renderer4) => {
            ChevronRight($$renderer4, { className: "size-4", strokeWidth: "2" });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      };
      Pagination($$renderer2, {
        count,
        perPage,
        get page() {
          return page2;
        },
        set page($$value) {
          page2 = $$value;
          $$settled = false;
        },
        children,
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
  bind_props($$props, { page: page2, count, perPage });
}
function ArrowUpLeftAlt($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"${attr("stroke-width", strokeWidth)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.25 4.75L6.75 8.25L10.25 11.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.75 8.25L12.75 8.25C14.9591 8.25 16.75 10.0409 16.75 12.25V19.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Message($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let renderedMessageId, messageOutput, hasStructuredOutput;
    dayjs.extend(relativeTime);
    dayjs.extend(isToday);
    dayjs.extend(isYesterday);
    dayjs.extend(localizedFormat);
    const i18n2 = getContext("i18n");
    let className = fallback($$props["className"], "");
    let message = $$props["message"];
    let channel = $$props["channel"];
    let showUserProfile = fallback($$props["showUserProfile"], true);
    let thread = fallback($$props["thread"], false);
    let id = fallback($$props["id"], null);
    let replyToMessage = fallback($$props["replyToMessage"], false);
    let disabled = fallback($$props["disabled"], false);
    let pending = fallback($$props["pending"], false);
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onEdit = fallback($$props["onEdit"], () => {
    });
    let onReply = fallback($$props["onReply"], () => {
    });
    let onPin = fallback($$props["onPin"], () => {
    });
    let onThread = fallback($$props["onThread"], () => {
    });
    let onReaction = fallback($$props["onReaction"], () => {
    });
    let showButtons = false;
    let showDeleteConfirmDialog = false;
    let swipeOffsetX = 0;
    renderedMessageId = message ? id ? `${id}-${message.id}` : message.id : null;
    message?.reply_to_message ? id ? `${id}-${message.reply_to_message.id}` : message.reply_to_message.id : null;
    messageOutput = Array.isArray(message?.data?.output) ? message.data.output : [];
    hasStructuredOutput = buildOutputDisplayItems(messageOutput).length > 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Delete Message"),
        message: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Are you sure you want to delete this message?"),
        onConfirm: async () => {
          await onDelete();
        },
        get show() {
          return showDeleteConfirmDialog;
        },
        set show($$value) {
          showDeleteConfirmDialog = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (message) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="swipe-reply-wrapper relative svelte-s6wdik">`);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <div${attr("id", `message-${stringify(renderedMessageId)}`)}${attr_class(
          `flex flex-col justify-between w-full max-w-full mx-auto group hover:bg-gray-300/5 dark:hover:bg-gray-700/5 relative ${stringify(className ? className : `px-5 ${replyToMessage ? "border-l-4 border-blue-500 bg-blue-100/10 dark:bg-blue-100/5 pl-4" : ""} ${(message?.reply_to_message?.meta?.model_id ?? message?.reply_to_message?.user_id) === store_get($$store_subs ??= {}, "$user", user)?.id ? "border-l-4 border-orange-500 bg-orange-100/10 dark:bg-orange-100/5 pl-4" : ""} ${message?.is_pinned ? "bg-yellow-100/20 dark:bg-yellow-100/5" : ""}`)} ${showUserProfile ? "pt-1.5 pb-0.5" : ""}`,
          "svelte-s6wdik"
        )}${attr_style(`transform: translateX(${stringify(swipeOffsetX)}px); ${"transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1);"}`)}>`);
        if (!disabled) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div${attr_class(` absolute ${showButtons ? "" : "invisible group-hover:visible"} right-1 -top-2 z-10`, "svelte-s6wdik")}><div class="flex gap-1 rounded-lg bg-white dark:bg-gray-850 shadow-md p-0.5 border border-gray-100/30 dark:border-gray-850/30 svelte-s6wdik">`);
          if (onReaction) {
            $$renderer3.push("<!--[0-->");
            EmojiPicker($$renderer3, {
              onClose: () => showButtons = false,
              onSubmit: (name) => {
                showButtons = false;
                onReaction(name);
              },
              children: ($$renderer4) => {
                Tooltip($$renderer4, {
                  content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Add Reaction"),
                  children: ($$renderer5) => {
                    $$renderer5.push(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik">`);
                    FaceSmile($$renderer5, {});
                    $$renderer5.push(`<!----></button>`);
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
          if (onReply) {
            $$renderer3.push("<!--[0-->");
            Tooltip($$renderer3, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Reply"),
              children: ($$renderer4) => {
                $$renderer4.push(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-0.5 svelte-s6wdik">`);
                ArrowUpLeftAlt($$renderer4, { className: "size-5" });
                $$renderer4.push(`<!----></button>`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> `);
          Tooltip($$renderer3, {
            content: message?.is_pinned ? store_get($$store_subs ??= {}, "$i18n", i18n2).t("Unpin") : store_get($$store_subs ??= {}, "$i18n", i18n2).t("Pin"),
            children: ($$renderer4) => {
              $$renderer4.push(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik">`);
              if (message?.is_pinned) {
                $$renderer4.push("<!--[0-->");
                PinSlash($$renderer4, { className: "size-4" });
              } else {
                $$renderer4.push("<!--[-1-->");
                Pin($$renderer4, { className: "size-4" });
              }
              $$renderer4.push(`<!--]--></button>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          if (!thread && onThread) {
            $$renderer3.push("<!--[0-->");
            Tooltip($$renderer3, {
              content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Reply in Thread"),
              children: ($$renderer4) => {
                $$renderer4.push(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik">`);
                ChatBubble($$renderer4, {});
                $$renderer4.push(`<!----></button>`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (message.user_id === store_get($$store_subs ??= {}, "$user", user)?.id || store_get($$store_subs ??= {}, "$user", user)?.role === "admin") {
            $$renderer3.push("<!--[0-->");
            if (onEdit) {
              $$renderer3.push("<!--[0-->");
              Tooltip($$renderer3, {
                content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Edit"),
                children: ($$renderer4) => {
                  $$renderer4.push(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik">`);
                  Pencil($$renderer4, {});
                  $$renderer4.push(`<!----></button>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (onDelete) {
              $$renderer3.push("<!--[0-->");
              Tooltip($$renderer3, {
                content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Delete"),
                children: ($$renderer4) => {
                  $$renderer4.push(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik">`);
                  GarbageBin($$renderer4, {});
                  $$renderer4.push(`<!----></button>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (message?.is_pinned) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div${attr_class(`flex ${showUserProfile ? "mb-0.5" : "mt-0.5"}`, "svelte-s6wdik")}><div class="ml-8.5 flex items-center gap-1 px-1 rounded-full text-xs svelte-s6wdik">`);
          Pin($$renderer3, { className: "size-3 text-yellow-500 dark:text-yellow-300" });
          $$renderer3.push(`<!----> <span class="text-gray-500 svelte-s6wdik">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Pinned"))}</span></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (message?.reply_to_message?.user) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="relative text-xs mb-1 svelte-s6wdik"><div class="absolute h-3 w-7 left-[18px] top-2 rounded-tl-lg border-t-[1.5px] border-l-[1.5px] border-gray-200 dark:border-gray-700 z-0 svelte-s6wdik"></div> <button class="ml-12 flex items-center space-x-2 relative z-0 svelte-s6wdik">`);
          if (message?.reply_to_message?.meta?.model_id) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<img${attr("src", `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${message.reply_to_message.meta.model_id}`)}${attr("alt", message.reply_to_message.meta.model_name ?? message.reply_to_message.meta.model_id)} class="size-4 ml-0.5 rounded-full object-cover svelte-s6wdik"/>`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<img${attr("src", message.reply_to_message.user?.role === "webhook" ? `${WEBUI_API_BASE_URL}/channels/webhooks/${message.reply_to_message.user?.id}/profile/image` : `${WEBUI_API_BASE_URL}/users/${message.reply_to_message.user?.id}/profile/image`)}${attr("alt", message.reply_to_message.user?.name ?? store_get($$store_subs ??= {}, "$i18n", i18n2).t("Unknown User"))} class="size-4 ml-0.5 rounded-full object-cover svelte-s6wdik"/>`);
          }
          $$renderer3.push(`<!--]--> <div class="shrink-0 svelte-s6wdik">${escape_html(message?.reply_to_message.meta?.model_name ?? message?.reply_to_message.user?.name ?? store_get($$store_subs ??= {}, "$i18n", i18n2).t("Unknown User"))}</div> <div class="italic text-sm text-gray-500 dark:text-gray-400 line-clamp-1 w-full flex-1 svelte-s6wdik">`);
          Markdown($$renderer3, {
            id: `${renderedMessageId}-reply-to`,
            content: message?.reply_to_message?.content,
            allowEmbeds: false
          });
          $$renderer3.push(`<!----></div></button></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <div${attr_class(` flex w-full message-${stringify(message.id)} `, "svelte-s6wdik")}${attr("id", `message-${stringify(renderedMessageId)}`)}${attr("dir", store_get($$store_subs ??= {}, "$settings", settings).chatDirection)}><div${attr_class(`shrink-0 mr-1 w-9`, "svelte-s6wdik")}>`);
        if (showUserProfile) {
          $$renderer3.push("<!--[0-->");
          if (message?.meta?.model_id) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<img${attr("src", `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${message.meta.model_id}`)}${attr("alt", message.meta.model_name ?? message.meta.model_id)} class="size-8 translate-y-1 ml-0.5 object-cover rounded-full svelte-s6wdik"/>`);
          } else if (message.user?.role === "webhook") {
            $$renderer3.push("<!--[1-->");
            ProfileImage($$renderer3, {
              src: `${WEBUI_API_BASE_URL}/channels/webhooks/${message.user?.id}/profile/image`,
              className: "size-8 ml-0.5"
            });
          } else {
            $$renderer3.push("<!--[-1-->");
            ProfilePreview($$renderer3, {
              user: message.user,
              children: ($$renderer4) => {
                ProfileImage($$renderer4, {
                  src: `${WEBUI_API_BASE_URL}/users/${message.user?.id}/profile/image`,
                  className: "size-8 ml-0.5"
                });
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[-1-->");
          if (message.created_at) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="mt-1.5 flex shrink-0 items-center text-xs self-center invisible group-hover:visible text-gray-500 font-normal first-letter:capitalize svelte-s6wdik">`);
            Tooltip($$renderer3, {
              content: dayjs(message.created_at / 1e6).format("LLLL"),
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(dayjs(message.created_at / 1e6).format("HH:mm"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div> <div class="flex-auto w-0 pl-2 svelte-s6wdik">`);
        if (showUserProfile) {
          $$renderer3.push("<!--[0-->");
          Name($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="self-end text-base shrink-0 font-normal truncate svelte-s6wdik">`);
              if (message?.meta?.model_id) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`${escape_html(message?.meta?.model_name ?? message?.meta?.model_id)}`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`${escape_html(message?.user?.name)}`);
              }
              $$renderer4.push(`<!--]--></div> `);
              if (message.created_at) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="self-center text-xs text-gray-400 font-normal first-letter:capitalize ml-0.5 translate-y-[1px] svelte-s6wdik">`);
                Tooltip($$renderer4, {
                  content: dayjs(message.created_at / 1e6).format("LLLL"),
                  children: ($$renderer5) => {
                    $$renderer5.push(`<span class="line-clamp-1 svelte-s6wdik">`);
                    if (dayjs(message.created_at / 1e6).isToday()) {
                      $$renderer5.push("<!--[0-->");
                      $$renderer5.push(`${escape_html(dayjs(message.created_at / 1e6).format("LT"))}`);
                    } else {
                      $$renderer5.push("<!--[-1-->");
                      $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t(formatDate(message.created_at / 1e6), {
                        LOCALIZED_TIME: dayjs(message.created_at / 1e6).format("LT"),
                        LOCALIZED_DATE: dayjs(message.created_at / 1e6).format("L")
                      }))}`);
                    }
                    $$renderer5.push(`<!--]--></span>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (message?.data === true) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="my-2 svelte-s6wdik">`);
          Skeleton($$renderer3, {});
          $$renderer3.push(`<!----></div>`);
        } else if ((message?.data?.files ?? []).length > 0) {
          $$renderer3.push("<!--[1-->");
          $$renderer3.push(`<div class="my-2.5 w-full flex overflow-x-auto gap-2 flex-wrap svelte-s6wdik"${attr("dir", store_get($$store_subs ??= {}, "$settings", settings)?.chatDirection ?? "auto")}><!--[-->`);
          const each_array = ensure_array_like(message?.data?.files);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let file = each_array[$$index];
            const fileUrl = file.url.startsWith("data") || file.url.startsWith("http") ? file.url : `${WEBUI_API_BASE_URL}/files/${file.url}${file?.content_type ? "/content" : ""}`;
            $$renderer3.push(`<div class="svelte-s6wdik">`);
            if (file.type === "image" || (file?.content_type ?? "").startsWith("image/")) {
              $$renderer3.push("<!--[0-->");
              Image($$renderer3, {
                src: fileUrl,
                alt: file.name,
                imageClassName: " max-h-96 rounded-lg"
              });
            } else if (file.type === "video" || (file?.content_type ?? "").startsWith("video/")) {
              $$renderer3.push("<!--[1-->");
              $$renderer3.push(`<video${attr("src", fileUrl)} controls="" class="max-h-96 rounded-lg svelte-s6wdik"></video>`);
            } else {
              $$renderer3.push("<!--[-1-->");
              FileItem($$renderer3, {
                item: file,
                url: file.url,
                name: file.name,
                type: file.type,
                size: file?.size,
                small: true
              });
            }
            $$renderer3.push(`<!--]--></div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div${attr_class(`min-w-full ${pending ? "opacity-50" : ""}`, "svelte-s6wdik")}>`);
          if (hasStructuredOutput) {
            $$renderer3.push("<!--[0-->");
            StructuredOutputRenderer($$renderer3, {
              id: renderedMessageId,
              output: messageOutput,
              done: message?.meta?.done ?? false,
              editCodeBlock: false
            });
          } else if ((message?.content ?? "").trim() === "" && message?.meta?.model_id) {
            $$renderer3.push("<!--[1-->");
            Skeleton($$renderer3, {});
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<span class="markdown-prose svelte-s6wdik">`);
            Markdown($$renderer3, {
              id: renderedMessageId,
              content: message.content,
              paragraphTag: "span",
              allowEmbeds: !!message?.meta?.model_id
            });
            $$renderer3.push(`<!----></span>`);
            if (message.created_at !== message.updated_at && (message?.meta?.model_id ?? null) === null) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<span class="text-gray-500 text-[10px] pl-1 self-center svelte-s6wdik">(${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("edited"))})</span>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div> `);
          if ((message?.reactions ?? []).length > 0) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="svelte-s6wdik"><div class="flex items-center flex-wrap gap-y-1.5 gap-1 mt-1 mb-2 svelte-s6wdik"><!--[-->`);
            const each_array_1 = ensure_array_like(message.reactions);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let reaction = each_array_1[$$index_1];
              Tooltip($$renderer3, {
                content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("{{NAMES}} reacted with {{REACTION}}", {
                  NAMES: reaction.users.reduce(
                    (acc, u, idx) => {
                      const name = u.id === store_get($$store_subs ??= {}, "$user", user)?.id ? store_get($$store_subs ??= {}, "$i18n", i18n2).t("You") : u.name;
                      const total = reaction.users.length;
                      if (idx < 3) {
                        const separator = idx === 0 ? "" : idx === Math.min(2, total - 1) ? ` ${store_get($$store_subs ??= {}, "$i18n", i18n2).t("and")} ` : ", ";
                        return `${acc}${separator}${name}`;
                      }
                      if (idx === 3 && total > 4) {
                        return acc + ` ${store_get($$store_subs ??= {}, "$i18n", i18n2).t("and {{COUNT}} others", { COUNT: total - 3 })}`;
                      }
                      return acc;
                    },
                    ""
                  ).trim(),
                  REACTION: `:${reaction.name}:`
                }),
                children: ($$renderer4) => {
                  $$renderer4.push(`<button${attr_class(
                    `flex items-center gap-1.5 transition rounded-xl px-2 py-1 cursor-pointer ${reaction.users.map((u) => u.id).includes(store_get($$store_subs ??= {}, "$user", user)?.id) ? " bg-blue-300/10 outline outline-blue-500/50 outline-1" : "bg-gray-300/10 dark:bg-gray-500/10 hover:outline hover:outline-gray-700/30 dark:hover:outline-gray-300/30 hover:outline-1"}`,
                    "svelte-s6wdik"
                  )}>`);
                  Emoji($$renderer4, { shortCode: reaction.name });
                  $$renderer4.push(`<!----> `);
                  if (reaction.users.length > 0) {
                    $$renderer4.push("<!--[0-->");
                    $$renderer4.push(`<div class="text-xs font-normal text-gray-500 dark:text-gray-400 svelte-s6wdik">${escape_html(reaction.users?.length)}</div>`);
                  } else {
                    $$renderer4.push("<!--[-1-->");
                  }
                  $$renderer4.push(`<!--]--></button>`);
                },
                $$slots: { default: true }
              });
            }
            $$renderer3.push(`<!--]--> `);
            if (onReaction) {
              $$renderer3.push("<!--[0-->");
              EmojiPicker($$renderer3, {
                onSubmit: (name) => {
                  onReaction(name);
                },
                children: ($$renderer4) => {
                  Tooltip($$renderer4, {
                    content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Add Reaction"),
                    children: ($$renderer5) => {
                      $$renderer5.push(`<div class="flex items-center gap-1.5 bg-gray-500/10 hover:outline hover:outline-gray-700/30 dark:hover:outline-gray-300/30 hover:outline-1 transition rounded-xl px-1 py-1 cursor-pointer text-gray-500 dark:text-gray-400 svelte-s6wdik">`);
                      FaceSmile($$renderer5, {});
                      $$renderer5.push(`<!----></div>`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--></div></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (!thread && message.reply_count > 0) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="flex items-center gap-1.5 -mt-0.5 mb-1.5 svelte-s6wdik"><button class="flex items-center text-xs py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition svelte-s6wdik"><span class="font-normal mr-1 svelte-s6wdik">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("{{COUNT}} Replies", { COUNT: message.reply_count }))}</span><span class="svelte-s6wdik"> - ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Last reply"))}
										${escape_html(dayjs.unix(message.latest_reply_at / 1e9).fromNow())}</span> <span class="ml-1 svelte-s6wdik">`);
            ChevronRight($$renderer3, { className: "size-2.5", strokeWidth: "3" });
            $$renderer3.push(`<!----></span></button></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div></div></div></div>`);
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
      className,
      message,
      channel,
      showUserProfile,
      thread,
      id,
      replyToMessage,
      disabled,
      pending,
      onDelete,
      onEdit,
      onReply,
      onPin,
      onThread,
      onReaction
    });
  });
}
function Messages($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    dayjs.extend(relativeTime);
    dayjs.extend(isToday);
    dayjs.extend(isYesterday);
    const i18n2 = getContext("i18n");
    let id = fallback($$props["id"], null);
    let channel = fallback($$props["channel"], null);
    let messages = fallback($$props["messages"], () => [], true);
    let replyToMessage = fallback($$props["replyToMessage"], null);
    let top = fallback($$props["top"], false);
    let thread = fallback($$props["thread"], false);
    let onLoad = fallback($$props["onLoad"], () => {
    });
    let onReply = fallback($$props["onReply"], () => {
    });
    let onThread = fallback($$props["onThread"], () => {
    });
    let onPin = fallback($$props["onPin"], () => {
    });
    if (messages) {
      $$renderer2.push("<!--[0-->");
      const messageList = messages.slice().reverse();
      $$renderer2.push(`<div>`);
      if (!top) {
        $$renderer2.push("<!--[0-->");
        Loader($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">`);
            Spinner($$renderer3, { className: " size-4" });
            $$renderer3.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Loading..."))}</div></div>`);
          },
          $$slots: { default: true }
        });
      } else if (!thread) {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<div class="px-5 max-w-full mx-auto">`);
        if (channel) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex flex-col gap-1.5 pb-5 pt-10">`);
          if (channel?.type === "dm") {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="flex ml-[1px] mr-0.5"><!--[-->`);
            const each_array = ensure_array_like(channel.users.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id).slice(0, 2));
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let u = each_array[index];
              $$renderer2.push(`<img${attr("src", `${WEBUI_API_BASE_URL}/users/${u.id}/profile/image`)}${attr("alt", u.name)}${attr_class(` size-7.5 rounded-full border-2 border-white dark:border-gray-900 ${index === 1 ? "-ml-2.5" : ""}`)}/>`);
            }
            $$renderer2.push(`<!--]--></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]--> <div class="text-2xl font-normal capitalize">`);
          if (channel?.name) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`${escape_html(channel.name)}`);
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`${escape_html(channel?.users?.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id).map((u) => u.name).join(", "))}`);
          }
          $$renderer2.push(`<!--]--></div> <div class="text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("This channel was created on {{createdAt}}. This is the very beginning of the {{channelName}} channel.", {
            createdAt: dayjs(channel.created_at / 1e6).format("MMMM D, YYYY"),
            channelName: channel.name
          }))}</div></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="flex justify-center text-xs items-center gap-2 py-5"><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Start of the channel"))}</div></div>`);
        }
        $$renderer2.push(`<!--]--> `);
        if (messageList.length > 0) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<hr class="border-gray-50 dark:border-gray-700/20 py-2.5 w-full"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_1 = ensure_array_like(messageList);
      for (let messageIdx = 0, $$length = each_array_1.length; messageIdx < $$length; messageIdx++) {
        let message = each_array_1[messageIdx];
        Message($$renderer2, {
          message,
          channel,
          thread,
          id,
          replyToMessage: replyToMessage?.id === message.id,
          disabled: !channel?.write_access || message?.temp_id,
          pending: !!message?.temp_id,
          showUserProfile: messageIdx === 0 || messageList.at(messageIdx - 1)?.user_id !== message.user_id || messageList.at(messageIdx - 1)?.user?.id !== message.user?.id || messageList.at(messageIdx - 1)?.meta?.model_id !== message?.meta?.model_id || message?.reply_to_message !== null,
          onDelete: () => {
            messages = messages.filter((m) => m.id !== message.id);
            deleteMessage(localStorage.token, message.channel_id, message.id).catch((error) => {
              toast.error(`${error}`);
              return null;
            });
          },
          onEdit: (content) => {
            messages = messages.map((m) => {
              if (m.id === message.id) {
                m.content = content;
              }
              return m;
            });
            updateMessage(localStorage.token, message.channel_id, message.id, { content }).catch((error) => {
              toast.error(`${error}`);
              return null;
            });
          },
          onReply: (message2) => {
            onReply(message2);
          },
          onPin: async (message2) => {
            const pinned = !message2.is_pinned;
            const pinnedBy = pinned ? store_get($$store_subs ??= {}, "$user", user)?.id ?? null : null;
            const pinnedAt = pinned ? Date.now() * 1e6 : null;
            messages = messages.map((m) => {
              if (m.id === message2.id) {
                m.is_pinned = pinned;
                m.pinned_by = pinnedBy;
                m.pinned_at = pinnedAt;
              }
              return m;
            });
            onPin(message2.id, pinned, pinnedBy, pinnedAt);
            await pinMessage(localStorage.token, message2.channel_id, message2.id, pinned).catch((error) => {
              toast.error(`${error}`);
              return null;
            });
          },
          onThread: (id2) => {
            onThread(id2);
          },
          onReaction: (name) => {
            if ((message?.reactions ?? []).find((reaction) => reaction.name === name)?.users?.some((u) => u.id === store_get($$store_subs ??= {}, "$user", user)?.id) ?? false) {
              messages = messages.map((m) => {
                if (m.id === message.id) {
                  const reaction = m.reactions.find((reaction2) => reaction2.name === name);
                  if (reaction) {
                    reaction.users = reaction.users.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id);
                    reaction.count = reaction.users.length;
                    if (reaction.count === 0) {
                      m.reactions = m.reactions.filter((r) => r.name !== name);
                    }
                  }
                }
                return m;
              });
              removeReaction(localStorage.token, message.channel_id, message.id, name).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            } else {
              messages = messages.map((m) => {
                if (m.id === message.id) {
                  if (m.reactions) {
                    const reaction = m.reactions.find((reaction2) => reaction2.name === name);
                    if (reaction) {
                      reaction.users.push({
                        id: store_get($$store_subs ??= {}, "$user", user)?.id,
                        name: store_get($$store_subs ??= {}, "$user", user)?.name
                      });
                      reaction.count = reaction.users.length;
                    } else {
                      m.reactions.push({
                        name,
                        users: [
                          {
                            id: store_get($$store_subs ??= {}, "$user", user)?.id,
                            name: store_get($$store_subs ??= {}, "$user", user)?.name
                          }
                        ],
                        count: 1
                      });
                    }
                  }
                }
                return m;
              });
              addReaction(localStorage.token, message.channel_id, message.id, name).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            }
          }
        });
      }
      $$renderer2.push(`<!--]--> <div class="pb-6"></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      channel,
      messages,
      replyToMessage,
      top,
      thread,
      onLoad,
      onReply,
      onThread,
      onPin
    });
  });
}
function MessageInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n2 = getContext("i18n");
    let placeholder = fallback($$props["placeholder"], () => store_get($$store_subs ??= {}, "$i18n", i18n2).t("Type here..."), true);
    let chatInputElement = $$props["chatInputElement"];
    let id = fallback($$props["id"], null);
    let channel = fallback($$props["channel"], null);
    let typingUsers = fallback($$props["typingUsers"], () => [], true);
    let inputLoading = fallback($$props["inputLoading"], false);
    let onSubmit = fallback($$props["onSubmit"], (e) => {
    });
    let onChange = fallback($$props["onChange"], (e) => {
    });
    let onStop = fallback($$props["onStop"], (e) => {
    });
    let scrollEnd = fallback($$props["scrollEnd"], true);
    let scrollToBottom = fallback($$props["scrollToBottom"], () => {
    });
    let disabled = fallback($$props["disabled"], false);
    let acceptFiles = fallback($$props["acceptFiles"], true);
    let showFormattingToolbar = fallback($$props["showFormattingToolbar"], true);
    let userSuggestions = fallback($$props["userSuggestions"], false);
    let channelSuggestions = fallback($$props["channelSuggestions"], false);
    let replyToMessage = fallback($$props["replyToMessage"], null);
    let typingUsersClassName = fallback($$props["typingUsersClassName"], "from-white dark:from-gray-900");
    let files = [];
    let inputVariables = {};
    const inputVariableHandler = async (text) => {
      inputVariables = extractInputVariables(text);
      if (Object.keys(inputVariables).length === 0) {
        return text;
      }
      return await new Promise((resolve) => {
      });
    };
    const textVariableHandler = async (text) => {
      if (text.includes("{{CLIPBOARD}}")) {
        const clipboardText = await navigator.clipboard.readText().catch((err) => {
          toast.error(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Failed to read clipboard contents"));
          return "{{CLIPBOARD}}";
        });
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
          for (const type of item.types) {
            if (type.startsWith("image/")) {
              const blob = await item.getType(type);
              const file = new File([blob], `clipboard-image.${type.split("/")[1]}`, { type });
              inputFilesHandler([file]);
            }
          }
        }
        text = text.replaceAll("{{CLIPBOARD}}", clipboardText.replaceAll("\r\n", "\n"));
      }
      if (text.includes("{{USER_LOCATION}}")) {
        let location;
        try {
          location = await getUserPosition();
        } catch (error) {
          toast.error(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Location access not allowed"));
          location = "LOCATION_UNKNOWN";
        }
        text = text.replaceAll("{{USER_LOCATION}}", String(location));
      }
      const sessionUser = await getSessionUser(localStorage.token);
      if (text.includes("{{USER_NAME}}")) {
        const name = sessionUser?.name || "User";
        text = text.replaceAll("{{USER_NAME}}", name);
      }
      if (text.includes("{{USER_EMAIL}}")) {
        const email = sessionUser?.email || "";
        if (email) {
          text = text.replaceAll("{{USER_EMAIL}}", email);
        }
      }
      if (text.includes("{{USER_BIO}}")) {
        const bio = sessionUser?.bio || "";
        if (bio) {
          text = text.replaceAll("{{USER_BIO}}", bio);
        }
      }
      if (text.includes("{{USER_GENDER}}")) {
        const gender = sessionUser?.gender || "";
        if (gender) {
          text = text.replaceAll("{{USER_GENDER}}", gender);
        }
      }
      if (text.includes("{{USER_BIRTH_DATE}}")) {
        const birthDate = sessionUser?.date_of_birth || "";
        if (birthDate) {
          text = text.replaceAll("{{USER_BIRTH_DATE}}", birthDate);
        }
      }
      if (text.includes("{{USER_AGE}}")) {
        const birthDate = sessionUser?.date_of_birth || "";
        if (birthDate) {
          const age = getAge(birthDate);
          text = text.replaceAll("{{USER_AGE}}", age);
        }
      }
      if (text.includes("{{USER_LANGUAGE}}")) {
        const language = localStorage.getItem("locale") || "en-US";
        text = text.replaceAll("{{USER_LANGUAGE}}", language);
      }
      if (text.includes("{{CURRENT_DATE}}")) {
        const date = getFormattedDate();
        text = text.replaceAll("{{CURRENT_DATE}}", date);
      }
      if (text.includes("{{CURRENT_TIME}}")) {
        const time = getFormattedTime();
        text = text.replaceAll("{{CURRENT_TIME}}", time);
      }
      if (text.includes("{{CURRENT_DATETIME}}")) {
        const dateTime = getCurrentDateTime();
        text = text.replaceAll("{{CURRENT_DATETIME}}", dateTime);
      }
      if (text.includes("{{CURRENT_TIMEZONE}}")) {
        const timezone = getUserTimezone();
        text = text.replaceAll("{{CURRENT_TIMEZONE}}", timezone);
      }
      if (text.includes("{{CURRENT_WEEKDAY}}")) {
        const weekday = getWeekday();
        text = text.replaceAll("{{CURRENT_WEEKDAY}}", weekday);
      }
      return text;
    };
    const setText = async (text, cb) => {
      const chatInput = document.getElementById("chat-input");
      if (chatInput) {
        if (text !== "") {
          text = await textVariableHandler(text || "");
        }
        chatInputElement?.setText(text);
        chatInputElement?.focus();
        if (text !== "") {
          text = await inputVariableHandler(text);
        }
        await tick();
        if (cb) await cb(text);
      }
    };
    let command = "";
    let showCommands = fallback($$props["showCommands"], false);
    const inputFilesHandler = async (inputFiles) => {
      inputFiles.forEach(async (file) => {
        console.info("Processing file:", {
          name: file.name,
          type: file.type,
          size: file.size,
          extension: file.name.split(".").at(-1)
        });
        if ((store_get($$store_subs ??= {}, "$config", config)?.file?.max_size ?? null) !== null && file.size > (store_get($$store_subs ??= {}, "$config", config)?.file?.max_size ?? 0) * 1024 * 1024) {
          /* @__PURE__ */ console.error("File exceeds max size limit:", {
            fileSize: file.size,
            maxSize: (store_get($$store_subs ??= {}, "$config", config)?.file?.max_size ?? 0) * 1024 * 1024
          });
          toast.error(store_get($$store_subs ??= {}, "$i18n", i18n2).t(`File size should not exceed {{maxSize}} MB.`, {
            maxSize: store_get($$store_subs ??= {}, "$config", config)?.file?.max_size
          }));
          return;
        }
        if (file["type"].startsWith("image/")) {
          const compressImageHandler = async (imageUrl, settings2 = {}, config2 = {}) => {
            const settingsCompression = (settings2?.imageCompression && settings2?.imageCompressionInChannels) ?? false;
            const configWidth = config2?.file?.image_compression?.width ?? null;
            const configHeight = config2?.file?.image_compression?.height ?? null;
            if (!settingsCompression && !configWidth && !configHeight) {
              return imageUrl;
            }
            let width = null;
            let height = null;
            if (settingsCompression) {
              width = settings2?.imageCompressionSize?.width ?? null;
              height = settings2?.imageCompressionSize?.height ?? null;
            }
            if (configWidth && (width === null || width > configWidth)) {
              width = configWidth;
            }
            if (configHeight && (height === null || height > configHeight)) {
              height = configHeight;
            }
            if (width || height) {
              return await compressImage(imageUrl, width, height);
            }
            return imageUrl;
          };
          let reader = new FileReader();
          reader.onload = async (event) => {
            let imageUrl = event.target.result;
            imageUrl = await compressImageHandler(imageUrl, store_get($$store_subs ??= {}, "$settings", settings), store_get($$store_subs ??= {}, "$config", config));
            const blob = await (await fetch(imageUrl)).blob();
            const compressedFile = new File([blob], file.name, { type: file.type });
            uploadFileHandler(compressedFile, false);
          };
          reader.readAsDataURL(file["type"] === "image/heic" ? await convertHeicToJpeg(file) : file);
        } else {
          uploadFileHandler(file);
        }
      });
    };
    const uploadFileHandler = async (file, process = true) => {
      const tempItemId = v4();
      const fileItem = {
        type: "file",
        file: "",
        id: null,
        url: "",
        name: file.name,
        collection_name: "",
        status: "uploading",
        size: file.size,
        error: "",
        itemId: tempItemId
      };
      if (fileItem.size == 0) {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n2).t("You cannot upload an empty file."));
        return null;
      }
      files = [...files, fileItem];
      try {
        let metadata = {
          channel_id: channel.id,
          // If the file is an audio file, provide the language for STT.
          ...(file.type.startsWith("audio/") || file.type.startsWith("video/")) && store_get($$store_subs ??= {}, "$settings", settings)?.audio?.stt?.language ? {
            language: store_get($$store_subs ??= {}, "$settings", settings)?.audio?.stt?.language
          } : {}
        };
        const uploadedFile = await uploadFile(localStorage.token, file, metadata, process);
        if (uploadedFile) {
          console.info("File upload completed:", {
            id: uploadedFile.id,
            name: fileItem.name,
            collection: uploadedFile?.meta?.collection_name
          });
          if (uploadedFile.error) {
            /* @__PURE__ */ console.error("File upload warning:", uploadedFile.error);
            toast.warning(uploadedFile.error);
          }
          fileItem.status = "uploaded";
          fileItem.file = uploadedFile;
          fileItem.id = uploadedFile.id;
          fileItem.collection_name = uploadedFile?.meta?.collection_name || uploadedFile?.collection_name;
          fileItem.content_type = uploadedFile.meta?.content_type || uploadedFile.content_type;
          fileItem.url = `${uploadedFile.id}`;
          files = files;
        } else {
          files = files.filter((item) => item?.itemId !== tempItemId);
        }
      } catch (e) {
        toast.error(`${e}`);
        files = files.filter((item) => item?.itemId !== tempItemId);
      }
    };
    showCommands = ["/"].includes(command?.charAt(0));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
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
      placeholder,
      chatInputElement,
      id,
      channel,
      typingUsers,
      inputLoading,
      onSubmit,
      onChange,
      onStop,
      scrollEnd,
      scrollToBottom,
      disabled,
      acceptFiles,
      showFormattingToolbar,
      userSuggestions,
      channelSuggestions,
      replyToMessage,
      typingUsersClassName,
      showCommands,
      setText
    });
  });
}
function UserAlt($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true"${attr("stroke-width", strokeWidth)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"${attr_class(clsx(className))}><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function UserList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    dayjs.extend(relativeTime);
    dayjs.extend(localizedFormat);
    const i18n2 = getContext("i18n");
    let channel = fallback($$props["channel"], null);
    let onAdd = fallback($$props["onAdd"], null);
    let onRemove = fallback($$props["onRemove"], null);
    let search = fallback($$props["search"], true);
    let sort = fallback($$props["sort"], true);
    let page2 = 1;
    let users = null;
    let total = null;
    let query = "";
    let orderBy = "name";
    let direction = "asc";
    const getUserList = async () => {
      try {
        const res = await getChannelMembersById(localStorage.token, channel.id, query, orderBy, direction, page2).catch((error) => {
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
    if (channel !== null && page2 && orderBy && direction) {
      getUserList();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col justify-center">`);
      if (users === null || total === null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="my-10">`);
        Spinner($$renderer3, { className: "size-5" });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="flex items-center justify-between px-2 mb-1"><div class="flex gap-1 items-center"><span class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Members"))}</span> <span class="text-sm text-gray-500">${escape_html(total)}</span></div> `);
        if (onAdd) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div><button type="button" class="px-3 py-1.5 gap-1 rounded-xl bg-gray-100/50 dark:text-white dark:bg-gray-850/50 text-black transition font-normal text-xs flex items-center justify-center">`);
          Plus($$renderer3, { className: "size-3.5 " });
          $$renderer3.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Add Member"))}</span></button></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (search) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex gap-1 px-1 mb-1"><div class="flex w-full space-x-2"><div class="flex flex-1 items-center"><div class="self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class="w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"${attr("value", query)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n2).t("Search"))}/></div></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (users.length > 0) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="scrollbar-hidden relative whitespace-nowrap w-full max-w-full"><div class="text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-full"><div class="w-full"><!--[-->`);
          const each_array = ensure_array_like(users);
          for (let userIdx = 0, $$length = each_array.length; userIdx < $$length; userIdx++) {
            let user$1 = each_array[userIdx];
            $$renderer3.push(`<div class="dark:border-gray-850 text-xs flex items-center justify-between"><div class="px-2 py-1.5 font-normal text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2">`);
            ProfilePreview($$renderer3, {
              user: user$1,
              side: "right",
              align: "center",
              sideOffset: 6,
              children: ($$renderer4) => {
                $$renderer4.push(`<img class="rounded-2xl w-6 h-6 object-cover flex-shrink-0"${attr("src", `${WEBUI_API_BASE_URL}/users/${user$1.id}/profile/image`)} alt="user"/>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Tooltip($$renderer3, {
              content: user$1.email,
              placement: "top-start",
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="font-normal truncate">${escape_html(user$1.name)}</div>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            if (user$1?.is_active) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<div><span class="relative flex size-1.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex size-1.5 rounded-full bg-green-500"></span></span></div>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--></div></div> <div class="px-2 py-1 flex items-center gap-1 translate-y-0.5"><div>`);
            Badge($$renderer3, {
              type: user$1.role === "admin" ? "info" : user$1.role === "user" ? "success" : "muted",
              content: store_get($$store_subs ??= {}, "$i18n", i18n2).t(user$1.role)
            });
            $$renderer3.push(`<!----></div> `);
            if (onRemove) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<div><button class="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-850 transition disabled:opacity-50 disabled:cursor-not-allowed" type="button"${attr("disabled", user$1.id === store_get($$store_subs ??= {}, "$_user", user)?.id, true)}>`);
              XMark($$renderer3, {});
              $$renderer3.push(`<!----></button></div>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--></div></div>`);
          }
          $$renderer3.push(`<!--]--></div></div></div> `);
          if (total > 30) {
            $$renderer3.push("<!--[0-->");
            Pagination_1($$renderer3, {
              count: total,
              perPage: 30,
              get page() {
                return page2;
              },
              set page($$value) {
                page2 = $$value;
                $$settled = false;
              }
            });
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div class="text-gray-500 text-xs text-center py-5 px-10">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("No users were found."))}</div>`);
        }
        $$renderer3.push(`<!--]-->`);
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
    bind_props($$props, { channel, onAdd, onRemove, search, sort });
  });
}
function AddMembersModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n2 = getContext("i18n");
    let show = fallback($$props["show"], false);
    let channel = fallback($$props["channel"], null);
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let groupIds = [];
    let userIds = [];
    let loading = false;
    const reset = () => {
      userIds = [];
      groupIds = [];
      loading = false;
    };
    if (!show) {
      reset();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
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
            $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 mb-1"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Add Members"))}</div></div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
            XMark($$renderer4, { className: "size-4" });
            $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full h-full pb-2">`);
            MemberSelector($$renderer4, {
              includeGroups: true,
              get userIds() {
                return userIds;
              },
              set userIds($$value) {
                userIds = $$value;
                $$settled = false;
              },
              get groupIds() {
                return groupIds;
              },
              set groupIds($$value) {
                groupIds = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div> <div class="flex justify-end pt-3 text-sm font-normal gap-1.5"><button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${loading ? " cursor-not-allowed" : ""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Add"))} `);
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
    bind_props($$props, { show, channel, onUpdate });
  });
}
function ChannelInfoModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n2 = getContext("i18n");
    let show = fallback($$props["show"], false);
    let channel = fallback($$props["channel"], null);
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let showAddMembersModal = false;
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
    const removeMemberHandler = async (userId) => {
      const res = await removeMembersById(localStorage.token, channel.id, { user_ids: [userId] }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Member removed successfully"));
        onUpdate();
      } else {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Failed to remove member"));
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (channel) {
        $$renderer3.push("<!--[0-->");
        AddMembersModal($$renderer3, {
          channel,
          onUpdate,
          get show() {
            return showAddMembersModal;
          },
          set show($$value) {
            showAddMembersModal = $$value;
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
            $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 mb-1"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0">`);
            if (channel?.type === "dm") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="text-left self-center overflow-hidden w-full line-clamp-1 flex-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Direct Message"))}</div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<div class="size-4 justify-center flex items-center">`);
              if (isPublicChannel(channel)) {
                $$renderer4.push("<!--[0-->");
                Hashtag($$renderer4, { className: "size-3.5", strokeWidth: "2.5" });
              } else {
                $$renderer4.push("<!--[-1-->");
                Lock($$renderer4, { className: "size-5.5", strokeWidth: "2" });
              }
              $$renderer4.push(`<!--]--></div> <div class="text-left self-center overflow-hidden w-full line-clamp-1 flex-1">${escape_html(channel.name)}</div>`);
            }
            $$renderer4.push(`<!--]--></div></div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
            XMark($$renderer4, { className: "size-4" });
            $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-3 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full h-full pb-2">`);
            UserList($$renderer4, {
              channel,
              onAdd: channel?.type === "group" && channel?.is_manager ? () => {
                showAddMembersModal = true;
              } : null,
              onRemove: channel?.type === "group" && channel?.is_manager ? (userId) => {
                removeMemberHandler(userId);
              } : null,
              search: channel?.type !== "dm",
              sort: channel?.type !== "dm"
            });
            $$renderer4.push(`<!----></div></form></div></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
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
    bind_props($$props, { show, channel, onUpdate });
  });
}
function Users($$renderer, $$props) {
  let className = fallback($$props["className"], "size-3");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function PinnedMessagesModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n2 = getContext("i18n");
    let show = fallback($$props["show"], false);
    let channel = fallback($$props["channel"], null);
    let onPin = fallback($$props["onPin"], (messageId, pinned) => {
    });
    let page2 = 1;
    let pinnedMessages = null;
    let allItemsLoaded = false;
    const getPinnedMessages = async () => {
      if (!channel) return;
      if (allItemsLoaded) return;
      try {
        const res = await getChannelPinnedMessages(localStorage.token, channel.id, page2).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          pinnedMessages = [...pinnedMessages ?? [], ...res];
          if (res.length === 0) {
            allItemsLoaded = true;
          }
        }
      } catch (error) {
        /* @__PURE__ */ console.error("Error fetching pinned messages:", error);
      } finally {
      }
    };
    const init = () => {
      page2 = 1;
      pinnedMessages = null;
      allItemsLoaded = false;
      getPinnedMessages();
    };
    if (show) {
      init();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
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
            $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 mb-1"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Pinned Messages"))}</div></div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
            XMark($$renderer4, { className: "size-4" });
            $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><div class="flex flex-col w-full h-full pb-2 gap-1">`);
            if (pinnedMessages === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="my-10">`);
              Spinner($$renderer4, { className: "size-5" });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<div class="flex flex-col gap-2 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent py-2">`);
              if (pinnedMessages.length === 0) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="text-center text-xs text-gray-500 dark:text-gray-400 py-6">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("No pinned messages"))}</div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(pinnedMessages);
                for (let messageIdx = 0, $$length = each_array.length; messageIdx < $$length; messageIdx++) {
                  let message = each_array[messageIdx];
                  Message($$renderer4, {
                    className: "rounded-xl px-2",
                    message,
                    channel,
                    onPin: async (message2) => {
                      pinnedMessages = pinnedMessages.filter((m) => m.id !== message2.id);
                      onPin(message2.id, !message2.is_pinned);
                      await pinMessage(localStorage.token, message2.channel_id, message2.id, !message2.is_pinned).catch((error) => {
                        toast.error(`${error}`);
                        return null;
                      });
                      init();
                    },
                    onReaction: false,
                    onThread: false,
                    onReply: false,
                    onEdit: false,
                    onDelete: false
                  });
                  $$renderer4.push(`<!----> `);
                  if (messageIdx === pinnedMessages.length - 1 && !allItemsLoaded) {
                    $$renderer4.push("<!--[0-->");
                    Loader($$renderer4, {
                      children: ($$renderer5) => {
                        $$renderer5.push(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2">`);
                        Spinner($$renderer5, { className: " size-4" });
                        $$renderer5.push(`<!----> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Loading..."))}</div></div>`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer4.push("<!--[-1-->");
                  }
                  $$renderer4.push(`<!--]-->`);
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]--></div>`);
            }
            $$renderer4.push(`<!--]--></div></div></div></div>`);
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
    bind_props($$props, { show, channel, onPin });
  });
}
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n2 = getContext("i18n");
    let showChannelPinnedMessagesModal = false;
    let showChannelInfoModal = false;
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
    let channel = $$props["channel"];
    let onPin = fallback($$props["onPin"], (messageId, pinned) => {
    });
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      PinnedMessagesModal($$renderer3, {
        channel,
        onPin,
        get show() {
          return showChannelPinnedMessagesModal;
        },
        set show($$value) {
          showChannelPinnedMessagesModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      ChannelInfoModal($$renderer3, {
        channel,
        onUpdate,
        get show() {
          return showChannelInfoModal;
        },
        set show($$value) {
          showChannelInfoModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <nav class="sticky top-0 z-30 w-full px-1.5 py-1 -mb-8 flex items-center drag-region flex flex-col"><div id="navbar-bg-gradient-to-b" class="bg-linear-to-b via-50% from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent pointer-events-none absolute inset-0 -bottom-7 z-[-1]"></div> <div class="flex max-w-full w-full mx-auto px-1 pt-0.5 bg-transparent"><div class="flex items-center w-full max-w-full">`);
      if (store_get($$store_subs ??= {}, "$mobile", mobile)) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div${attr_class(`${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "md:hidden" : ""} mr-1.5 mt-0.5 self-start flex flex-none items-center text-gray-600 dark:text-gray-400`)}>`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? store_get($$store_subs ??= {}, "$i18n", i18n2).t("Close Sidebar") : store_get($$store_subs ??= {}, "$i18n", i18n2).t("Open Sidebar"),
          interactive: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<button id="sidebar-toggle-button" class="cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class="self-center p-1.5">`);
            Sidebar($$renderer4, { className: "size-4" });
            $$renderer4.push(`<!----></div></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div${attr_class(`flex-1 overflow-hidden max-w-full py-0.5 flex items-center ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "ml-1" : ""} `)}>`);
      if (channel) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex items-center gap-0.5 shrink-0">`);
        if (channel?.type === "dm") {
          $$renderer3.push("<!--[0-->");
          if (channel?.users) {
            $$renderer3.push("<!--[0-->");
            const channelMembers = channel.users.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id);
            $$renderer3.push(`<div class="flex mr-1.5 relative"><!--[-->`);
            const each_array = ensure_array_like(channelMembers.slice(0, 2));
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let u = each_array[index];
              $$renderer3.push(`<img${attr("src", `${WEBUI_API_BASE_URL}/users/${u.id}/profile/image`)}${attr("alt", u.name)}${attr_class(` size-6.5 rounded-full border-2 border-white dark:border-gray-900 ${index === 1 ? "-ml-3" : ""}`)}/>`);
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
            Users($$renderer3, { className: "size-4 ml-1 mr-0.5", strokeWidth: "2" });
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div class="size-4.5 justify-center flex items-center">`);
          if (isPublicChannel(channel)) {
            $$renderer3.push("<!--[0-->");
            Hashtag($$renderer3, { className: "size-3.5", strokeWidth: "2.5" });
          } else {
            $$renderer3.push("<!--[-1-->");
            Lock($$renderer3, { className: "size-5", strokeWidth: "2" });
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--> <div class="text-left self-center overflow-hidden w-full line-clamp-1 flex-1">`);
        if (channel?.name) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`${escape_html(channel.name)}`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`${escape_html(channel?.users?.filter((u) => u.id !== store_get($$store_subs ??= {}, "$user", user)?.id).map((u) => u.name).join(", "))}`);
        }
        $$renderer3.push(`<!--]--></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="self-start flex flex-none items-center text-gray-600 dark:text-gray-400 gap-1 shrink-0">`);
      if (channel) {
        $$renderer3.push("<!--[0-->");
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Pinned Messages"),
          children: ($$renderer4) => {
            $$renderer4.push(`<button class="flex cursor-pointer py-1.5 px-1.5 border dark:border-gray-850 border-gray-50 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Pinned Messages" type="button"><div class="flex items-center gap-0.5 m-auto self-center shrink-0">`);
            Pin($$renderer4, { className: " size-4", strokeWidth: "1.5" });
            $$renderer4.push(`<!----></div></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if (channel?.user_count !== void 0) {
          $$renderer3.push("<!--[0-->");
          Tooltip($$renderer3, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n2).t("Users"),
            children: ($$renderer4) => {
              $$renderer4.push(`<button class="flex cursor-pointer shrink-0 py-1 px-1.5 border dark:border-gray-850 border-gray-50 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Count" type="button"><div class="flex items-center gap-0.5 m-auto self-center shrink-0">`);
              UserAlt($$renderer4, { className: " size-4", strokeWidth: "1.5" });
              $$renderer4.push(`<!----> <div class="text-sm shrink-0">${escape_html(channel.user_count)}</div></div></button>`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></div></div></nav>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { channel, onPin, onUpdate });
  });
}
function Thread($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n2 = getContext("i18n");
    let threadId = fallback($$props["threadId"], null);
    let channel = fallback($$props["channel"], null);
    let onClose = fallback($$props["onClose"], () => {
    });
    let onPin = fallback($$props["onPin"], () => {
    });
    let messages = null;
    let top = false;
    let chatInputElement = null;
    let replyToMessage = null;
    let typingUsers = [];
    let typingUsersTimeout = {};
    const initHandler = async () => {
      messages = null;
      top = false;
      typingUsers = [];
      typingUsersTimeout = {};
      if (channel) {
        messages = await getChannelThreadMessages(localStorage.token, channel.id, threadId);
        if (messages.length < 50) {
          top = true;
        }
        await tick();
      } else {
        goto();
      }
    };
    const channelEventHandler = async (event) => {
      /* @__PURE__ */ console.debug(event);
      if (event.channel_id === channel.id) {
        const type = event?.data?.type ?? null;
        const data = event?.data?.data ?? null;
        if (type === "message") {
          if ((data?.parent_id ?? null) === threadId) {
            if (messages) {
              messages = [data, ...messages];
              if (typingUsers.find((user2) => user2.id === event.user.id)) {
                typingUsers = typingUsers.filter((user2) => user2.id !== event.user.id);
              }
            }
          }
        } else if (type === "message:update") {
          if (messages) {
            const idx = messages.findIndex((message) => message.id === data.id);
            if (idx !== -1) {
              messages[idx] = data;
            }
          }
        } else if (type === "message:delete") {
          if (data.id === threadId) {
            onClose();
          }
          if (messages) {
            messages = messages.filter((message) => message.id !== data.id);
          }
        } else if (type.includes("message:reaction")) {
          if (messages) {
            const idx = messages.findIndex((message) => message.id === data.id);
            if (idx !== -1) {
              messages[idx] = data;
            }
          }
        } else if (type === "typing" && event.message_id === threadId) {
          if (event.user.id === store_get($$store_subs ??= {}, "$user", user)?.id) {
            return;
          }
          typingUsers = data.typing ? [
            ...typingUsers,
            ...typingUsers.find((user2) => user2.id === event.user.id) ? [] : [{ id: event.user.id, name: event.user.name }]
          ] : typingUsers.filter((user2) => user2.id !== event.user.id);
          if (typingUsersTimeout[event.user.id]) {
            clearTimeout(typingUsersTimeout[event.user.id]);
          }
          typingUsersTimeout[event.user.id] = setTimeout(
            () => {
              typingUsers = typingUsers.filter((user2) => user2.id !== event.user.id);
            },
            5e3
          );
        }
      }
    };
    const submitHandler = async ({ content, data }) => {
      if (!content && (data?.files ?? []).length === 0) {
        return;
      }
      await sendMessage(localStorage.token, channel.id, {
        parent_id: threadId,
        reply_to_id: replyToMessage?.id ?? null,
        content,
        data
      }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      replyToMessage = null;
    };
    const onChange = async () => {
      store_get($$store_subs ??= {}, "$socket", socket)?.emit("events:channel", {
        channel_id: channel.id,
        message_id: threadId,
        data: { type: "typing", data: { typing: true } }
      });
    };
    onDestroy(() => {
      store_get($$store_subs ??= {}, "$socket", socket)?.off("events:channel", channelEventHandler);
    });
    if (threadId) {
      initHandler();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (channel) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-850"><div class="sticky top-0 flex items-center justify-between px-3.5 py-3"><div class="font-normal text-lg">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n2).t("Thread"))}</div> <div><button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-2">`);
        XMark($$renderer3, {});
        $$renderer3.push(`<!----></button></div></div> <div class="max-h-full w-full overflow-y-auto">`);
        if (messages !== null) {
          $$renderer3.push("<!--[0-->");
          Messages($$renderer3, {
            id: threadId,
            channel,
            top,
            messages,
            replyToMessage,
            thread: true,
            onPin,
            onReply: async (message) => {
              replyToMessage = message;
              await tick();
              chatInputElement?.focus();
            },
            onLoad: async () => {
              const newMessages = await getChannelThreadMessages(localStorage.token, channel.id, threadId, messages.length);
              messages = [...messages, ...newMessages];
              if (newMessages.length < 50) {
                top = true;
                return;
              }
            }
          });
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<div class="w-full flex justify-center pt-5 pb-10">`);
          Spinner($$renderer3, {});
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]--> <div class="pb-[1rem] px-2.5 w-full">`);
        MessageInput($$renderer3, {
          id: threadId,
          channel,
          disabled: !channel?.write_access,
          placeholder: !channel?.write_access ? store_get($$store_subs ??= {}, "$i18n", i18n2).t("You do not have permission to send messages in this thread.") : store_get($$store_subs ??= {}, "$i18n", i18n2).t("Reply to thread..."),
          typingUsersClassName: "from-gray-50 dark:from-gray-850",
          typingUsers,
          userSuggestions: true,
          channelSuggestions: true,
          onChange,
          onSubmit: submitHandler,
          get replyToMessage() {
            return replyToMessage;
          },
          set replyToMessage($$value) {
            replyToMessage = $$value;
            $$settled = false;
          },
          get chatInputElement() {
            return chatInputElement;
          },
          set chatInputElement($$value) {
            chatInputElement = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div></div></div>`);
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
    bind_props($$props, { threadId, channel, onClose, onPin });
  });
}
function Channel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let id = fallback($$props["id"], "");
    let currentId = null;
    let scrollEnd = true;
    let messagesContainerElement = null;
    let chatInputElement = null;
    let top = false;
    let channel = null;
    let messages = null;
    let replyToMessage = null;
    let threadId = null;
    let typingUsers = [];
    let typingUsersTimeout = {};
    const scrollToBottom = () => {
    };
    const updateLastReadAt = async (channelId2) => {
      store_get($$store_subs ??= {}, "$socket", socket)?.emit("events:channel", {
        channel_id: channelId2,
        message_id: null,
        data: { type: "last_read_at" }
      });
      channels.set(store_get($$store_subs ??= {}, "$channels", channels).map((channel2) => {
        if (channel2.id === channelId2) {
          return { ...channel2, unread_count: 0 };
        }
        return channel2;
      }));
    };
    const pinHandler = (messageId, pinned, pinnedBy = pinned ? store_get($$store_subs ??= {}, "$user", user)?.id ?? null : null, pinnedAt = pinned ? Date.now() * 1e6 : null) => {
      if (messages) {
        messages = messages.map((message) => {
          if (message.id === messageId) {
            return {
              ...message,
              is_pinned: pinned,
              pinned_by: pinnedBy,
              pinned_at: pinnedAt
            };
          }
          return message;
        });
      }
    };
    const initHandler = async () => {
      if (currentId) {
        updateLastReadAt(currentId);
      }
      currentId = id;
      updateLastReadAt(id);
      channelId.set(id);
      top = false;
      messages = null;
      channel = null;
      threadId = null;
      typingUsers = [];
      typingUsersTimeout = {};
      channel = await getChannelById(localStorage.token, id).catch((error) => {
        return null;
      });
      if (channel) {
        messages = await getChannelMessages(localStorage.token, id, 0);
        if (messages) {
          if (messages.length < 50) {
            top = true;
          }
        }
      } else {
        goto();
      }
    };
    const channelEventHandler = async (event) => {
      if (event.channel_id === id) {
        const type = event?.data?.type ?? null;
        const data = event?.data?.data ?? null;
        if (type === "message") {
          if ((data?.parent_id ?? null) === null) {
            const tempId = data?.temp_id ?? null;
            messages = [
              { ...data, temp_id: null },
              ...messages.filter((m) => !tempId || m?.temp_id !== tempId)
            ];
            if (typingUsers.find((user2) => user2.id === event.user.id)) {
              typingUsers = typingUsers.filter((user2) => user2.id !== event.user.id);
            }
            await tick();
          }
        } else if (type === "message:update") {
          const idx = messages.findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            messages[idx] = data;
          }
        } else if (type === "message:delete") {
          messages = messages.filter((message) => message.id !== data.id);
          if (threadId === data.id) {
            threadId = null;
          }
        } else if (type === "message:reply") {
          const idx = messages.findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            messages[idx] = data;
          }
        } else if (type.includes("message:reaction")) {
          const idx = messages.findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            messages[idx] = data;
          }
        } else if (type === "typing" && event.message_id === null) {
          if (event.user.id === store_get($$store_subs ??= {}, "$user", user)?.id) {
            return;
          }
          typingUsers = data.typing ? [
            ...typingUsers,
            ...typingUsers.find((user2) => user2.id === event.user.id) ? [] : [{ id: event.user.id, name: event.user.name }]
          ] : typingUsers.filter((user2) => user2.id !== event.user.id);
          if (typingUsersTimeout[event.user.id]) {
            clearTimeout(typingUsersTimeout[event.user.id]);
          }
          typingUsersTimeout[event.user.id] = setTimeout(
            () => {
              typingUsers = typingUsers.filter((user2) => user2.id !== event.user.id);
            },
            5e3
          );
        }
      }
    };
    const submitHandler = async ({ content, data }) => {
      if (!content && (data?.files ?? []).length === 0) {
        return;
      }
      const tempId = v4();
      const message = {
        temp_id: tempId,
        content,
        data,
        reply_to_id: replyToMessage?.id ?? null
      };
      const ts = Date.now() * 1e6;
      messages = [
        {
          ...message,
          id: tempId,
          user_id: store_get($$store_subs ??= {}, "$user", user)?.id,
          user: store_get($$store_subs ??= {}, "$user", user),
          reply_to_message: replyToMessage ?? null,
          created_at: ts,
          updated_at: ts
        },
        ...messages
      ];
      const res = await sendMessage(localStorage.token, id, message).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        messagesContainerElement.scrollTop = messagesContainerElement.scrollHeight;
      }
      replyToMessage = null;
    };
    const onChange = async () => {
      store_get($$store_subs ??= {}, "$socket", socket)?.emit("events:channel", {
        channel_id: id,
        message_id: null,
        data: { type: "typing", data: { typing: true } }
      });
      updateLastReadAt(id);
    };
    onDestroy(() => {
      updateLastReadAt(id);
      channelId.set(null);
      store_get($$store_subs ??= {}, "$socket", socket)?.off("events:channel", channelEventHandler);
    });
    if (id) {
      initHandler();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("l5reg3", $$renderer3, ($$renderer4) => {
        if (channel?.type === "dm") {
          $$renderer4.push("<!--[0-->");
          $$renderer4.title(($$renderer5) => {
            $$renderer5.push(`<title>${escape_html(channel?.name.trim() || channel?.users.reduce(
              (a, e, i, arr) => {
                if (e.id === store_get($$store_subs ??= {}, "$user", user)?.id) {
                  return a;
                }
                if (a) {
                  return `${a}, ${e.name}`;
                } else {
                  return e.name;
                }
              },
              ""
            ))} / Open WebUI</title>`);
          });
        } else {
          $$renderer4.push("<!--[-1-->");
          $$renderer4.title(($$renderer5) => {
            $$renderer5.push(`<title>#${escape_html(channel?.name ?? "Channel")} / Open WebUI</title>`);
          });
        }
        $$renderer4.push(`<!--]-->`);
      });
      $$renderer3.push(`<div${attr_class(`h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} w-full max-w-full flex flex-col`)} id="channel-container">`);
      Pane_group($$renderer3, {
        direction: "horizontal",
        class: "w-full h-full",
        children: ($$renderer4) => {
          Pane($$renderer4, {
            defaultSize: 50,
            minSize: 50,
            class: "h-full flex flex-col w-full relative",
            children: ($$renderer5) => {
              Navbar($$renderer5, {
                channel,
                onPin: pinHandler,
                onUpdate: async () => {
                  channel = await getChannelById(localStorage.token, id).catch((error) => {
                    return null;
                  });
                }
              });
              $$renderer5.push(`<!----> `);
              if (channel && messages !== null) {
                $$renderer5.push("<!--[0-->");
                $$renderer5.push(`<div class="flex-1 overflow-y-auto"><div class="pb-2.5 max-w-full z-10 scrollbar-hidden w-full h-full pt-6 flex-1 flex flex-col-reverse overflow-auto" id="messages-container"><!---->`);
                {
                  Messages($$renderer5, {
                    channel,
                    top,
                    messages,
                    replyToMessage,
                    onReply: async (message) => {
                      replyToMessage = message;
                      await tick();
                      chatInputElement?.focus();
                    },
                    onThread: (id2) => {
                      threadId = id2;
                    },
                    onPin: pinHandler,
                    onLoad: async () => {
                      const newMessages = await getChannelMessages(localStorage.token, id, messages.length);
                      messages = [...messages, ...newMessages];
                      if (newMessages.length < 50) {
                        top = true;
                        return;
                      }
                    }
                  });
                }
                $$renderer5.push(`<!----></div></div> <div class="pb-[1rem] px-2.5">`);
                MessageInput($$renderer5, {
                  id: "root",
                  typingUsers,
                  channel,
                  userSuggestions: true,
                  channelSuggestions: true,
                  disabled: !channel?.write_access,
                  placeholder: !channel?.write_access ? store_get($$store_subs ??= {}, "$i18n", i18n).t("You do not have permission to send messages in this channel.") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Type here..."),
                  onChange,
                  onSubmit: submitHandler,
                  scrollToBottom,
                  scrollEnd,
                  get chatInputElement() {
                    return chatInputElement;
                  },
                  set chatInputElement($$value) {
                    chatInputElement = $$value;
                    $$settled = false;
                  },
                  get replyToMessage() {
                    return replyToMessage;
                  },
                  set replyToMessage($$value) {
                    replyToMessage = $$value;
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[-1-->");
                $$renderer5.push(`<div class="flex items-center justify-center h-full w-full"><div class="m-auto">`);
                Spinner($$renderer5, { className: "size-5" });
                $$renderer5.push(`<!----></div></div>`);
              }
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          {
            $$renderer4.push("<!--[0-->");
            if (threadId !== null) {
              $$renderer4.push("<!--[0-->");
              Drawer($$renderer4, {
                show: threadId !== null,
                onClose: () => {
                  threadId = null;
                },
                children: ($$renderer5) => {
                  $$renderer5.push(`<div${attr_class(` ${threadId !== null ? " h-screen  w-full" : "px-6 py-4"} h-full`)}>`);
                  Thread($$renderer5, {
                    threadId,
                    channel,
                    onPin: pinHandler,
                    onClose: () => {
                      threadId = null;
                    }
                  });
                  $$renderer5.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
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
    bind_props($$props, { id });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    Channel($$renderer2, {
      id: store_get($$store_subs ??= {}, "$page", page).params.id
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
