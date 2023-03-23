import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import { StatisticsCard, StatisticsTitle, StatList } from "./Statistics.style";

const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <StatisticsCard>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
      
        <StatList className="stat-list">
            {stats.map(({ id, label, percentage }) => {
                return (
                    <StatisticsItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                );
            })}
        </StatList>
      </StatisticsCard>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}

export default Statistics;