/* eslint-disable no-undef */
import { ContentFilter } from "./types";

export class MetadataTagsSectionFilter implements ContentFilter {
  private eraseMode: boolean;
  private selector: string[];
  private childrenRef: NodeListOf<ChildNode>;
  private nodeToEraseRef: Set<ChildNode>;

  constructor(selector: string | string[]) {
    this.selector = typeof selector === "string" ? [selector] : selector;
    this.eraseMode = false;
  }

  initialize(nodeToErase: Set<ChildNode>, children: NodeListOf<ChildNode>) {
    this.childrenRef = children;
    this.nodeToEraseRef = nodeToErase;
  }

  apply(node, i) {
    // Stop erasing when <h4> or higher is found
    if (["H1", "H2", "H3", "H4"].includes(node.tagName)) this.eraseMode = false;

    // When this.eraseMode is on, erase current node
    if (this.eraseMode) {
      this.nodeToEraseRef.add(node);
      return;
    }

    // When <Tags /> is found, check if it contains any of the selector
    if (!node?.classList?.contains("metadata-tags")) return;
    const shouldSelect = this.selector
      .map((s) => node.classList.contains(s))
      .includes(true);

    // If it doesn't contain any of the selector, turn on this.eraseMode
    if (!shouldSelect) {
      this.eraseMode = true;
      // h4 tag before <Tags />
      this.nodeToEraseRef.add(this.childrenRef.item(i - 1) as HTMLElement);
      // <Tags /> itself
      this.nodeToEraseRef.add(node);
    }
  }
}
