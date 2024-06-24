import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const CanIUseTable = ({ data, legend }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
        <tr>
          <th></th>
          {Object.keys(Object.values(data)[0]).map((item, key) => (<th key={key}>{item}</th>))}
        </tr>
        </thead>
        <tbody>
        {Object.keys(data).map((item, key) => (
          <tr key={key}>
            <td>{item}</td>
            {Object.values(data[item]).map((item, key) => (
              <td key={key} className={classNames({
                [styles.supported]: item === 2,
                [styles.partiallySupported]: item === 1,
                [styles.notSupported]: item === 0,
              })}></td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>

        {Object.keys(legend).map((item, key) => (<div className={classNames(styles.legend, {
          [styles.supported]: Number(item) === 2,
          [styles.partiallySupported]: Number(item) === 1,
          [styles.notSupported]: Number(item) === 0,
        })} key={key}>{legend[item]}</div>))}
    </div>
  );
};
export default CanIUseTable;
