import tw from 'tailwind-styled-components';
import { useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import CloseBtn from '../../components/button/CloseBtn';
import { projectDetailData } from '../../data/content/projecsDetailDatas/projectDetailData';
import useModal from '../../hooks/useModal';

const Container = tw.section`
  w-full
  max-w-[1200px]
  mx-auto
  bg-white
  p-10
  min-h-screen
  flex
  flex-col
`;

const CloseWrapper = tw.div`
  flex
  justify-end
  mb-6
`;

const Logo = tw.h1`
  text-4xl
  font-bold
  text-mint-600
  mb-12
`;

const InfoSection = tw.div`
  flex
  flex-col
  gap-6
`;

const Name = tw.h2`
  text-3xl
  font-bold
  text-gray-900
`;

const Price = tw.p`
  text-2xl
  font-semibold
  text-mint-600
`;

const Tags = tw.div`
  flex
  gap-2
`;

const Description = tw.p`
  text-base
  text-gray-700
  whitespace-pre-line
`;

const Buttons = tw.div`
  flex
  gap-4
  flex-wrap
`;

const ImageSection = tw.div`
  mt-20
  w-full
  flex
  justify-center
`;

const Image = tw.img`
  w-full
  max-w-[600px]
  rounded
  object-contain
  border border-gray-300
  shadow
`;

function ProjectDetail() {
  const { name } = useParams();
  const { closeModal } = useModal();

  const projectDetail = projectDetailData.find((project) => project.name === name);

  if (!projectDetail) return null;

  return (
    <Modal>
      <Container>
        <CloseWrapper>
          <CloseBtn closeModal={closeModal} />
        </CloseWrapper>

        <Logo>ohmé</Logo>

        <InfoSection>
          <Name>{projectDetail.name}</Name>
          <Price>{projectDetail.price}</Price>


          <Description>{projectDetail.subtext}</Description>

        </InfoSection>

        {/* 👇 스크롤 내리면 나오는 메인 이미지 */}
        <ImageSection>
          <Image src={projectDetail.imgurl} alt={projectDetail.name} />
        </ImageSection>
      </Container>
    </Modal>
  );
}

export default ProjectDetail;
