'use client'
import { useRouter } from "next/navigation"
import Icon from "../global/Icons"

type AUTHPAGENAMEPROPS = {
  title: string,
}

const AuthPageName = ({ title }: AUTHPAGENAMEPROPS) => {
  const router = useRouter()
  return(
    <button onClick={() => router.back()} className="mb-4 flex items-center gap-[10px] text-lg text-[#001128] font-medium leading-normal">
      <Icon.BackArrowIcon />
      { title }
    </button>
  )
}

export default AuthPageName