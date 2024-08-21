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

export const H1 = styled.h3`
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    line-height: 1.3;

`

export const H3 = styled.h3`
    font-size: 16px;
`
export const P = styled.p`
    font-size: 14px;
    font-weight: 400;
    width: 100%;
`
//Wrappers

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

// Buttons

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 12px 36px;
    font-size: 16px;
`
export const ContrastButton = styled(Button)`
    background-color: var(--main-pink);
    color: white;
    border-radius: 30px;
`


// Inputs

export const Input = styled.input`
    height: 50px;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    padding: 5px 12px;
    width: 75%;
    font-size: 14px;
`
 
// SignIn/LogIn area

export const LoginWrapper = styled(DivColumn)`
    justify-content: flex-start;
    align-items: center;
    padding-top: 100px;
    height: 100%;
    gap: 20px;
    
`
export const LoginButtonArea = styled(DivColumn)`
    margin-top: 50px;
    & > button {
        font-size: 14px;
        text-decoration: underline;
        padding: 5px;
    }
`

export const ErrorMessage = styled(DivColumn)`
    color: #c10a0a;
`


// Treatments wrappers

export const TreatmentCardsWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: flex-row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: #f5f5f5;
    border-radius: 10px;
    padding: 15px 20px;
    margin-top: 30px;
    @media (max-width: 900px) {
        width: 80%;
    }
`;

export const TreatmentItemWrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: flex-row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-itmes: center;
    gap: 5px;
`;

export const ButtonTreatmentItem = styled.div`
    width: 10%;
`;

// Main

export const UserGreetingWrap = styled(DivRow)`
    width: 90%;
    justify-content: space-between;
    padding: 20px;
    & > img {
        width: 28%;
    };
`

export const UserGreetingTextWrap = styled(DivColumn)`
    width: 65%;
    justify-content: flex-start;
    align-items: flex-start;
    
`