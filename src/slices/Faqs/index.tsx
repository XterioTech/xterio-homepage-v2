'use client'

import { Content } from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import {Image} from "@superrb/next-addons/components";
import {Accordion, AccordionItem} from "@superrb/react-addons/components";
import Anchor from "@/components/anchor";
import {animator} from "@superrb/react-addons/utils";
import {LegacyRef, MutableRefObject, useEffect, useState} from "react";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  const {
    title,
  } = slice.primary
  return (
    <section
      className="faqs"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <Anchor anchorName={title} />
      <div className="faqs__container" data-slice-backgroundcolour={"dark"}>
        <div className="faqs__col">
          <h2 className="faqs__title" ref={animator as LegacyRef<HTMLHeadingElement>}>{title}</h2>
        </div>
        <div className="faqs__col">
          <div className="faqs__questions">
            <Accordion multiple={true}>
              {slice.primary.faq.map(({ question, answer }, index) => (
                <div className="accordion__block" key={index}>
                  <AccordionItem expanded={index === 0} title={question as string}>
                    <PrismicRichText field={answer} />
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
