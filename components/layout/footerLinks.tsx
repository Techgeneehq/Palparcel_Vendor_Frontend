import Link from 'next/link';
import { ReactElement } from 'react';

interface FooterList {
  title?: string;
  slug?: string;
  icon?: ReactElement;
}

type FooterLinksProps = {
  footerHeading: string,
  footerList: FooterList[],
  inline?: boolean,
  block?: boolean,
}

const FooterLinks = ({ footerHeading, footerList, inline = false, block = false }: FooterLinksProps) => {
  return (
    <div className="w-full">
      <h6 className="text-sm font-normal text-white mb-4">{ footerHeading }</h6>
      {block && <ul className="text-sm font-normal text-[#9E9E9E]">
        {footerList.map(({ slug, title }) => (
          <li key={slug} className="mb-3">
            <Link href="#">
            {title}
            </Link>
          </li>
        ))}
      </ul>}
      {inline && <ul className="flex items-center text-sm font-normal text-[#9E9E9E]">
        {footerList.map(({ slug, icon }) => (
          <li key={slug} className="mb-3 mx-2">
            <Link href="#">
              {icon}
            </Link>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default FooterLinks