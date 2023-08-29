/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export interface ContentFilter {
  apply: (node: HTMLElement, i: number) => void;
  initialize: (
    nodeToErase: Set<ChildNode>,
    children: NodeListOf<ChildNode>,
  ) => void;
}
