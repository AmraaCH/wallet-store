// src/pages/content/Contents.tsx

import tw from 'tailwind-styled-components';
import Project from '../content/project/Project';
import FooterMenu from '../content/project/FooterMenu';

const Container = tw.section`
  relative
  bg-white
  w-full
  flex
  flex-col
  items-center
  p-10
  gap-12
  z-1
`;

const Title = tw.h2`
  text-5xl
  text-center
  text-black
`;

const Menu = tw.ul`
  flex
  justify-center
  gap-20
  mb-2 
  text-black
  text-sm
  font-medium
  tracking-widest
  uppercase
`;

const RightWrap = tw.section`
  flex
  flex-col
  w-full
  pb-20
  gap-10
  pt-0   
  mt-0 
`;

const ContentWrapper = tw.div`
  w-full
  flex
  flex-col
  gap-1  // 메뉴와 프로젝트 카드 사이 간격 직접 조절
`;

function Contents() {
  return (
    <Container>
      <Title>Products</Title>
      <ContentWrapper>

      {/* ✅ 중앙 정렬된 메뉴 */}
      <Menu>
        <li>25F/W</li>
        <li>세나</li>
        <li>조혜원</li>
        <li>김주하</li>
      </Menu>

      <RightWrap>
        <Project />
        <FooterMenu />
      </RightWrap>
      </ContentWrapper>
    </Container>
  );
}

export default Contents;
