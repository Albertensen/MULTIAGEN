import { a as WEBUI_API_BASE_URL } from "./index4.js";
const createNewFolder = async (token, folderForm) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(folderForm)
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
const getFolders = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/`, {
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
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getFolderById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}`, {
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
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateFolderById = async (token, id, folderForm) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(folderForm)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const markFolderChatsReadById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/read`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
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
const updateFolderAccessById = async (token, id, accessGrants) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/access/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ access_grants: accessGrants })
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
const getSharedFolders = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/shared`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return [];
  });
  if (error) {
    throw error;
  }
  return res;
};
const getSharedFolderChats = async (token, folderId, params = {}) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (params.page !== void 0 && params.page !== null) {
    searchParams.append("page", `${params.page}`);
  }
  if (params.sortBy) {
    searchParams.append("sort_by", params.sortBy);
  }
  if (params.sortDir) {
    searchParams.append("sort_dir", params.sortDir);
  }
  const query = searchParams.toString();
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/folders/${folderId}/shared/chats${query ? `?${query}` : ""}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
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
export {
  getFolderById as a,
  getFolders as b,
  createNewFolder as c,
  getSharedFolders as d,
  updateFolderAccessById as e,
  getSharedFolderChats as g,
  markFolderChatsReadById as m,
  updateFolderById as u
};
//# sourceMappingURL=index6.js.map
