import { Grid } from "@mui/material"
import Link from "next/link"

type FormContainerProps = {
  children: React.ReactNode,
  fHeader?: string,
  fSub?: string,
  login: boolean,
}

const FormContainer = ({ children, fHeader, fSub, login }:FormContainerProps) => {
  return (
    <Grid className="flex justify-center" container>
      <Grid md={6} xs={10} item>
        <div className="border border-[#DEDEDE] px-32 py-20 rounded-3xl w-full">
          <h3 className="capitalize font-medium mb-4 text-2xl text-black text-center">{ fHeader }</h3>
          <p className="font-normal mb-10 text-base text-[#969696] text-center">{ fSub }</p>
          { children }
          {!login && <p className="mt-[90px] text-center">
            Already have an account? <Link href="Login" className="ml-1 text-[#FE9900]">Login</Link>
          </p>}
          {login && <p className="mt-[90px] text-center">
            Can{`'`}t login account? <Link href="ForgotPassword" className="ml-1 text-[#FE9900]">Forget Password</Link>
          </p>}
        </div>
      </Grid>
    </Grid>
  )
}

export default FormContainer