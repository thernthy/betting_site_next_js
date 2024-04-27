
const mainPath = '/dashboard';
const managePath = '/manage';
export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    manage: {calc:`${mainPath}${managePath}/calc`, cash:`${mainPath}${managePath}'/cash`, partner:`${mainPath}${managePath}/partner`, users:`${mainPath}${managePath}/users`}
  },
  errors: { notFound: '/errors/not-found' },
} as const;
