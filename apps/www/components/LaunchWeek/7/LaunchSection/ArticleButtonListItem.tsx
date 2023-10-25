import { NewspaperIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Article } from '../../types'

const ArticleButtonListItem = (props: Article) => {
  return (
    <Link href={props.url}>
      <a className="group mr-2 mb-2">
        <div className="flex flex-row">
          <div>
            <div className="flex flex-col">
              <span className="text-foreground group-hover:text-brand text-left text-base transition">
                {props.title}
              </span>
              <p className="text-foreground-light text-left text-sm transition">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleButtonListItem
