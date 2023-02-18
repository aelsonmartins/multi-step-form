import React, { useState } from 'react';
import styles from './Input.module.css';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';

export function DinamicInput(props) {
  const [value, setValue] = useState('');

  return (
    <>
      <div className={styles.boxInput}>
        <span className="p-float-label">
          <InputText
            className={props.className}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor={props.labelfor}>{props.labeltext}</label>
        </span>
      </div>
    </>
  );
}

export function DinamicCalendar(props) {
  const [date, setDate] = useState(0);

  return (
    <>
      <div className={styles.boxInput}>
        <span className="p-float-label">
          <Calendar
            name={props.nameinput}
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
          />
          <label htmlFor={props.labelfor}>{props.labeltext}</label>
        </span>
      </div>
    </>
  );
}
