import { o as getContext, f as fallback, b as bind_props, a as attr, c as store_get, k as escape_html, e as ensure_array_like, d as attr_class, u as unsubscribe_stores, h as attr_style, t as stringify, q as head } from "../../../../chunks/root.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { W as WEBUI_NAME, h as showSidebar } from "../../../../chunks/index2.js";
import "dompurify";
import "marked";
/* empty css                                                             */
import { M as Modal } from "../../../../chunks/Modal.js";
import { C as ConfirmDialog } from "../../../../chunks/ConfirmDialog.js";
import { X as XMark } from "../../../../chunks/XMark.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
function CalendarEventModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let event = fallback($$props["event"], null);
    let calendars = fallback($$props["calendars"], () => [], true);
    let defaultCalendarId = fallback($$props["defaultCalendarId"], "");
    let defaultStartAt = fallback($$props["defaultStartAt"], null);
    let title = "";
    let description = "";
    let calendarId = "";
    let startDate = "";
    let startTime = "";
    let endTime = "";
    let allDay = false;
    let location = "";
    let alertMinutes = 10;
    let repeatFrequency = "";
    let loading = false;
    let showDeleteConfirmDialog = false;
    const REPEAT_RRULE_MAP = {
      daily: "FREQ=DAILY",
      weekdays: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
      weekly: "FREQ=WEEKLY",
      monthly: "FREQ=MONTHLY",
      yearly: "FREQ=YEARLY"
    };
    function parseRepeatFromRrule(rrule) {
      if (!rrule) return "";
      const normalized = rrule.toUpperCase().replace(/\s/g, "");
      for (const [key, value] of Object.entries(REPEAT_RRULE_MAP)) {
        if (normalized === value) return key;
      }
      return "";
    }
    const NS = 1e6;
    function nsToDateStr(ns) {
      const d = new Date(ns / NS);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    function nsToTimeStr(ns) {
      return new Date(ns / NS).toTimeString().slice(0, 5);
    }
    function reset() {
      if (event) {
        title = event.title;
        description = event.description || "";
        calendarId = event.calendar_id;
        startDate = nsToDateStr(event.start_at);
        startTime = nsToTimeStr(event.start_at);
        event.end_at ? nsToDateStr(event.end_at) : "";
        endTime = event.end_at ? nsToTimeStr(event.end_at) : "";
        allDay = event.all_day;
        location = event.location || "";
        alertMinutes = event.meta?.alert_minutes ?? 10;
        repeatFrequency = parseRepeatFromRrule(event.rrule);
      } else {
        title = "";
        description = "";
        calendarId = defaultCalendarId || (calendars.length > 0 ? calendars[0].id : "");
        if (defaultStartAt) {
          startDate = nsToDateStr(defaultStartAt);
          startTime = nsToTimeStr(defaultStartAt);
          const endNs = defaultStartAt + 60 * 60 * 1e3 * NS;
          nsToDateStr(endNs);
          endTime = nsToTimeStr(endNs);
        } else {
          const now = /* @__PURE__ */ new Date();
          startDate = now.toISOString().slice(0, 10);
          startTime = now.toTimeString().slice(0, 5);
          const later = new Date(now.getTime() + 60 * 60 * 1e3);
          later.toISOString().slice(0, 10);
          endTime = later.toTimeString().slice(0, 5);
        }
        allDay = false;
        location = "";
        alertMinutes = 10;
        repeatFrequency = "";
      }
    }
    if (show) reset();
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
          $$renderer4.push(`<div><div class="dark:text-gray-100 px-4 pt-3 pb-1"><input class="w-full text-base bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"${attr("value", title)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Event title"))}/></div> <div class="px-4 pb-2 flex flex-col gap-2.5"><div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Calendar"))}</div> `);
          $$renderer4.select(
            {
              class: "w-full text-sm bg-transparent outline-hidden cursor-pointer",
              value: calendarId
            },
            ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              const each_array = ensure_array_like(calendars.filter((c) => c.id !== "__scheduled_tasks__"));
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let cal = each_array[$$index];
                $$renderer5.option({ value: cal.id }, ($$renderer6) => {
                  $$renderer6.push(`${escape_html(cal.name)}`);
                });
              }
              $$renderer5.push(`<!--]-->`);
            }
          );
          $$renderer4.push(`</div> <div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("When"))}</div> <div class="flex items-center gap-2 text-sm flex-wrap"><input type="date" class="bg-transparent outline-hidden dark:scheme-dark"${attr("value", startDate)}/> `);
          if (!allDay) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<input type="time" class="bg-transparent outline-hidden dark:scheme-dark"${attr("value", startTime)}/> <span class="text-gray-300 dark:text-gray-600">–</span> <input type="time" class="bg-transparent outline-hidden dark:scheme-dark"${attr("value", endTime)}/>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <label class="flex items-center gap-1.5 cursor-pointer text-xs text-gray-400 ml-auto"><input type="checkbox" class="accent-blue-500"${attr("checked", allDay, true)}/> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("All day"))}</label></div></div> <div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Location"))}</div> <input class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Add location"))}${attr("value", location)}/></div> <div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Reminder"))}</div> `);
          $$renderer4.select(
            {
              class: "w-full text-sm bg-transparent outline-hidden cursor-pointer",
              value: alertMinutes
            },
            ($$renderer5) => {
              $$renderer5.option({ value: -1 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("None"))}`);
              });
              $$renderer5.option({ value: 0 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("At time of event"))}`);
              });
              $$renderer5.option({ value: 5 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("5 minutes before"))}`);
              });
              $$renderer5.option({ value: 10 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("10 minutes before"))}`);
              });
              $$renderer5.option({ value: 15 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("15 minutes before"))}`);
              });
              $$renderer5.option({ value: 30 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("30 minutes before"))}`);
              });
              $$renderer5.option({ value: 60 }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("1 hour before"))}`);
              });
            }
          );
          $$renderer4.push(`</div> <div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Repeat"))}</div> `);
          $$renderer4.select(
            {
              class: "w-full text-sm bg-transparent outline-hidden cursor-pointer",
              value: repeatFrequency
            },
            ($$renderer5) => {
              $$renderer5.option({ value: "" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("No Repeat"))}`);
              });
              $$renderer5.option({ value: "daily" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Daily"))}`);
              });
              $$renderer5.option({ value: "weekdays" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Monday – Friday"))}`);
              });
              $$renderer5.option({ value: "weekly" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Weekly"))}`);
              });
              $$renderer5.option({ value: "monthly" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Monthly"))}`);
              });
              $$renderer5.option({ value: "yearly" }, ($$renderer6) => {
                $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Yearly"))}`);
              });
            }
          );
          $$renderer4.push(`</div> <div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Description"))}</div> <textarea class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 resize-none min-h-[4rem]"${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Add description"))} rows="3">`);
          const $$body = escape_html(description);
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
          $$renderer4.push(`</textarea></div></div> <div class="flex items-center justify-between px-4 pb-3 pt-1 gap-2"><div class="flex items-center gap-0.5 flex-1 min-w-0">`);
          if (event && !event.meta?.automation_id) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<button class="px-3 py-1 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</button>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="flex items-center gap-2 shrink-0"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"))}</button> <button${attr_class(`px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${""}`)} type="button"${attr("disabled", loading, true)}>${escape_html(event && !event.meta?.automation_id ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Save") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Create"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      ConfirmDialog($$renderer3, {
        title: store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete Event"),
        message: store_get($$store_subs ??= {}, "$i18n", i18n).t("This action cannot be undone. Do you wish to continue?"),
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
    bind_props($$props, { show, event, calendars, defaultCalendarId, defaultStartAt });
  });
}
function CreateCalendarModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let name = "";
    let color = "#3b82f6";
    let loading = false;
    const PRESET_COLORS = [
      "#3b82f6",
      // blue
      "#ef4444",
      // red
      "#22c55e",
      // green
      "#f59e0b",
      // amber
      "#8b5cf6",
      // violet
      "#ec4899",
      // pink
      "#06b6d4",
      // cyan
      "#f97316"
      // orange
    ];
    function reset() {
      name = "";
      color = "#3b82f6";
      loading = false;
    }
    if (show) reset();
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
          $$renderer4.push(`<div><div class="flex justify-between items-center dark:text-gray-100 px-4 pt-3 pb-1"><h3 class="text-base font-normal">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("New Calendar"))}</h3> <button class="self-center shrink-0 ml-2"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}>`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="px-5 pb-2 flex flex-col gap-3"><div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Name"))}</div> <input class="w-full text-sm bg-transparent outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700" type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Calendar name"))}/></div> <div><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Color"))}</div> <div class="flex items-center gap-2 flex-wrap"><!--[-->`);
          const each_array = ensure_array_like(PRESET_COLORS);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let c = each_array[$$index];
            $$renderer4.push(`<button${attr_class(`size-6 rounded-full transition-all border-2 ${color === c ? "border-gray-800 dark:border-white scale-110" : "border-transparent hover:scale-110"}`)}${attr_style(`background-color: ${stringify(c)};`)}${attr("aria-label", c)}></button>`);
          }
          $$renderer4.push(`<!--]--> <label${attr_class(`size-6 rounded-full overflow-hidden cursor-pointer border-2 transition-all ${!PRESET_COLORS.includes(color) ? "border-gray-800 dark:border-white scale-110" : "border-transparent hover:scale-110"}`)}${attr_style(`background-color: ${stringify(color)};`)}${attr("title", store_get($$store_subs ??= {}, "$i18n", i18n).t("Custom color"))}><input type="color"${attr("value", color)} class="opacity-0 w-0 h-0 absolute"/></label></div></div></div> <div class="flex items-center justify-end px-4 pb-3.5 pt-2 gap-2"><button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Cancel"))}</button> <button${attr_class(`px-3.5 py-1.5 text-sm bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex items-center gap-2 ${loading ? "cursor-not-allowed" : ""}`)} type="button"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create"))} `);
          if (loading) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<span class="shrink-0">`);
            Spinner($$renderer4, {});
            $$renderer4.push(`<!----></span>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></div>`);
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let defaultCalendarId;
    const i18n = getContext("i18n");
    let calendars = [];
    let currentDate = /* @__PURE__ */ new Date();
    let showEventModal = false;
    let editEvent = null;
    let defaultStartAt = null;
    let showCreateCalendarModal = false;
    const MONTH_NAMES = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    defaultCalendarId = calendars.find((c) => c.is_default)?.id || calendars[0]?.id || "";
    `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1d6n9tu", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Calendar"))} / ${escape_html(store_get($$store_subs ??= {}, "$WEBUI_NAME", WEBUI_NAME))}</title>`);
        });
      });
      CalendarEventModal($$renderer3, {
        event: editEvent,
        calendars,
        defaultCalendarId,
        defaultStartAt,
        get show() {
          return showEventModal;
        },
        set show($$value) {
          showEventModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      CreateCalendarModal($$renderer3, {
        get show() {
          return showCreateCalendarModal;
        },
        set show($$value) {
          showCreateCalendarModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div${attr_class(`flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${store_get($$store_subs ??= {}, "$showSidebar", showSidebar) ? "md:max-w-[calc(100%-var(--sidebar-width))]" : ""} max-w-full`)}>`);
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
