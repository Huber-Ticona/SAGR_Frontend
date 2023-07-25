import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: ({ cookies }) => {
    cookies.delete("logged_in", { path: "/" });
    throw redirect(303, "/login");
  }
};
export {
  actions
};
