import PropTypes from "prop-types";
import { Item, Label, Percentage } from "../Statistics.style";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const StatisticsItem = ({ label, percentage }) => {
    return (
        <Item style={{backgroundColor: `${getRandomHexColor()}`}}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </Item>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default StatisticsItem;