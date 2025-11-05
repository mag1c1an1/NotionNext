import { siteConfig } from '@/lib/config'

/**
 * 站点域名备案
 * @returns
 */
export default function BeiAnSite() {
  const beian = siteConfig('BEI_AN')
  const beianLink = siteConfig('BEI_AN_LINK')
  if (!beian) {
    return null
  }
  return (
    // 👇 核心修改在这里
    <div className='flex flex-col md:flex-row justify-center items-center'>
      {/* 在小屏幕上，图标和链接之间需要一些垂直间距 */}
      <i className='fas fa-shield-alt mb-1 md:mb-0' />

      {/*
           在小屏幕上，链接会在图标下方。
           在 md 及以上屏幕，它会在图标右侧。
           mx-1 确保了在水平排列时，图标和链接之间有左右间距。
         */}
      <a href={beianLink} className='mx-1 text-center'>
        {beian}
      </a>
    </div>
  )
}
