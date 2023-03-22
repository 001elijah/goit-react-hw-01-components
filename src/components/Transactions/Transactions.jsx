import PropTypes from "prop-types";
import TransactionsCase from "./TransactionsCase/TransactionsCase";

const Transactions = (props) => {
    const { transactions } = props;
    return (
        <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => {
                return (
                   <TransactionsCase
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                   /> 
                );
            })}
        </tbody>
        </table>
    );
};

Transactions.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default Transactions;