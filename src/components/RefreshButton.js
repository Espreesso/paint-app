import React from 'react'

export default React.memo(({ callback }) => {
  return <button className="button-refresh-colors" onClick={callback}>&#8634;</button>
})