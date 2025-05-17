import {
  MainContainer,
  PageContainer,
  GlobalStyle,
} from "./components/common/Common/CommonComponents";
import { Footer } from "./components/common/Footer/Footer";
import { TimeTracker } from "./components/TimeTracker/TimeTracker";

const App = () => {
  return (
    <PageContainer>
      <GlobalStyle />
      <MainContainer>
        <TimeTracker />
      </MainContainer>
      <Footer />
    </PageContainer>
  );
};

export default App;
