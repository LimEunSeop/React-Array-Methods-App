import React from 'react';
import { fillRandomUsers, createRandomUser } from './utils/createRandomUser'
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import AppMain from './components/AppMain';
import AppAside from './components/AppAside';
import AppContext from './contexts/AppContext';

export const WEALTH_LIST_COUNT = 3

class App extends React.Component {
  handleAddRandomUser = () => {
    this.setState({
      wealthList: [...this.state.wealthList, createRandomUser()],
      wealthTotal: null
    })
  }

  handleDoubleWealth = () => {
    this.setState(({ wealthList }) => ({
      wealthList: wealthList.map((person) => ({
        ...person,
        wealth: person.wealth * 2,
      })),
      wealthTotal: null
    }))
  }

  handleFiltering500millionWon = () => {
    this.setState(({ wealthList }) => ({
      wealthList: wealthList.filter(({ wealth }) => wealth >= 500000000),
      wealthTotal: null
    }))
  }

  handleSortingToggle = () => {
    this.setState(({ wealthList, sortKey }) => {
      let newSortKey = sortKey * -1
      return {
        wealthList: wealthList.sort(
          ({ wealth: p1w }, { wealth: p2w }) =>
            p1w < p2w ? newSortKey : p1w > p2w ? newSortKey * -1 : 0
        ),
        sortKey: newSortKey,
        wealthTotal: null,
      }
    })
  }

  handleCalculateTotalWealth = () => {
    const { wealthTotal, wealthList } = this.state

    if (wealthTotal) { return; }
    this.setState({
      wealthTotal: wealthList.reduce((total, person) => total + person.wealth, 0)
    })
  }

  state = {
    wealthList: fillRandomUsers(WEALTH_LIST_COUNT),
    // 정렬 키: 'ASC'(1), 'DESC'(-1)
    sortKey: 1,
    wealthTotal: null,
    buttonList: [
      {
        content: '자산가 추가',
        classes: 'add-user',
        // 컴포넌트의 이벤트 핸들러 메서드 연결은 다음과 같이 작성하면 됩니다.
        // this 참조는 핸들러 내에서 클릭했을 때 확인할 수 있습니다.
        onClick: this.handleAddRandomUser,
      }, {
        content: '자산 x2 증가',
        classes: 'doucle-wealth',
        onClick: this.handleDoubleWealth,
      }, {
        content: '5억원 걸러내기',
        classes: 'filter-500million-won',
        onClick: this.handleFiltering500millionWon,
      }, {
        content: '자산 순별 정렬',
        classes: 'sort-toggle-asc-desc',
        onClick: this.handleSortingToggle,
      }, {
        content: '자산 총액 계산',
        classes: 'calculate-wealth',
        onClick: this.handleCalculateTotalWealth,
      },
    ]
  }
  
  render() {
    return (
      <div className="rootSection">
        <AppContext.Provider value={{...this.state}}>
          <AppHeader />
          <AppContainer>
            <AppMain />
            <AppAside label="자산 데이터 컨트롤러" />
          </AppContainer>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
