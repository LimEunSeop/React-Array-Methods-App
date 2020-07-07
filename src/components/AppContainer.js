import React from 'react'

const AppContainer = (props) => {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  )
}

export default AppContainer
