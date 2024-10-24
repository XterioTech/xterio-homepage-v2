'use client'

import { Content } from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Flickity from "react-flickity-component";
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {

  const {
    title
  } = slice.primary

  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false
  }

  return (
    <section
      className="testimonials"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="testimonials__container">
        <div className="testimonials__inner">
          {title && (
            <header className="testimonials__header testimonials-header">
              <h2 className="testimonials-header__title">{title}</h2>
            </header>
          )}

          <Flickity
            className={'testimonials__blocks flickity'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {slice.primary.testimonial.map(({ quote, author, company, image }, index) => (
              <div className="testimonials__block testimonial-block" key={index}>
                <div className="testimonial-block__quote">
                  <PrismicRichText field={quote} />
                </div>
                <div className="testimonial-block__credit">
                  <Image
                    image={image}
                    className="testimonial-block__image objFit"
                    sizes="(min-width: 63.75em) 33.333vw, 100vw"
                  />
                  <div className="testimonial-block__name">
                    {author && (
                      <p className="testimonial-block__author">{author}</p>
                    )}
                    {company && (
                      <p className="testimonial-block__company">{company}</p>
                    )}
                  </div>
                </div>

              </div>
            ))}
            {slice.primary.testimonial.map(({ quote, author, company, image }, index) => (
              <div className="testimonials__block testimonial-block" key={index}>
                <div className="testimonial-block__quote">
                  <PrismicRichText field={quote} />
                </div>
                <div className="testimonial-block__credit">
                  <Image
                    image={image}
                    className="testimonial-block__image objFit"
                    sizes="(min-width: 63.75em) 33.333vw, 100vw"
                  />
                  <div className="testimonial-block__name">
                    {author && (
                      <p className="testimonial-block__author">{author}</p>
                    )}
                    {company && (
                      <p className="testimonial-block__company">{company}</p>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </Flickity>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
