import tw from 'tailwind-styled-components';

const FooterContainer = tw.footer`
  relative
  z-1
  px-10
  py-10
  flex
  flex-col
  gap-2
  items-center
  justify-center
`;

const FooterTxt = tw.p`
  text-[#A6A6A6]
  text-sm
  text-center
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTxt>
        Copyright 2025. 액세사리 창업 수업 조별활동으로 제작한 사이트입니다.<br />
        5781668 조혜원 / 5781407 김주하 / 5618829 세나 <br />
      </FooterTxt>
    </FooterContainer>
  );
}

export default Footer