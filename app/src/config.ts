const config = {
  baseURI: process.env.REACT_APP_API_BASE_URI || "http://localhost:8080/api",

  employee: {
    create: "/employee/create",
    update: "/employee/update",
    delete: "/employee/delete",
    fetch: "/employee/fetch",
    fetchById: "/employee/fetch",
  },
};

export default config;
