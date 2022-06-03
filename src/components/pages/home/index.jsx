import "./index.scss"
import HomeHeader from "../../core-sections/home-header"
import HeaderButton from "../../fragments/header-button"
import List from "./List"

const Home = () => (
  <>
    <HomeHeader />
    <section>
      <List />
      <div className="buttons-container">
        <div className="chat-btn c-gray"><HeaderButton iconName="camera" /></div>
        <div className="chat-btn c-primary"><HeaderButton to="new-message" iconName="biography" /></div>
      </div>
    </section>
  </>
)

export default Home