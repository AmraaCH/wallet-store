import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';

type Props = {
  name: string;
  price: string;
  imgurl: string;
};

const Card = tw.div`
  w-[22%]
  h-[370px]
  bg-ivory-100
  rounded
  shadow-md
  overflow-hidden
  transition
  hover:shadow-lg
  hover:scale-[1.02]
  flex
  flex-col
  justify-between
  cursor-pointer
`;

function ProjectCard({ name, price, imgurl }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${name}`);
  };

  return (
    <Card onClick={handleClick}>
      <img src={imgurl} alt={name} className="w-full h-56 object-contain" />
      <div className="p-3">
        <h3 className="text-left text-sm ">{name}</h3>
        <p className="text-left text-sm ">{price}</p>
      </div>
    </Card>
  );
}

export default ProjectCard;
