import PropTypes from "prop-types";
import TransactionsCase from "./TransactionsCase/TransactionsCase";
import { TransactionsTable, TableH } from "./Transactions.style";


const Transactions = (props) => {
    const { transactions } = props;
    return (
        <TransactionsTable>
        <thead>
            <tr>
            <TableH>Type</TableH>
            <TableH>Amount</TableH>
            <TableH>Currency</TableH>
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
        </TransactionsTable>
    );
};

Transactions.propTypes = {
    transactions: PropTypes.array.isRequired
};

export default Transactions;