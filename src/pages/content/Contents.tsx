// src/pages/content/Contents.tsx

import { useState } from 'react';
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
  gap-14
  z-1
`;

const Title = tw.h2`
  text-7xl
  text-center
  text-black
`;

const MenuList = tw.ul`
  flex
  gap-6
  text-black
  text-sm
  font-medium
  tracking-widest
  uppercase
  justify-center
`;

const MenuItem = tw.li<{ $active?: boolean }>`
  cursor-pointer
  hover:underline
  ${(p) => (p.$active ? 'font-bold underline' : '')}
`;

const ContentWrapper = tw.div`
  w-full
  flex
  flex-col
  gap-20
  pb-20
`;

function Contents() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <Container>
      <Title>Products</Title>

      <MenuList>
        <MenuItem $active={selectedCategory === 'All'} onClick={() => setSelectedCategory('All')}>All</MenuItem>
        <MenuItem $active={selectedCategory === '25F/W'} onClick={() => setSelectedCategory('25F/W')}>25F/W</MenuItem>
        <MenuItem $active={selectedCategory === '세나'} onClick={() => setSelectedCategory('세나')}>세나</MenuItem>
        <MenuItem $active={selectedCategory === '조혜원'} onClick={() => setSelectedCategory('조혜원')}>조혜원</MenuItem>
        <MenuItem $active={selectedCategory === '김주하'} onClick={() => setSelectedCategory('김주하')}>김주하</MenuItem>
      </MenuList>

      <ContentWrapper>
        <Project selectedCategory={selectedCategory} />
        <FooterMenu />
      </ContentWrapper>
    </Container>
  );
}

export default Contents;
