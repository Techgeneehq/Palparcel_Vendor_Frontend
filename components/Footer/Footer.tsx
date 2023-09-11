import Image from "next/image"
import { Container, Grid } from "@mui/material"
import Logo from "@/components/Logo/Logo"
import Brands from "@/components/Brands/Brands"
import FooterLinks from "@/components/FooterLinks/FooterLinks"
import facebook from '@/public/assets/icons/socials/facebook.svg'
import linkedin from '@/public/assets/icons/socials/linkedin.svg'
import instagram from '@/public/assets/icons/socials/instagram.svg'
import twitter from '@/public/assets/icons/socials/twitter.svg'
import payment from '@/public/assets/icons/icons_payment.png'
import arrowUp from '@/public/assets/icons/arrow_up.svg'

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
  {title: facebook, slug: "facebook logo"},
  {title: linkedin, slug: "linkedin logo"},
  {title: instagram, slug: "instagram logo"},
  {title: twitter, slug: "twitter logo"},
]

const Footer = () => {
  return (
    <div className="w-full mt-24 p-0">
      <Container className="px-20 mb-20" fixed>
        <Brands />
      </Container>
      <div className="w-full bg-[#141414] pt-8 pb-36 flex justify-center items-start">
        <Container fixed>
          <Grid className="flex justify-between" container>
            <Grid item xs>
              <Logo techgene={true} palparcel={false} />
            </Grid>
            <Grid item xs={9} container>
              <Grid item xs={3}>
                <FooterLinks 
                  footerHeading="About Us"
                  footerList={aboutArray}
                  block={true}
                />
              </Grid>
              <Grid item xs={3}>
                <FooterLinks 
                  footerHeading="Buying on Techgene"
                  footerList={companyArray}
                  block={true}
                />
              </Grid>
              <Grid item xs={3}>
                <FooterLinks 
                  footerHeading="More Info"
                  footerList={moreArray}
                  block={true}
                />
              </Grid>
              <Grid item xs={3}>
                <FooterLinks 
                  footerHeading="Connect With Us"
                  footerList={socialArray}
                  inline={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="w-full bg-[#FAC100]  py-6 flex justify-center items-center">
        <Container fixed>
          <Grid className="flex justify-between items-center" container>
            <Grid item xs={3}>
              <p>© 2023Techgene , Inc.</p>
            </Grid>
            <Grid item xs={3}>
              <Image src={payment} alt="picture of some payment companies" />
            </Grid>
            <Grid item xs={3}>
              <p className="flex justify-end">Scroll to top <Image className="ml-1" src={arrowUp} alt="arrow up icon" /></p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Footer