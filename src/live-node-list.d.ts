declare module 'live-node-list'

interface LiveNodeList {
  new (
    selector: string,
    parent: Document | Window | HTMLElement,
    config: IntersectionObserverInit,
  ): LiveNodeList
  items: NodeListOf<HTMLElement>
}

interface LiveElement {
  new (
    selector: string,
    parent: Document | Window | HTMLElement,
    config: IntersectionObserverInit,
  ): LiveElement
  item: HTMLElement
}
