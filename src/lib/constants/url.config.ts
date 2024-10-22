export const APIUrl = {
  base: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000",
  auth: {
    signin: () => "/auth/login",
    signup: () => "/auth/register",
    socialSignin: () => "/auth/social-signin",
    googleSignUp: () => "/auth/google-login",
    googleApiSignin: () => "https://www.googleapis.com/oauth2/v3/userinfo",
    signout: () => "/auth/logout",
    refreshToken: () => "/auth/refresh-token",
    forgotPassword: () => "/auth/forgot-password",
    resetPassword: (token: string) => "/auth/reset-password/" + token,
  },
  onboarding: {
    parent: () => "/onboarding/parent",
    teacher: () => "/onboarding/teacher",
    student: () => "/onboarding/student",
  },
  user: {
    getUser: (userId: string) => "/user/" + userId,
  },
  userManagement: {
    get: () => "/user-management",
    getById: (id: string) => "/user-management/" + id,
    createUser: () => "/user-management/create",
    updateUser: (id: string) => "/user-management/update/" + id,
    deleteUser: (id: string) => "/user-management/" + id,
    getUsersByRole: (role: string) => "/user-management/getUsersByRole/" + role,
  },
  todo: {
    crud: {
      getTodos: () => "/todos",
      getTodoById: (id: string) => "/todos/" + id,
      createTodo: () => "/todos",
      updateTodo: (id: string) => "/todos/" + id,
      deleteTodo: (id: string) => "/todos/" + id,
    },
  },
};

export const RouteUrls = {
  dashboard: { index: "/dashboard" },
  auth: {
    signin: "/auth/signin",
    signup: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password/[token]",
  },
  admin: {
    dashboard: {
      index: "/admin/dashboard",
    },
  },
};
