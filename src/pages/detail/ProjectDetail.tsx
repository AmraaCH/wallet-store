import { useParams } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { useEffect, useState } from 'react';
import { projectData } from '../../data/content/projectData';

const Container = tw.section`
  w-full
  min-h-screen
  bg-white
  flex
  flex-col
  items-center
  p-10
`;

const TitleWrap = tw.div`
  flex
  flex-col
  items-center
`;

const Title = tw.h1`
  text-3xl
  font-bold
  text-black
  mb-0
`;

const Subtitle = tw.p`
  text-sm
  text-gray-500
  mt-0
`;

const ContentWrap = tw.div`
  flex
  flex-row
  items-start
  gap-10
  px-20
  mt-10
  max-md:flex-col
  max-md:gap-6
  max-md:items-center
  max-md:px-6
`;

const ImgLarge = tw.img`
  w-[600px]
  h-[600px]
  object-contain
  rounded
  shadow-lg
`;

const InfoWrap = tw.div`
  flex
  flex-col
  justify-between
  h-[600px]
  max-w-[300px]
`;

const Name = tw.h2`
  text-xl
  font-semibold
  mb-2
`;

const Price = tw.p`
  text-base
  text-green-700
  font-medium
`;

const AdditionalWrap = tw.div`
  flex
  flex-col
  items-center
  gap-6
  mt-16
`;

const AdditionalImg = tw.img`
  w-[450px]
  h-auto
  object-cover
  rounded
  shadow
`;

const CartButton = tw.button`
  mt-6
  px-4
  py-2
  bg-black
  text-white
  rounded-md
  hover:bg-gray-800
  transition
  flex
  items-center
  gap-2
`;

export default function ProjectDetail() {
  const { name } = useParams<{ name: string }>();
  const [product, setProduct] = useState<{
    name: string;
    price: string;
    imgurl: string;
    category?: string;
    additionalPhoto?: string[];
  } | null>(null);

  const handleAddToCart = () => {
    alert('카트에 추가했습니다.');
  };

  useEffect(() => {
    const found = projectData.find((p) => p.name === name);
    if (found) {
      setProduct(found);
    }
  }, [name]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <TitleWrap>
        <Title>ohmé</Title>
        <Subtitle>{product.category}</Subtitle>
      </TitleWrap>

      <ContentWrap>
        <ImgLarge src={product.imgurl} alt={product.name} />

        <InfoWrap>
          <div>
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
          </div>
          <CartButton onClick={handleAddToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.586A1 1 0 007 17h10a1 1 0 00.894-1.447L17 13M7 13V6h13" />
            </svg>
            Add to Cart
          </CartButton>
        </InfoWrap>
      </ContentWrap>

      {product.additionalPhoto && (
        <AdditionalWrap>
          {product.additionalPhoto.map((url, idx) => (
            <AdditionalImg
              key={idx}
              src={url}
              alt={`${product.name} additional ${idx + 1}`}
            />
          ))}
        </AdditionalWrap>
      )}
    </Container>
  );
}
