import React from 'react'
import AppContext from '../contexts/AppContext';

class AppAside extends React.Component {
  
  static contextType = AppContext

  render() {
    const { label, ...props } = this.props
    const { buttonList } = this.context

    return (
      <aside className="sidebar" {...props}>
        <h2 className="a11yHidden">{label}</h2>
        {
          buttonList.map(({ content, classes, onClick }) => (
            <button 
              key={`${content}-${classes}`}
              type="button"
              className={`button ${classes}`.trim()}
              onClick={onClick}
            >
              {content}
            </button>
          ))
        }
      </aside>
    );
  }
}

export default AppAside
