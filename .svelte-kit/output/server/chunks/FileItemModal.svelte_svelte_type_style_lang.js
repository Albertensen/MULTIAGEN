import { f as fallback, d as attr_class, g as clsx, j as slot, b as bind_props, m as getContext, a as attr, c as store_get, u as unsubscribe_stores, q as stringify, k as escape_html, h as attr_style, e as ensure_array_like, au as element } from "./index2.js";
import { o as onDestroy, t as tick } from "./index-server.js";
import { W as WEBUI_BASE_URL, L as renderVegaVisualization, M as unescapeHtml, N as initMermaid, O as renderMermaidDiagram, e as decodeString, P as markedKatexExtension, Q as markedExtension, R as replaceTokens, S as processResponseContent } from "./index4.js";
import { s as settings, c as config, B as channels, w as models, u as user } from "./index3.js";
import { decode } from "html-entities";
import fileSaver from "file-saver";
import { marked } from "marked";
import hljs from "highlight.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import "./pyodideSandboxHost.js";
import equal from "fast-deep-equal";
import "./codemirror.js";
import { basicSetup, EditorView } from "codemirror";
import { keymap, placeholder } from "@codemirror/view";
import { Compartment } from "@codemirror/state";
import { acceptCompletion } from "@codemirror/autocomplete";
import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import DOMPurify from "dompurify";
import "panzoom";
import { T as Tooltip } from "./Tooltip.js";
import { D as Download, a as ChevronUp, C as Collapsible } from "./Download.js";
import { h as html } from "./html.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
import "./state.svelte.js";
import { X as XMark } from "./XMark.js";
import { a as Link_preview, b as Link_preview_trigger, U as UserStatusLinkPreview, P as Portal, L as Link_preview_content } from "./UserStatusLinkPreview.js";
import { v4 } from "uuid";
import { C as ChevronDown } from "./ChevronDown.js";
import { S as Spinner } from "./Spinner.js";
const PLACEHOLDER_IMAGE = "/favicon.png";
function safeImageUrl(url, allowExternal = false) {
  if (!url || url === "") {
    return `${WEBUI_BASE_URL}${PLACEHOLDER_IMAGE}`;
  }
  if (url.startsWith("https://www.gravatar.com/avatar/") || allowExternal && /^https?:\/\//i.test(url) || url.startsWith("data:") || url.startsWith("/")) {
    return url;
  }
  return `${WEBUI_BASE_URL}${PLACEHOLDER_IMAGE}`;
}
function PanzoomContainer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let className = fallback($$props["className"], "");
    let options2 = fallback($$props["options"], () => ({}), true);
    const reset = () => {
    };
    $$renderer2.push(`<div${attr_class(clsx(className))}><!--[-->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { className, options: options2, reset });
  });
}
function ImagePreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    let show = fallback($$props["show"], false);
    let src = fallback($$props["src"], "");
    let alt = fallback($$props["alt"], "");
    const i18n = getContext("i18n");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        /* @__PURE__ */ console.log("Escape");
        show = false;
      }
    };
    onDestroy(() => {
      window.removeEventListener("keydown", handleKeyDown);
      show = false;
      document.body.style.overflow = "unset";
    });
    if (
      // NOTE: If multiple modals can stack in the future, direct "unset" may
      // re-enable page scroll too early. Consider a shared body-scroll lock manager.
      show
    ) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="modal fixed top-0 right-0 left-0 bottom-0 bg-black text-white w-full min-h-screen h-screen flex justify-center z-9999 overflow-hidden overscroll-contain"><div class="absolute left-0 w-full flex justify-between select-none z-20"><div><button class="p-5">`);
      XMark($$renderer2, { className: "size-6" });
      $$renderer2.push(`<!----></button></div> <div><button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Download"))} class="p-5 z-999"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"></path><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"></path></svg></button></div></div> `);
      PanzoomContainer($$renderer2, {
        className: "flex h-full max-h-full justify-center items-center z-0",
        children: ($$renderer3) => {
          $$renderer3.push(`<img${attr("src", src)}${attr("alt", alt)} class="mx-auto h-full object-scale-down select-none" draggable="false"/>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { show, src, alt });
  });
}
function Image($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let src = fallback($$props["src"], "");
    let alt = fallback($$props["alt"], "");
    let allowExternal = fallback($$props["allowExternal"], false);
    let className = fallback($$props["className"], () => ` w-full ${store_get($$store_subs ??= {}, "$settings", settings)?.highContrastMode ?? false ? "" : "outline-hidden focus:outline-hidden"}`, true);
    let imageClassName = fallback($$props["imageClassName"], "rounded-lg");
    let dismissible = fallback($$props["dismissible"], false);
    let onDismiss = fallback($$props["onDismiss"], () => {
    });
    const i18n = getContext("i18n");
    let _src = "";
    let showImagePreview = false;
    _src = safeImageUrl(src.startsWith("/") ? `${WEBUI_BASE_URL}${src}` : src, allowExternal);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      ImagePreview($$renderer3, {
        src: _src,
        alt,
        get show() {
          return showImagePreview;
        },
        set show($$value) {
          showImagePreview = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="relative group w-fit flex items-center"><button${attr_class(clsx(className))}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Show image preview"))} type="button"><img${attr("src", _src)}${attr("alt", alt)}${attr_class(clsx(imageClassName))} draggable="false" data-cy="image"/></button> `);
      if (dismissible) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="absolute -top-1 -right-1"><button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove image"))} class="bg-white text-black border border-white rounded-full group-hover:visible invisible transition" type="button">`);
        XMark($$renderer3, { className: "size-4" });
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
    bind_props($$props, {
      src,
      alt,
      allowExternal,
      className,
      imageClassName,
      dismissible,
      onDismiss
    });
  });
}
function Sparkles($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor" aria-hidden="true"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Info($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function CodeEditor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let boilerplate = fallback($$props["boilerplate"], "");
    let value = fallback($$props["value"], "");
    let className = fallback($$props["className"], "text-sm");
    let onSave = fallback($$props["onSave"], () => {
    });
    let onChange = fallback($$props["onChange"], () => {
    });
    let _value = "";
    const updateValue = () => {
      if (_value !== value) {
        findChanges(_value, value);
        _value = value;
      }
    };
    function findChanges(oldStr, newStr) {
      let start = 0;
      while (start < oldStr.length && start < newStr.length && oldStr[start] === newStr[start]) {
        start++;
      }
      if (oldStr === newStr) return [];
      let endOld = oldStr.length, endNew = newStr.length;
      while (endOld > start && endNew > start && oldStr[endOld - 1] === newStr[endNew - 1]) {
        endOld--;
        endNew--;
      }
      return [
        { from: start, to: endOld, insert: newStr.slice(start, endNew) }
      ];
    }
    let id = fallback($$props["id"], "");
    let lang = fallback($$props["lang"], "");
    const focus = () => {
    };
    let editorTheme = new Compartment();
    let editorLanguage = new Compartment();
    const getLang = async () => {
      const language = languages.find((l) => l.alias.includes(lang));
      return await language?.load();
    };
    const formatPythonCodeHandler = async () => {
      return false;
    };
    [
      basicSetup,
      keymap.of([{ key: "Tab", run: acceptCompletion }, indentWithTab]),
      indentUnit.of("    "),
      placeholder(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter your code here...")),
      EditorView.updateListener.of((e) => {
        if (e.docChanged) {
          _value = e.state.doc.toString();
          onChange(_value);
        }
      }),
      editorTheme.of([]),
      editorLanguage.of([])
    ];
    const setLanguage = async () => {
      await getLang();
    };
    onDestroy(() => {
    });
    if (value) {
      updateValue();
    }
    if (lang) {
      setLanguage();
    }
    $$renderer2.push(`<div${attr("id", `code-textarea-${stringify(
      // Check if html class has dark mode
      // python code editor, highlight python code
      // listen to html class changes this should fire only when dark mode is toggled
      // Format code when Ctrl + Shift + F is pressed
      // Must destroy EditorView so CodeMirror releases internal DOMObserver and DOM refs
      id
    )}`)}${attr_class(`${stringify(className)} h-full w-full min-w-0 overflow-hidden`)}></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      boilerplate,
      value,
      className,
      onSave,
      onChange,
      id,
      lang,
      focus,
      formatPythonCodeHandler
    });
  });
}
function Clipboard($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "2");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Reset($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "2");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function SVGPanZoom($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    let className = fallback($$props["className"], "");
    let svg = fallback($$props["svg"], "");
    let content = fallback($$props["content"], "");
    $$renderer2.push(`<div${attr_class(`relative ${stringify(className)}`)}>`);
    PanzoomContainer($$renderer2, {
      className: "flex h-full max-h-full justify-center items-center",
      children: ($$renderer3) => {
        $$renderer3.push(`${html(DOMPurify.sanitize(svg, {
          USE_PROFILES: { svg: true, svgFilters: true },
          WHOLE_DOCUMENT: false,
          ADD_TAGS: ["style", "foreignObject"],
          ADD_ATTR: [
            "class",
            "style",
            "id",
            "data-*",
            "viewBox",
            "preserveAspectRatio",
            "markerWidth",
            "markerHeight",
            "markerUnits",
            "refX",
            "refY",
            "orient",
            "href",
            "xlink:href",
            "dominant-baseline",
            "text-anchor",
            "clipPathUnits",
            "filterUnits",
            "patternUnits",
            "patternContentUnits",
            "maskUnits",
            "role",
            "aria-label",
            "aria-labelledby",
            "aria-hidden",
            "tabindex"
          ],
          SANITIZE_DOM: true
        }))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    if (content) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="absolute top-2.5 right-2.5"><div class="flex gap-1">`);
      Tooltip($$renderer2, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Download as SVG"),
        children: ($$renderer3) => {
          $$renderer3.push(`<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition">`);
          Download($$renderer3, { className: " size-4" });
          $$renderer3.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Tooltip($$renderer2, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset view"),
        children: ($$renderer3) => {
          $$renderer3.push(`<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition">`);
          Reset($$renderer3, { className: " size-4" });
          $$renderer3.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Tooltip($$renderer2, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy to clipboard"),
        children: ($$renderer3) => {
          $$renderer3.push(`<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition">`);
          Clipboard($$renderer3, { className: " size-4", strokeWidth: "1.5" });
          $$renderer3.push(`<!----></button>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { className, svg, content });
  });
}
function ChevronUpDown($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function CodeBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let id = fallback($$props["id"], "");
    let edit = fallback($$props["edit"], true);
    let onSave = fallback($$props["onSave"], (e) => {
    });
    let onUpdate = fallback($$props["onUpdate"], (e, codeBlockId = "") => {
    });
    let onPreview = fallback($$props["onPreview"], (e) => {
    });
    let save = fallback($$props["save"], false);
    let run = fallback($$props["run"], true);
    let preview = fallback($$props["preview"], false);
    let collapsed = fallback($$props["collapsed"], false);
    let token = $$props["token"];
    let lang = fallback($$props["lang"], "");
    let code = fallback($$props["code"], "");
    let attributes = fallback($$props["attributes"], () => ({}), true);
    let className = fallback($$props["className"], "");
    let editorClassName = fallback($$props["editorClassName"], "");
    let stickyButtonsClassName = fallback($$props["stickyButtonsClassName"], "top-0");
    let _code = "";
    const updateCode = () => {
      _code = code;
    };
    let _token = null;
    let renderHTML = null;
    let renderError = null;
    let stdout = null;
    let stderr = null;
    let result = null;
    let files = null;
    let saved = false;
    const saveCode = () => {
      saved = true;
      code = _code;
      onSave(code);
      setTimeout(
        () => {
          saved = false;
        },
        1e3
      );
    };
    const checkPythonCode = (str) => {
      const pythonSyntax = [
        "def ",
        "else:",
        "elif ",
        "try:",
        "except:",
        "finally:",
        "yield ",
        "lambda ",
        "assert ",
        "nonlocal ",
        "del ",
        "True",
        "False",
        "None",
        " and ",
        " or ",
        " not ",
        " in ",
        " is ",
        " with "
      ];
      for (let syntax of pythonSyntax) {
        if (str.includes(syntax)) {
          return true;
        }
      }
      return false;
    };
    let mermaid = null;
    const renderMermaid = async (code2) => {
      if (!mermaid) {
        mermaid = await initMermaid();
      }
      return await renderMermaidDiagram(mermaid, code2);
    };
    const render = async () => {
      onUpdate(token, id);
      if (lang === "mermaid" && (token?.raw ?? "").slice(-4).includes("```")) {
        try {
          renderHTML = await renderMermaid(code);
        } catch (error) {
          /* @__PURE__ */ console.error("Failed to render mermaid diagram:", error);
          const errorMsg = error instanceof Error ? error.message : String(error);
          renderError = store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to render diagram") + `: ${errorMsg}`;
          renderHTML = null;
        }
      } else if ((lang === "vega" || lang === "vega-lite") && (token?.raw ?? "").slice(-4).includes("```")) {
        try {
          renderHTML = await renderVegaVisualization(code, lang);
        } catch (error) {
          /* @__PURE__ */ console.error("Failed to render Vega visualization:", error);
          const errorMsg = error instanceof Error ? error.message : String(error);
          renderError = store_get($$store_subs ??= {}, "$i18n", i18n).t("Failed to render visualization") + `: ${errorMsg}`;
          renderHTML = null;
        }
      }
    };
    const onAttributesUpdate = () => {
      if (attributes?.output) {
        try {
          const output = JSON.parse(unescapeHtml(attributes.output));
          stdout = output.stdout;
          stderr = output.stderr;
          result = output.result;
        } catch (error) {
          /* @__PURE__ */ console.error("Error:", error);
        }
      }
    };
    onDestroy(() => {
    });
    if (code) {
      updateCode();
    }
    if (token) {
      if (token.text !== _token?.text || token.raw !== _token?.raw) {
        _token = token;
      } else if (!equal(token, _token)) {
        _token = token;
      }
    }
    if (_token) {
      render();
    }
    if (attributes) {
      onAttributesUpdate();
    }
    $$renderer2.push(`<div><div${attr_class(`relative ${stringify(className)} flex flex-col rounded-2xl border border-gray-100/30 dark:border-gray-850/30 my-0.5`)} dir="ltr">`);
    if (["mermaid", "vega", "vega-lite"].includes(lang)) {
      $$renderer2.push("<!--[0-->");
      if (renderHTML) {
        $$renderer2.push("<!--[0-->");
        SVGPanZoom($$renderer2, {
          className: " rounded-2xl max-h-fit overflow-hidden",
          svg: renderHTML,
          content: _token.text
        });
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="p-3">`);
        if (renderError) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex gap-2.5 border px-4 py-3 border-red-600/10 bg-red-600/10 rounded-2xl mb-2">${escape_html(renderError)}</div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <pre>${escape_html(code)}</pre></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attr_class(`sticky ${stringify(stickyButtonsClassName)} left-0 right-0 py-1.5 px-3.5 gap-2 flex items-center justify-end w-full z-10 text-xs text-black dark:text-white bg-white dark:bg-black rounded-t-2xl`)}><div class="flex-1 truncate">`);
      Tooltip($$renderer2, {
        content: lang,
        placement: "top-start",
        children: ($$renderer3) => {
          $$renderer3.push(`<span class="truncate text-ellipsis">${escape_html(lang)}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> <div class="flex items-center gap-0.5 shrink-0"><button class="flex gap-1 items-center bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div class="-translate-y-[0.5px]">`);
      ChevronUpDown($$renderer2, { className: "size-3" });
      $$renderer2.push(`<!----></div> <div>${escape_html(collapsed ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Expand") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Collapse"))}</div></button> `);
      if ((store_get($$store_subs ??= {}, "$config", config)?.features?.enable_code_execution ?? true) && (lang.toLowerCase() === "python" || lang.toLowerCase() === "py" || lang === "" && checkPythonCode(code))) {
        $$renderer2.push("<!--[0-->");
        if (run) {
          $$renderer2.push("<!--[1-->");
          $$renderer2.push(`<button class="flex gap-1 items-center run-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Run"))}</div></button>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (save) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button class="save-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black">${escape_html(saved ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Saved") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))}</button>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <button class="copy-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy"))}</button> `);
      if (preview && ["html", "svg"].includes(lang)) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button class="flex gap-1 items-center run-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Preview"))}</div></button>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div${attr_class(`language-${stringify(lang)} rounded-t-2xl -mt-8 ${stringify(editorClassName ? editorClassName : stdout || stderr || result ? "" : "rounded-b-2xl")} overflow-hidden`)}><div class="pt-6.5 bg-white dark:bg-black"></div> `);
      if (!collapsed) {
        $$renderer2.push("<!--[0-->");
        if (edit) {
          $$renderer2.push("<!--[0-->");
          CodeEditor($$renderer2, {
            value: code,
            id,
            lang,
            onSave: () => {
              saveCode();
            },
            onChange: (value) => {
              _code = value;
            }
          });
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<pre class="hljs p-4 px-5 overflow-x-auto"${attr_style(`border-top-left-radius: 0px; border-top-right-radius: 0px; ${stringify((stdout || stderr || result) && "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;")}`)}><code${attr_class(`language-${stringify(lang)} rounded-t-none whitespace-pre text-sm`)}>`);
          if (lang && hljs.getLanguage(lang)) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`${html(hljs.highlight(code, { language: lang, ignoreIllegals: true }).value)}`);
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`${escape_html(code)}`);
          }
          $$renderer2.push(`<!--]--></code></pre>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="bg-white dark:bg-black dark:text-white rounded-b-2xl! pt-1 pb-2 px-4 flex flex-col gap-2 text-xs"><span class="text-gray-500 italic">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("{{COUNT}} hidden lines", { COUNT: code.split("\n").length }))}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div> `);
      if (!collapsed) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div${attr("id", `plt-canvas-${stringify(id)}`)} class="bg-gray-50 dark:bg-black dark:text-white max-w-full overflow-x-auto scrollbar-hidden"></div> `);
        if (stdout || stderr || result || files) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="bg-gray-50 dark:bg-black dark:text-white rounded-b-2xl! pt-2 pb-3 px-3.5 flex flex-col gap-2">`);
          {
            $$renderer2.push("<!--[-1-->");
            if (stdout || stderr) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<div><div class="text-gray-500 text-xs mb-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("STDOUT/STDERR"))}</div> <div${attr_class(`text-sm font-mono whitespace-pre-wrap ${stdout?.split("\n")?.length > 100 ? `max-h-96` : ""} overflow-y-auto`)}>${escape_html(stdout || stderr)}</div></div>`);
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]--> `);
            if (result || files) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<div><div class="text-gray-500 text-xs mb-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("RESULT"))}</div> `);
              if (result) {
                $$renderer2.push("<!--[0-->");
                $$renderer2.push(`<div class="text-sm">${escape_html(`${JSON.stringify(result)}`)}</div>`);
              } else {
                $$renderer2.push("<!--[-1-->");
              }
              $$renderer2.push(`<!--]--> `);
              {
                $$renderer2.push("<!--[-1-->");
              }
              $$renderer2.push(`<!--]--></div>`);
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      edit,
      onSave,
      onUpdate,
      onPreview,
      save,
      run,
      preview,
      collapsed,
      token,
      lang,
      code,
      attributes,
      className,
      editorClassName,
      stickyButtonsClassName
    });
  });
}
function KatexRenderer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    let content = $$props["content"];
    let displayMode = fallback($$props["displayMode"], false);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { content, displayMode });
  });
}
function Source($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let id = $$props["id"];
    let title = fallback($$props["title"], "N/A");
    let onClick = fallback($$props["onClick"], () => {
    });
    function getDomain(url) {
      const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
      if (domain.startsWith("www.")) {
        return domain.slice(4);
      }
      return domain;
    }
    const getDisplayTitle = (title2) => {
      if (!title2) return "N/A";
      if (title2.length > 30) {
        return title2.slice(0, 15) + "..." + title2.slice(-10);
      }
      return title2;
    };
    function formattedTitle(title2) {
      if (title2.startsWith("http")) {
        return getDomain(title2);
      }
      return title2;
    }
    if (title !== "N/A") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("View source: {{title}}", { title: formattedTitle(decodeString(title)) }))} class="text-[10px] w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/80 dark:hover:text-white bg-gray-50 text-black/80 hover:text-black transition rounded-xl"><span class="line-clamp-1">${escape_html(getDisplayTitle(formattedTitle(decodeString(title))))}</span></button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { id, title, onClick });
  });
}
function HTMLToken($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let text;
    let id = $$props["id"];
    let token = $$props["token"];
    let html2 = null;
    text = token.type === "html" ? token?.text : null;
    html2 = text ? DOMPurify.sanitize(text) : null;
    if (token.type === "html") {
      $$renderer2.push("<!--[0-->");
      if (html2 && html2.includes("<video")) {
        $$renderer2.push("<!--[0-->");
        const video = html2.match(/<video[^>]*>([\s\S]*?)<\/video>/);
        const videoSrc = video && video[1];
        if (videoSrc) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<video class="w-full my-2"${attr("src", videoSrc.replaceAll("&amp;", "&"))} title="Video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" controls="" allowfullscreen=""></video>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(token.text)}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (html2 && html2.includes("<audio")) {
        $$renderer2.push("<!--[1-->");
        const audio = html2.match(/<audio[^>]*>([\s\S]*?)<\/audio>/);
        const audioSrc = audio && audio[1];
        if (audioSrc) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<audio class="w-full my-2"${attr("src", audioSrc.replaceAll("&amp;", "&"))} title="Audio player" controls=""></audio>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(token.text)}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.text && token.text.match(/<iframe\s+[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?[^"]*)?"[^>]*><\/iframe>/)) {
        $$renderer2.push("<!--[2-->");
        const match = token.text.match(/<iframe\s+[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?[^"]*)?"[^>]*><\/iframe>/);
        const ytId = match && match[1];
        if (ytId) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<iframe class="w-full aspect-video my-2"${attr("src", `https://www.youtube.com/embed/${ytId}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.text && token.text.includes("<iframe")) {
        $$renderer2.push("<!--[3-->");
        const match = token.text.match(/<iframe\s+[^>]*src="([^"]+)"[^>]*><\/iframe>/);
        const iframeSrc = match && match[1];
        if (iframeSrc) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<iframe class="w-full my-2"${attr("src", iframeSrc)} title="Embedded content" frameborder="0" sandbox=""></iframe>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(token.text)}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.text && token.text.includes("<status")) {
        $$renderer2.push("<!--[4-->");
        const match = token.text.match(/<status title="([^"]+)" done="(true|false)" ?\/?>/);
        const statusTitle = match && match[1];
        const statusDone = match && match[2] === "true";
        if (statusTitle) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex flex-col justify-center -space-y-0.5"><div${attr_class(`${statusDone === false ? "shimmer" : ""} text-gray-500 dark:text-gray-500 line-clamp-1 text-wrap`)}>${escape_html(statusTitle)}</div></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(token.text)}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.text.includes(`<file type="html"`)) {
        $$renderer2.push("<!--[5-->");
        const match = token.text.match(/<file type="html" id="([^"]+)"/);
        const fileId = match && match[1];
        if (fileId) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<iframe class="w-full my-2"${attr("src", `${WEBUI_BASE_URL}/api/v1/files/${fileId}/content/html`)} title="Content" frameborder="0"${attr("sandbox", `allow-scripts allow-downloads${store_get($$store_subs ??= {}, "$settings", settings)?.iframeSandboxAllowForms ?? false ? " allow-forms" : ""}${store_get($$store_subs ??= {}, "$settings", settings)?.iframeSandboxAllowSameOrigin ?? false ? " allow-same-origin" : ""}`)} referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" width="100%"></iframe>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.text.trim().match(/^<br\s*\/?>$/i)) {
        $$renderer2.push("<!--[6-->");
        $$renderer2.push(`<br/>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`${escape_html(token.text)}`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { id, token });
  });
}
function TextToken($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let raw;
    let token = $$props["token"];
    let done = fallback($$props["done"], true);
    raw = token?.raw ?? "";
    if (done) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(raw)}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(raw.split(" "));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let text = each_array[$$index];
        $$renderer2.push(`<span class="fade-in-token">${escape_html(text)} </span>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { token, done });
  });
}
function CodespanToken($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    let token = $$props["token"];
    let done = fallback($$props["done"], true);
    $$renderer2.push(`<code${attr_class(`codespan cursor-pointer ${!done ? "fade-in-token" : ""}`)}>${escape_html(unescapeHtml(token.text))}</code>`);
    bind_props($$props, { token, done });
  });
}
function MentionToken($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let token = $$props["token"];
    let triggerChar = "";
    let label = "";
    let idType = null;
    let id = "";
    const init = () => {
      const _id = token?.id;
      triggerChar = token?.triggerChar ?? "@";
      if (triggerChar === "$") {
        const pipeIdx = _id?.indexOf("|") ?? -1;
        if (pipeIdx > 0) {
          id = _id.substring(0, pipeIdx);
          label = _id.substring(pipeIdx + 1);
        } else {
          id = _id;
          label = _id;
        }
        idType = null;
        return;
      }
      const parts = _id?.split(":");
      if (parts) {
        idType = parts[0];
        id = parts.slice(1).join(":");
      } else {
        idType = null;
        id = _id;
      }
      label = token?.label ?? id;
      if (triggerChar === "#") {
        if (idType === "C") {
          const channel = store_get($$store_subs ??= {}, "$channels", channels).find((c) => c.id === id);
          if (channel) {
            label = channel.name;
          } else {
            label = store_get($$store_subs ??= {}, "$i18n", i18n).t("Unknown");
          }
        }
      } else if (triggerChar === "@") {
        if (idType === "U") ;
        else if (idType === "M") {
          const model = store_get($$store_subs ??= {}, "$models", models).find((m) => m.id === id);
          if (model) {
            label = model.name;
          } else {
            label = store_get($$store_subs ??= {}, "$i18n", i18n).t("Unknown");
          }
        }
      }
    };
    if (token) {
      init();
    }
    Link_preview($$renderer2, {
      openDelay: (
        // Skill mention: id format is "skillId|label"
        // split by : and take first part as idType and second part as id
        // in case id contains ':'
        // Channel
        // Thread
        // User
        // Model
        0
      ),
      closeDelay: 0,
      children: ($$renderer3) => {
        Link_preview_trigger($$renderer3, {
          class: " cursor-pointer no-underline! font-normal! ",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="mention">${escape_html(triggerChar)}${escape_html(label)}</span>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if (triggerChar === "@" && idType === "U") {
          $$renderer3.push("<!--[0-->");
          UserStatusLinkPreview($$renderer3, { id });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { token });
  });
}
function NoteLinkToken($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let noteId = $$props["noteId"];
    let href = $$props["href"];
    $$renderer2.push(`<button class="relative group py-2 px-3 w-60 flex flex-col bg-white dark:bg-gray-850 border border-gray-50/30 dark:border-gray-800/30 rounded-xl text-left cursor-pointer" type="button"><div class="flex flex-col justify-center w-full min-w-0"><div class="dark:text-gray-100 text-sm flex justify-between items-center gap-2"><div class="font-normal line-clamp-1 flex-1 min-w-0">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="text-gray-400">...</span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-gray-500 text-xs shrink-0">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Note"))}</div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></button>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { noteId, href });
  });
}
function SourceToken($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let id = $$props["id"];
    let token = $$props["token"];
    let sourceIds = fallback($$props["sourceIds"], () => [], true);
    let onClick = fallback($$props["onClick"], () => {
    });
    let openPreview = false;
    function getDomain(url) {
      const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
      if (domain.startsWith("www.")) {
        return domain.slice(4);
      }
      return domain;
    }
    function formattedTitle(title) {
      if (title.startsWith("http")) {
        return getDomain(title);
      }
      return title;
    }
    const getDisplayTitle = (title) => {
      if (!title) return "N/A";
      if (title.length > 30) {
        return title.slice(0, 15) + "..." + title.slice(-10);
      }
      return title;
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (sourceIds) {
        $$renderer3.push("<!--[0-->");
        if ((token?.ids ?? []).length == 1) {
          $$renderer3.push("<!--[0-->");
          const id2 = token.ids[0];
          const identifier = token.citationIdentifiers ? token.citationIdentifiers[0] : id2 - 1;
          Source($$renderer3, { id: identifier, title: sourceIds[id2 - 1], onClick });
        } else {
          $$renderer3.push("<!--[-1-->");
          Link_preview($$renderer3, {
            openDelay: 0,
            get open() {
              return openPreview;
            },
            set open($$value) {
              openPreview = $$value;
              $$settled = false;
            },
            children: ($$renderer4) => {
              Link_preview_trigger($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<button${attr("aria-label", `${getDisplayTitle(formattedTitle(decodeString(sourceIds[token.ids[0] - 1])))} +${(token?.ids ?? []).length - 1} more sources`)} class="text-[10px] w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/80 dark:hover:text-white bg-gray-50 text-black/80 hover:text-black transition rounded-xl"><span class="line-clamp-1">${escape_html(getDisplayTitle(formattedTitle(decodeString(sourceIds[token.ids[0] - 1]))))} <span class="dark:text-white/50 text-black/50">+${escape_html((token?.ids ?? []).length - 1)}</span></span></button>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Portal($$renderer4, {
                children: ($$renderer5) => {
                  Link_preview_content($$renderer5, {
                    class: "z-[999]",
                    align: "start",
                    strategy: "fixed",
                    sideOffset: 6,
                    children: ($$renderer6) => {
                      $$renderer6.push(`<div class="bg-gray-50 dark:bg-gray-850 rounded-xl p-1 cursor-pointer"><!--[-->`);
                      const each_array = ensure_array_like(token.citationIdentifiers ?? token.ids);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let identifier = each_array[$$index];
                        const id2 = typeof identifier === "string" ? parseInt(identifier.split("#")[0]) : identifier;
                        $$renderer6.push(`<div>`);
                        Source($$renderer6, { id: identifier, title: sourceIds[id2 - 1], onClick });
                        $$renderer6.push(`<!----></div>`);
                      }
                      $$renderer6.push(`<!--]--></div>`);
                    },
                    $$slots: { default: true }
                  });
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<span>${escape_html(token.raw)}</span>`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { id, token, sourceIds, onClick });
  });
}
function MarkdownInlineTokens($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    let id = $$props["id"];
    let done = fallback($$props["done"], true);
    let tokens = $$props["tokens"];
    let sourceIds = fallback($$props["sourceIds"], () => [], true);
    let onSourceClick = fallback($$props["onSourceClick"], () => {
    });
    const getNoteIdFromHref = (href) => {
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin) {
          const match = url.pathname.match(/^\/notes\/([^/]+)$/);
          if (match) {
            return match[1];
          }
        }
      } catch {
      }
      return null;
    };
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(tokens);
    for (let tokenIdx = 0, $$length = each_array.length; tokenIdx < $$length; tokenIdx++) {
      let token = each_array[tokenIdx];
      if (token.type === "escape") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`${escape_html(unescapeHtml(token.text))}`);
      } else if (token.type === "html") {
        $$renderer2.push("<!--[1-->");
        HTMLToken($$renderer2, { id, token, onSourceClick });
      } else if (token.type === "link") {
        $$renderer2.push("<!--[2-->");
        const noteId = getNoteIdFromHref(token.href);
        if (noteId) {
          $$renderer2.push("<!--[0-->");
          NoteLinkToken($$renderer2, { noteId, href: token.href });
        } else if (token.tokens) {
          $$renderer2.push("<!--[1-->");
          $$renderer2.push(`<a${attr("href", token.href)} target="_blank" rel="nofollow"${attr("title", token.title)}>`);
          MarkdownInlineTokens($$renderer2, { id: `${id}-a`, tokens: token.tokens, onSourceClick, done });
          $$renderer2.push(`<!----></a>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<a${attr("href", token.href)} target="_blank" rel="nofollow"${attr("title", token.title)}>${escape_html(token.text)}</a>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "image") {
        $$renderer2.push("<!--[3-->");
        Image($$renderer2, { src: token.href, alt: token.text, allowExternal: true });
      } else if (token.type === "strong") {
        $$renderer2.push("<!--[4-->");
        $$renderer2.push(`<strong>`);
        MarkdownInlineTokens($$renderer2, { id: `${id}-strong`, tokens: token.tokens, onSourceClick });
        $$renderer2.push(`<!----></strong>`);
      } else if (token.type === "em") {
        $$renderer2.push("<!--[5-->");
        $$renderer2.push(`<em>`);
        MarkdownInlineTokens($$renderer2, { id: `${id}-em`, tokens: token.tokens, onSourceClick });
        $$renderer2.push(`<!----></em>`);
      } else if (token.type === "codespan") {
        $$renderer2.push("<!--[6-->");
        CodespanToken($$renderer2, { token, done });
      } else if (token.type === "br") {
        $$renderer2.push("<!--[7-->");
        $$renderer2.push(`<br/>`);
      } else if (token.type === "del") {
        $$renderer2.push("<!--[8-->");
        $$renderer2.push(`<del>`);
        MarkdownInlineTokens($$renderer2, { id: `${id}-del`, tokens: token.tokens, onSourceClick });
        $$renderer2.push(`<!----></del>`);
      } else if (token.type === "inlineKatex") {
        $$renderer2.push("<!--[9-->");
        if (token.text) {
          $$renderer2.push("<!--[0-->");
          KatexRenderer($$renderer2, {
            content: token.text,
            displayMode: token?.displayMode ?? false
          });
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "iframe") {
        $$renderer2.push("<!--[10-->");
        $$renderer2.push(`<iframe${attr("src", `${stringify(WEBUI_BASE_URL)}/api/v1/files/${stringify(token.fileId)}/content`)}${attr("title", token.fileId)} width="100%" frameborder="0"></iframe>`);
      } else if (token.type === "mention") {
        $$renderer2.push("<!--[11-->");
        MentionToken($$renderer2, { token });
      } else if (token.type === "footnote") {
        $$renderer2.push("<!--[12-->");
        $$renderer2.push(`${html(DOMPurify.sanitize(`<sup class="footnote-ref footnote-ref-text">${token.escapedText}</sup>`) || "")}`);
      } else if (token.type === "citation") {
        $$renderer2.push("<!--[13-->");
        if ((sourceIds ?? []).length > 0) {
          $$renderer2.push("<!--[0-->");
          SourceToken($$renderer2, { id, token, sourceIds, onClick: onSourceClick });
        } else {
          $$renderer2.push("<!--[-1-->");
          TextToken($$renderer2, { token, done });
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "text") {
        $$renderer2.push("<!--[14-->");
        TextToken($$renderer2, { token, done });
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { id, done, tokens, sourceIds, onSourceClick });
  });
}
function Star($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function LightBulb($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Bolt($$renderer, $$props) {
  let className = fallback($$props["className"], "size-3");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ArrowRightCircle($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
const alertStyles = {
  NOTE: { border: "border-sky-500", text: "text-sky-500", icon: Info },
  TIP: {
    border: "border-emerald-500",
    text: "text-emerald-500",
    icon: LightBulb
  },
  IMPORTANT: {
    border: "border-purple-500",
    text: "text-purple-500",
    icon: Star
  },
  WARNING: {
    border: "border-yellow-500",
    text: "text-yellow-500",
    icon: ArrowRightCircle
  },
  CAUTION: { border: "border-rose-500", text: "text-rose-500", icon: Bolt }
};
function alertComponent(token) {
  const regExpStr = `^(?:\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\\])\\s*?
*`;
  const regExp = new RegExp(regExpStr);
  const matches = token.text?.match(regExp);
  if (matches && matches.length) {
    const alertType = matches[1];
    const newText = token.text.replace(regExp, "");
    const newTokens = marked.lexer(newText);
    return { type: alertType, text: newText, tokens: newTokens };
  }
  return false;
}
function AlertRenderer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let token = $$props["token"];
    let alert = $$props["alert"];
    let id = fallback($$props["id"], "");
    let tokenIdx = fallback($$props["tokenIdx"], 0);
    let onTaskClick = fallback($$props["onTaskClick"], void 0);
    let onSourceClick = fallback($$props["onSourceClick"], void 0);
    $$renderer2.push(`<div${attr_class(`border-l-4 pl-2.5 ${alertStyles[alert.type].border} my-0.5`)}><div${attr_class(`${stringify(alertStyles[alert.type].text)} items-center flex gap-1 py-1.5`)}>`);
    if (alertStyles[alert.type].icon) {
      $$renderer2.push("<!--[-->");
      alertStyles[alert.type].icon($$renderer2, { className: "inline-block size-4" });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(` <span class="font-normal">${escape_html(alert.type)}</span></div> <div class="pb-2">`);
    MarkdownTokens($$renderer2, {
      id: `${id}-${tokenIdx}`,
      tokens: alert.tokens,
      onTaskClick,
      onSourceClick
    });
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { token, alert, id, tokenIdx, onTaskClick, onSourceClick });
  });
}
function WrenchSolid($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${attr_class(clsx(className))}><path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path></svg>`);
  bind_props($$props, { className });
}
function CheckCircle($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function injectCsp(html2, csp) {
  if (!csp) return html2;
  const escaped = csp.replace(/"/g, "&quot;");
  const tag = `<meta http-equiv="Content-Security-Policy" content="${escaped}">`;
  const idx = html2.indexOf("<head>");
  return idx !== -1 ? html2.slice(0, idx + 6) + tag + html2.slice(idx + 6) : tag + html2;
}
function FullHeightIframe($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let sandbox, isUrl;
    let src = fallback($$props["src"], null);
    let title = fallback($$props["title"], "Embedded Content");
    let initialHeight = fallback($$props["initialHeight"], null);
    let iframeClassName = fallback($$props["iframeClassName"], "w-full rounded-2xl");
    let args = fallback($$props["args"], null);
    let allowScripts = fallback($$props["allowScripts"], true);
    let allowForms = fallback($$props["allowForms"], false);
    let allowSameOrigin = fallback($$props["allowSameOrigin"], false);
    let allowPopups = fallback($$props["allowPopups"], false);
    let allowDownloads = fallback($$props["allowDownloads"], true);
    let referrerPolicy = fallback($$props["referrerPolicy"], "strict-origin-when-cross-origin");
    let allowFullscreen = fallback($$props["allowFullscreen"], true);
    let payload = fallback($$props["payload"], null);
    let iframeSrc = null;
    let iframeDoc = null;
    const setIframeSrc = async () => {
      await tick();
      if (isUrl) {
        iframeSrc = src;
        iframeDoc = null;
      } else {
        iframeDoc = await processHtmlForDeps(src);
        iframeSrc = null;
      }
    };
    const alpineDirectives = [
      "x-data",
      "x-init",
      "x-show",
      "x-bind",
      "x-on",
      "x-text",
      "x-html",
      "x-model",
      "x-modelable",
      "x-ref",
      "x-for",
      "x-if",
      "x-effect",
      "x-transition",
      "x-cloak",
      "x-ignore",
      "x-teleport",
      "x-id"
    ];
    async function processHtmlForDeps(html2) {
      if (!allowSameOrigin) return html2;
      const scriptTags = [];
      const hasAlpineDirectives = alpineDirectives.some((dir) => html2.includes(dir));
      if (hasAlpineDirectives) {
        try {
          const { default: alpineCode } = await import("./cdn.min.js");
          const alpineBlob = new Blob([alpineCode], { type: "text/javascript" });
          const alpineUrl = URL.createObjectURL(alpineBlob);
          const alpineTag = `<script src="${alpineUrl}" defer><\/script>`;
          scriptTags.push(alpineTag);
        } catch (error) {
          /* @__PURE__ */ console.error("Error processing Alpine for iframe:", error);
        }
      }
      const chartJsDirectives = ["new Chart(", "Chart."];
      const hasChartJsDirectives = chartJsDirectives.some((dir) => html2.includes(dir));
      if (hasChartJsDirectives) {
        try {
          const { default: Chart } = await import("chart.js/auto");
          window.Chart = Chart;
          const chartTag = `<script>
window.Chart = parent.Chart; // Chart previously assigned on parent
<\/script>`;
          scriptTags.push(chartTag);
        } catch (error) {
          /* @__PURE__ */ console.error("Error processing Chart.js for iframe:", error);
        }
      }
      if (scriptTags.length === 0) return html2;
      const tags = scriptTags.join("\n");
      if (html2.includes("</head>")) {
        return html2.replace("</head>", `${tags}
</head>`);
      }
      if (html2.includes("</body>")) {
        return html2.replace("</body>", `${tags}
</body>`);
      }
      return `${tags}
${html2}`;
    }
    function onMessage(e) {
      return;
    }
    onDestroy(() => {
      window.removeEventListener("message", onMessage);
    });
    sandbox = [
      allowScripts && "allow-scripts",
      allowForms && "allow-forms",
      allowSameOrigin && "allow-same-origin",
      allowPopups && "allow-popups",
      allowDownloads && "allow-downloads"
    ].filter(Boolean).join(" ") || void 0;
    isUrl = typeof src === "string" && /^(https?:)?\/\//i.test(src);
    if (src) {
      setIframeSrc();
    }
    if (
      // Alpine directives detection
      // --- Alpine.js detection & injection ---
      // --- Chart.js detection & injection ---
      // import chartUrl from 'chart.js/auto?url';
      // If nothing to inject, return original HTML
      // Prefer injecting into <head>, then before </body>, otherwise prepend
      // Try to measure same-origin content safely
      // Cross-origin → rely on postMessage from inside the iframe
      // Pong message for testing connectivity
      // Optional: reply back
      // Send payload data if requested
      // When the iframe loads, try same-origin resize (cross-origin will noop)
      // if arguments are provided, inject them into the iframe window
      // Ensure event listener bound only while component lives
      iframeDoc
    ) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<iframe${attr("srcdoc", injectCsp(iframeDoc, store_get($$store_subs ??= {}, "$config", config)?.ui?.iframe_csp ?? ""))}${attr("title", title)}${attr_class(clsx(iframeClassName))}${attr_style(`${initialHeight ? `height:${initialHeight}px;` : ""}`)} width="100%" frameborder="0"${attr("sandbox", sandbox)}${attr("allowfullscreen", allowFullscreen, true)}></iframe>`);
    } else if (iframeSrc) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<iframe${attr("src", iframeSrc)}${attr("title", title)}${attr_class(clsx(iframeClassName))}${attr_style(`${initialHeight ? `height:${initialHeight}px;` : ""}`)} width="100%" frameborder="0"${attr("sandbox", sandbox)}${attr("referrerpolicy", referrerPolicy)}${attr("allowfullscreen", allowFullscreen, true)}></iframe>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      src,
      title,
      initialHeight,
      iframeClassName,
      args,
      allowScripts,
      allowForms,
      allowSameOrigin,
      allowPopups,
      allowDownloads,
      referrerPolicy,
      allowFullscreen,
      payload
    });
  });
}
function ToolCallDisplay($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let result, files, embeds, args, isDone, isExecuting, parsedArgs, parsedResult;
    const i18n = getContext("i18n");
    let id = fallback($$props["id"], "");
    let attributes = fallback($$props["attributes"], () => ({}), true);
    let open = fallback($$props["open"], false);
    let grouped = fallback($$props["grouped"], false);
    let className = fallback($$props["className"], "");
    const RESULT_PREVIEW_LIMIT = 1e4;
    let expandedResult = false;
    let buttonClassName = fallback($$props["buttonClassName"], "w-fit py-1 text-[0.9375rem] text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition");
    const componentId = id || v4();
    function parseJSONString(str) {
      let value = str;
      while (typeof value === "string") {
        try {
          value = JSON.parse(value);
        } catch {
          break;
        }
      }
      return value;
    }
    function formatJSONString(str) {
      try {
        const parsed = parseJSONString(str);
        if (typeof parsed === "object") {
          return JSON.stringify(parsed, null, 2);
        } else {
          return String(parsed);
        }
      } catch (e) {
        return str;
      }
    }
    function parseArguments(str) {
      try {
        const parsed = parseJSONString(str);
        if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
          return parsed;
        }
        return null;
      } catch {
        return null;
      }
    }
    let resultContent = fallback($$props["resultContent"], "");
    if (!open) expandedResult = false;
    result = resultContent || decode(attributes?.result ?? "");
    files = parseJSONString(decode(attributes?.files ?? ""));
    embeds = parseJSONString(decode(attributes?.embeds ?? ""));
    args = open || Array.isArray(embeds) && embeds.length > 0 ? decode(attributes?.arguments ?? "") : "";
    isDone = attributes?.done === "true";
    isExecuting = attributes?.done && attributes?.done !== "true";
    parsedArgs = parseArguments(args);
    parsedResult = parseJSONString(result);
    $$renderer2.push(`<div${attr("id", id)}${attr_class(clsx(className))}>`);
    if (!grouped && embeds && Array.isArray(embeds) && embeds.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="py-1 w-full cursor-pointer"><div class="w-full text-xs text-gray-500">${escape_html(attributes.name)}</div> <!--[-->`);
      const each_array = ensure_array_like(embeds);
      for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
        let embed = each_array[idx];
        $$renderer2.push(`<div class="my-2"${attr("id", `${componentId}-tool-call-embed-${idx}`)}>`);
        FullHeightIframe($$renderer2, {
          src: embed,
          args,
          allowScripts: true,
          allowForms: store_get($$store_subs ??= {}, "$settings", settings)?.iframeSandboxAllowForms ?? false,
          allowSameOrigin: store_get($$store_subs ??= {}, "$settings", settings)?.iframeSandboxAllowSameOrigin ?? false,
          allowPopups: true
        });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attr_class(`${stringify(buttonClassName)} cursor-pointer`)}><div${attr_class(`w-full max-w-full font-normal flex items-center gap-1.5 ${isExecuting ? "shimmer" : ""}`)}>`);
      if (isExecuting) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div>`);
        Spinner($$renderer2, { className: "size-4" });
        $$renderer2.push(`<!----></div>`);
      } else if (isDone) {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<div class="text-emerald-500 dark:text-emerald-400">`);
        CheckCircle($$renderer2, { className: "size-4", strokeWidth: "2" });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="text-gray-400 dark:text-gray-500">`);
        WrenchSolid($$renderer2, { className: "size-3.5" });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--> <div class="flex-1 line-clamp-1"><span class="@md:hidden text-black dark:text-white">${escape_html(attributes.name)}</span> <span class="hidden @md:inline font-normal">`);
      if (isDone) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("View Result from {{NAME}}", { NAME: attributes.name }))}`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Executing {{NAME}}...", { NAME: attributes.name }))}`);
      }
      $$renderer2.push(`<!--]--></span></div> <div class="flex shrink-0 self-center translate-y-[1px]">`);
      if (open) {
        $$renderer2.push("<!--[0-->");
        ChevronUp($$renderer2, { strokeWidth: "3.5", className: "size-3" });
      } else {
        $$renderer2.push("<!--[-1-->");
        ChevronDown($$renderer2, { strokeWidth: "3.5", className: "size-3" });
      }
      $$renderer2.push(`<!--]--></div></div></div> `);
      if (open) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div><div class="border border-gray-50 dark:border-gray-850/30 rounded-2xl my-1.5 p-2.5 space-y-2">`);
        if (args) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div><div class="text-[10px] uppercase tracking-wider font-normal text-gray-400 dark:text-gray-500 mb-1.5 px-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Input"))}</div> `);
          if (parsedArgs) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="px-1 space-y-0.5"><!--[-->`);
            const each_array_1 = ensure_array_like(Object.entries(parsedArgs));
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let [key, value] = each_array_1[$$index_1];
              $$renderer2.push(`<div class="flex gap-2 text-xs py-0.5"><span class="font-normal text-gray-600 dark:text-gray-400 shrink-0">${escape_html(key)}</span> <span class="text-gray-800 dark:text-gray-200 break-all">${escape_html(typeof value === "object" ? JSON.stringify(value) : value)}</span></div>`);
            }
            $$renderer2.push(`<!--]--></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`<div class="tool-call-body w-full max-w-none!"><pre class="text-xs text-gray-600 dark:text-gray-300 whitespace-pre font-mono bg-gray-50 dark:bg-gray-900 rounded-lg p-2 overflow-x-auto">${escape_html(formatJSONString(args))}</pre></div>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (isDone && result) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div><div class="text-[10px] uppercase tracking-wider font-normal text-gray-400 dark:text-gray-500 mb-1.5 px-1">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Output"))}</div> <div class="w-full max-w-none!">`);
          if (typeof parsedResult === "object" && parsedResult !== null) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<pre class="text-xs text-gray-600 dark:text-gray-300 whitespace-pre font-mono bg-gray-50 dark:bg-gray-900 rounded-lg p-2 overflow-x-auto">${escape_html(JSON.stringify(parsedResult, null, 2))}</pre>`);
          } else {
            $$renderer2.push("<!--[-1-->");
            const resultStr = String(parsedResult);
            const isTruncated = resultStr.length > RESULT_PREVIEW_LIMIT && !expandedResult;
            $$renderer2.push(`<pre class="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap break-words font-mono">${escape_html(isTruncated ? resultStr.slice(0, RESULT_PREVIEW_LIMIT) : resultStr)}</pre> `);
            if (isTruncated) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<button class="mt-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Show all ({{COUNT}} characters)", { COUNT: resultStr.length.toLocaleString() }))}</button>`);
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]--></div></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> `);
    if (isDone) {
      $$renderer2.push("<!--[0-->");
      if (typeof files === "object") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!--[-->`);
        const each_array_2 = ensure_array_like(files ?? []);
        for (let idx = 0, $$length = each_array_2.length; idx < $$length; idx++) {
          let file = each_array_2[idx];
          if (typeof file === "string") {
            $$renderer2.push("<!--[0-->");
            if (file.startsWith("data:image/")) {
              $$renderer2.push("<!--[0-->");
              Image($$renderer2, {
                id: `${componentId}-tool-call-result-${idx}`,
                src: file,
                alt: "Image"
              });
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]-->`);
          } else if (typeof file === "object") {
            $$renderer2.push("<!--[1-->");
            if ((file.type === "image" || (file?.content_type ?? "").startsWith("image/")) && file.url) {
              $$renderer2.push("<!--[0-->");
              Image($$renderer2, {
                id: `${componentId}-tool-call-result-${idx}`,
                src: file.url,
                alt: "Image"
              });
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]-->`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      attributes,
      open,
      grouped,
      className,
      buttonClassName,
      resultContent
    });
  });
}
function ConsecutiveDetailsGroup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let toolCallCount, hasPending, codeInterpreterCount, allEmbeds, summaryText, prefixText;
    const i18n = getContext("i18n");
    let id = fallback($$props["id"], "");
    let tokens = fallback($$props["tokens"], () => [], true);
    let messageDone = fallback($$props["messageDone"], true);
    let allowEmbeds = fallback($$props["allowEmbeds"], true);
    let compactPreview = fallback($$props["compactPreview"], false);
    let open = store_get($$store_subs ??= {}, "$settings", settings)?.expandDetails ?? false;
    function parseJSONString(str) {
      try {
        return parseJSONString(JSON.parse(str));
      } catch (e) {
        return str;
      }
    }
    toolCallCount = tokens.filter((t) => t?.attributes?.type === "tool_calls").length;
    tokens.filter((t) => t?.attributes?.type === "reasoning").length;
    hasPending = !messageDone && tokens.some((t) => t?.attributes?.done !== void 0 && t?.attributes?.done !== "true");
    codeInterpreterCount = tokens.filter((t) => t?.attributes?.type === "code_interpreter").length;
    allEmbeds = (() => {
      if (!allowEmbeds) return [];
      const result = [];
      for (const t of tokens) {
        if (t?.attributes?.type !== "tool_calls") continue;
        const raw = decode(t.attributes?.embeds ?? "");
        try {
          const parsed = parseJSONString(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            for (const embed of parsed) {
              result.push({
                name: t.attributes?.name ?? "",
                embed,
                args: decode(t.attributes?.arguments ?? "")
              });
            }
          }
        } catch {
        }
      }
      return result;
    })();
    summaryText = (() => {
      const parts = [];
      if (toolCallCount > 0) {
        const nameCounts = {};
        tokens.filter((t) => t?.attributes?.type === "tool_calls").forEach((t) => {
          const name = t?.attributes?.name ?? "tool";
          nameCounts[name] = (nameCounts[name] || 0) + 1;
        });
        const toolParts = Object.entries(nameCounts).map(([name, count]) => count > 1 ? `${count} ${name}` : name);
        parts.push(...toolParts);
      }
      if (codeInterpreterCount > 0) {
        if (codeInterpreterCount === 1) {
          parts.push(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ran {{COUNT}} analysis", { COUNT: codeInterpreterCount }));
        } else {
          parts.push(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ran {{COUNT}} analyses", { COUNT: codeInterpreterCount }));
        }
      }
      hasPending ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Exploring") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Explored");
      const detail = parts.join(", ");
      return detail;
    })();
    prefixText = hasPending ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Exploring") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Explored");
    $$renderer2.push(`<div${attr("id", id)} class="w-full"><button${attr_class(`w-fit py-0.5 text-left ${compactPreview ? "text-xs" : "text-[0.9375rem]"} text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition cursor-pointer`)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Toggle details"))}${attr("aria-expanded", open)}><div class="flex items-center gap-1.5">`);
    if (hasPending) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div>`);
      Spinner($$renderer2, { className: "size-4" });
      $$renderer2.push(`<!----></div>`);
    } else if (toolCallCount > 0) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<div class="text-emerald-500 dark:text-emerald-400">`);
      CheckCircle($$renderer2, { className: "size-4", strokeWidth: "2" });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="text-gray-400 dark:text-gray-500">`);
      Sparkles($$renderer2, { className: "size-3.5" });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="flex-1 line-clamp-1"><span${attr_class(`text-gray-600 dark:text-gray-300 ${hasPending ? "shimmer" : ""}`)}>${escape_html(prefixText)}</span> `);
    if (summaryText) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="text-gray-400 dark:text-gray-500">${escape_html(summaryText)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex shrink-0 self-center text-gray-400 dark:text-gray-500">`);
    if (open) {
      $$renderer2.push("<!--[0-->");
      ChevronUp($$renderer2, { strokeWidth: "3.5", className: "size-3" });
    } else {
      $$renderer2.push("<!--[-1-->");
      ChevronDown($$renderer2, { strokeWidth: "3.5", className: "size-3" });
    }
    $$renderer2.push(`<!--]--></div></div></button> `);
    if (open) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><div class="mb-1"><!--[-->`);
      slot($$renderer2, $$props, "content", {}, null);
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (allEmbeds.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(allEmbeds);
      for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
        let embedItem = each_array[idx];
        $$renderer2.push(`<div${attr("id", `${id}-embed-${idx}`)}>`);
        FullHeightIframe($$renderer2, {
          src: embedItem.embed,
          args: embedItem.args,
          allowScripts: true,
          allowForms: store_get($$store_subs ??= {}, "$settings", settings)?.iframeSandboxAllowForms ?? false,
          allowSameOrigin: store_get($$store_subs ??= {}, "$settings", settings)?.iframeSandboxAllowSameOrigin ?? false,
          allowPopups: true
        });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { id, tokens, messageDone, allowEmbeds, compactPreview });
  });
}
function DocumentDuplicate($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ColonFenceBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let id = fallback($$props["id"], "");
    let token = $$props["token"];
    let tokenIdx = fallback($$props["tokenIdx"], 0);
    let done = fallback($$props["done"], true);
    let editCodeBlock = fallback($$props["editCodeBlock"], true);
    let sourceIds = fallback($$props["sourceIds"], () => [], true);
    let onTaskClick = fallback($$props["onTaskClick"], () => {
    });
    let onSourceClick = fallback($$props["onSourceClick"], () => {
    });
    const fenceType = token.fenceType ?? "default";
    const label = fenceType.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    $$renderer2.push(`<div class="relative group my-2 rounded-2xl border border-gray-100 dark:border-gray-800 px-4 py-3"><div class="flex items-center justify-between mb-2"><span class="text-xs font-normal text-gray-500 dark:text-gray-400">${escape_html(label)}</span> <div class="invisible group-hover:visible flex gap-0.5">`);
    Tooltip($$renderer2, {
      content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy"),
      children: ($$renderer3) => {
        $$renderer3.push(`<button class="p-1 rounded-lg bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition">`);
        {
          $$renderer3.push("<!--[-1-->");
          DocumentDuplicate($$renderer3, { className: "size-3.5", strokeWidth: "1.5" });
        }
        $$renderer3.push(`<!--]--></button>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div> <div class="prose-sm" dir="auto">`);
    MarkdownTokens($$renderer2, {
      id: `${id}-${tokenIdx}-cf`,
      tokens: token.tokens,
      done,
      editCodeBlock,
      sourceIds,
      onTaskClick,
      onSourceClick
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      token,
      tokenIdx,
      done,
      editCodeBlock,
      sourceIds,
      onTaskClick,
      onSourceClick
    });
  });
}
function MarkdownTokens($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let detailButtonClassName, displayTokens, singlePlainBlock;
    const i18n = getContext("i18n");
    const { saveAs } = fileSaver;
    let id = $$props["id"];
    let tokens = $$props["tokens"];
    let top = fallback($$props["top"], true);
    let attributes = fallback($$props["attributes"], () => ({}), true);
    let sourceIds = fallback($$props["sourceIds"], () => [], true);
    let done = fallback($$props["done"], true);
    let save = fallback($$props["save"], false);
    let preview = fallback($$props["preview"], false);
    let compactPreview = fallback($$props["compactPreview"], false);
    let paragraphTag = fallback($$props["paragraphTag"], "p");
    let editCodeBlock = fallback($$props["editCodeBlock"], true);
    let topPadding = fallback($$props["topPadding"], false);
    let allowEmbeds = fallback($$props["allowEmbeds"], true);
    let onSave = fallback($$props["onSave"], () => {
    });
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let onPreview = fallback($$props["onPreview"], () => {
    });
    let onTaskClick = fallback($$props["onTaskClick"], () => {
    });
    let onSourceClick = fallback($$props["onSourceClick"], () => {
    });
    const headerComponent = (depth) => {
      return "h" + depth;
    };
    const GROUPABLE_DETAIL_TYPES = /* @__PURE__ */ new Set(["tool_calls", "reasoning", "code_interpreter"]);
    const isGroupableDetailToken = (token) => {
      return token?.type === "details" && GROUPABLE_DETAIL_TYPES.has(token?.attributes?.type ?? "");
    };
    const getDisplayTokens = (tokenList = []) => {
      const displayTokens2 = [];
      let detailGroup = [];
      const flushDetailGroup = () => {
        if (detailGroup.length > 1) {
          displayTokens2.push({ type: "detail_group", items: [...detailGroup] });
        } else if (detailGroup.length === 1) {
          displayTokens2.push(detailGroup[0]);
        }
        detailGroup = [];
      };
      for (const token of tokenList) {
        if (isGroupableDetailToken(token)) {
          detailGroup.push(token);
        } else {
          flushDetailGroup();
          displayTokens2.push(token);
        }
      }
      flushDetailGroup();
      return displayTokens2;
    };
    const getDetailTextContent = (token) => {
      return decode(token?.text || "").replace(/<summary>.*?<\/summary>/gi, "").trim();
    };
    detailButtonClassName = `w-fit py-0.5 ${compactPreview ? "text-xs" : "text-[0.9375rem]"} text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition`;
    displayTokens = getDisplayTokens(tokens);
    singlePlainBlock = displayTokens.length === 1 && (displayTokens[0]?.type === "paragraph" || displayTokens[0]?.type === "text");
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(displayTokens);
    for (let tokenIdx = 0, $$length = each_array.length; tokenIdx < $$length; tokenIdx++) {
      let token = each_array[tokenIdx];
      if (token.type === "hr") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<hr class="border-gray-50 dark:border-gray-850/30"/>`);
      } else if (token.type === "heading") {
        $$renderer2.push("<!--[1-->");
        element(
          $$renderer2,
          headerComponent(token.depth),
          () => {
            $$renderer2.push(` dir="auto"`);
          },
          () => {
            MarkdownInlineTokens($$renderer2, {
              id: `${id}-${tokenIdx}-h`,
              tokens: token.tokens,
              done,
              sourceIds,
              onSourceClick
            });
          }
        );
      } else if (token.type === "code") {
        $$renderer2.push("<!--[2-->");
        if (token.raw.includes("```")) {
          $$renderer2.push("<!--[0-->");
          CodeBlock($$renderer2, {
            id: `${id}-${tokenIdx}`,
            collapsed: store_get($$store_subs ??= {}, "$settings", settings)?.collapseCodeBlocks ?? false,
            token,
            lang: token?.lang ?? "",
            code: token?.text ?? "",
            attributes,
            save,
            preview,
            edit: editCodeBlock,
            stickyButtonsClassName: topPadding ? "top-10" : "top-0",
            onSave: (value) => {
              onSave({ raw: token.raw, oldContent: token.text, newContent: value });
            },
            onUpdate,
            onPreview
          });
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(token.text)}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "table") {
        $$renderer2.push("<!--[3-->");
        $$renderer2.push(`<div class="relative w-full group mb-2"><div class="scrollbar-hidden relative overflow-x-auto max-w-full"><table class="w-full text-sm text-start text-gray-500 dark:text-gray-400 max-w-full rounded-xl" dir="auto"><thead class="text-xs text-gray-700 uppercase dark:text-gray-400 border-none"><tr><!--[-->`);
        const each_array_1 = ensure_array_like(token.header);
        for (let headerIdx = 0, $$length2 = each_array_1.length; headerIdx < $$length2; headerIdx++) {
          let header = each_array_1[headerIdx];
          $$renderer2.push(`<th scope="col" class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!"${attr_style(token.align[headerIdx] ? `text-align: ${token.align[headerIdx]}` : "")}><div class="gap-1.5 text-start"><div class="shrink-0 break-normal">`);
          MarkdownInlineTokens($$renderer2, {
            id: `${id}-${tokenIdx}-header-${headerIdx}`,
            tokens: header.tokens,
            done,
            sourceIds,
            onSourceClick
          });
          $$renderer2.push(`<!----></div></div></th>`);
        }
        $$renderer2.push(`<!--]--></tr></thead><tbody><!--[-->`);
        const each_array_2 = ensure_array_like(token.rows);
        for (let rowIdx = 0, $$length2 = each_array_2.length; rowIdx < $$length2; rowIdx++) {
          let row = each_array_2[rowIdx];
          $$renderer2.push(`<tr class="text-xs"><!--[-->`);
          const each_array_3 = ensure_array_like(row ?? []);
          for (let cellIdx = 0, $$length3 = each_array_3.length; cellIdx < $$length3; cellIdx++) {
            let cell = each_array_3[cellIdx];
            $$renderer2.push(`<td${attr_class(`px-3! py-2! text-gray-900 dark:text-white w-max ${token.rows.length - 1 === rowIdx ? "" : "border-b border-gray-50! dark:border-gray-850!"}`)}${attr_style(token.align[cellIdx] ? `text-align: ${token.align[cellIdx]}` : "")}><div class="break-normal">`);
            MarkdownInlineTokens($$renderer2, {
              id: `${id}-${tokenIdx}-row-${rowIdx}-${cellIdx}`,
              tokens: cell.tokens,
              done,
              sourceIds,
              onSourceClick
            });
            $$renderer2.push(`<!----></div></td>`);
          }
          $$renderer2.push(`<!--]--></tr>`);
        }
        $$renderer2.push(`<!--]--></tbody></table></div> <div class="absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5">`);
        Tooltip($$renderer2, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy"),
          children: ($$renderer3) => {
            $$renderer3.push(`<button class="p-1 rounded-lg bg-transparent transition">`);
            Clipboard($$renderer3, { className: " size-3.5", strokeWidth: "1.5" });
            $$renderer3.push(`<!----></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----> `);
        Tooltip($$renderer2, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Export to CSV"),
          children: ($$renderer3) => {
            $$renderer3.push(`<button class="p-1 rounded-lg bg-transparent transition">`);
            Download($$renderer3, { className: " size-3.5", strokeWidth: "1.5" });
            $$renderer3.push(`<!----></button>`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div></div>`);
      } else if (token.type === "blockquote") {
        $$renderer2.push("<!--[4-->");
        const alert = alertComponent(token);
        if (alert) {
          $$renderer2.push("<!--[0-->");
          AlertRenderer($$renderer2, { token, alert });
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<blockquote dir="auto">`);
          MarkdownTokens($$renderer2, {
            id: `${id}-${tokenIdx}`,
            tokens: token.tokens,
            done,
            preview,
            compactPreview,
            editCodeBlock,
            onTaskClick,
            sourceIds,
            onSourceClick
          });
          $$renderer2.push(`<!----></blockquote>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "list") {
        $$renderer2.push("<!--[5-->");
        if (token.ordered) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<ol${attr("start", token.start || 1)} dir="auto"><!--[-->`);
          const each_array_4 = ensure_array_like(token.items);
          for (let itemIdx = 0, $$length2 = each_array_4.length; itemIdx < $$length2; itemIdx++) {
            let item = each_array_4[itemIdx];
            $$renderer2.push(`<li class="text-start">`);
            if (item?.task) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<input class="translate-y-[1px] -translate-x-1 flex-shrink-0" type="checkbox"${attr("checked", item.checked, true)}/>`);
            } else {
              $$renderer2.push("<!--[-1-->");
            }
            $$renderer2.push(`<!--]--> `);
            MarkdownTokens($$renderer2, {
              id: `${id}-${tokenIdx}-${itemIdx}`,
              tokens: item.tokens,
              top: token.loose,
              done,
              preview,
              compactPreview,
              editCodeBlock,
              onTaskClick,
              sourceIds,
              onSourceClick
            });
            $$renderer2.push(`<!----></li>`);
          }
          $$renderer2.push(`<!--]--></ol>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<ul dir="auto"><!--[-->`);
          const each_array_5 = ensure_array_like(token.items);
          for (let itemIdx = 0, $$length2 = each_array_5.length; itemIdx < $$length2; itemIdx++) {
            let item = each_array_5[itemIdx];
            $$renderer2.push(`<li${attr_class(`text-start ${item?.task ? "flex -translate-x-6.5 gap-3 " : ""}`)}>`);
            if (item?.task) {
              $$renderer2.push("<!--[0-->");
              $$renderer2.push(`<input class="flex-shrink-0" type="checkbox"${attr("checked", item.checked, true)}/> <div>`);
              MarkdownTokens($$renderer2, {
                id: `${id}-${tokenIdx}-${itemIdx}`,
                tokens: item.tokens,
                top: token.loose,
                done,
                preview,
                compactPreview,
                editCodeBlock,
                onTaskClick,
                sourceIds,
                onSourceClick
              });
              $$renderer2.push(`<!----></div>`);
            } else {
              $$renderer2.push("<!--[-1-->");
              MarkdownTokens($$renderer2, {
                id: `${id}-${tokenIdx}-${itemIdx}`,
                tokens: item.tokens,
                top: token.loose,
                done,
                preview,
                compactPreview,
                editCodeBlock,
                onTaskClick,
                sourceIds,
                onSourceClick
              });
              $$renderer2.push(`<!---->`);
            }
            $$renderer2.push(`<!--]--></li>`);
          }
          $$renderer2.push(`<!--]--></ul>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "detail_group") {
        $$renderer2.push("<!--[6-->");
        ConsecutiveDetailsGroup($$renderer2, {
          id: `${id}-${tokenIdx}-detail-group`,
          tokens: token.items,
          messageDone: done,
          compactPreview,
          allowEmbeds,
          $$slots: {
            content: ($$renderer3) => {
              $$renderer3.push(`<div slot="content"><!--[-->`);
              const each_array_6 = ensure_array_like(token.items);
              for (let detailIdx = 0, $$length2 = each_array_6.length; detailIdx < $$length2; detailIdx++) {
                let detailToken = each_array_6[detailIdx];
                const textContent = getDetailTextContent(detailToken);
                if (detailToken?.attributes?.type === "tool_calls") {
                  $$renderer3.push("<!--[0-->");
                  ToolCallDisplay($$renderer3, {
                    id: `${id}-${tokenIdx}-${detailIdx}-tc`,
                    attributes: detailToken.attributes,
                    resultContent: getDetailTextContent(detailToken),
                    grouped: true,
                    open: store_get($$store_subs ??= {}, "$settings", settings)?.expandDetails ?? false,
                    className: "w-full",
                    buttonClassName: detailButtonClassName
                  });
                } else if (textContent.length > 0) {
                  $$renderer3.push("<!--[1-->");
                  Collapsible($$renderer3, {
                    title: detailToken.summary,
                    open: store_get($$store_subs ??= {}, "$settings", settings)?.expandDetails ?? false,
                    attributes: detailToken?.attributes,
                    messageDone: done,
                    className: "w-full",
                    buttonClassName: detailButtonClassName,
                    dir: "auto",
                    $$slots: {
                      content: ($$renderer4) => {
                        $$renderer4.push(`<div class="mb-1.5" slot="content">`);
                        MarkdownTokens($$renderer4, {
                          id: `${id}-${tokenIdx}-${detailIdx}-d`,
                          tokens: marked.lexer(decode(detailToken.text)),
                          attributes: detailToken?.attributes,
                          done,
                          preview,
                          compactPreview,
                          editCodeBlock,
                          onTaskClick,
                          sourceIds,
                          onSourceClick
                        });
                        $$renderer4.push(`<!----></div>`);
                      }
                    }
                  });
                } else {
                  $$renderer3.push("<!--[-1-->");
                  Collapsible($$renderer3, {
                    title: detailToken.summary,
                    open: false,
                    disabled: true,
                    attributes: detailToken?.attributes,
                    messageDone: done,
                    className: "w-full",
                    buttonClassName: detailButtonClassName,
                    dir: "auto"
                  });
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]--></div>`);
            }
          }
        });
      } else if (token.type === "details") {
        $$renderer2.push("<!--[7-->");
        const textContent = getDetailTextContent(token);
        if (token?.attributes?.type === "tool_calls") {
          $$renderer2.push("<!--[0-->");
          ToolCallDisplay($$renderer2, {
            id: `${id}-${tokenIdx}-tc`,
            attributes: token.attributes,
            resultContent: getDetailTextContent(token),
            open: store_get($$store_subs ??= {}, "$settings", settings)?.expandDetails ?? false,
            className: "w-full space-y-2",
            buttonClassName: detailButtonClassName
          });
        } else if (textContent.length > 0) {
          $$renderer2.push("<!--[1-->");
          Collapsible($$renderer2, {
            title: token.summary,
            open: store_get($$store_subs ??= {}, "$settings", settings)?.expandDetails ?? false,
            attributes: token?.attributes,
            messageDone: done,
            className: "w-full space-y-2",
            buttonClassName: detailButtonClassName,
            dir: "auto",
            $$slots: {
              content: ($$renderer3) => {
                $$renderer3.push(`<div class="mb-1.5" slot="content">`);
                MarkdownTokens($$renderer3, {
                  id: `${id}-${tokenIdx}-d`,
                  tokens: marked.lexer(decode(token.text)),
                  attributes: token?.attributes,
                  done,
                  preview,
                  compactPreview,
                  editCodeBlock,
                  onTaskClick,
                  sourceIds,
                  onSourceClick
                });
                $$renderer3.push(`<!----></div>`);
              }
            }
          });
        } else {
          $$renderer2.push("<!--[-1-->");
          Collapsible($$renderer2, {
            title: token.summary,
            open: false,
            disabled: true,
            attributes: token?.attributes,
            messageDone: done,
            className: "w-full space-y-2",
            buttonClassName: detailButtonClassName,
            dir: "auto"
          });
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "html") {
        $$renderer2.push("<!--[8-->");
        HTMLToken($$renderer2, { id, token, onSourceClick });
      } else if (token.type === "iframe") {
        $$renderer2.push("<!--[9-->");
        $$renderer2.push(`<iframe${attr("src", `${stringify(WEBUI_BASE_URL)}/api/v1/files/${stringify(token.fileId)}/content`)}${attr("title", token.fileId)} width="100%" frameborder="0"></iframe>`);
      } else if (token.type === "paragraph") {
        $$renderer2.push("<!--[10-->");
        if (paragraphTag == "span") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span dir="auto">`);
          MarkdownInlineTokens($$renderer2, {
            id: `${id}-${tokenIdx}-p`,
            tokens: token.tokens ?? [],
            done,
            sourceIds,
            onSourceClick
          });
          $$renderer2.push(`<!----></span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<p dir="auto"${attr_class(clsx(singlePlainBlock ? "!my-0" : ""))}>`);
          MarkdownInlineTokens($$renderer2, {
            id: `${id}-${tokenIdx}-p`,
            tokens: token.tokens ?? [],
            done,
            sourceIds,
            onSourceClick
          });
          $$renderer2.push(`<!----></p>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "text") {
        $$renderer2.push("<!--[11-->");
        if (top) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p${attr_class(clsx(singlePlainBlock ? "!my-0" : ""))}>`);
          if (token.tokens) {
            $$renderer2.push("<!--[0-->");
            MarkdownInlineTokens($$renderer2, {
              id: `${id}-${tokenIdx}-t`,
              tokens: token.tokens,
              done,
              sourceIds,
              onSourceClick
            });
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`${escape_html(unescapeHtml(token.text))}`);
          }
          $$renderer2.push(`<!--]--></p>`);
        } else if (token.tokens) {
          $$renderer2.push("<!--[1-->");
          MarkdownInlineTokens($$renderer2, {
            id: `${id}-${tokenIdx}-p`,
            tokens: token.tokens ?? [],
            done,
            sourceIds,
            onSourceClick
          });
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(unescapeHtml(token.text))}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "inlineKatex") {
        $$renderer2.push("<!--[12-->");
        if (token.text) {
          $$renderer2.push("<!--[0-->");
          KatexRenderer($$renderer2, {
            content: token.text,
            displayMode: token?.displayMode ?? false
          });
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "blockKatex") {
        $$renderer2.push("<!--[13-->");
        if (token.text) {
          $$renderer2.push("<!--[0-->");
          KatexRenderer($$renderer2, {
            content: token.text,
            displayMode: token?.displayMode ?? false
          });
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else if (token.type === "colonFence") {
        $$renderer2.push("<!--[14-->");
        ColonFenceBlock($$renderer2, {
          id: `${id}-${tokenIdx}`,
          token,
          tokenIdx,
          done,
          editCodeBlock,
          sourceIds,
          onTaskClick,
          onSourceClick
        });
      } else if (token.type === "space") {
        $$renderer2.push("<!--[15-->");
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`${escape_html(/* @__PURE__ */ console.log("Unknown token", token))}`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      tokens,
      top,
      attributes,
      sourceIds,
      done,
      save,
      preview,
      compactPreview,
      paragraphTag,
      editCodeBlock,
      topPadding,
      allowEmbeds,
      onSave,
      onUpdate,
      onPreview,
      onTaskClick,
      onSourceClick
    });
  });
}
const disableSingleTilde = {
  tokenizer: {
    del(src) {
      const doubleMatch = /^~~(?=\S)([\s\S]*?\S)~~/.exec(src);
      if (doubleMatch) {
        return {
          type: "del",
          raw: doubleMatch[0],
          text: doubleMatch[1],
          tokens: this.lexer.inlineTokens(doubleMatch[1])
        };
      }
      const singleMatch = /^~(?=\S)([\s\S]*?\S)~/.exec(src);
      if (singleMatch) {
        return {
          type: "text",
          raw: singleMatch[0],
          text: singleMatch[0]
          // include both tildes as literal text
        };
      }
      return false;
    }
  }
};
function escapeHtml$1(s) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}
function mentionStart(src) {
  return src.indexOf("<");
}
function mentionRenderer(token, options2 = {}) {
  const trigger = options2.triggerChar ?? "@";
  const cls = options2.className ?? "mention";
  const extra = options2.extraAttrs ?? {};
  const attrs = Object.entries({
    class: cls,
    "data-type": "mention",
    "data-id": token.id,
    "data-mention-suggestion-char": trigger,
    ...extra
  }).map(([k, v]) => `${k}="${escapeHtml$1(String(v))}"`).join(" ");
  return `<span ${attrs}>${escapeHtml$1(trigger + token.label)}</span>`;
}
function mentionExtension(opts = {}) {
  const trigger = opts.triggerChar ?? "@";
  const re = new RegExp(`^<\\${trigger}([\\w.\\-:/]+)(?:\\|([^>]*))?>`);
  const snapshot = {
    triggerChar: trigger,
    className: opts.className,
    extraAttrs: opts.extraAttrs
  };
  return {
    name: "mention",
    level: "inline",
    start: mentionStart,
    tokenizer(src) {
      const m = re.exec(src);
      if (!m) return;
      const [, id, label] = m;
      return {
        type: "mention",
        raw: m[0],
        triggerChar: trigger,
        id,
        label: label && label.length > 0 ? label : id
      };
    },
    renderer(token) {
      return mentionRenderer(token, snapshot);
    }
  };
}
function colonFenceTokenizer(src) {
  const match = /^:::([\w-]+)[^\n]*\n([\s\S]*?)(?:\n:::(?:\s*(?:\n|$)))/.exec(src);
  if (match) {
    const fenceType = match[1];
    const text = match[2].trim();
    const raw = match[0];
    const tokens = [];
    this.lexer.blockTokens(text, tokens);
    return {
      type: "colonFence",
      raw,
      fenceType,
      text,
      tokens
    };
  }
}
function colonFenceStart(src) {
  const idx = src.match(/^:::\w/m);
  return idx ? idx.index : -1;
}
function colonFenceRenderer(token) {
  return `<div class="colon-fence colon-fence-${token.fenceType}">${token.text}</div>`;
}
function colonFenceExtension() {
  return {
    name: "colonFence",
    level: "block",
    start: colonFenceStart,
    tokenizer: colonFenceTokenizer,
    renderer: colonFenceRenderer
  };
}
function colonFenceExtension$1(options2 = {}) {
  return {
    extensions: [colonFenceExtension()]
  };
}
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}
function footnoteExtension() {
  return {
    name: "footnote",
    level: "inline",
    start(src) {
      return src.search(/\[\^\s*[a-zA-Z0-9_-]+\s*\]/);
    },
    tokenizer(src) {
      const rule = /^\[\^\s*([a-zA-Z0-9_-]+)\s*\]/;
      const match = rule.exec(src);
      if (match) {
        const escapedText = escapeHtml(match[1]);
        return {
          type: "footnote",
          raw: match[0],
          text: match[1],
          escapedText
        };
      }
    }
  };
}
function footnoteExtension$1() {
  return {
    extensions: [footnoteExtension()]
  };
}
function citationExtension() {
  return {
    name: "citation",
    level: "inline",
    start(src) {
      return src.search(/\[\d/);
    },
    tokenizer(src) {
      if (/^\[\^/.test(src)) return;
      const rule = /^(\[(?:\d+(?:#[^,\]\s]+)?(?:,\s*\d+(?:#[^,\]\s]+)?)*)\])+/;
      const match = rule.exec(src);
      if (!match) return;
      const raw = match[0];
      const groupRegex = /\[([^\]]+)\]/g;
      const ids = [];
      const citationIdentifiers = [];
      let m;
      while (m = groupRegex.exec(raw)) {
        const parts = m[1].split(",").map((p) => p.trim());
        parts.forEach((part) => {
          const match2 = /^(\d+)(?:#(.+))?$/.exec(part);
          if (match2) {
            const index = parseInt(match2[1], 10);
            if (!isNaN(index)) {
              ids.push(index);
              citationIdentifiers.push(part);
            }
          }
        });
      }
      if (ids.length === 0) return;
      return {
        type: "citation",
        raw,
        ids,
        // merged list of integers for legacy title lookup
        citationIdentifiers
        // merged list of full identifiers for granular targeting
      };
    },
    renderer(token) {
      return token.raw;
    }
  };
}
function citationExtension$1() {
  return {
    extensions: [citationExtension()]
  };
}
const options = {};
marked.use(markedKatexExtension(options));
marked.use(markedExtension(options));
marked.use(citationExtension$1());
marked.use(footnoteExtension$1());
marked.use(colonFenceExtension$1(options));
marked.use(disableSingleTilde);
marked.use({
  extensions: [
    mentionExtension({ triggerChar: "@" }),
    mentionExtension({ triggerChar: "#" }),
    mentionExtension({ triggerChar: "$" })
  ]
});
function Markdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let id = fallback($$props["id"], "");
    let content = $$props["content"];
    let done = fallback($$props["done"], true);
    let model = fallback($$props["model"], null);
    let save = fallback($$props["save"], false);
    let preview = fallback($$props["preview"], false);
    let compactPreview = fallback($$props["compactPreview"], false);
    let paragraphTag = fallback($$props["paragraphTag"], "p");
    let editCodeBlock = fallback($$props["editCodeBlock"], true);
    let topPadding = fallback($$props["topPadding"], false);
    let allowEmbeds = fallback($$props["allowEmbeds"], true);
    let sourceIds = fallback($$props["sourceIds"], () => [], true);
    let onSave = fallback($$props["onSave"], () => {
    });
    let onUpdate = fallback($$props["onUpdate"], () => {
    });
    let onPreview = fallback($$props["onPreview"], () => {
    });
    let onSourceClick = fallback($$props["onSourceClick"], () => {
    });
    let onTaskClick = fallback($$props["onTaskClick"], () => {
    });
    let tokens = [];
    let pendingUpdate = null;
    let lastContent = "";
    let lastParsedContent = "";
    const parseTokens = () => {
      if (content === lastContent) return;
      lastContent = content;
      const processed = replaceTokens(processResponseContent(content), model?.name, store_get($$store_subs ??= {}, "$user", user)?.name);
      if (processed === lastParsedContent) return;
      lastParsedContent = processed;
      tokens = marked.lexer(processed);
    };
    const updateHandler = (content2) => {
      if (content2) {
        if (done) {
          cancelAnimationFrame(pendingUpdate);
          pendingUpdate = null;
          parseTokens();
        } else if (!pendingUpdate) {
          pendingUpdate = requestAnimationFrame(() => {
            pendingUpdate = null;
            parseTokens();
          });
        }
      }
    };
    onDestroy(() => {
      cancelAnimationFrame(pendingUpdate);
    });
    updateHandler(content);
    $$renderer2.push(`<!---->`);
    {
      MarkdownTokens($$renderer2, {
        tokens,
        id,
        done,
        save,
        preview,
        compactPreview,
        paragraphTag,
        editCodeBlock,
        sourceIds,
        topPadding,
        allowEmbeds,
        onTaskClick,
        onSourceClick,
        onSave,
        onUpdate,
        onPreview
      });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      content,
      done,
      model,
      save,
      preview,
      compactPreview,
      paragraphTag,
      editCodeBlock,
      topPadding,
      allowEmbeds,
      sourceIds,
      onSave,
      onUpdate,
      onPreview,
      onSourceClick,
      onTaskClick
    });
  });
}
export {
  Bolt as B,
  Clipboard as C,
  DocumentDuplicate as D,
  FullHeightIframe as F,
  Info as I,
  LightBulb as L,
  Markdown as M,
  PanzoomContainer as P,
  Reset as R,
  Sparkles as S,
  ToolCallDisplay as T,
  CheckCircle as a,
  SVGPanZoom as b,
  ConsecutiveDetailsGroup as c,
  CodeBlock as d,
  Image as e,
  injectCsp as i,
  safeImageUrl as s
};
//# sourceMappingURL=FileItemModal.svelte_svelte_type_style_lang.js.map
