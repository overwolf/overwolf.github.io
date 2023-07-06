import React from 'react';
import { TopLevelRecordDefinition } from "../types/DisplayJSONProperties";
import { RecordTypes } from '../enums/DisplayJSONRecordTypes';
import Space from './syntactic/Space';

function DisplayJSONTopLevelRecordDefinition(props: TopLevelRecordDefinition) {
  const { } = props;

  // ---------------------------------------------------------------------------

  return (
    <span className='top-record-definition'>{RecordTypes[props.type]}
      <Space/><span className='top-record-name'>{props.name}</span>
    </span>
  );

}

export default DisplayJSONTopLevelRecordDefinition;