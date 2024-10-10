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
    analytics: { index: "/admin/analytics" },
    billingManagement: { index: "/admin/billing-management" },
    coursework: {
      index: "/admin/coursework",
      courses: {
        index: "/admin/coursework/courses",
        create: "/admin/coursework/courses/create",
        course: (courseId: string) => `/admin/coursework/courses/${courseId}`,
      },
      pricing: {
        index: "/admin/coursework/pricing",
      },
      orders: {
        index: "/admin/coursework/orders",
      },
      assignments: {
        index: "/admin/coursework/assignments",
        create: "/admin/coursework/assignments/create",
        reinforcement: {
          index: "/admin/coursework/assignments/create/reinforcement",
          questionSet:
            "/admin/coursework/assignments/create/reinforcement/question-set",
          questions:
            "/admin/coursework/assignments/create/reinforcement/questions",
        },
        details: {
          index: "/admin/coursework/assignments/details",
          assignment: (assignmentId: string) =>
            `/admin/coursework/assignments/details/${assignmentId}`,
          student: (assignmentId: string, studentId: string) =>
            `/admin/coursework/assignments/details/${assignmentId}/${studentId}`,
        },
      },
      exams: {
        index: "/admin/coursework/exams",
        create: {
          index: "/admin/coursework/exams/create",
          sat: "/admin/coursework/exams/create/sat",
        },
        details: {
          index: "/admin/coursework/exams/details",
          exam: (examId: string) => `/admin/coursework/exams/details/${examId}`,
          student: (examId: string, studentId: string) =>
            `/admin/coursework/exams/details/${examId}/${studentId}`,
        },
      },
      lessons: {
        index: "/admin/coursework/lessons",
        create: "/admin/coursework/lessons/create",
        lesson: {
          index: (lessonId: string) => `/admin/coursework/lessons/${lessonId}`,
          update: (lessonId: string) =>
            `/admin/coursework/lessons/${lessonId}/update`,
        },
      },
      questionSets: {
        index: "/admin/coursework/question-sets",
        create: "/admin/coursework/question-sets/create",
        questionSet: (questionSetId: string) =>
          `/admin/coursework/question-sets/${questionSetId}`,
      },
      questions: {
        index: "/admin/coursework/questions",
        create: "/admin/coursework/questions/create",
        update: (questionId: string) =>
          `/admin/coursework/questions/edit/${questionId}`,
      },
    },
    enrollment: {
      index: "/admin/enrollment",
      assignTutors: {
        index: "/admin/enrollment/assign-tutors",
      },
    },
    familyBilling: {
      index: "/admin/family-billing",
    },
    manageFamilyAccounts: {
      index: "/admin/manage-family-accounts",
    },
    progressReports: {
      index: "/admin/progress-reports",
    },
    systemSettings: {
      index: "/admin/system-settings",
    },
    userManagement: {
      index: "/admin/user-management",
    },
    groupManagement: {
      index: "/admin/group-management",
    },
  },
  student: {
    dashboard: {
      index: "/student/dashboard",
    },
    coursework: {
      index: "/student/coursework",
      course: (courseId: string) => `/student/coursework/${courseId}`,
    },
  },
};
