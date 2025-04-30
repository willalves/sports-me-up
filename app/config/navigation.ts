export const navigation = {
  unauthenticated: [
    { name: "Home", route: "/", requiresAuth: false },
    { name: "Find Events", route: "/events", requiresAuth: false },
    { name: "Login", route: "/login", requiresAuth: false },
    { name: "Register", route: "/register", requiresAuth: false }
  ],
  authenticated: [
    { name: "Home", route: "/", requiresAuth: false },
    { name: "Find Events", route: "/events", requiresAuth: false },
    { name: "Create Event", route: "/create-event", requiresAuth: true },
    { name: "My Dashboard", route: "/dashboard", requiresAuth: true },
    { name: "Profile", route: "/profile", requiresAuth: true },
    { name: "Logout", route: "/logout", requiresAuth: true }
  ]
};
