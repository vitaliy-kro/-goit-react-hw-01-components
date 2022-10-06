import PropTypes from 'prop-types';
import { StatisticEl } from './StatisticEl';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stats-list">
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <StatisticEl stat={stat} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

StatisticEl.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
