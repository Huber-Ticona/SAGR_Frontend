import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: ({ cookies }) => {
    const options = {
      path: "/",
      // Use the domain from the request headers
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 7
      // one week
    };
    cookies.delete("logged_in", options);
    throw redirect(303, "/login");
  }
};
export {
  actions
};
