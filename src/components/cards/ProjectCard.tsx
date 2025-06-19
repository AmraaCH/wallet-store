import tw from 'tailwind-styled-components';
import useModal from '../../hooks/useModal';

type Props = {
  name: string;
  price: string;
  imgurl: string;
};

const Card = tw.div`
  w-[22%]
  h-[370px]
  bg-[#dbd7d1]             // ✅ 기본 아이보리색
  rounded
  shadow-md
  overflow-hidden
  transition
  hover:shadow-lg
  hover:scale-[1.02]
  flex
  flex-col
  justify-between          // ✅ 내용 아래로 밀기

  max-lg:w-[45%]
  max-md:w-full
`;

const ImgWrapper = tw.div`
  w-full
  h-[220px]
  overflow-hidden
`;

const Img = tw.img`
  w-full
  h-full
  object-contain
`;

const Info = tw.div`
  p-4
  text-left               // ✅ 왼쪽 정렬
`;

const Name = tw.h3`
  text-sm
  font-medium
  text-gray-700
`;

const Price = tw.p`
  mt-1
  text-xs
  text-mint-600
  font-normal
`;

function ProjectCard({ name, price, imgurl }: Props) {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(name);
  };

  return (
    <Card onClick={handleClick}>
      <ImgWrapper>
        <Img src={imgurl} alt={name} />
      </ImgWrapper>
      <Info>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Info>
    </Card>
  );
}

export default ProjectCard;
