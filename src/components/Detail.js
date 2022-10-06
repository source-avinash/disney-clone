import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
    <Container>
        <Background>
            <img src="https://cdn.clickwallpapers.net/images/clickwallpapers-Bao-filmes-fullhd-img2.jpg" />
        </Background>
        <ImageTitle>
            <img src=""/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 • 7m • Family, Fantasy, Animation
        </SubTitle>
        <Description>
            A Chinese mother who's sad when her grown up son leaves home gets another chance at motherhood when one of ger dumplings springs to life. But she finds nothing stays small and cute forever.
        </Description>
    </Container>
    );
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    margin-right: 22px;
    color: black;
    letter-spacing: 1.8px;
    padding: 0px 24px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.div`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
        padding-bottom: 5px;
        
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: black;
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    min-height: 20px;
    margin-top: 26px;
    font-size: 15px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`