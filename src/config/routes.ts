

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export default {
    home: "/",
    register: "/api/auth/register",
    login: "/api/auth/login",
    dashboard: "/dashboard",
    account: "/dashboard/account",
    bookmarked: "/dashboard/bookmarks",
    // will redirect to questions event page
   
  } as const;