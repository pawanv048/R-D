import './App.css';
import React from 'react';
import ClassCounter from './componets/ClassCounter';
import HooksCounter from './componets/HooksCounter';
import HooksCounterTwo from './componets/HooksCounterTwo';
import HooksCounterThree from './componets/HooksCounterThree';
import HooksCounterFour from './componets/HooksCounterFour';
import ClassCounterTwo from './componets/ClassCounterTwo';
import HooksCounterFive from './componets/HooksCounterFive';
import HooksMouse from './componets/HooksMouse';
import MouseContaine from './componets/MouseContaine';
import IntervalHookCounter from './componets/IntervalHookCounter';
import DataFetching from './componets/DataFetching';
import IndividualDataFetching from './componets/IndividualDataFetching';
import ComponentC from './componets/useContext/ComponentC';
import Counter from './componets/useMemo/Counter';
import ParentComponent from './componets/useCallbackHook/ParentComponent';
import FocusInput from './componets/useRef/FocusInput';
import ClassTimer from './componets/useRef/ClassTimer';
import CounterOne from './componets/useReducerHook/CounterOne';
import CounterTwo from './componets/useReducerHook/CounterTwo';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HooksCounterTwo/> */}
      {/* <HooksCounterThree/> */}
      {/* <HooksCounterFour/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HooksCounterFive/> */}
      {/* <HooksMouse/> */}
      {/* <MouseContaine/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <IndividualDataFetching/> */}

      
      {/* <UserContext.Provider value={'pawan'}>
        <ChannelContext.Provider value={'seefate'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Counter/> */}

      {/* <ParentComponent/> */}

      {/* useref */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/> */}

      {/* usereduer */}

      {/* <CounterOne/> */}
      <CounterTwo/>

    </div>
  );
}

export default App;
