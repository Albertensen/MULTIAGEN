import { o as getContext, f as fallback, d as attr_class, g as clsx, a as attr, k as escape_html, c as store_get, u as unsubscribe_stores, b as bind_props, e as ensure_array_like, j as slot } from "./root.js";
import DOMPurify from "dompurify";
import { o as onDestroy, t as tick } from "./index-server.js";
import { marked } from "marked";
import { v4 } from "uuid";
/* empty css                                            */
import { h as html } from "./html.js";
function SensitiveInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let outerClass, inputBaseClass, resolvedInputClass, buttonClass;
    const i18n = getContext("i18n");
    let id = fallback($$props["id"], () => `password-input-${v4()}`, true);
    let value = fallback($$props["value"], "");
    let placeholder = fallback($$props["placeholder"], "");
    let type = fallback($$props["type"], "text");
    let required = fallback($$props["required"], true);
    let readOnly = fallback($$props["readOnly"], false);
    let variant = fallback($$props["variant"], "plain");
    let outerClassName = fallback($$props["outerClassName"], "flex flex-1");
    let inputClassName = fallback($$props["inputClassName"], "");
    let showButtonClassName = fallback($$props["showButtonClassName"], "");
    let screenReader = fallback($$props["screenReader"], true);
    let autocomplete = fallback($$props["autocomplete"], "off");
    let name = fallback($$props["name"], void 0);
    let className = fallback($$props["class"], "");
    let show = false;
    outerClass = variant === "settings" ? `${outerClassName} h-7 items-center rounded-lg border border-gray-100/50 bg-gray-50/40 px-2 transition-colors focus-within:border-blue-400 dark:border-white/[0.04] dark:bg-white/[0.03] dark:focus-within:border-blue-500` : outerClassName;
    inputBaseClass = variant === "settings" ? "min-w-0 flex-1 bg-transparent text-xs text-gray-700 outline-hidden placeholder:text-gray-300 disabled:text-gray-500 dark:text-gray-300 dark:placeholder:text-gray-700" : "w-full bg-transparent py-0.5 text-sm outline-hidden";
    resolvedInputClass = `${inputBaseClass} ${variant === "plain" ? className : ""} ${inputClassName} ${"password"}`;
    buttonClass = variant === "settings" ? `ml-1.5 bg-transparent text-gray-400 transition hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 ${showButtonClassName}` : `pl-1.5 bg-transparent transition ${showButtonClassName}`;
    $$renderer2.push(`<div${attr_class(clsx(outerClass))}>`);
    if (screenReader) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<label class="sr-only"${attr("for", id)}>${escape_html(placeholder || store_get($$store_subs ??= {}, "$i18n", i18n).t("Password"))}</label>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <input${attr("id", id)}${attr_class(clsx(resolvedInputClass))}${attr("placeholder", placeholder)}${attr("type", type === "password" && !show ? "password" : "text")}${attr("value", value)}${attr("name", name)}${attr("required", required && !readOnly, true)}${attr("disabled", readOnly, true)}${attr("autocomplete", autocomplete)}/> <button${attr_class(clsx(buttonClass))} type="button"${attr("aria-pressed", show)}${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Make password visible in the user interface"))}>`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      id,
      value,
      placeholder,
      type,
      required,
      readOnly,
      variant,
      outerClassName,
      inputClassName,
      showButtonClassName,
      screenReader,
      autocomplete,
      name,
      class: className
    });
  });
}
function NativeSelect($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let value = fallback($$props["value"], "");
    let options = fallback($$props["options"], () => [], true);
    let placeholder = fallback($$props["placeholder"], "");
    let className = fallback($$props["className"], "");
    let required = fallback($$props["required"], false);
    $$renderer2.select({ class: className, value, required }, ($$renderer3) => {
      if (placeholder) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.option({ value: "", disabled: true }, ($$renderer4) => {
          $$renderer4.push(`${escape_html(placeholder)}`);
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--><!--[-->`);
      const each_array = ensure_array_like(options);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let option = each_array[$$index];
        const optionValue = typeof option === "object" && option !== null ? option.value : option;
        const optionLabel = typeof option === "object" && option !== null ? option.label ?? option.value : option;
        $$renderer3.option({ value: optionValue, selected: optionValue === value }, ($$renderer4) => {
          $$renderer4.push(`${escape_html(optionLabel)}`);
        });
      }
      $$renderer3.push(`<!--]-->`);
    });
    bind_props($$props, { value, options, placeholder, className, required });
  });
}
function ConfirmDialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let title = fallback($$props["title"], "");
    let message = fallback($$props["message"], "");
    let cancelLabel = fallback($$props["cancelLabel"], () => store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"), true);
    let confirmLabel = fallback($$props["confirmLabel"], () => store_get($$store_subs ??= {}, "$i18n", i18n).t("Confirm"), true);
    let onConfirm = fallback($$props["onConfirm"], () => {
    });
    let input = fallback($$props["input"], false);
    let inputPlaceholder = fallback($$props["inputPlaceholder"], "");
    let inputValue = fallback($$props["inputValue"], "");
    let inputType = fallback($$props["inputType"], "");
    let inputOptions = fallback($$props["inputOptions"], () => [], true);
    let _inputValue = inputValue;
    let show = fallback($$props["show"], false);
    const init = () => {
      _inputValue = inputValue;
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        cancelHandler();
      }
      if (event.key === "Enter") {
        const target = event.target;
        if (target instanceof Element && target.closest("a, button, textarea")) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        confirmHandler();
      }
    };
    const confirmHandler = async () => {
      show = false;
      await tick();
      await onConfirm();
    };
    const cancelHandler = () => {
      show = false;
    };
    onDestroy(() => {
      show = false;
      window.removeEventListener("keydown", handleKeyDown);
    });
    if (show) {
      init();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (show) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-99999999 overflow-hidden overscroll-contain"><div role="dialog" aria-modal="true"${attr("aria-label", title !== "" ? title : store_get($$store_subs ??= {}, "$i18n", i18n).t("Confirm your action"))} tabindex="-1" class="m-auto max-w-full w-[32rem] mx-2 bg-white dark:bg-gray-950 rounded-3xl max-h-[100dvh] shadow-3xl border border-white dark:border-gray-900"><div class="px-5 py-5 flex flex-col"><div class="text-base font-medium dark:text-gray-200 mb-2.5">`);
        if (title !== "") {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`${escape_html(title)}`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Confirm your action"))}`);
        }
        $$renderer3.push(`<!--]--></div> <!--[-->`);
        slot($$renderer3, $$props, "default", {}, () => {
          $$renderer3.push(`<div class="text-sm text-gray-500 flex-1">`);
          if (message !== "") {
            $$renderer3.push("<!--[0-->");
            const html$1 = DOMPurify.sanitize(marked.parse(message));
            $$renderer3.push(`${html(html$1)}`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("This action cannot be undone. Do you wish to continue?"))}`);
          }
          $$renderer3.push(`<!--]--> `);
          if (input) {
            $$renderer3.push("<!--[0-->");
            if (inputType === "password") {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<div class="w-full mt-2 rounded-lg px-4 py-2 text-sm dark:text-gray-300 dark:bg-gray-900">`);
              SensitiveInput($$renderer3, {
                id: "event-confirm-input",
                placeholder: inputPlaceholder ? inputPlaceholder : store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter your message"),
                required: true,
                get value() {
                  return _inputValue;
                },
                set value($$value) {
                  _inputValue = $$value;
                  $$settled = false;
                }
              });
              $$renderer3.push(`<!----></div>`);
            } else if (inputType === "select" && inputOptions.length) {
              $$renderer3.push("<!--[1-->");
              NativeSelect($$renderer3, {
                className: "w-full mt-2 rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-900 outline-hidden",
                options: inputOptions,
                placeholder: inputPlaceholder ? inputPlaceholder : store_get($$store_subs ??= {}, "$i18n", i18n).t("Select an option"),
                required: true,
                get value() {
                  return _inputValue;
                },
                set value($$value) {
                  _inputValue = $$value;
                  $$settled = false;
                }
              });
            } else {
              $$renderer3.push("<!--[-1-->");
              $$renderer3.push(`<textarea${attr("aria-label", inputPlaceholder ? inputPlaceholder : store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter your message"))}${attr("placeholder", inputPlaceholder ? inputPlaceholder : store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter your message"))} class="w-full mt-2 rounded-lg px-4 py-2 text-sm dark:text-gray-300 dark:bg-gray-900 outline-hidden resize-none" rows="3" required="">`);
              const $$body = escape_html(_inputValue);
              if ($$body) {
                $$renderer3.push(`${$$body}`);
              }
              $$renderer3.push(`</textarea>`);
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        });
        $$renderer3.push(`<!--]--> <div class="mt-5 flex justify-between gap-1.5"><button class="text-sm bg-gray-100 hover:bg-gray-100/70 text-gray-800 dark:bg-gray-850 dark:hover:bg-gray-850/60 dark:text-white font-normal w-full py-1.5 rounded-full transition" type="button">${escape_html(cancelLabel)}</button> <button class="text-sm bg-gray-900 hover:bg-gray-900/90 text-gray-100 dark:bg-gray-100 dark:hover:bg-gray-100/90 dark:text-gray-800 font-normal w-full py-1.5 rounded-full transition" type="button">${escape_html(confirmLabel)}</button></div></div></div></div>`);
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
      title,
      message,
      cancelLabel,
      confirmLabel,
      onConfirm,
      input,
      inputPlaceholder,
      inputValue,
      inputType,
      inputOptions,
      show
    });
  });
}
export {
  ConfirmDialog as C,
  NativeSelect as N,
  SensitiveInput as S
};
//# sourceMappingURL=ConfirmDialog.js.map
