import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  width: 100%; /* Set width to 100% to span the full display */
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 12px; /* Adjust font size for smaller screens */
    width: 100%; 
  }
`;

const ScrollingText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  animation: ${scrollAnimation} 20s linear infinite; 
`;

const Announcement = () => {
  return (
    <Container>
      <ScrollingText>
        <span>Super Deal! Free Shipping on Orders Over $50</span>
        <span>Limited Time Offer! Buy Now!</span>
      </ScrollingText>
    </Container>
  );
};

export default Announcement;