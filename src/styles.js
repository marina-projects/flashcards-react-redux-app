import styled from "@emotion/styled";


//general

export const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const H3 = styled.h3`
    font-size: 16px;
`
export const P = styled.p`
    font-size: 14px;
    font-weight: 400;
    width: 100%;
`
//Same elements

export const HeaderWrapper = styled(DivRow)`
    background-color: var(--main-green);
    color: white;
    height: 50px;
    position: fixed;
    top: 0;
    justify-content: space-between;
    padding: 0 30px;
    & > h2 {
        font-size: 18px;
        font-weight: 500;
    }
    @media (min-width: 900px) {
       display: none;
    }
`

export const FooterWrapper = styled(DivRow)`
    background-color: var(--main-green);
    color: white;
    text-transform: uppercase;
    height: 50px;
    position: fixed;
    top: 0;
    gap: 50px;
    & > a {
        color: white;
    }
    @media (max-width: 900px) {
        display: none;
    }
`

export const FooterWrapperMobile = styled(FooterWrapper)`
    display: none;
    @media (max-width: 900px) {
        display: flex;
        bottom: 0;
        top: auto;
        gap: 10px;
        justify-content: space-between;
        padding: 0 30px;
        text-transform: none;
        & > a > img {
            height: 24px;
            width: auto;
        }
    }
    
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