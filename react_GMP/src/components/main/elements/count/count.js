import PropTypes from "prop-types";
import "./count.css"

export default function Count(props) {
    return (
        <p className="count">{props.count} movies found</p>
    )
}

Count.propTypes = {
    count: PropTypes.number
};

Count.defaultProps = {
    count: 0
};
