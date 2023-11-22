'use client'
import { useRouter } from "next/navigation";
import { Grid } from "@mui/material"
import { ReactElement } from 'react';

type SuccessProps = {
  fHeader?: string,
  fSub?: string,
  icon: ReactElement,
  btn: string,  
}

const AuthSuccess = ({ fHeader, fSub, icon, btn }: SuccessProps) => {
  const router = useRouter();
  return (
    <Grid className="flex justify-center" container>
      <Grid md={6} xs={10} item>
        <div className="border border-[#DEDEDE] px-32 py-20 rounded-3xl w-full text-center">
          <h3 className="capitalize font-medium mb-8 text-2xl text-black text-center">
            { fHeader }
          </h3>
          <div className="flex justify-center items-center">
            { icon }
          </div>
          <p className="w-1/2 mx-auto font-normal mt-6 text-base text-[#969696] text-center">
            { fSub }
          </p>
          <div className="flex justify-center items-center mt-9">
            <button onClick={() => router.push('/login')} className="flex py-3 px-6 text-base text-white font-medium rounded-3xl bg-[#7132A5]">{ btn }</button>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default AuthSuccess