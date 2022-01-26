import React, { ReactElement } from 'react'
import classNames from 'classnames'
import CardLink from 'components/card-link'
import ProductIcon from 'components/product-icon'
import CONTENT from './content.json'
import s from './style.module.css'

function ProductCardGrid({ className }: { className?: string }): ReactElement {
  return (
    <div className={classNames(s.root, className)}>
      {CONTENT.cardGridSections.map((section) => {
        const { title, products } = section
        return <CardGridSection key={title} title={title} products={products} />
      })}
    </div>
  )
}

function CardGridSection({ title, products }): ReactElement {
  return (
    <div className={s.cardGridSection}>
      <span className={s.sectionHeading}>{title}</span>
      <span className={s.sectionBody}>
        {products.map(({ slug, hasLogo, headingIcon, heading, subheading }) => {
          return (
            <div className={s.sectionBodyCardWrapper} key={slug}>
              <CardLink
                className={s.sectionBodyCard}
                elevation="low"
                href={`/${slug}`}
              >
                {hasLogo && (
                  <ProductIcon
                    className={s.sectionBodyCardLogo}
                    product={slug}
                  />
                )}
                <span className={s.sectionBodyCardHeading}>
                  {headingIcon && (
                    <ProductIcon
                      className={s.sectionBodyCardHeadingIcon}
                      product={slug}
                    />
                  )}
                  {heading}
                </span>
                <span
                  className={s.sectionBodyCardSubheading}
                  dangerouslySetInnerHTML={{ __html: subheading }}
                />
              </CardLink>
            </div>
          )
        })}
      </span>
    </div>
  )
}

export default ProductCardGrid
