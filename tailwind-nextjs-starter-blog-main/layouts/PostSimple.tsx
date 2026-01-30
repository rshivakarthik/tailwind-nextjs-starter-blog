import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, children }: LayoutProps) {
  const { slug, date, title } = content

  return (
    /* Dinesh UI style lo full screen avvadaniki max-w-none vaadanu */
    <section className="mx-auto w-full max-w-none px-0">
      <ScrollTopAndComment />
      <article>
        <div className="w-full">
          {/* Header section optional - portfolio lo use cheyakapothe comment cheyyocharu */}
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {title}
                </h1>
              </div>
            </div>
          </header>

          {/* Ee div content ni computer screen motham fit chesthundhi */}
          <div className="w-full pb-8 dark:divide-gray-700">
            <div className="w-full max-w-none">
              <div className="w-full pt-10 pb-8">{children}</div>
            </div>
            
            {siteMetadata.comments && (
              <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <Comments slug={slug} />
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  )
}