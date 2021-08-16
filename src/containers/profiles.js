import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import Header from '../components/header/header.component';
import Profiles from '../components/profiles/profiles.component';

const SelectProfileContainer = ({user , setProfile}) => {
  return (
    <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
      </Header.Frame>
    </Header>

    <Profiles>
       <Profiles.Title>Who's watching?</Profiles.Title>
       <Profiles.List>
         <Profiles.User
           onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
           data-testid="user-profile"
         >
           <Profiles.Picture src={user.photoURL} />
           <Profiles.Name>{user.displayName}</Profiles.Name>
         </Profiles.User>
       </Profiles.List>
     </Profiles>
     </>
  )
}

export default SelectProfileContainer;
