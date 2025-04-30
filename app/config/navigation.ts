export const navigation = {
  unauthenticated: [
    { name: "Home", route: "/", requiresAuth: false },
    { name: "Find Events", route: "/events", requiresAuth: false },
    { name: "Login", route: "/login", requiresAuth: false },
    { name: "Register", route: "/register", requiresAuth: false },
  ],
  authenticated: [
    { name: "Home", route: "/", requiresAuth: false },
    { name: "Find Events", route: "/events", requiresAuth: false },
    { name: "Create Event", route: "/create-event", requiresAuth: true },
    { name: "My Dashboard", route: "/dashboard", requiresAuth: true },
    { name: "Profile", route: "/profile", requiresAuth: true },
    { name: "Logout", route: "/logout", requiresAuth: true },
  ],
  footerNavigation: {
    sports: [
      { name: "Football", route: "/events", query: "football" },
      { name: "Basketball", route: "/events", query: "basketball" },
      { name: "Volleyball", route: "/events", query: "volleyball" },
      { name: "Tennis", route: "/events", query: "tennis" },
      { name: "Rugby", route: "/events", query: "rugby" },
    ],
    contact: [
      { name: "info@sportsmeup.com", route: "mailto:info@sportsmeup.com" },
      { name: "Help Center", route: "#" },
      { name: "Privacy Policy", route: "#" },
      { name: "Terms of Service", route: "#" },
    ],
  },
};
