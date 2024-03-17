import CustomHead from "@/components/CustomHead";
import { useState } from "react";

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  
  const protocol = host.includes('localhost') ? 'http' : 'https'; // Simple check
  // const baseUrl = `${protocol}://${host}`;

  const baseUrl = "https://albaitguests-dev.rmcc.sa";
  const response = await fetch(
    `https://admin-dev.rmcc.sa/api/organizations?organizationDomain=${baseUrl}`
  );
  const data = await response.json();

  // Pass data to the page via props
  return { props: { orgData: data } };
}
export default function Home({ orgData }) {
  const [organization, setOrganization] = useState(orgData);
  console.log("🚀 ~ Home ~ organization:", organization);

  return (
    <>
      <CustomHead organization={organization} />
      <main className={`f`}>
        <div
          className="relative w-screen overflow-x-hidden lg:h-screen"
          dir="ltr"
        >
          <div className="w-screen h-full absolute flex justify-end z-[-10000]">
            <div className="relative w-full h-full ">
              {/* big */}
              {/* <img
            alt="bg_organization"
            srcSet={bg2}
            loading="lazy"
            // src={orgData?.organizations?.background}
            className="animated-box absolute md:top-[-20%] lg:top-[-40%] xl:top-[-50%] 3xl:top-[-15%] 3xl:right-[-10%] right-[-20%] z-[-10000]"
          /> */}
              {/* small */}
              {/* <img
            alt="bg_organization"
            srcSet={bg2}
            loading="lazy"
            className="animated-box absolute top-[10%] xl:top-[20%] 3xl:top-[40%] right-8 pe-[10vw] z-[-10000]"
          /> */}
            </div>
          </div>
          {/* KAABA  */}
          <div className="w-screen flex justify-end pe-[13%] xl:pe-[10%] 3xl:pe-[8%]   lg:my-32 3xl:my-64 absolute z-[-9000]">
            <div
              className="hidden lg:block !w-[15vh] !h-[15vh] lg:!w-[19vh] lg:!h-[19vh] xl:!w-[25vh] xl:!h-[25vh]  bg-landing  absolute z-[9999]"
              style={{ borderRadius: 30 }}
            >
              <div
                className="!w-[200%] !h-[200%] rotate-[-45deg] absolute top-[-45%] left-[-45%]"
                style={{
                  backgroundImage: `url('${organization?.organizations?.background_image}')`,
                  // backgroundColor: theme?.palette?.primary?.main,
                  backgroundSize: "cover",
                  // backgroundPosition:'center',
                  // backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          {/* page content */}
          {/* <Navbar className="fixed bg-[#F7F7F9]" /> */}
          welcome {organization?.organizations?.name}
        </div>
      </main>
    </>
  );
}
