import { Grid } from "@mui/material"
import Image from "next/image"

type SuccessProps = {
  fHeader?: string,
  fSub?: string,
  img: string,
  btn: string,  
}

const Success = ({ fHeader, fSub, img, btn }: SuccessProps) => {
  return (
    <Grid className="flex justify-center" container>
      <Grid md={6} xs={10} item>
        <div className="border border-[#DEDEDE] px-32 py-20 rounded-3xl w-full text-center">
          <h3 className="capitalize font-medium mb-8 text-2xl text-black text-center">
            { fHeader }
          </h3>
          <div className="flex justify-center items-center">
            <Image src={img} alt={`${img} alert icon`} className="flex justify-center" />
          </div>
          <p className="w-1/2 mx-auto font-normal mt-6 text-base text-[#969696] text-center">
            { fSub }
          </p>
          <div className="flex justify-center items-center mt-9">
            <button className="flex py-3 px-6 text-base text-white font-medium rounded-3xl bg-[#FE9900]">{ btn }</button>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default Success