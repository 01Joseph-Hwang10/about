export const dispatch = (eventName: string, ...args: any[]) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(eventName, { detail: args }));
};

export const subscribe: typeof window.addEventListener = (
  eventName,
  callback,
  options,
) => {
  if (typeof window === "undefined") return;
  window.addEventListener(eventName, callback, options);
};

export const unsubscribe: typeof window.removeEventListener = (
  eventName,
  callback,
  options,
) => {
  if (typeof window === "undefined") return;
  window.removeEventListener(eventName, callback, options);
};
