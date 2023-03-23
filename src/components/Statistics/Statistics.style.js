import styled from 'styled-components';

export const StatisticsCard = styled.section`
    display: block;
    margin: 0 auto 30px auto;
    padding: 0 15px;
    width: 700px;
`;

export const StatisticsTitle = styled.h2`
    text-align: center;
    width: 700px;
    margin: 0;
    margin-right: 0;
    background-color: white;
    padding: 30px 0;
    font-size: 44px;
    color: grey;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
`;

// export const TitleVisible = styled(StatisticsTitle)`
//     display: block;
// `;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    width: 700px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);  
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    width: 100px;
    height: 100px;
`;

export const Label = styled.span`
    font-size: 24px;
    color: #fff;
    margin-bottom: 8px;
`;

export const Percentage = styled.span`
    font-size: 32px;
    color: #fff;
`;