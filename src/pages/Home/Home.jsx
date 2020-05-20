import React from 'react';
import { connect } from 'react-redux';
import MenuAppBar from '../../components/MenuAppBar/MenuAppBar';

import { handleSignOut } from '../../action/Authentication';

const Home = ({
    user,
    handleSignOut
}) => {  
    return (
        <MenuAppBar user={user} handleSignOut={handleSignOut}/>
    )
};

const mapState = state => ({
    user: state.authentication.user
});
  
export default connect(
    mapState,
    {
    handleSignOut
    }
)(Home);