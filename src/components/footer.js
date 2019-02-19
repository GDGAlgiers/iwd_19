import React from 'react'
import styled from 'styled-components'
import { dark } from '../styles/Colors'

const StyledFooter = styled.div`
    background: ${dark};
    padding: 32px 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const IwdLogo = styled.div`
    width: 220px;
    height: 95px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    small{
        color: white;
        font-size: 14px;
        margin-top: 8px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    margin: 0px 4px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const WtmLogo = styled.div`
    width: 130px;
    height: 130px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Footer = () => {
    return(
        <StyledFooter>
            <IwdLogo>
                <img src={require("../images/iwd_logo.png")} />
            </IwdLogo>
            <Content>
                <SocialMedia>
                    <IconContainer>
                        <img src={require("../images/facebook.png")} />
                    </IconContainer>
                    <IconContainer>
                        <img src={require("../images/twitter.png")} />
                    </IconContainer>
                    <IconContainer>
                        <img src={require("../images/instagram.png")} />
                    </IconContainer>
                    <IconContainer>
                        <img src={require("../images/youtube.png")} />
                    </IconContainer>
                </SocialMedia>
                <small> Copyrights &copy; 2019 All rights reserved </small>
            </Content>
            <WtmLogo>
                <img src={require("../images/wtm_logo.png")} />
            </WtmLogo>
        </StyledFooter>
    )
}

export default Footer