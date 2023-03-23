import styled from 'styled-components';

export const StatisticsCard = styled.section`
    display: block;
    margin: 0 auto 30px auto;
    padding: 0 15px;
    width: 768px;
`;

export const StatisticsTitle = styled.h2`
    display: block;
    text-align: center;
    width: 700px;
    margin: 0 auto;
    background-color: white;
    padding: 30px 0;
    font-size: 44px;
    color: grey;
`;

// export const TitleVisible = styled(StatisticsTitle)`
//     display: block;
// `;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
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