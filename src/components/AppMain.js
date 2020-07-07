import React from 'react'
import filterCurrencyKR from '../utils/filterCurrencyKR'
import AppContext from '../contexts/AppContext'

const AppMain = ({ ...props }) => (
  <main className="main" {...props}>
    <h2 className="headline">
      <strong>자산가 <span className="a11yHidden">이름</span></strong>
      <strong>재산 <span className="a11yHidden">금액(원)</span></strong>
    </h2>
    <AppContext.Consumer>
      {
        ({ wealthList: list, wealthTotal: total }) => (
          <React.Fragment>
            {
              list.map(({ name, wealth }) => (
                <h2 className="headline" key={`${name}-${wealth}`}>
                  <span>{name}</span>
                  <span>{filterCurrencyKR(wealth)}</span>
                </h2>
              ))
            }
            {/* 자산 총액 */}
            {
              total &&
              (
                <h3 className="subHeadline">
                  <strong>자산 총액</strong>
                  <strong>{filterCurrencyKR(total)}</strong>
                </h3>
              )
            }
          </React.Fragment>
        )
      }
    </AppContext.Consumer>
  </main>
)

export default AppMain
