declare module 'live-node-list'

interface LiveNodeList {
  new (
    selector: string,
    parent: Document | Window | HTMLElement,
    config: IntersectionObserverInit,
  ): LiveNodeList
  items: NodeListOf<HTMLElement>
  on: (
    event: string,
    callback: (
    newItems: NodeListOf<HTMLElement>,
    oldItems: NodeListOf<HTMLElement>,
    ) => void
  ) => void
}

interface LiveElement {
  new (
    selector: string,
    parent: Document | Window | HTMLElement,
    config: IntersectionObserverInit,
  ): LiveElement
  item: HTMLElement
  on: (
    event: string,
    callback: (newItem: HTMLElement, oldItem: HTMLElement) => void,
  ) => void
}
