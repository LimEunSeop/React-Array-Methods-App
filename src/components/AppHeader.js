import React from 'react'

const AppHeader = (props) => (
  <header className="header" {...props}>
    <h1>배열(Array) 메서드 학습</h1>
    <p>
      <code>Array.prototype</code> 객체의{' '}
      <code>forEach</code>,{' '}
      <code>map</code>,{' '}
      <code>filter</code>,{' '}
      <code>sort</code>,{' '}
      <code>reduce</code>{' '}
      메서드를 활용한 미니 프로젝트.
    </p>
  </header>
)

export default AppHeader
