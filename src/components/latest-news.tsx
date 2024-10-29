'use client'

import { createClient } from '@/prismicio'
import dynamic from "next/dynamic";
import {Image, LinkBase} from "@superrb/next-addons/components";
import Author from "@/components/author";
const SocialIcons = dynamic(() => import('./social-icons'))
import {animator} from "@superrb/react-addons/utils";
import {LegacyRef, MutableRefObject, useEffect, useState} from "react";

const LatestNews = async () => {
  const client = createClient()
  const newsContent = await client.getSingle('latest_news')

  const {title, news_item} = newsContent?.data

  return (
    <div className="latest-news" data-slice-backgroundcolour={"dark"}>
      <div className="latest-news__container">
        <header className="latest-news__header news-header">
          <h3 className="news-header__title" ref={animator as LegacyRef<HTMLHeadingElement>}>{title}</h3>
          <SocialIcons className="news-header__social" />
        </header>

        <div className="latest-news__blocks">
          {news_item.map(({ image, category, title, author, link}, index) => (
            <LinkBase href={link} key={index} className="latest-news__block news-block">
              <Image
                image={image}
                className="news-block__image"
                sizes="(min-width: 63.75em) 33.333vw, 100vw"
              />
              <div className="news-block__category">#{category}</div>
              <h3 className="news-block__title">{title}</h3>
              <Author className="news-block__author" author={author} />
            </LinkBase>
          ))}
        </div>
      </div>
    </div>
  )
}
export default LatestNews
