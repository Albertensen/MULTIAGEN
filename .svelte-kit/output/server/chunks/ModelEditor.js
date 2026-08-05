import { a as WEBUI_API_BASE_URL, p as extractInputVariables } from "./index3.js";
import { o as getContext, f as fallback, b as bind_props } from "./root.js";
import "./Toaster.svelte_svelte_type_style_lang.js";
import "./index2.js";
import "dompurify";
import "marked";
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
import "dayjs/plugin/relativeTime.js";
/* empty css                                            */
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
/* empty css                                    */
import "file-saver";
const getBaseModelTags = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/base/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getBaseModels = async (token = "", tag = "") => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (tag) {
    searchParams.append("tag", tag);
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/base?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createNewModel = async (token, model) => {
  let error = null;
  const { id, base_model_id, name, meta, params, access_grants, is_active } = model;
  const payload = { id, base_model_id, name, meta, params, access_grants, is_active };
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getModelById = async (token, id) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("id", id);
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateModelById = async (token, id, model) => {
  let error = null;
  const { base_model_id, name, meta, params, access_grants, is_active } = model;
  const payload = { id, base_model_id, name, meta, params, access_grants, is_active };
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateModelAccessGrants = async (token, id, name, accessGrants) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model/access/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id, name, access_grants: accessGrants })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteAllModels = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/delete/all`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
function ModelEditor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("i18n");
    let onSubmit = $$props["onSubmit"];
    let onBack = fallback($$props["onBack"], null);
    let model = fallback($$props["model"], null);
    let edit = fallback($$props["edit"], false);
    let preset = fallback($$props["preset"], true);
    let system = "";
    let suggestionTags = fallback($$props["suggestionTags"], () => [], true);
    const chatVariableKeyRegex = /^[a-z][a-z0-9_]*$/;
    const getChatVariablesPreview = (prompt) => {
      const variables = extractInputVariables(prompt);
      const warnings = [];
      const seenDefinitions = {};
      const typedRegex = /{{\s*chat\.variables\.([a-zA-Z0-9_.-]+)\s*\|\s*([^}]*)\s*}}/g;
      const typedUserRegex = /{{\s*user\.variables\.([a-zA-Z0-9_.-]+)\s*\|\s*([^}]*)\s*}}/g;
      for (const match of prompt.matchAll(typedRegex)) {
        const key = match[1];
        const definition = match[2].trim();
        if (seenDefinitions[key] && seenDefinitions[key] !== definition) {
          warnings.push(`${key} has conflicting duplicate definitions`);
        }
        seenDefinitions[key] = definition;
      }
      const fields = Object.entries(variables).filter(([name]) => name.startsWith("chat.variables.")).map(([name, field]) => ({ key: name.replace("chat.variables.", ""), ...field }));
      const userFields = Object.entries(variables).filter(([name]) => name.startsWith("user.variables.")).map(([name]) => ({ key: name.replace("user.variables.", "") }));
      for (const match of prompt.matchAll(typedUserRegex)) {
        warnings.push(`${match[1]} uses metadata, but User Variables are configured by each user`);
      }
      for (const field of fields) {
        const key = field.key;
        if (!chatVariableKeyRegex.test(key)) {
          warnings.push(`${key} must be lowercase snake case`);
          continue;
        }
        if (field.type === "select" && (!Array.isArray(field.options) || field.options.length === 0)) {
          warnings.push(`${key} select needs options=[...]`);
        }
      }
      for (const field of userFields) {
        if (!chatVariableKeyRegex.test(field.key)) {
          warnings.push(`${field.key} must be lowercase snake case`);
        }
      }
      return { fields, userFields, warnings };
    };
    getChatVariablesPreview(system);
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
    bind_props($$props, { onSubmit, onBack, model, edit, preset, suggestionTags });
  });
}
export {
  ModelEditor as M,
  getBaseModels as a,
  updateModelById as b,
  createNewModel as c,
  deleteAllModels as d,
  getModelById as e,
  getBaseModelTags as g,
  updateModelAccessGrants as u
};
//# sourceMappingURL=ModelEditor.js.map
