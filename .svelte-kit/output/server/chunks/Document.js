import { W as WEBUI_BASE_URL, a as WEBUI_API_BASE_URL, E as AUDIO_API_BASE_URL } from "./index3.js";
import { f as fallback, d as attr_class, g as clsx, a as attr, b as bind_props, o as getContext, k as escape_html, c as store_get, t as stringify, u as unsubscribe_stores, j as slot, e as ensure_array_like } from "./root.js";
import { a as getChatById, af as getChatAccessGrants, u as user, c as config, ag as updateChatAccessGrants } from "./index2.js";
import { a as toast } from "./Toaster.svelte_svelte_type_style_lang.js";
import { M as Modal } from "./Modal.js";
import { X as XMark$1 } from "./XMark.js";
import { A as AccessControl } from "./AccessControl.js";
import { D as Dropdown } from "./Dropdown.js";
import { D as DropdownMenu } from "./DropdownMenu.js";
import { T as Tooltip } from "./Tooltip.js";
import { C as Check } from "./Check.js";
import { a as getFolderById, e as updateFolderAccessById } from "./index5.js";
import { t as tick } from "./index-server.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
import { T as Textarea } from "./EllipsisHorizontal.js";
import "dayjs";
import { D as Database, c as PageEdit, d as ChatBubble, e as DocumentPage } from "./Loader.js";
import { S as Spinner } from "./Spinner.js";
import { F as Folder$1 } from "./Folder.js";
const setToolServerConnections = async (token, connections) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/tool_servers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...connections
    })
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
const setTerminalServerConnections = async (token, connections) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/terminal_servers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...connections
    })
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
const getOrchestratorPolicy = async (token, url, key, policyId, authType = "bearer") => {
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/terminal_servers/policy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url: url.replace(/\/$/, ""),
      key,
      auth_type: authType,
      policy_id: policyId
    })
  });
  if (!res.ok) {
    const body = await res.json();
    throw Object.assign(new Error(body.detail || "Failed to read policy"), { status: res.status });
  }
  return res.json();
};
const getOrchestratorLifecycle = async (token, url, key, policyId, authType = "bearer") => {
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/terminal_servers/lifecycle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url: url.replace(/\/$/, ""),
      key,
      auth_type: authType,
      policy_id: policyId
    })
  });
  if (!res.ok) {
    const body = await res.json();
    throw Object.assign(new Error(body.detail || "Failed to read lifecycle"), {
      status: res.status
    });
  }
  return res.json();
};
const getOAuthClientAuthorizationUrl = (clientId, type = null) => {
  const oauthClientId = type ? `${type}:${clientId}` : clientId;
  return `${WEBUI_BASE_URL}/oauth/clients/${oauthClientId}/authorize`;
};
const initiateOAuthRedirect = (tool) => {
  sessionStorage.setItem("pendingOAuthToolId", tool.id);
  sessionStorage.setItem("oauthRedirectInProgressToolId", tool.id);
  const authUrl = getOAuthClientAuthorizationUrl(tool.serverId, tool.authType ?? "mcp");
  window.open(authUrl, "_self", "noopener");
};
const getModelsConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/models`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
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
const setModelsConfig = async (token, config2) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/models`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...config2
    })
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
const setDefaultPromptSuggestions = async (token, promptSuggestions) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/configs/suggestions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      suggestions: promptSuggestions
    })
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
const bearerHeaders = (apiKey) => ({
  Authorization: `Bearer ${apiKey.trim()}`
});
const getTerminalServers = async (token) => {
  const res = await fetch(`${WEBUI_API_BASE_URL}/terminals/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).catch(() => null);
  if (!res || !res.ok) return [];
  return res.json().catch(() => []);
};
const listFiles = async (baseUrl, apiKey, path = "/", sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/list?directory=${encodeURIComponent(path)}`;
  const headers = bearerHeaders(apiKey);
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res?.entries ?? null;
};
const readFile = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/read?path=${encodeURIComponent(path)}`;
  const headers = bearerHeaders(apiKey);
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).catch((err) => {
    return null;
  });
  if (!res || !res.ok) return null;
  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.startsWith("image/") || contentType.startsWith("application/octet")) {
    return `[Binary file: ${contentType}]`;
  }
  const json = await res.json().catch(() => null);
  return json?.content ?? null;
};
const downloadFileBlob = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/view?path=${encodeURIComponent(path)}`;
  const headers = bearerHeaders(apiKey);
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, { headers }).catch(() => null);
  if (!res || !res.ok) return null;
  const filename = path.split("/").pop() ?? "file";
  const blob = await res.blob().catch(() => null);
  if (!blob) return null;
  return { blob, filename };
};
const archiveFromTerminal = async (baseUrl, apiKey, paths, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/archive`;
  const headers = {
    ...bearerHeaders(apiKey),
    "Content-Type": "application/json"
  };
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ paths })
  }).catch(() => null);
  if (!res || !res.ok) return null;
  const disposition = res.headers.get("content-disposition") ?? "";
  const match = disposition.match(/filename="?([^"]+)"?/);
  const filename = match?.[1] ?? "download.zip";
  const blob = await res.blob().catch(() => null);
  if (!blob) return null;
  return { blob, filename };
};
const uploadToTerminal = async (baseUrl, apiKey, directory, file, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/upload?directory=${encodeURIComponent(directory)}`;
  const body = new FormData();
  body.append("file", file);
  const headers = bearerHeaders(apiKey);
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res;
};
const setCwd = async (baseUrl, apiKey, path, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/cwd`;
  const headers = {
    ...bearerHeaders(apiKey),
    "Content-Type": "application/json"
  };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ path })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return null;
  });
  return res;
};
const moveEntry = async (baseUrl, apiKey, source, destination, sessionId) => {
  const url = `${baseUrl.replace(/\/$/, "")}/files/move`;
  const headers = {
    ...bearerHeaders(apiKey),
    "Content-Type": "application/json"
  };
  if (sessionId) headers["X-Session-Id"] = sessionId;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ source, destination })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    return { error: err?.detail ?? "Move failed" };
  });
  return res;
};
const getListeningPorts = async (baseUrl, apiKey) => {
  const url = `${baseUrl.replace(/\/$/, "")}/ports`;
  const res = await fetch(url, {
    headers: bearerHeaders(apiKey)
  }).catch(() => null);
  if (!res || !res.ok) return [];
  const json = await res.json().catch(() => null);
  return json?.ports ?? [];
};
const getPortProxyUrl = (baseUrl, port, path = "") => {
  return `${baseUrl.replace(/\/$/, "")}/proxy/${port}/${path}`;
};
function XMark($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ArchiveBox($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "2.5");
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor" aria-hidden="true"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Download($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M6 20L18 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function EditPencil($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Folder($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H21.4C21.7314 7 22 7.26863 22 7.6V11M2 11V19.4C2 19.7314 2.26863 20 2.6 20H21.4C21.7314 20 22 19.7314 22 19.4V11M2 11H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
const transcribeAudio = async (token, file, language) => {
  const data = new FormData();
  data.append("file", file);
  if (language) {
    data.append("language", language);
  }
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/transcriptions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`
    },
    body: data
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
const synthesizeOpenAISpeech = async (token = "", speaker = "alloy", text = "", model) => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/speech`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: text,
      voice: speaker,
      ...model
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getVoices = async (token = "") => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/voices`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
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
function Share($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 6.5L8.5 10.5" stroke="currentColor"${attr("stroke-width", strokeWidth)}></path><path d="M8.5 13.5L15.5 17.5" stroke="currentColor"${attr("stroke-width", strokeWidth)}></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Trash($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg${attr_class(clsx(className))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} fill="none"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ChatCheck($$renderer, $$props) {
  let className = fallback($$props["className"], "w-4 h-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path d="M8 12L11 15L16 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Link($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function ShareChatModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let chatId = $$props["chatId"];
    let chat = null;
    let accessGrants = [];
    const i18n = getContext("i18n");
    const loadAccessGrants = async () => {
      if (!chatId) return;
      try {
        accessGrants = await getChatAccessGrants(localStorage.token, chatId) ?? [];
      } catch (e) {
        /* @__PURE__ */ console.error("Failed to load access grants", e);
        accessGrants = [];
      }
    };
    const saveAccessGrants = async () => {
      try {
        await updateChatAccessGrants(localStorage.token, chatId, accessGrants);
        toast.success(store_get($$store_subs ??= {}, "$i18n", i18n).t("Access updated"));
      } catch (e) {
        toast.error(`${e}`);
      }
    };
    let show = fallback($$props["show"], false);
    const isDifferentChat = (_chat) => {
      if (!chat) {
        return true;
      }
      if (!_chat) {
        return false;
      }
      return chat.id !== _chat.id || chat.share_id !== _chat.share_id;
    };
    if (show) {
      (async () => {
        if (chatId) {
          const _chat = await getChatById(localStorage.token, chatId);
          if (isDifferentChat(_chat)) {
            chat = _chat;
          }
          await loadAccessGrants();
        } else {
          chat = null;
          accessGrants = [];
        }
      })();
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
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-4 pt-3 pb-1"><div class="text-sm font-medium self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Share Chat"))}</div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Close"))}>`);
          XMark$1($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> `);
          if (chat) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="px-5 pt-4 pb-5 w-full flex flex-col"><div class="text-sm dark:text-gray-300">`);
            if (chat.share_id) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<a${attr("href", `/s/${stringify(chat.share_id)}`)} target="_blank">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("You have shared this chat"))} <span class="underline">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("before"))}</span>.</a> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Click here to"))} <button class="underline">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("delete this link"))}</button> ${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("and create a new shared link."))}`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat."))}`);
            }
            $$renderer4.push(`<!--]--></div> `);
            if (chat.share_id) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<div class="mt-3">`);
              AccessControl($$renderer4, {
                accessRoles: ["read"],
                sharePublic: store_get($$store_subs ??= {}, "$user", user)?.permissions?.sharing?.public_chats || store_get($$store_subs ??= {}, "$user", user)?.role === "admin",
                shareOpen: store_get($$store_subs ??= {}, "$user", user)?.permissions?.sharing?.open_chats || store_get($$store_subs ??= {}, "$user", user)?.role === "admin",
                shareUsers: (store_get($$store_subs ??= {}, "$user", user)?.permissions?.access_grants?.allow_users ?? true) || store_get($$store_subs ??= {}, "$user", user)?.role === "admin",
                onChange: saveAccessGrants,
                get accessGrants() {
                  return accessGrants;
                },
                set accessGrants($$value) {
                  accessGrants = $$value;
                  $$settled = false;
                }
              });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <div class="flex justify-end gap-1 mt-3">`);
            if (store_get($$store_subs ??= {}, "$config", config)?.features.enable_community_sharing) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`<button class="flex items-center gap-1 px-3.5 py-2 text-sm font-normal bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full" type="button">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Share to Open WebUI Community"))}</button>`);
            } else {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--> <button class="flex items-center gap-1 px-3.5 py-2 text-sm font-normal bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button" id="copy-and-share-chat-button">`);
            Link($$renderer4, {});
            $$renderer4.push(`<!----> `);
            if (chat.share_id) {
              $$renderer4.push("<!--[0-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Update and Copy Link"))}`);
            } else {
              $$renderer4.push("<!--[-1-->");
              $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Copy Link"))}`);
            }
            $$renderer4.push(`<!--]--></button></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div>`);
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
    bind_props($$props, { chatId, show });
  });
}
function FolderMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let align = fallback($$props["align"], "start");
    let onEdit = fallback($$props["onEdit"], () => {
    });
    let onExport = fallback($$props["onExport"], () => {
    });
    let onShare = fallback($$props["onShare"], () => {
    });
    let onDelete = fallback($$props["onDelete"], () => {
    });
    let onCreateSubFolder = fallback($$props["onCreateSubFolder"], () => {
    });
    let onMarkAllRead = fallback($$props["onMarkAllRead"], () => {
    });
    let show = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Dropdown($$renderer3, {
        align,
        onOpenChange: (state) => {
        },
        get show() {
          return show;
        },
        set show($$value) {
          show = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          Tooltip($$renderer4, {
            content: store_get($$store_subs ??= {}, "$i18n", i18n).t("More"),
            children: ($$renderer5) => {
              $$renderer5.push(`<button><!--[-->`);
              slot($$renderer5, $$props, "default", {}, null);
              $$renderer5.push(`<!--]--></button>`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: {
          default: true,
          content: ($$renderer4) => {
            $$renderer4.push(`<div slot="content">`);
            DropdownMenu($$renderer4, {
              className: "min-w-[170px]",
              children: ($$renderer5) => {
                $$renderer5.push(`<button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                Folder($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create Folder"))}</div></button> <hr class="border-gray-50/30 dark:border-gray-800/30 mx-1 my-0.5"/> <button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                Check($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Mark all as read"))}</div></button> <hr class="border-gray-50/30 dark:border-gray-800/30 mx-1 my-0.5"/> <button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                EditPencil($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit"))}</div></button> <button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                Download($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Export"))}</div></button> <button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                Share($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Share"))}</div></button> <hr class="border-gray-50/30 dark:border-gray-800/30 mx-1 my-0.5"/> <button class="flex h-[1.6875rem] w-full items-center gap-2 rounded-xl px-2 text-[13px] select-none cursor-pointer hover:bg-gray-50/40 dark:hover:bg-gray-800/40">`);
                Trash($$renderer5, { className: "size-3.5" });
                $$renderer5.push(`<!----> <div class="flex items-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Delete"))}</div></button>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
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
      align,
      onEdit,
      onExport,
      onShare,
      onDelete,
      onCreateSubFolder,
      onMarkAllRead
    });
  });
}
function FolderShareModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let folder = fallback($$props["folder"], null);
    let accessGrants = [];
    const loadAccessGrants = async () => {
      try {
        const freshFolder = await getFolderById(localStorage.token, folder.id);
        if (freshFolder) {
          accessGrants = freshFolder.access_grants ?? [];
        }
      } catch (e) {
        /* @__PURE__ */ console.error("Failed to load folder access grants", e);
        accessGrants = folder?.access_grants ?? [];
      } finally {
      }
    };
    const handleAccessChange = async () => {
      if (!folder) return;
      try {
        const res = await updateFolderAccessById(localStorage.token, folder.id, accessGrants);
        if (res) {
          accessGrants = res.access_grants ?? accessGrants;
        }
      } catch (e) {
        /* @__PURE__ */ console.error("Failed to update folder access", e);
      }
    };
    if (show && folder?.id) {
      loadAccessGrants();
    }
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
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-100 px-5 pt-3 pb-1"><div class="text-sm self-center">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Share"))}: ${escape_html(folder?.name ?? "")}</div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="w-full px-5 pb-4 dark:text-white">`);
          AccessControl($$renderer4, {
            onChange: handleAccessChange,
            accessRoles: ["read", "write"],
            defaultPermission: "write",
            share: store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.sharing?.folders,
            sharePublic: false,
            shareUsers: store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || store_get($$store_subs ??= {}, "$user", user)?.permissions?.access_grants?.allow_users,
            allowGroups: store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions?.access_grants?.allow_groups ?? true),
            get accessGrants() {
              return accessGrants;
            },
            set accessGrants($$value) {
              accessGrants = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div></div>`);
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
    bind_props($$props, { show, folder });
  });
}
function Knowledge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let selectedItems = fallback($$props["selectedItems"], () => [], true);
    const i18n = getContext("i18n");
    if (selectedItems === null) {
      selectedItems = [];
    }
    $$renderer2.push(`<input type="file" hidden="" multiple=""/> <div><div class="mb-2"><div class="flex w-full items-center gap-2 mb-1"><div class="min-w-0"><!--[-->`);
    slot($$renderer2, $$props, "label", {}, () => {
      $$renderer2.push(`<div class="self-center text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Knowledge"))}</div>`);
    });
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex flex-col mb-1">`);
    if (selectedItems?.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-wrap items-center gap-1.5 mb-2.5"><!--[-->`);
      const each_array = ensure_array_like(selectedItems);
      for (let fileIdx = 0, $$length = each_array.length; fileIdx < $$length; fileIdx++) {
        let file = each_array[fileIdx];
        Tooltip($$renderer2, {
          content: file.description || file.name || file.id,
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="flex max-w-56 items-center gap-1.5 py-0.5 pr-2 text-xs text-gray-700 dark:text-gray-200"><div class="shrink-0 text-gray-500 dark:text-gray-400">`);
            if (file.status === "uploading") {
              $$renderer3.push("<!--[0-->");
              Spinner($$renderer3, { className: "size-3.5" });
            } else if (file.type === "collection") {
              $$renderer3.push("<!--[1-->");
              Database($$renderer3, { className: "size-3.5" });
            } else if (file.type === "note") {
              $$renderer3.push("<!--[2-->");
              PageEdit($$renderer3, { className: "size-3.5" });
            } else if (file.type === "chat") {
              $$renderer3.push("<!--[3-->");
              ChatBubble($$renderer3, { className: "size-3.5" });
            } else if (file.type === "folder") {
              $$renderer3.push("<!--[4-->");
              Folder$1($$renderer3, { className: "size-3.5" });
            } else {
              $$renderer3.push("<!--[-1-->");
              DocumentPage($$renderer3, { className: "size-3.5" });
            }
            $$renderer3.push(`<!--]--></div> <div class="min-w-0 truncate">${escape_html(file.name || file.id)}</div> `);
            if (file.status === "uploading") {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<div class="shrink-0 text-gray-400 dark:text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Uploading"))}</div>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--> <button type="button" class="flex size-4 shrink-0 items-center justify-center text-gray-400 dark:text-gray-500"${attr("aria-label", store_get($$store_subs ??= {}, "$i18n", i18n).t("Remove File"))}>`);
            XMark$1($$renderer3, { className: "size-3" });
            $$renderer3.push(`<!----></button></div>`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--> <button type="button" class="py-0.5 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Disable all"))}</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="text-xs dark:text-gray-700">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t('To attach knowledge base here, add them to the "Knowledge" workspace first.'))}</div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { selectedItems });
  });
}
function FolderModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const i18n = getContext("i18n");
    let show = fallback($$props["show"], false);
    let onSubmit = fallback($$props["onSubmit"], (e) => {
    });
    let folderId = fallback($$props["folderId"], null);
    let parentId = fallback($$props["parentId"], null);
    let edit = fallback($$props["edit"], false);
    let folder = null;
    let name = "";
    let meta = { background_image_url: null };
    let data = { system_prompt: "", files: [] };
    let loading = false;
    const init = async () => {
      if (folderId) {
        folder = await getFolderById(localStorage.token, folderId).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        name = folder.name;
        meta = folder.meta || { background_image_url: null };
        data = folder.data || { system_prompt: "", files: [] };
      }
      focusInput();
    };
    const focusInput = async () => {
      await tick();
      const input = document.getElementById("folder-name");
      if (input) {
        input.focus();
        input.select();
      }
    };
    if (show) {
      init();
    }
    if (!show && !edit) {
      name = "";
      meta = { background_image_url: null };
      data = { system_prompt: "", files: [] };
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
          $$renderer4.push(`<div><div class="flex justify-between dark:text-gray-300 px-4 pt-3 pb-1"><div class="text-sm self-center">`);
          if (edit) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Edit Folder"))}`);
          } else {
            $$renderer4.push("<!--[-1-->");
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Create Folder"))}`);
          }
          $$renderer4.push(`<!--]--></div> <button class="self-center rounded-lg p-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">`);
          XMark($$renderer4, { className: "size-4" });
          $$renderer4.push(`<!----></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full mt-1"><div class="mb-1 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder Name"))}</div> <div class="flex-1"><input id="folder-name" class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text"${attr("value", name)}${attr("placeholder", store_get($$store_subs ??= {}, "$i18n", i18n).t("Enter folder name"))} autocomplete="off"/></div></div> <input id="folder-background-image-input" type="file" hidden="" accept="image/*"/> <div class="flex justify-between w-full mt-1 items-center"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Folder Background Image"))}</div> <div><button aria-labelledby="chat-background-label background-image-url-state" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="background-image-url-state">${escape_html((meta?.background_image_url ?? null) === null ? store_get($$store_subs ??= {}, "$i18n", i18n).t("Upload") : store_get($$store_subs ??= {}, "$i18n", i18n).t("Reset"))}</span></button></div></div> <hr class="border-gray-50 dark:border-gray-850/30 my-2.5 w-full"/> `);
          if (store_get($$store_subs ??= {}, "$user", user)?.role === "admin" || (store_get($$store_subs ??= {}, "$user", user)?.permissions.chat?.system_prompt ?? true)) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="my-1"><div class="mb-2 text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("System Prompt"))}</div> <div>`);
            Textarea($$renderer4, {
              className: " text-sm w-full bg-transparent outline-hidden ",
              placeholder: store_get($$store_subs ??= {}, "$i18n", i18n).t("Write your model system prompt content here\ne.g.) You are Mario from Super Mario Bros, acting as an assistant."),
              maxSize: 200,
              get value() {
                return data.system_prompt;
              },
              set value($$value) {
                data.system_prompt = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--> <div class="my-2">`);
          Knowledge($$renderer4, {
            get selectedItems() {
              return data.files;
            },
            set selectedItems($$value) {
              data.files = $$value;
              $$settled = false;
            },
            $$slots: {
              label: ($$renderer5) => {
                $$renderer5.push(`<div slot="label"><div class="flex w-full justify-between"><div class="text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Knowledge"))}</div></div></div>`);
              }
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex justify-end pt-3 text-sm font-normal gap-1.5"><button${attr_class(`px-3.5 py-1.5 text-sm font-normal bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${""}`)} type="submit"${attr("disabled", loading, true)}>${escape_html(store_get($$store_subs ??= {}, "$i18n", i18n).t("Save"))} `);
          {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></button></div></form></div></div></div>`);
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
    bind_props($$props, { show, onSubmit, folderId, parentId, edit });
  });
}
function CodeBracket($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
function Document($$renderer, $$props) {
  let className = fallback($$props["className"], "size-4");
  let strokeWidth = fallback($$props["strokeWidth"], "1.5");
  $$renderer.push(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${attr("stroke-width", strokeWidth)} stroke="currentColor"${attr_class(clsx(className))}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path></svg>`);
  bind_props($$props, { className, strokeWidth });
}
export {
  ArchiveBox as A,
  initiateOAuthRedirect as B,
  ChatCheck as C,
  Download as D,
  EditPencil as E,
  Folder as F,
  Link as L,
  Share as S,
  Trash as T,
  XMark as X,
  ShareChatModal as a,
  FolderModal as b,
  FolderShareModal as c,
  FolderMenu as d,
  getOrchestratorPolicy as e,
  getOrchestratorLifecycle as f,
  getVoices as g,
  Document as h,
  CodeBracket as i,
  setDefaultPromptSuggestions as j,
  getModelsConfig as k,
  setToolServerConnections as l,
  setTerminalServerConnections as m,
  getTerminalServers as n,
  synthesizeOpenAISpeech as o,
  getListeningPorts as p,
  getPortProxyUrl as q,
  moveEntry as r,
  setModelsConfig as s,
  transcribeAudio as t,
  uploadToTerminal as u,
  listFiles as v,
  setCwd as w,
  archiveFromTerminal as x,
  downloadFileBlob as y,
  readFile as z
};
//# sourceMappingURL=Document.js.map
