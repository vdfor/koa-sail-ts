declare module 'koa-onerror' {
  function onError(app: any, opts?: { [key: string]: string | any }): any;
  export = onError;
}
