// cards/ProjectImgCard.tsx
import tw from 'tailwind-styled-components';

type Props = {
  name: string;
  price: string;
  imgurl: string;
};

const ImgCard = tw.div`
  w-[22%]
  flex
  flex-col
  items-center
  bg-white
  rounded-lg
  overflow-hidden
  shadow-sm
  hover:shadow-lg
  transition

  max-lg:w-[45%]
  max-md:w-full
`;

const Img = tw.img`
  w-full
  h-56
  object-cover
`;

const Label = tw.div`
  w-full
  p-3
  text-center
`;

const Name = tw.h4`
  font-bold
  text-gray-700
`;

const Price = tw.p`
  mt-1
  text-sm
  text-mint-600
`;

function ProjectImgCard({ name, price, imgurl }: Props) {
  return (
    <ImgCard>
      <Img src={imgurl} alt={name} />
      <Label>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Label>
    </ImgCard>
  );
}

export default ProjectImgCard;
