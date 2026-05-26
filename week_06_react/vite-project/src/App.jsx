import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Product name="언젠가 입을 수 있는 스웨터" price="12,000원"/>
        <Product name="모두가 좋아하는 바지" price="2,000원"/>
        <Product name="365일 잇 아이템 모자" price="5,000원"/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
