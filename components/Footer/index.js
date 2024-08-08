import LogoIcon from "/public/images/logo/logo_footer.svg";
import FacebookIcon from "/public/icons/footer/facebook.svg";
import InstagramIcon from "/public/icons/footer/instagram.svg";
import MediumIcon from "/public/icons/footer/medium.svg";
import YoutubeIcon from "/public/icons/footer/youtube.svg";

const refundPolicy = "https://vanillacoding.craft.me/gu4VcYDnv0nwsh";
const privacyPolicy =
  "https://vanillacoding.notion.site/7eed9ca8ca3147beae3082c2c1f15fba";

const icons = [
  {
    title: "instagram",
    link: "https://www.instagram.com/vanilla_coding",
    component: <InstagramIcon />,
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/channel/UCqw3KRd7EBORZPqpxU4XLEA",
    component: <MediumIcon />,
  },
  {
    title: "facebook",
    link: "https://www.facebook.com/vcoding",
    component: <FacebookIcon />,
  },
  {
    title: "medium",
    link: "https://medium.com/vanilla-coding",
    component: <YoutubeIcon />,
  },
];

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center w-full border-t border-[#D9DBE0]">
        <section className="flex flex-col w-[1440px] justify-between flex-wrap mt-10 mr-5 mb-8 ml-5">
          <div>
            <LogoIcon />
            <div className="flex mt-7 gap-6 text-[13px] font-semibold opacity-[0.61]">
              <a
                href={privacyPolicy}
                target="_blank"
                className="block sm:inline-block"
                title="개인정보 처리방침 및 이용약관"
              >
                개인정보 처리방침 및 이용약관
              </a>
              <a href={refundPolicy} target="_blank" title="코스 환불 정책">
                코스 환불 정책
              </a>
            </div>
            <div className="flex flex-col mt-7 text-[#989BA2] text-[13px]">
              <div className="hidden md:block space-y-2">
                <div className="flex gap-2">
                  ㈜크라우드에듀케이션
                  <Divider />
                  대표이사 허근행
                  <Divider />
                  사업자 등록번호
                </div>
                <div className="flex gap-2">
                  서울특별시 강남구 테헤란로 522, 7층
                  <Divider />
                  연락처 02-6713-7279
                  <Divider />
                  문의 info@vanillacoding.co
                </div>
              </div>
              <div className="block md:hidden space-y-2">
                <div className="flex gap-2">
                  ㈜크라우드에듀케이션
                  <Divider />
                  대표이사 허근행
                </div>
                <div className="flex gap-2">사업자 등록번호 843-81-02398</div>
                <div className="flex gap-2">
                  서울특별시 강남구 테헤란로 522, 7층
                </div>
                <div className="flex gap-2">
                  연락처 02-6713-7279 <Divider />
                  문의 info@vanillacoding.co
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 opacity-5 mt-8"></div>
          <div className="flex justify-between items-center pt-5">
            <p className="text-[#989BA2] text-[13px]">
              © 2024 vanillacoding, Inc.
            </p>
            <div className="flex md:gap-4 gap-1">
              {icons.map((icon) => {
                const { title, link, component } = icon;

                return (
                  <a href={link} key={link} target="_blank" title={title}>
                    {component}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

function Divider() {
  return <div className="w-[1px] bg-[#878A9338]"></div>;
}
