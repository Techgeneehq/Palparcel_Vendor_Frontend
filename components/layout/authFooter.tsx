import Image from "next/image"
import { Container, Grid } from "@mui/material"
import Icon from '@/components/global/Icons'
import Logo from "@/components/logo/logo"
import Brands from "@/components/Brands/Brands"
import FooterLinks from "@/components/layout/footerLinks"
import payment from '@/public/assets/icons/icons_payment.png'

const aboutArray = [
  {title: "Contact Us", slug: "contact"},
  {title: "About Us", slug: "about"},
  {title: "Careers", slug: "careers"},
  {title: "Terms & Conditions", slug: "terms"},
]

const companyArray = [
  {title: "FAQs", slug: "faqs"},
  {title: "Delivery", slug: "delivery"},
  {title: "Our Return Policy", slug: "return_policy"},
]

const moreArray = [
  {title: "Site Map", slug: "site_map"},
  {title: "Track My Order", slug: "track_order"},
  {title: "Privacy Policy", slug: "privacy"},
  {title: "Authentic Items Policy", slug: "authentic_items_policy"},
]

const socialArray = [
  {icon: <Icon.FacebookIcon />, slug: "facebook logo"},
  {icon: <Icon.LinkedinIcon />, slug: "linkedin logo"},
  {icon: <Icon.InstagramIcon />, slug: "instagram logo"},
  {icon: <Icon.TwitterIcon />, slug: "twitter logo"},
]

const AuthFooter = () => {
  return (
    <div className="w-full mt-24 p-0">
      <Container className="px-1 md:px-20 md:mb-20" fixed>
        <Brands />
      </Container>
      <div className="w-full bg-[#7132A5] pt-8 md:pb-16 lg:pb-36 flex justify-center items-start">
        <Container fixed>
          <Grid className="flex justify-between" container>
            <Grid item xs={12} sm={3}>
              <Logo variant="white" />
              <div className="w-full mt-[60px]">
                <FooterLinks
                    footerHeading="Connect With Us"
                    footerList={socialArray}
                    inline={true}
                  />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={9} container className="mt-5 md:mt-0">
              <Grid item xs={12} sm={4}>
                <FooterLinks
                  footerHeading="About Us"
                  footerList={aboutArray}
                  block={true}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FooterLinks
                  footerHeading="Buying on Techgene"
                  footerList={companyArray}
                  block={true}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FooterLinks
                  footerHeading="More Info"
                  footerList={moreArray}
                  block={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="w-full bg-[#7132A5] text-white py-6 flex justify-center items-center">
        <Container fixed>
          <Grid className="flex justify-between items-center" container>
            <Grid item xs={12} sm={6}>
              <p>© 2023Techgene , Inc.</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image src={payment} alt="picture of some payment companies" className="flex md:ml-auto" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default AuthFooter