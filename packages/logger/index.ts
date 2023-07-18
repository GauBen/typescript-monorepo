/** Logs something in the console. */
export default (...args: any[]) =>
  console.log("[" + new Date().toISOString() + "]", ...args);
