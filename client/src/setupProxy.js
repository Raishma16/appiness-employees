// This proxy configuration is required to redirect the /api routes to the node server in the dev environment.
// This will be dropped in production as all requests will be served from the same domain.

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api"],
    createProxyMiddleware({
      target: "http://localhost:5000"
    })
  );
};
