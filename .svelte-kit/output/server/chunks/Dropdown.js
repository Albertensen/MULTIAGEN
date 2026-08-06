import { f as fallback, a as attr, j as slot, d as attr_class, g as clsx, h as attr_style, b as bind_props } from "./index2.js";
import { o as onDestroy, t as tick } from "./index-server.js";
function Dropdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let show = fallback($$props["show"], false);
    let side = fallback($$props["side"], "bottom");
    let align = fallback($$props["align"], "start");
    let closeOnOutsideClick = fallback($$props["closeOnOutsideClick"], true);
    let onOpenChange = fallback($$props["onOpenChange"], () => {
    });
    let contentClass = fallback($$props["contentClass"], "");
    let maxHeight = fallback($$props["maxHeight"], "min(32rem, calc(100dvh - 2rem))");
    let sideOffset = fallback($$props["sideOffset"], 4);
    let visualViewportAware = fallback($$props["visualViewportAware"], false);
    let previouslyFocused = null;
    let positionFrame;
    let settleTimers = [];
    let resolvedMaxHeight = maxHeight;
    function positionContent() {
    }
    function schedulePositionUpdate() {
      if (positionFrame != null) cancelAnimationFrame(positionFrame);
      positionFrame = requestAnimationFrame(() => {
        positionFrame = void 0;
      });
    }
    function scheduleSettledPositionUpdates() {
      for (const timer of settleTimers) window.clearTimeout(timer);
      settleTimers = [];
      schedulePositionUpdate();
      for (const delay of [50, 150, 300]) {
        settleTimers.push(window.setTimeout(schedulePositionUpdate, delay));
      }
    }
    async function afterOpen() {
      await tick();
      if (visualViewportAware) {
        scheduleSettledPositionUpdates();
      } else {
        setTimeout(positionContent, 50);
      }
    }
    function closeDropdown(restoreFocus = false) {
      if (!show) return;
      show = false;
      onOpenChange(false);
      if (restoreFocus && previouslyFocused?.isConnected) {
        previouslyFocused.focus();
      }
      previouslyFocused = null;
    }
    function close() {
      closeDropdown();
    }
    onDestroy(() => {
      if (positionFrame != null) cancelAnimationFrame(positionFrame);
      for (const timer of settleTimers) window.clearTimeout(timer);
      if (visualViewportAware) {
        window.visualViewport?.removeEventListener("resize", scheduleSettledPositionUpdates);
        window.visualViewport?.removeEventListener("scroll", schedulePositionUpdate);
      }
    });
    if (show) {
      afterOpen();
    }
    $$renderer2.push(`<span style="display: contents; cursor: pointer;" role="button" aria-haspopup="true"${attr(
      "aria-expanded",
      /** Close the dropdown programmatically */
      show
    )}><!--[-->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!--]--></span> `);
    if (show) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div${attr_class(clsx(contentClass))} role="menu" tabindex="-1"${attr_style("", { "max-height": resolvedMaxHeight, "overflow-y": "auto" })}><!--[-->`);
      slot($$renderer2, $$props, "content", {}, null);
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      show,
      side,
      align,
      closeOnOutsideClick,
      onOpenChange,
      contentClass,
      maxHeight,
      sideOffset,
      visualViewportAware,
      close
    });
  });
}
export {
  Dropdown as D
};
//# sourceMappingURL=Dropdown.js.map
