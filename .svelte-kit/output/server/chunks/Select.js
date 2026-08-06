import { f as fallback, d as attr_class, g as clsx, a as attr, j as slot, b as bind_props, k as escape_html, e as ensure_array_like } from "./index2.js";
import { D as DropdownMenu } from "./DropdownMenu.js";
function Select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selectedLabel;
    let value = fallback($$props["value"], "");
    let items = fallback($$props["items"], () => [], true);
    let placeholder = fallback($$props["placeholder"], "");
    let onChange = fallback($$props["onChange"], () => {
    });
    let triggerClass = fallback($$props["triggerClass"], "");
    let labelClass = fallback($$props["labelClass"], "");
    let contentClass = fallback($$props["contentClass"], "min-w-[170px]");
    let maxHeight = fallback($$props["maxHeight"], "18rem");
    let itemClass = fallback($$props["itemClass"], "flex h-[1.6875rem] w-full cursor-pointer items-center gap-2 rounded-xl bg-transparent px-2 text-[13px] hover:bg-gray-50/40 hover:text-gray-900 dark:hover:bg-gray-800/40 dark:hover:text-gray-100");
    let align = fallback($$props["align"], "start");
    let side = fallback($$props["side"], "bottom");
    let onClose = fallback($$props["onClose"], () => {
    });
    let open = fallback($$props["open"], false);
    function selectItem(item) {
      value = item.value;
      open = false;
      onChange(value);
    }
    selectedLabel = items.find((i) => i.value === value)?.label ?? placeholder;
    $$renderer2.push(`<button${attr_class(clsx(triggerClass))} type="button"${attr("aria-expanded", open)}><!--[-->`);
    slot($$renderer2, $$props, "trigger", { selectedLabel, open }, () => {
      $$renderer2.push(`<span${attr_class(clsx(labelClass))}>${escape_html(selectedLabel)}</span>`);
    });
    $$renderer2.push(`<!--]--></button> `);
    if (open) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div>`);
      DropdownMenu($$renderer2, {
        className: contentClass,
        style: `max-height: ${maxHeight}; overflow-y: auto;`,
        children: ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          slot($$renderer3, $$props, "default", { open, selectItem }, () => {
            $$renderer3.push(`<!--[-->`);
            const each_array = ensure_array_like(items);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let item = each_array[$$index];
              $$renderer3.push(`<button${attr_class(clsx(itemClass))} type="button"><!--[-->`);
              slot($$renderer3, $$props, "item", { item, selected: value === item.value }, () => {
                $$renderer3.push(`${escape_html(item.label)}`);
              });
              $$renderer3.push(`<!--]--></button>`);
            }
            $$renderer3.push(`<!--]-->`);
          });
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      value,
      items,
      placeholder,
      onChange,
      triggerClass,
      labelClass,
      contentClass,
      maxHeight,
      itemClass,
      align,
      side,
      onClose,
      open,
      selectItem
    });
  });
}
export {
  Select as S
};
//# sourceMappingURL=Select.js.map
