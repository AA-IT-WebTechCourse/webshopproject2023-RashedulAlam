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
        `api/v1/public/products?page=${pageNumber}${
          !!searchTerm ? `&search=${searchTerm}` : ""
        }`,
      GET_PRODUCT: (id: string) => `api/v1/inventory/products/${id}/`,
      ADD_PRODUCT: "api/v1/inventory/products/",
      UPDATE_PRODUCT: (id: string) => `api/v1/inventory/products/${id}/`,
    },
    INVENTORY: {
      PRODUCTS: (pageSize: number, type: any) =>
        `api/v1/inventory/products/?page=${pageSize}&type=${type}`,
    },
    USER_MANAGEMENT: {
      CURRENT_USER: "api/v1/user-management/current-user/",
      UPDATE_USER_PASSWORD: "api/v1/user-management/change-password/",
    },
    PAY: 'api/v1/pay/'
  },
  PAGINATION: {
    PAGE_SIZE: 10,
  },
};

export default config;
