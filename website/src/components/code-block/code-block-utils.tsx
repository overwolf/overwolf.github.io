import React from "react";

const bracketEndCheck = (index: any, length: any) => {
  if(length == undefined) { // give `)` to single item
    return (<span className='bracket'>{`)`}</span>)
  } 
  else if (index != length -1) { //hide ',' from last item
    return <span className='bracket'>{`,`}</span>;
  } 
  else if (index == length -1) { //give `)` to last item
    return (<span className='bracket'>{`)`}</span>)
  }
}

export default bracketEndCheck;

