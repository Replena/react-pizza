Success;
import styled from "styled-components";

const SuccessWrapper = styled.div`
  background: #ce2829;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`;
const SuccessText = styled.p`
  text-align: center;
  font-size: 3rem;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
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
