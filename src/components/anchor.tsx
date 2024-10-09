import {KeyTextField} from "@prismicio/client";

const Anchor = ({ anchorName = '' }: { anchorName?: KeyTextField }) => (
  <a id={anchorName?.toLowerCase()
    .split(' ')
    .join('-')} className="anchor"></a>
)

export default Anchor
