//libraries
import React from "react";

//styles
import { H3, P, UserGreetingTextWrap, UserGreetingWrap } from "../../styles";
import AvatarFallback from '../../images/avatar-fallback.png';

const UserGreeting = () => {
    return (
        <UserGreetingWrap>
            <img src={AvatarFallback} alt='' />
            <UserGreetingTextWrap>
                <h3>Hi, Sonya!</h3>
                <P>Here is a list of your upcoming vaccinations and treatments</P>
            </UserGreetingTextWrap>
            
        </UserGreetingWrap>
    )
}

export default UserGreeting;