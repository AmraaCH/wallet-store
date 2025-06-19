// cards/ProjectCard.tsx
import tw from 'tailwind-styled-components';

type Props = {
  name: string;
  price: string;
  imgurl: string;
};

const Card = tw.div`
  w-[22%]
  bg-white
  rounded-xl
  shadow-md
  overflow-hidden
  transition
  hover:shadow-lg
  hover:scale-[1.02]

  max-lg:w-[45%]
  max-md:w-full
`;

const Img = tw.img`
  w-full
  h-56
  object-cover
`;

const Info = tw.div`
  p-4
  text-center
`;

const Name = tw.h3`
  text-lg
  font-semibold
  text-gray-800
`;

const Price = tw.p`
  mt-2
  text-base
  text-mint-600
  font-medium
`;

function ProjectCard({ name, price, imgurl }: Props) {
  return (
    <Card>
      <Img src={imgurl} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Price>{price}₮</Price>
      </Info>
    </Card>
  );
}

export default ProjectCard;
