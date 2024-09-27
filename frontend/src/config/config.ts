const config = {
  API_HOST: process.env.NEXT_PUBLIC_API_URL,
  LOCAL_STORAGE: {
    TOKEN: "token",
    USER_NAME: "username",
    CART: {
      PRODUCTS: "products",
    },
  },
  API_URLS: {
    AUTH: {
      LOGIN: "api/v1/core/token/",
      REGISTER: "api/v1/user-management/register/",
    },
    PRODUCT: {
      PRODUCTS: "",
      PRODUCT: "",
      ADD_PRODUCT: "",
      REMOVE_PRODUCT: "",
      UPDATE_PRODUCT: "",
    },
    INVENTORY: {
      SALE: "",
      SOLD: "",
      PURCHASED: "",
    },
  },
};

export default config;
