import { a as WEBUI_API_BASE_URL } from "./index3.js";
const createNewSkill = async (token, skill) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/skills/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...skill
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
const getSkills = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/skills/`, {
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
const updateSkillAccessGrants = async (token, id, accessGrants) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/skills/id/${id}/access/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      access_grants: accessGrants
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
export {
  createNewSkill as c,
  getSkills as g,
  updateSkillAccessGrants as u
};
//# sourceMappingURL=index10.js.map
