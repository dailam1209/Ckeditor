import Cookies from "js-cookie";

export const setMultipleCookie = (
    token: string,
    email: string,
    id: string | number,
    auth: string | number,
    type: string | number,
    name: string,
    phone: string,
    rf_token: string = "",
  ): void => {
    Cookies.set("work247_token_admin_blog", token, { expires: 60 });
    Cookies.set("email_admin_blog", name, { expires: 60 });
    Cookies.set("id_admin_blog", `${id}`, { expires: 60 });
    Cookies.set("auth_admin_blog", `${auth}`, { expires: 60 });
    Cookies.set("work247_type_admin_blog", `${type}`, { expires: 60 });
    Cookies.set("phone_admin_blog", phone, { expires: 60 });
    Cookies.set("userName_admin_blog", name, { expires: 60 });
    rf_token && Cookies.set("rf_token_admin_blog", rf_token, { expires: 60 });
  };

  export const logOut = () => {
    Cookies.remove("work247_token_admin_blog");
    Cookies.remove("email_admin_blog");
    Cookies.remove("id_admin_blog");
    Cookies.remove("auth_admin_blog");
    Cookies.remove("work247_type_admin_blog");
    Cookies.remove("phone_admin_blog");
    Cookies.remove("userName_admin_blog");
    Cookies.remove("rf_token_admin_blog");
  };