import styled from 'styled-components';
import backgroundImg from '@assets/flat-mountains.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-wrap: wrap;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
`