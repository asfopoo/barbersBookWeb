import posthog from "posthog-js";

const KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const HOST = import.meta.env.VITE_POSTHOG_HOST as string | undefined;

const isLocalHost = (): boolean => {
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "::1" || h.endsWith(".local");
};

const isAdminRoute = (): boolean => window.location.pathname.startsWith("/admin");

let initialized = false;

export function initAnalytics(): void {
  if (initialized || !KEY || !HOST || isLocalHost() || isAdminRoute()) return;
  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: "history_change",
    disable_session_recording: true,
    persistence: "localStorage+cookie",
  });
  initialized = true;
}

export function track(event: string, props?: Record<string, unknown>): void {
  if (!initialized) return;
  posthog.capture(event, props);
}
