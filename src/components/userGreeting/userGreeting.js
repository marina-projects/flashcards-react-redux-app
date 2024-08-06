//libraries
import React from "react";

//styles
import { DivColumn, DivRow, H3, P, UserGreetingTextWrap, UserGreetingWrap } from "../../styles";
import AvatarFallback from '../../images/avatar-fallback.png';

const UserGreeting = () => {
    return (
        <UserGreetingWrap>
            <img src={AvatarFallback} alt='' />
            <UserGreetingTextWrap>
                <H3>Hi, Sonya!</H3>
                <P>Here is a list of your upcoming vaccinations and treatments</P>
            </UserGreetingTextWrap>
            
        </UserGreetingWrap>
    )
}

export default UserGreeting;