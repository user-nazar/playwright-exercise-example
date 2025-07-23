export interface IElementOptions {
  timeout?: number;
  state?: "attached" | "visible" | "detached" | "hidden";
  forceClick?: boolean;
}
