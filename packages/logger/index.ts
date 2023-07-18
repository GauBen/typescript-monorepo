export default (...args: any[]) =>
  console.log("[" + new Date().toISOString() + "]", ...args);
