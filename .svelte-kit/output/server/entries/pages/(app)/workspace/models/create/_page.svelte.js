import { m as getContext, c as store_get, u as unsubscribe_stores } from "../../../../../../chunks/index2.js";
import { a as toast } from "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { g as goto } from "../../../../../../chunks/client.js";
import { w as models, c as config, s as settings } from "../../../../../../chunks/index3.js";
import { W as WEBUI_BASE_URL } from "../../../../../../chunks/index4.js";
import { M as ModelEditor, c as createNewModel } from "../../../../../../chunks/ModelEditor.js";
import { c as getModels } from "../../../../../../chunks/index7.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    const onSubmit = async (modelInfo) => {
      if (store_get($$store_subs ??= {}, "$models", models).find((m) => m.id === modelInfo.id)) {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Error: A model with the ID '{{modelId}}' already exists. Please select a different ID to proceed.", { modelId: modelInfo.id }));
        return;
      }
      if (modelInfo.id === "") {
        toast.error(store_get($$store_subs ??= {}, "$i18n", i18n).t("Error: Model ID cannot be empty. Please enter a valid ID to proceed."));
        return;
      }
      if (modelInfo) {
        const res = await createNewModel(localStorage.token, {
          ...modelInfo,
          meta: {
            ...modelInfo.meta,
            profile_image_url: modelInfo.meta.profile_image_url ?? `${WEBUI_BASE_URL}/static/favicon.png`,
            suggestion_prompts: modelInfo.meta.suggestion_prompts ? modelInfo.meta.suggestion_prompts.filter((prompt) => prompt.content !== "") : null
          },
          params: { ...modelInfo.params }
        }).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          await models.set(await getModels(localStorage.token, store_get($$store_subs ??= {}, "$config", config)?.features?.enable_direct_connections && (store_get($$store_subs ??= {}, "$settings", settings)?.directConnections ?? null)));
          toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Model created successfully!"));
          await goto();
        }
      }
    };
    let model = null;
    $$renderer2.push(`<!---->`);
    {
      ModelEditor($$renderer2, {
        model,
        onSubmit,
        onBack: async () => {
          await goto();
        }
      });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
//# sourceMappingURL=_page.svelte.js.map
