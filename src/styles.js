import styled from "@emotion/styled";


//general

export const H3 = styled.h3`
    font-size: 16px;
`
export const P = styled.p`
    font-size: 14px;
    font-weight: 400;
    width: 100%;
`
// Treatments wrappers

export const TreatmentCardsWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: flex-row;
    flex-wrap: wrap;
    align-items: center;
    background: #f5f5f5;
    border-radius: 10px;
    padding: 15px 20px;
    margin-top: 30px;
    @media (max-width: 900px) {
    width: 80%;
    }
`;

export const TreatmentItemWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: flex-row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-itmes: center;
    gap: 5px;
`;

export const DeleteTreatmentItem = styled.div`
    width: 10%;
`;