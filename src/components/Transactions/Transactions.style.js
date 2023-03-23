import styled from 'styled-components';

export const TransactionsTable = styled.table`
    font-size: 24px;
    border-collapse: collapse;
    border-spacing: 0;
    
    margin: 0 auto 30px auto;
    width: 700px;

    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
`;

export const TableH = styled.th`
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #046daa;
    color: white;
`;

export const TableRow = styled.tr`
    
    :nth-child(even) {
        background-color: #E7E9EB;
    }
    &:nth-child(odd) {
        background-color: #fff;
    }
`;

export const TableData = styled.td`
    text-align: center;
    padding: 8px;
    color: #2c2c2c
`;

