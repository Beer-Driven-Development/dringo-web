export function authGuard(to, from, next) {
  const token = localStorage.getItem("token");

  if (!token) {
    // not logged in so redirect to login page with the return url
    return next({ path: "/login", query: { returnUrl: to.fullPath } });
  }

  next();
}
