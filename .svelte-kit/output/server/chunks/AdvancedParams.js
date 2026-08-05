import { o as getContext, f as fallback, b as bind_props, d as attr_class, g as clsx, c as store_get, a as attr, k as escape_html, e as ensure_array_like, u as unsubscribe_stores } from "./root.js";
import { S as Switch_1 } from "./Switch.js";
import { T as Textarea } from "./EllipsisHorizontal.js";
import { T as Tooltip } from "./Tooltip.js";
import { P as Plus } from "./Plus.js";
function AdvancedParams($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let onChange = fallback($$props["onChange"], () => {
    });
    let admin = fallback($$props["admin"], false);
    let custom = fallback($$props["custom"], false);
    let layout = fallback($$props["layout"], "stack");
    const defaultParams = {
      // Advanced
      stream_response: null,
      // Set stream responses for this model individually
      stream_delta_chunk_size: null,
      // Set the chunk size for streaming responses
      compact_token_threshold: null,
      function_calling: null,
      reasoning_tags: null,
      seed: null,
      stop: null,
      temperature: null,
      reasoning_effort: null,
      logit_bias: null,
      max_tokens: null,
      top_k: null,
      top_p: null,
      min_p: null,
      frequency_penalty: null,
      presence_penalty: null,
      mirostat: null,
      mirostat_eta: null,
      mirostat_tau: null,
      repeat_last_n: null,
      tfs_z: null,
      repeat_penalty: null,
      use_mmap: null,
      use_mlock: null,
      think: null,
      format: null,
      keep_alive: null,
      num_keep: null,
      num_ctx: null,
      num_batch: null,
      num_thread: null,
      num_gpu: null
    };
    let params = fallback($$props["params"], defaultParams);
    if (params) {
      onChange(params);
    }
    function rangeParam($$renderer3, key, label, min, max, rangeStep, numberStep = "any", numberMax = max) {
      $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input type="range"${attr("aria-label", label)}${attr("min", min)}${attr("max", max)}${attr("step", rangeStep)}${attr("value", params[key])} class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input${attr("value", params[key])} type="number"${attr("aria-label", label)} class="bg-transparent text-center w-14"${attr("min", min)}${attr("max", numberMax)}${attr("step", numberStep)}/></div></div>`);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div${attr_class(clsx(layout === "grid" ? "grid grid-cols-1 gap-x-5 gap-y-1 pb-safe-bottom text-xs text-gray-600 dark:text-gray-400 sm:grid-cols-2 lg:grid-cols-3" : "space-y-1 pb-safe-bottom text-xs text-gray-600 dark:text-gray-400"))}><div>`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("When enabled, the model will respond to each chat message in real-time, generating a response as soon as the user sends a message. This mode is useful for live chat applications, but may impact performance on slower hardware."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Stream Chat Response"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button">`);
          if (params.stream_response === true) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("On"))}</span>`);
          } else if (params.stream_response === false) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Off"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> `);
      if (admin) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div>`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The stream delta chunk size for the model. Increasing the chunk size will make the model respond with larger pieces of text at once."),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Stream Delta Chunk Size"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
            if ((params?.stream_delta_chunk_size ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.stream_delta_chunk_size ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          rangeParam($$renderer3, "stream_delta_chunk_size", store_get($$store_subs ??= {}, "$i18n", i18n).t("Stream Delta Chunk Size"), 1, 128, 1, "any", void 0);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> <div>`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set a model-specific context compaction token threshold. When set, this overrides the global threshold up to the global cap."),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Context Compaction Threshold"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
            if ((params?.compact_token_threshold ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.compact_token_threshold ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="number"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Context Compaction Threshold"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter token threshold"))}${attr("value", params.compact_token_threshold)} autocomplete="off" min="1" step="1"/></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div>`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Native mode (default) leverages the model's built-in tool-calling capabilities. Legacy mode works with a wider range of models by calling tools once before execution via prompt injection."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Function Calling"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button">`);
          if (params.function_calling === "native") {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Native"))}</span>`);
          } else if (params.function_calling === "legacy") {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Legacy"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t('Enable, disable, or customize the reasoning tags used by the model. "Enabled" uses default tags, "Disabled" turns off reasoning tags, and "Custom" lets you specify your own start and end tags.'),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Reasoning Tags"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.reasoning_tags ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else if ((params?.reasoning_tags ?? null) === true) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled"))}</span>`);
          } else if ((params?.reasoning_tags ?? null) === false) {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (![true, false, null].includes(params?.reasoning_tags ?? null) && (params?.reasoning_tags ?? []).length === 2) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Start Tag"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Start Tag"))}${attr("value", params.reasoning_tags[0])} autocomplete="off"/></div> <div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("End Tag"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("End Tag"))}${attr("value", params.reasoning_tags[1])} autocomplete="off"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sets the random number seed to use for generation. Setting this to a specific number will make the model generate the same text for the same prompt."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Seed"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.seed ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.seed ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="number"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Seed"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter Seed"))}${attr("value", params.seed)} autocomplete="off" min="0"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sets the stop sequences to use. When this pattern is encountered, the LLM will stop generating text and return. Multiple stop patterns may be set by specifying multiple separate stop parameters in a modelfile."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Stop Sequence"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.stop ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.stop ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Stop Sequence"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter stop sequence"))}${attr("value", params.stop)} autocomplete="off"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The temperature of the model. Increasing the temperature will make the model answer more creatively."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Temperature"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.temperature ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.temperature ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "temperature", store_get($$store_subs ??= {}, "$i18n", i18n).t("Temperature"), 0, 2, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Constrains effort on reasoning for reasoning models. Only applicable to reasoning models from specific providers that support reasoning effort."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Reasoning Effort"))}</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.reasoning_effort ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.reasoning_effort ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Reasoning Effort"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter reasoning effort"))}${attr("value", params.reasoning_effort)} autocomplete="off"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Boosting or penalizing specific tokens for constrained responses. Bias values will be clamped between -100 and 100 (inclusive). (Default: none)"),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">logit_bias</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.logit_bias ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.logit_bias ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" aria-label="logit_bias"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t('Enter comma-separated "token:bias_value" pairs (example: 5432:100, 413:-100)'))}${attr("value", params.logit_bias)} autocomplete="off"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("This option sets the maximum number of tokens the model can generate in its response. Increasing this limit allows the model to provide longer answers, but it may also increase the likelihood of unhelpful or irrelevant content being generated."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">max_tokens</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.max_tokens ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.max_tokens ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "max_tokens", "max_tokens", -2, 131072, 1, 1, void 0);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Reduces the probability of generating nonsense. A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">top_k</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.top_k ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.top_k ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input type="range" aria-label="top_k" min="0" max="1000" step="1"${attr("value", params.top_k)} class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input${attr("value", params.top_k)} type="number" aria-label="top_k" class="bg-transparent text-center w-14" min="0" max="1000" step="1"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Works together with top-k. A higher value (e.g., 0.95) will lead to more diverse text, while a lower value (e.g., 0.5) will generate more focused and conservative text."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">top_p</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.top_p ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.top_p ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "top_p", "top_p", 0, 1, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Alternative to the top_p, and aims to ensure a balance of quality and variety. The parameter p represents the minimum probability for a token to be considered, relative to the probability of the most likely token. For example, with p=0.05 and the most likely token having a probability of 0.9, logits with a value less than 0.045 are filtered out."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">min_p</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.min_p ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.min_p ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "min_p", "min_p", 0, 1, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sets a scaling bias against tokens to penalize repetitions, based on how many times they have appeared. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">frequency_penalty</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.frequency_penalty ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.frequency_penalty ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "frequency_penalty", "frequency_penalty", -2, 2, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sets a flat bias against tokens that have appeared at least once. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">presence_penalty</div> <button class="p-1 px-3 text-xs flex rounded transition flex-shrink-0 outline-none" type="button">`);
          if ((params?.presence_penalty ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.presence_penalty ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "presence_penalty", "presence_penalty", -2, 2, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enable Mirostat sampling for controlling perplexity."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">mirostat</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.mirostat ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.mirostat ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "mirostat", "mirostat", 0, 2, 1, 1);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Influences how quickly the algorithm responds to feedback from the generated text. A lower learning rate will result in slower adjustments, while a higher learning rate will make the algorithm more responsive."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">mirostat_eta</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.mirostat_eta ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.mirostat_eta ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "mirostat_eta", "mirostat_eta", 0, 1, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Controls the balance between coherence and diversity of the output. A lower value will result in more focused and coherent text."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">mirostat_tau</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.mirostat_tau ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.mirostat_tau ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "mirostat_tau", "mirostat_tau", 0, 10, 0.5);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sets how far back for the model to look back to prevent repetition."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">repeat_last_n</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.repeat_last_n ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.repeat_last_n ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "repeat_last_n", "repeat_last_n", -1, 128, 1, 1);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Tail free sampling is used to reduce the impact of less probable tokens from the output. A higher value (e.g., 2.0) will reduce the impact more, while a value of 1.0 disables this setting."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">tfs_z</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.tfs_z ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.tfs_z ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "tfs_z", "tfs_z", 0, 2, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Control the repetition of token sequences in the generated text. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 1.1) will be more lenient. At 1, it is disabled."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">repeat_penalty</div> <button class="p-1 px-3 text-xs flex rounded transition flex-shrink-0 outline-none" type="button">`);
          if ((params?.repeat_penalty ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.repeat_penalty ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "repeat_penalty", "repeat_penalty", -2, 2, 0.05);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> `);
      if (admin) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="py-0.5 w-full justify-between">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enable Memory Mapping (mmap) to load model data. This option allows the system to use disk storage as an extension of RAM by treating disk files as if they were in RAM. This can improve model performance by allowing for faster data access. However, it may not work correctly with all systems and can consume a significant amount of disk space."),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">use_mmap</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
            if ((params?.use_mmap ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.use_mmap ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex justify-between items-center mt-1"><div class="text-xs text-gray-500">${escape_html(params.use_mmap ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"))}</div> <div class="pr-2">`);
          Switch_1($$renderer3, {
            ariaLabel: "use_mmap",
            get state() {
              return params.use_mmap;
            },
            set state($$value) {
              params.use_mmap = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Enable Memory Locking (mlock) to prevent model data from being swapped out of RAM. This option locks the model's working set of pages into RAM, ensuring that they will not be swapped out to disk. This can help maintain performance by avoiding page faults and ensuring fast data access."),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">use_mlock</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
            if ((params?.use_mlock ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.use_mlock ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex justify-between items-center mt-1"><div class="text-xs text-gray-500">${escape_html(params.use_mlock ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Enabled") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Disabled"))}</div> <div class="pr-2">`);
          Switch_1($$renderer3, {
            ariaLabel: "use_mlock",
            get state() {
              return params.use_mlock;
            },
            set state($$value) {
              params.use_mlock = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("This option enables or disables the use of the reasoning feature in Ollama, which allows the model to think before generating a response. When enabled, the model can take a moment to process the conversation context and generate a more thoughtful response."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs">think (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button">`);
          if (params.think === true) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("On"))}</span>`);
          } else if (params.think === false) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Off"))}</span>`);
          } else if (typeof params.think === "string") {
            $$renderer4.push("<!--[2-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (typeof params.think === "string") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><div class="flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text"${attr("aria-label", `think (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g. 'low', 'medium', 'high'"))}${attr("value", params.think)} autocomplete="off"/></div></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The format to return a response in. Format can be json or a JSON schema."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs">format (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button">`);
          if ((params?.format ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("JSON"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.format ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="flex mt-0.5 space-x-2">`);
        Textarea($$renderer3, {
          className: "w-full  text-sm bg-transparent outline-hidden",
          ariaLabel: `format (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`,
          placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t('e.g. "json" or a JSON schema'),
          get value() {
            return params.format;
          },
          set value($$value) {
            params.format = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("This option controls how many tokens are preserved when refreshing the context. For example, if set to 2, the last 2 tokens of the conversation context will be retained. Preserving context can help maintain the continuity of a conversation, but it may reduce the ability to respond to new topics."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">num_keep (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.num_keep ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.num_keep ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "num_keep", `num_keep (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`, -1, 1024e4, 1, 1, void 0);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sets the size of the context window used to generate the next token."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">num_ctx (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.num_ctx ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.num_ctx ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "num_ctx", `num_ctx (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`, -1, 1024e4, 1, 1, void 0);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
      Tooltip($$renderer3, {
        content: store_get($$store_subs ??= {}, "$i18n", i18n).t("The batch size determines how many text requests are processed together at once. A higher batch size can increase the performance and speed of the model, but it also requires more memory."),
        placement: "top-start",
        className: "inline-tooltip",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">num_batch (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
          if ((params?.num_batch ?? null) === null) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
          }
          $$renderer4.push(`<!--]--></button></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if ((params?.num_batch ?? null) !== null) {
        $$renderer3.push("<!--[0-->");
        rangeParam($$renderer3, "num_batch", `num_batch (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`, 256, 8192, 256, 256, void 0);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> `);
      if (admin) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="py-0.5 w-full justify-between">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set the number of worker threads used for computation. This option controls how many threads are used to process incoming requests concurrently. Increasing this value can improve performance under high concurrency workloads but may also consume more CPU resources."),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">num_thread (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
            if ((params?.num_thread ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.num_thread ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          rangeParam($$renderer3, "num_thread", `num_thread (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`, 1, 256, 1, 1);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("Set the number of layers, which will be off-loaded to GPU. Increasing this value can significantly improve performance for models that are optimized for GPU acceleration but may also consume more power and GPU resources."),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex w-full justify-between"><div class="self-center text-xs">num_gpu (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">`);
            if ((params?.num_gpu ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.num_gpu ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          rangeParam($$renderer3, "num_gpu", `num_gpu (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`, 0, 256, 1, 1);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="py-0.5 w-full justify-between">`);
        Tooltip($$renderer3, {
          content: store_get($$store_subs ??= {}, "$i18n", i18n).t("This option controls how long the model will stay loaded into memory following the request (default: 5m)"),
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="py-0.5 flex w-full justify-between"><div class="self-center text-xs">keep_alive (${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama"))})</div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button">`);
            if ((params?.keep_alive ?? null) === null) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Default"))}</span>`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`<span class="ml-2 self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom"))}</span>`);
            }
            $$renderer4.push(`<!--]--></button></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if ((params?.keep_alive ?? null) !== null) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex mt-0.5 space-x-2"><input class="w-full text-sm bg-transparent outline-hidden" type="text"${attr("aria-label", `keep_alive (${store_get($$store_subs ??= {}, "$i18n", i18n).t("Ollama")})`)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("e.g. '30s','10m'. Valid time units are 's', 'm', 'h'."))}${attr("value", params.keep_alive)}/></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (custom && admin) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex flex-col justify-center"><!--[-->`);
          const each_array = ensure_array_like(Object.keys(params?.custom_params ?? {}));
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let key = each_array[$$index];
            $$renderer3.push(`<div class="py-0.5 w-full justify-between mb-1"><div class="flex w-full justify-between"><div class="self-center text-xs"><input type="text" class="text-xs w-full bg-transparent outline-none"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom Parameter Name"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom Parameter Name"))}${attr("value", key)}/></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove"))}</button></div> <div class="flex mt-0.5 space-x-2"><div class="flex-1"><input${attr("value", params.custom_params[key])} type="text" class="text-sm w-full bg-transparent outline-hidden outline-none"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom Parameter Value"))}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom Parameter Value"))}/></div></div></div>`);
          }
          $$renderer3.push(`<!--]--> <button class="flex gap-2 items-center w-full text-center justify-center mt-1 mb-5" type="button"><div>`);
          Plus($$renderer3, {});
          $$renderer3.push(`<!----></div> <div>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Add Custom Parameter"))}</div></button></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
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
    bind_props($$props, { onChange, admin, custom, layout, params });
  });
}
export {
  AdvancedParams as A
};
//# sourceMappingURL=AdvancedParams.js.map
