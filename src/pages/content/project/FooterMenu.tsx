import tw from 'tailwind-styled-components';

const FooterWrap = tw.footer`
  w-full
  mt-20
`;

const FooterLine = tw.div`
  w-full
  h-px
  bg-gray-300
  mb-10
`;

const FooterContainer = tw.div`
  w-full
  flex
  gap-20
  text-sm
  text-black
  max-md:flex-col
`;

const FooterCol = tw.ul`
  flex
  flex-col
  gap-2
  font-semibold
`;

function FooterMenu() {
  return (
    <FooterWrap>
      <FooterLine />
      <FooterContainer>
        <FooterCol>
          <li>Contact Us</li>
          <li>Track Order</li>
          <li>Sign In</li>
          <li>Store Locator</li>
        </FooterCol>

        <FooterCol>
          <li>Gift Cards</li>
          <li>Customer Care</li>
          <li>Company</li>
          <li>Our Commitments</li>
        </FooterCol>
      </FooterContainer>
    </FooterWrap>
  );
}

export default FooterMenu;
