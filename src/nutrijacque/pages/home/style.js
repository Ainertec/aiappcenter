import styled, {keyframes} from 'styled-components';

const FadeNavBarKeyFrame = keyframes`
    from { transform: scaleX(0); opacity:0; }
    to { transform: scaleX(1); opacity:1;}
`;
const FadeCarrouselKeyFrame = keyframes`
    from { opacity:0; }
    to { opacity:1;}
`;
const FadeKeyFrame = keyframes`
    from { width: 20%; opacity:0;}
    to { width: 100%; opacity:1; }
`;
const FadeCardKeyFrame = keyframes`
    from { transform: scale(0,0); opacity:0; }
    to { transform: scale(1,1); opacity:1;}
`;
const FadeImgKeyFrame = keyframes`
    from { transform: scale(0,0); opacity:0;}
    to { transform: scale(1,1); opacity:1;}
`;
const FadeTextKeyFrame = keyframes`
    from { width: 0%; white-space: nowrap; }
    to { width: 100%; white-space: nowrap; }
`;
export const FadeNavBar = styled.div`
    animation-name:${FadeNavBarKeyFrame};
    animation-duration: 2s;
`;
export const FadeCarrousel = styled.div`
    animation-name:${FadeCarrouselKeyFrame};
    animation-duration: 2s;
`;
export const Fade = styled.div`
    animation-name:${FadeKeyFrame};
    animation-duration: 2s;
`;
export const FadeCard = styled.div`
    animation-name:${FadeCardKeyFrame};
    animation-duration: 2s;
`;
export const FadeImg = styled.div`
    animation-name:${FadeImgKeyFrame};
    animation-duration: 2s;
`;
export const FadeText = styled.div`
    overflow: hidden;
    animation: ${FadeTextKeyFrame} 5s
`;