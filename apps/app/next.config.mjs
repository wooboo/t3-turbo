// @ts-check
import transpile from "next-transpile-modules";

const withTM = transpile(["@the-platform/ui", "@the-platform/utils", "@the-platform/data"]);

/* run the build with this set to skip validation */
!process.env.SKIP_ENV_VALIDATION && (await import("./env/server.mjs"));

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return withTM(config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  /** Next.js i18n docs:
   * @see https://nextjs.org/docs/advanced-features/i18n-routing
   * Reference repo for i18n:
   * @see https://github.com/juliusmarminge/t3-i18n
   **/
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: { appDir: true }
});
