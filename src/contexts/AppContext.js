import React from 'react'

const defaultValue = {
  wealthList: [],
  // 정렬 키: 'ASC'(1), 'DESC'(-1)
  sortKey: 1,
  wealthTotal: null,
  buttonList: []
}

export default React.createContext(defaultValue)