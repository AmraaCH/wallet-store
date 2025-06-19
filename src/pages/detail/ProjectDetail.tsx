import { useParams } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { useEffect, useState } from 'react';
import { projectData } from '../../data/content/projectData'; // 제품 데이터 경로 맞춰서

const Container = tw.section`
  w-full
  min-h-screen
  bg-white
  pt-24    // navbar 높이만큼 패딩 줘서 내용 안 겹치도록
  flex
  flex-col
  items-center
  p-10
`;

const Navbar = tw.nav`
  fixed
  top-0
  left-0
  w-full
  h-16
  flex
  items-center
  justify-center
  bg-white
  border-b
  border-gray-300
  font-bold
  text-xl
  z-20
`;

const ContentWrap = tw.div`
  flex
  flex-row
  items-center
  gap-10
  px-20        // 좌우 패딩 추가
  max-md:flex-col
  max-md:gap-6
  max-md:items-center
  max-md:px-6  // 모바일에서는 좁게
`;

const ImgLarge = tw.img`
  w-[500px]
  max-w-full
  max-h-full
  h-auto
  object-contain
  rounded
  shadow-lg
`;

const InfoWrap = tw.div`
  flex
  flex-col
  justify-center
  max-w-[300px]
`;

const Name = tw.h2`
  text-2xl
  font-semibold
  mb-2
`;

const Price = tw.p`
  text-lg
  text-green-700
  font-medium
`;

const Image = tw.img`
  w-full
  max-w-[600px]
  h-auto
  object-cover
  mb-10
`;

export default function ProjectDetail() {
  const { name } = useParams<{ name: string }>();
  const [product, setProduct] = useState<{ name: string; price: string; imgurl: string } | null>(null);

  useEffect(() => {
    const found = projectData.find((p) => p.name === name);
    if (found) {
      setProduct(found);
    }
  }, [name]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Navbar>ohmé</Navbar>

      <ContentWrap>
        <ImgLarge src={product.imgurl} alt={product.name} />
        <InfoWrap>
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </InfoWrap>
      </ContentWrap>
    </Container>
  );
}