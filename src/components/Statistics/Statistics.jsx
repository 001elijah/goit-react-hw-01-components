import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <section className="statistics">
        <h2 className={`title ${title ? "visible" : ""}`}>Upload stats</h2>
      
        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => {
                return (
                    <StatisticsItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                );
            })};
        </ul>
      </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.bool,
    stats: PropTypes.array.isRequired
}

export default Statistics;