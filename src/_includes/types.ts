import type { Page as BasePage, PageData as BasePageData } from "lume/core.ts";

// To handle all types in one place, use re-export
export type { PageHelpers } from "lume/core.ts";

// deno-lint-ignore no-empty-interface
export interface PageData extends BasePageData {
  // Define your own properties here
}

// Create a new interface
export interface Page extends BasePage {
  data: PageData;
}
