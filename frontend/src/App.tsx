import CommonTxt from './component/CommonTxt';
import './assets/scss/styles.scss';
import CommonTitle from './component/CommonTitle';
import CommonTxt from './component/CommonTxt';
import Ant from './component/Ant';
import ModalBtn from './component/ModalBtn';
import Gauge from './component/ Motivationgauge';

function App() {
  return (
    <div className="globalContainer">
      <div className="container">
        <div className="content">
          <CommonTitle>働きたくないアリ</CommonTitle>
          <Ant quote="働きたくない"/>
          <CommonTxt>テキストコンポーネント</CommonTxt>
        </div>
        <ModalBtn genre="help" />
        <ModalBtn genre="charaDescription" />
        <Gauge />
        <ModalBtn genre="task" />
        <ModalBtn genre="addTask" />
      </div>
    </div>
  );
}

export default App;
