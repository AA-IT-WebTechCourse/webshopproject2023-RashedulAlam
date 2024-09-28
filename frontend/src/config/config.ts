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
    POPULATE_DB: "api/v1/initialization/",
    AUTH: {
      LOGIN: "api/v1/core/token/",
      REGISTER: "api/v1/user-management/register/",
    },
    PRODUCT: {
      PRODUCTS: (pageNumber: number, searchTerm: string) =>
        `api/v1/public/products?page=${pageNumber}&search=${searchTerm}`,
      GET_PRODUCT: (id: string) => `api/v1/inventory/products/${id}/`,
      ADD_PRODUCT: "api/v1/inventory/products/",
      UPDATE_PRODUCT: (id: string) => `api/v1/inventory/products/${id}/`,
    },
    INVENTORY: {
      SALE: (pageSize: number) => `api/v1/inventory/products/?page=${pageSize}`,
      SOLD: "",
      PURCHASED: "",
    },
  },
  PAGINATION: {
    PAGE_SIZE: 10,
  },
};

export default config;
