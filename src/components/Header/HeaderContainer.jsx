import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";



class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>


    }
}
const mapStateToProps = (state) => ({



});
export default HeaderContainer;