import Image from "next/image";

interface FooterList {
  title: string;
  slug: string;
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
          <li key={slug} className="mb-3">{title}</li>
        ))}
      </ul>}
      {inline && <ul className="flex items-center text-sm font-normal text-[#9E9E9E]">
        {footerList.map(({ slug, title }) => (
          <li key={slug} className="mb-3 mx-2">
            <Image src={title} alt={slug} />
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default FooterLinks