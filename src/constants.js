export const RouteType = {
  MAIN_ROUTE: 'main',
  NAVIGATION_ROUTE: 'navigation'
};

export const PageState = {
  LOADING: 'loading',
  DIALOG_OPEN: 'dialog-open',
  READY: 'ready'
};

// When other stages exist this could be set based on process.env.NODE_ENV, or set directly to an env var
export const apiUrl = 'https://q18qcvcpq8.execute-api.eu-west-1.amazonaws.com/dev';
