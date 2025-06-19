import tw from 'tailwind-styled-components';
import Nav from '../../components/nav/Nav';
import ProductList from '../content/project/Project'; // ❗️Project가 제품 목록 컴포넌트라면 이름만 바꾸면 됩니다.
import useScrollToTarget from '../../hooks/useScrollToTarget';

export const Container = tw.section`
  relative
  bg-mainBlack
  w-full
  flex
  p-10
  gap-14
  z-1
  
  max-md:flex-col
  max-md:gap-0
  max-ls:gap-5
  max-xl:gap-10
`;

export const RightWrap = tw.section`
  flex
  flex-col
  flex-2
  gap-20
  pb-20
`;

function Contents() {
  const navTabs = [
    useScrollToTarget(''),          // 필요 없는 탭
    useScrollToTarget('Products'), // 제품 섹션
    useScrollToTarget(''),          // 필요 없는 탭
  ];

  return (
    <Container>
      <Nav navTabs={navTabs} />
      <RightWrap>
        <ProductList id="Products" navTabs={navTabs} />
      </RightWrap>
    </Container>
  );
}

export default Contents;
