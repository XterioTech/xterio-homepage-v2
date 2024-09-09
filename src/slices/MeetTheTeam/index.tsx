import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `MeetTheTeam`.
 */
export type MeetTheTeamProps = SliceComponentProps<Content.MeetTheTeamSlice>

/**
 * Component for "MeetTheTeam" Slices.
 */
const MeetTheTeam = ({ slice }: MeetTheTeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for meet_the_team (variation: {slice.variation})
      Slices
    </section>
  )
}

export default MeetTheTeam
