import { m as getContext, f as fallback, c as store_get, u as unsubscribe_stores, b as bind_props, k as escape_html, e as ensure_array_like, a as attr, d as attr_class, v as invalid_default_snippet, p as head } from "../../../../chunks/index2.js";
import { t as tick, o as onDestroy } from "../../../../chunks/index-server.js";
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
import relativeTime from "dayjs/plugin/relativeTime.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { w as models, f as folders, W as WEBUI_NAME } from "../../../../chunks/index3.js";
import fileSaver from "file-saver";
import { M as Modal } from "../../../../chunks/Modal.js";
import { X as XMark } from "../../../../chunks/XMark.js";
import { D as Dropdown } from "../../../../chunks/Dropdown.js";
import { a as WEBUI_API_BASE_URL, e as decodeString } from "../../../../chunks/index4.js";
import { S as Search, C as Check } from "../../../../chunks/Check.js";
import { S as Select } from "../../../../chunks/Select.js";
import { C as ChevronDown } from "../../../../chunks/ChevronDown.js";
import { F as Folder } from "../../../../chunks/Folder.js";
import { b as getFolders } from "../../../../chunks/index6.js";
import "dompurify";
import { C as ConfirmDialog } from "../../../../chunks/ConfirmDialog.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
function ScheduleDropdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let FREQUENCIES, DAYS, scheduleLabel;
    const i18n = getContext("i18n");
    let frequency = fallback($$props["frequency"], "DAILY");
    let interval = fallback($$props["interval"], 1);
    let hour = fallback($$props["hour"], 9);
    let minute = fallback($$props["minute"], 0);
    let selectedDays = fallback($$props["selectedDays"], () => [], true);
    let monthDay = fallback($$props["monthDay"], 1);
    let onceDate = fallback($$props["onceDate"], "");
    let onceTime = fallback($$props["onceTime"], "09:00");
    let customRrule = fallback($$props["customRrule"], "");
    let side = fallback($$props["side"], "top");
    let align = fallback($$props["align"], "start");
    let onChange = fallback($$props["onChange"], () => {
    });
    let showDropdown = false;
    let lastVisualFrequency = "DAILY";
    let prevFrequency = "DAILY";
    const buildVisualRrule = () => {
      if (lastVisualFrequency === "ONCE") {
        const dt = onceDate.replace(/-/g, "") + "T" + onceTime.replace(/:/g, "") + "00";
        return `DTSTART:${dt}
RRULE:FREQ=DAILY;COUNT=1`;
      }
      let parts = [`FREQ=${lastVisualFrequency}`];
      if (interval > 1) parts.push(`INTERVAL=${interval}`);
      if (lastVisualFrequency === "WEEKLY" && selectedDays.length) {
        parts.push(`BYDAY=${selectedDays.join(",")}`);
      }
      if (lastVisualFrequency === "MONTHLY") {
        parts.push(`BYMONTHDAY=${monthDay}`);
      }
      if (["DAILY", "WEEKLY", "MONTHLY"].includes(lastVisualFrequency)) {
        parts.push(`BYHOUR=${hour}`);
      }
      parts.push(`BYMINUTE=${minute}`);
      return `RRULE:${parts.join(";")}`;
    };
    const buildRrule = () => {
      if (frequency === "CUSTOM") return customRrule;
      if (frequency === "ONCE") {
        const dt = onceDate.replace(/-/g, "") + "T" + onceTime.replace(/:/g, "") + "00";
        return `DTSTART:${dt}
RRULE:FREQ=DAILY;COUNT=1`;
      }
      let parts = [`FREQ=${frequency}`];
      if (interval > 1) parts.push(`INTERVAL=${interval}`);
      if (frequency === "WEEKLY" && selectedDays.length) {
        parts.push(`BYDAY=${selectedDays.join(",")}`);
      }
      if (frequency === "MONTHLY") {
        parts.push(`BYMONTHDAY=${monthDay}`);
      }
      if (["DAILY", "WEEKLY", "MONTHLY"].includes(frequency)) {
        parts.push(`BYHOUR=${hour}`);
      }
      parts.push(`BYMINUTE=${minute}`);
      return `RRULE:${parts.join(";")}`;
    };
    const parseRrule = (s) => {
      if (s.includes("COUNT=1")) {
        frequency = "ONCE";
        const match = s.match(/DTSTART:(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})/);
        if (match) {
          onceDate = `${match[1]}-${match[2]}-${match[3]}`;
          onceTime = `${match[4]}:${match[5]}`;
        }
        return;
      }
      const parts = {};
      s.replace("RRULE:", "").split(";").forEach((p) => {
        const [k, v] = p.split("=");
        if (k && v) parts[k] = v;
      });
      const freq = parts.FREQ || "DAILY";
      if (!["HOURLY", "DAILY", "WEEKLY", "MONTHLY"].includes(freq)) {
        frequency = "CUSTOM";
        customRrule = s;
        return;
      }
      frequency = freq;
      interval = parseInt(parts.INTERVAL || "1");
      hour = parseInt(parts.BYHOUR || "9");
      minute = parseInt(parts.BYMINUTE || "0");
      selectedDays = parts.BYDAY ? parts.BYDAY.split(",") : [];
      monthDay = parseInt(parts.BYMONTHDAY || "1");
    };
    const getScheduleLabel = () => {
      if (frequency === "ONCE") return "Once";
      if (frequency === "HOURLY") return "Hourly";
      if (frequency === "DAILY") return "Daily";
      if (frequency === "WEEKLY") return "Weekly";
      if (frequency === "MONTHLY") return "Monthly";
      if (frequency === "CUSTOM") return "Custom";
      return "Schedule";
    };
    FREQUENCIES = [
      {
        key: "ONCE",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Once")
      },
      {
        key: "HOURLY",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Hourly")
      },
      {
        key: "DAILY",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Daily")
      },
      {
        key: "WEEKLY",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Weekly")
      },
      {
        key: "MONTHLY",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Monthly")
      },
      {
        key: "CUSTOM",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom")
      }
    ];
    DAYS = [
      {
        key: "MO",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Mo", { context: "day_of_week" })
      },
      {
        key: "TU",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Tu", { context: "day_of_week" })
      },
      {
        key: "WE",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("We", { context: "day_of_week" })
      },
      {
        key: "TH",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Th", { context: "day_of_week" })
      },
      {
        key: "FR",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Fr", { context: "day_of_week" })
      },
      {
        key: "SA",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Sa", { context: "day_of_week" })
      },
      {
        key: "SU",
        label: store_get($$store_subs ??= {}, "$i18n", i18n).t("Su", { context: "day_of_week" })
      }
    ];
    if (frequency !== "CUSTOM") {
      lastVisualFrequency = frequency;
    }
    if (frequency === "ONCE" && !onceDate) {
      const soon = new Date(Date.now() + 5 * 6e4);
      onceDate = soon.toISOString().split("T")[0];
      onceTime = `${String(soon.getHours()).padStart(2, "0")}:${String(soon.getMinutes()).padStart(2, "0")}`;
    }
    {
      if (frequency === "CUSTOM" && prevFrequency !== "CUSTOM") {
        customRrule = buildVisualRrule();
      }
      prevFrequency = frequency;
    }
    scheduleLabel = (() => {
      if (frequency === "ONCE") return "Once";
      if (frequency === "HOURLY") return "Hourly";
      if (frequency === "DAILY") return "Daily";
      if (frequency === "WEEKLY") return "Weekly";
      if (frequency === "MONTHLY") return "Monthly";
      if (frequency === "CUSTOM") return "Custom";
      return "Schedule";
    })();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Dropdown($$renderer3, {
        side,
        align,
        get show() {
          return showDropdown;
        },
        set show($$value) {
          showDropdown = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<button type="button" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl text-xs transition text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> <span class="whitespace-nowrap">${escape_html(scheduleLabel)}</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></button>`);
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content" class="rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-48 p-0.5"><div class="px-2 text-[11px] text-gray-500 pt-0.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Schedule"))}</div> <div class="px-1.5 py-0.5">`);
            $$renderer4.select(
              {
                class: "w-full h-[1.6875rem] bg-transparent rounded-xl text-[13px] px-1.5 outline-hidden",
                value: frequency
              },
              ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(FREQUENCIES);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let f = each_array[$$index];
                  $$renderer5.option({ value: f.key }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(f.label)}`);
                  });
                }
                $$renderer5.push(`<!--]-->`);
              }
            );
            $$renderer4.push(`</div> `);
            if (frequency === "CUSTOM") {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="px-2 pb-2"><input type="text"${attr("value", customRrule)} placeholder="RRULE:FREQ=DAILY;BYHOUR=9;BYMINUTE=0" class="w-full bg-transparent outline-hidden text-[13px] placeholder:text-gray-400 dark:placeholder:text-gray-600"/></div>`);
            } else if (frequency !== "HOURLY") {
              $$renderer4.push("<!--[1-->");
              $$renderer4.push(`<div class="flex gap-2 flex-wrap items-center px-3 pb-2 text-[13px]">`);
              if (frequency === "ONCE") {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="flex items-center gap-1.5"><input type="date"${attr("value", onceDate)}${attr("min", (/* @__PURE__ */ new Date()).toISOString().split("T")[0])} class="bg-transparent outline-hidden text-xs dark:scheme-dark"/></div> <div class="flex items-center gap-1.5"><input type="time"${attr("value", onceTime)} class="bg-transparent outline-hidden text-xs dark:scheme-dark"/></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                $$renderer4.push(`<div class="flex items-center gap-1.5"><span class="text-xs text-gray-500 mr-0.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Time"))}</span> <input type="time"${attr("value", `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`)} class="bg-transparent text-center outline-hidden text-xs dark:scheme-dark"/></div>`);
              }
              $$renderer4.push(`<!--]--> `);
              if (frequency === "MONTHLY") {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="flex items-center gap-1.5"><span class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Day"))}</span> <input type="number"${attr("value", monthDay)}${attr("min", 1)}${attr("max", 31)} class="w-8 bg-transparent text-center outline-hidden text-xs"/></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--></div> `);
              if (frequency === "WEEKLY") {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<div class="flex gap-1 px-2 pb-2"><!--[-->`);
                const each_array_1 = ensure_array_like(DAYS);
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let d = each_array_1[$$index_1];
                  $$renderer4.push(`<button type="button"${attr_class(`flex-1 py-1 text-xs rounded-xl transition ${selectedDays.includes(d.key) ? "text-black dark:text-gray-100" : "text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"}`)}>${escape_html(d.label)}</button>`);
                }
                $$renderer4.push(`<!--]--></div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]-->`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div>`);
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
      frequency,
      interval,
      hour,
      minute,
      selectedDays,
      monthDay,
      onceDate,
      onceTime,
      customRrule,
      side,
      align,
      onChange,
      buildRrule,
      parseRrule,
      getScheduleLabel
    });
  });
}
function ModelDropdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let modelLabel, filteredModels;
    const i18n = getContext("i18n");
    let model_id = fallback($$props["model_id"], "");
    let side = fallback($$props["side"], "top");
    let align = fallback($$props["align"], "start");
    let onChange = fallback($$props["onChange"], () => {
    });
    let showDropdown = false;
    let modelSearch = "";
    modelLabel = model_id ? store_get($$store_subs ??= {}, "$models", models).find((m) => m.id === model_id)?.name || model_id : store_get($$store_subs ??= {}, "$i18n", i18n).t("Select model");
    filteredModels = store_get($$store_subs ??= {}, "$models", models).filter((m) => !(m?.info?.meta?.hidden ?? false));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Dropdown($$renderer3, {
        side,
        align,
        get show() {
          return showDropdown;
        },
        set show($$value) {
          showDropdown = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<button type="button" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl text-xs transition text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg> <span class="whitespace-nowrap max-w-32 truncate">${escape_html(modelLabel)}</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-2.5"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></button>`);
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content" class="rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-72 p-0.5"><div class="flex items-center gap-1.5 px-2 py-1">`);
            Search($$renderer4, { className: "size-3.5", strokeWidth: "2.5" });
            $$renderer4.push(`<!----> <input${attr("value", modelSearch)} class="w-full text-[13px] bg-transparent outline-hidden"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search a model"))} autocomplete="off"/></div> <div class="overflow-y-auto scrollbar-thin max-h-60"><div class="px-2 text-[11px] text-gray-500 py-0.5">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Models"))}</div> `);
            const each_array = ensure_array_like(filteredModels);
            if (each_array.length !== 0) {
              $$renderer4.push("<!--[-->");
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let model = each_array[$$index];
                $$renderer4.push(`<button${attr_class(`h-[1.6875rem] px-2 rounded-xl w-full text-left text-[13px] ${model_id === model.id ? "text-gray-900 dark:text-gray-100" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"}`)} type="button"><div class="flex text-black dark:text-gray-100 line-clamp-1"><img${attr("src", `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${encodeURIComponent(model.id)}`)}${attr("alt", model?.name ?? model.id)} class="rounded-full size-5 items-center mr-2" loading="lazy"/> <div class="truncate">${escape_html(model.name)}</div></div></button>`);
              }
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="block px-2 py-1.5 text-[13px] text-gray-700 dark:text-gray-100">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No results found"))}</div>`);
            }
            $$renderer4.push(`<!--]--></div></div>`);
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
    bind_props($$props, { model_id, side, align, onChange });
  });
}
function FolderDropdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let folderOptions, folderById, selectedFolder, folderLabel, normalizedSearch, filteredFolderOptions;
    const i18n = getContext("i18n");
    let folder_id = fallback($$props["folder_id"], "");
    let side = fallback($$props["side"], "top");
    let align = fallback($$props["align"], "start");
    let onChange = fallback($$props["onChange"], () => {
    });
    let folderSearch = "";
    const folderName = (folder) => decodeString(folder?.name ?? store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder"));
    const folderPath = (folder) => {
      const names = [];
      const seen = /* @__PURE__ */ new Set();
      let current = folder;
      while (current?.parent_id && !seen.has(current.parent_id)) {
        seen.add(current.parent_id);
        const parent = folderById.get(current.parent_id);
        if (!parent) break;
        names.unshift(folderName(parent));
        current = parent;
      }
      return names.join(" / ");
    };
    folderOptions = [
      ...store_get($$store_subs ??= {}, "$folders", folders) ?? [] ?? []
    ].filter((folder) => folder?.id && !folder?.shared).sort((a, b) => folderName(a).localeCompare(folderName(b)));
    folderById = new Map(folderOptions.map((folder) => [folder.id, folder]));
    selectedFolder = folderOptions.find((folder) => folder.id === folder_id);
    folderLabel = selectedFolder ? folderName(selectedFolder) : store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose folder");
    normalizedSearch = folderSearch.trim().toLowerCase();
    filteredFolderOptions = normalizedSearch ? folderOptions.filter((folder) => `${folderName(folder)} ${folderPath(folder)}`.toLowerCase().includes(normalizedSearch)) : folderOptions;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Select($$renderer3, {
        items: folderOptions.map((folder) => ({ value: folder.id, label: folderName(folder) })),
        placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Choose folder"),
        align,
        side,
        triggerClass: "relative h-8 max-w-[11rem] flex items-center gap-1.5 px-2.5 py-1.5 bg-transparent rounded-2xl text-xs font-normal text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
        contentClass: "w-72 shadow-lg",
        maxHeight: "18rem",
        onChange: () => onChange(),
        onClose: () => {
          folderSearch = "";
        },
        get value() {
          return folder_id;
        },
        set value($$value) {
          folder_id = $$value;
          $$settled = false;
        },
        children: invalid_default_snippet,
        $$slots: {
          default: ($$renderer4, { selectItem }) => {
            {
              $$renderer4.push(`<div class="flex items-center gap-1.5 px-2 py-1">`);
              Search($$renderer4, { className: "size-3.5 shrink-0", strokeWidth: "2.5" });
              $$renderer4.push(`<!----> <input${attr("value", folderSearch)} class="w-full bg-transparent text-[13px] outline-hidden"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Search folders"))} autocomplete="off"/></div> `);
              if (folderOptions.length > 0) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<hr class="mx-1 my-0.5 border-gray-50/30 dark:border-gray-800/30"/> <div class="px-2 py-1 text-[11px] text-gray-500 dark:text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folders"))}</div>`);
              } else {
                $$renderer4.push("<!--[-1-->");
              }
              $$renderer4.push(`<!--]--> `);
              const each_array = ensure_array_like(filteredFolderOptions);
              if (each_array.length !== 0) {
                $$renderer4.push("<!--[-->");
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let folder = each_array[$$index];
                  const path = folderPath(folder);
                  $$renderer4.push(`<button type="button"${attr_class(`flex h-[1.6875rem] w-full cursor-pointer items-center justify-between gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-800/40 dark:hover:text-gray-100 ${folder_id === folder.id ? "text-gray-900 dark:text-gray-100" : "text-gray-700 dark:text-gray-300"}`)}${attr("title", path ? `${path} / ${folderName(folder)}` : folderName(folder))}><div class="flex min-w-0 items-center gap-1.5">`);
                  Folder($$renderer4, { className: "size-3.5 shrink-0" });
                  $$renderer4.push(`<!----> <span class="min-w-0 truncate">${escape_html(folderName(folder))}</span> `);
                  if (path) {
                    $$renderer4.push("<!--[0-->");
                    $$renderer4.push(`<span class="min-w-0 truncate text-[11px] text-gray-400 dark:text-gray-500">${escape_html(path)}</span>`);
                  } else {
                    $$renderer4.push("<!--[-1-->");
                  }
                  $$renderer4.push(`<!--]--></div> `);
                  if (folder_id === folder.id) {
                    $$renderer4.push("<!--[0-->");
                    Check($$renderer4, { className: "size-3.5 shrink-0", strokeWidth: "2" });
                  } else {
                    $$renderer4.push("<!--[-1-->");
                  }
                  $$renderer4.push(`<!--]--></button>`);
                }
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`<div class="px-2 py-1 text-[11px] text-gray-500 dark:text-gray-400">${escape_html(folderOptions.length > 0 ? store_get($$store_subs ??= {}, "$i18n", i18n).t("No results found") : store_get($$store_subs ??= {}, "$i18n", i18n).t("No folders"))}</div>`);
              }
              $$renderer4.push(`<!--]-->`);
            }
          },
          trigger: ($$renderer4) => {
            {
              Folder($$renderer4, { className: "size-3.5 shrink-0" });
              $$renderer4.push(`<!----> <div class="inline-flex h-input min-w-0 flex-1 truncate bg-transparent outline-hidden">${escape_html(folderLabel)}</div> `);
              if (folder_id) {
                $$renderer4.push("<!--[0-->");
                $$renderer4.push(`<button class="outline-none" type="button"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Clear"))}>`);
                XMark($$renderer4, { className: "size-3.5" });
                $$renderer4.push(`<!----></button>`);
              } else {
                $$renderer4.push("<!--[-1-->");
                ChevronDown($$renderer4, { className: "size-2.5 shrink-0", strokeWidth: "2.5" });
              }
              $$renderer4.push(`<!--]-->`);
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
    bind_props($$props, { folder_id, side, align, onChange });
  });
}
function AutomationModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let automation = fallback($$props["automation"], null);
    let cloneFrom = fallback($$props["cloneFrom"], null);
    let name = "";
    let prompt = "";
    let model_id = "";
    let folder_id = "";
    let loading = false;
    let foldersLoaded = false;
    const init = async () => {
      await tick();
      if (!foldersLoaded && (store_get($$store_subs ??= {}, "$folders", folders) ?? []).length === 0) {
        const res = await getFolders(localStorage.token).catch(() => null);
        if (res) folders.set(res);
        foldersLoaded = true;
      }
      if (automation) {
        name = automation.name;
        prompt = automation.data.prompt;
        model_id = automation.data.model_id;
        folder_id = automation.folder_id ?? "";
        automation.is_active;
      } else if (cloneFrom) {
        name = cloneFrom.name;
        prompt = cloneFrom.data.prompt;
        model_id = cloneFrom.data.model_id;
        folder_id = (store_get($$store_subs ??= {}, "$folders", folders) ?? []).some((folder) => folder.id === cloneFrom.folder_id) ? cloneFrom.folder_id ?? "" : "";
      } else {
        name = "";
        prompt = "";
        model_id = "";
        folder_id = "";
      }
    };
    if (show) {
      init();
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
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-4 pt-3 pb-1"><input class="w-full text-sm font-medium bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Automation title"))}/> <button class="self-center shrink-0 ml-2"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}>`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="px-5 pb-2"><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Instructions"))}</div> <textarea class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none min-h-[12rem]"${attr("rows", 8)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter prompt here."))}>`);
          const $$body = escape_html(prompt);
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
          $$renderer4.push(`</textarea></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 pb-3.5 pt-1 gap-2"><div class="flex items-center gap-0.5 flex-wrap min-w-0 sm:flex-1">`);
          ScheduleDropdown($$renderer4, { side: "top", align: "start" });
          $$renderer4.push(`<!----> `);
          ModelDropdown($$renderer4, {
            side: "top",
            align: "start",
            get model_id() {
              return model_id;
            },
            set model_id($$value) {
              model_id = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> `);
          FolderDropdown($$renderer4, {
            side: "top",
            align: "start",
            get folder_id() {
              return folder_id;
            },
            set folder_id($$value) {
              folder_id = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex items-center justify-end gap-2 shrink-0"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"))}</button> <button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${""}`)} type="button"${attr("disabled", loading, true)}>${escape_html(automation ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Save") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Create"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></div></div>`);
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
    bind_props($$props, { show, automation, cloneFrom });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    dayjs.extend(relativeTime);
    const { saveAs } = fileSaver;
    const i18n = getContext("i18n");
    getContext("automationsLayout");
    let showCreateModal = false;
    let cloneFrom = null;
    let showDeleteConfirm = false;
    let deleteTarget = null;
    let searchDebounceTimer;
    onDestroy(() => {
      clearTimeout(searchDebounceTimer);
    });
    if (!showCreateModal) {
      cloneFrom = null;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("19omgnu", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Automations"))} / ${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}</title>`);
        });
      });
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete automation?"),
        get show() {
          return showDeleteConfirm;
        },
        set show($$value) {
          showDeleteConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="text-sm text-gray-500 truncate">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("This will delete"))} <span class="font-normal">${escape_html(deleteTarget?.name)}</span>.</div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <input id="automations-import-input" type="file" accept=".json" hidden=""/> `);
      AutomationModal($$renderer3, {
        automation: null,
        cloneFrom,
        get show() {
          return showCreateModal;
        },
        set show($$value) {
          showCreateModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="h-full overflow-y-auto px-2.5 pb-1">`);
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<div class="w-full h-full flex justify-center items-center">`);
        Spinner($$renderer3, { className: "size-5" });
        $$renderer3.push(`<!----></div>`);
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
