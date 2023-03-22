import PropTypes from "prop-types";

const TransactionsCase = (props) => {
    const { type, amount, currency } = props;
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

TransactionsCase.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};

export default TransactionsCase;