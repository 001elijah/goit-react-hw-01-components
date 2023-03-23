import PropTypes from "prop-types";
import { TableRow, TableData } from "../Transactions.style";

const TransactionsCase = (props) => {
    const { type, amount, currency } = props;
    return (
        <TableRow>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRow>
    );
};

TransactionsCase.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};

export default TransactionsCase;