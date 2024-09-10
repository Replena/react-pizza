Success;
import styled from "styled-components";

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ce2829;
  overflow: hidden;
`;

const SuccessText = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 3rem;
`;

function Success() {
  return (
    <SuccessWrapper>
      <SuccessText>
        TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
      </SuccessText>
    </SuccessWrapper>
  );
}

export default Success;
