import { Link } from 'react-router-dom'
import { AppleLogo, ArrowSquareOut, CaretDown } from 'phosphor-react'
import { ReactElement } from 'react'
import { AppLogo } from '../pages/Landing/common'

export function LinksGroup (
  props: { items: Array<{ link: string, label: string | ReactElement, icon?: ReactElement }> }
) {
  return (
    <ul className="links-group ml-6 h-full">
      {props.items.map(it => {
        const inner = (
          <>
            {it.label}
            {it.icon && <span className={'pl-2 opacity-40 group-hover:opacity-80'}>{it.icon}</span>}
          </>)

        return (
          <li className={'flex items-center'}>
            {it.link.startsWith('http') ?
              <a href={it.link} target={'_blank'}
                 className={'h-full flex items-center group transition-colors'}>{inner}</a> :
              <Link to={it.link} className={'h-full flex items-center group transition-colors'}>{inner}</Link>
            }

          </li>
        )
      })}
    </ul>
  )
}

export function Headbar () {
  const leftLinks = [
    { label: 'Home', link: '/' },
    { label: 'Downloads', link: '/downloads' }
  ]

  const rightLinks = [
    { label: 'Jobs', link: 'https://logseq.com', icon: <ArrowSquareOut size={15} weight={'bold'}/> },
    { label: 'Community Hub', link: 'https://discord.com/invite/KpN4eHY', icon: <ArrowSquareOut size={15} weight={'bold'}/> },
    { label: 'Blog', link: 'https://blog.logseq.com/', icon: <ArrowSquareOut size={15} weight={'bold'}/> }
  ]

  return (
    <div className={'app-headbar h-14 flex justify-center'}>
      <div className={'flex items-center justify-between w-full'}>
        <div className={'flex items-center h-full'}>
          <Link to={'/'} className={'app-logo-link mr-2'}></Link>

          <LinksGroup items={leftLinks}/>
        </div>

        <div className={'flex items-center h-full'}>
          <LinksGroup items={rightLinks}/>

          {/*Downloads select*/}
          <div className="downloads-select ml-8">
            <a
              className={'flex items-center bg-sky-600 px-2 py-1 rounded text-sm hover:opacity-80 select-none cursor-pointer'}>
              <AppleLogo weight={'bold'}/>
              {/*<WindowsLogo />*/}
              <span className={'pl-2'}>Download for Mac</span>
              <CaretDown className={'ml-1 opacity-60'}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}