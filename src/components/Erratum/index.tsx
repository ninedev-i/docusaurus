import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import styles from './styles.module.css';
import data from '@site/docs/_partials/erratum.json'

const Erratum = () => {
  const revisions = ['7.2.1', '7.3', '7.3.1', '7.3.2', '7.3.3', '7.3.4', '7.4.1', '7.4.2', '7.4.3'];

  return (
    <div>
      <table className={styles.table}>
        <thead>
        <tr>
          <th></th>
          {revisions.map((revision) => (
            <th key={revision}>{revision}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <td>
              <a href={`#${item.id}`}>{item.id}</a>
            </td>
            {revisions.map((revision) => (
              <td key={key+revision} className={classNames({
                [styles.partiallySupported]: item.affectedRevisions.canBeFixed?.includes(revision),
                [styles.notSupported]: item.affectedRevisions.problem?.includes(revision),
                [styles.supported]: !item.affectedRevisions.problem?.includes(revision) && !item.affectedRevisions.canBeFixed?.includes(revision),
              })} />
            ))}
          </tr>
        ))}
        </tbody>
      </table>

      {data.map((item) => (
        <div key={item.id}>
          <h2 id={item.id}>{item.id}: {item.title}</h2>
          <b>Подверженные устройства</b>
          <ReactMarkdown>{item.affectedDevices}</ReactMarkdown>
          <b>Описание</b>
          <ReactMarkdown>{item.description}</ReactMarkdown>
          {!!item.detailedDescription && (
            <>
              <b>Причины и подробное описание</b>
              <ReactMarkdown>{item.detailedDescription}</ReactMarkdown>
            </>
          )}
          <b>Пути обхода</b>
          <ReactMarkdown>{item.mitigations}</ReactMarkdown>
          <b>Исправление</b>
          <div>{item.fixed}</div>
        </div>
      ))}
    </div>
  );
};

export default Erratum;
