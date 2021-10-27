import styled from 'styled-components';

const media = 
{
    desktop: '@media{min-width: 1000px}'
}

export const NavigationBarStyling = styled.div `
    .navbar body 
    {
        margin:0;
    }

    .navbar ul 
    {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: black;
        position: fixed;
        top: 0;
        width: 100%;
    }

    .navbar li a 
    {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .navbar li a:hover:not(.active) 
    {
        background-color: #111;
    }

    .active 
    {
        background-color: #04AA6D;
    }

    .uon-image
    {
        height: 100px;
    }

    .first-wrapper
    {
        display: flex;
        flex: 0 0 65%;
    }

    .burger
    {
        display: block;
        width: 20px;
        flex: 1;
    }
    .burger-wrapper
    {
        display: block;
        flex: 1;
    }

    #first-element
    {
        overflow: hidden;
        width: 90%;
        float: left;
    }

    .opener
    {
        display: none;
    }

    /* mobile responsiveness attempt, the screen is wider than 600px */
    @media screen and (min-width: 600px) 
    {
        #first-element
        {
            width: 100%;
        }

        .navbar li
        {
            float: left;
        }

        .burger
        {
            display: none;
        }
        .burger-wrapper
        {
            display: none;
        }

        .opener
        {
            display: block;
        }
    }
`;