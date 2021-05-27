import logo from "./logo.svg";
import "./App.css";
import { Layout, Rate } from "antd";
import Seccion1 from "./components/content/Seccion1";
import Seccion2 from "./components/content/Seccion2";
import BaseFooter from "./components/footer/BaseFooter";
import Opciones from "./components/sider/Opciones";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Listado from "./components/sider/Listado";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <div
            style={{
              backgroundColor: "white",
              textAlign: "center",
              alignTracks: "center",
            }}
          >
            {/* <img
              className="logo"
              src="https://firebasestorage.googleapis.com/v0/b/recursos-app1react.appspot.com/o/seico-web%2FSEICO.png?alt=media&token=d56930a2-64b9-4730-96c7-68ea563929ac"
            /> */}
            <em
              style={{ fontFamily: "fantasy", fontSize: 20, color: "#867666" }}
            >
              {" "}
              RCA
            </em>
          </div>
        </Header>

        <Layout>
          <Sider style={{ backgroundColor: "#867666", color: "white" }}>
            Opciones
            {/* <Opciones/> */}
            <div>
              <Rate />
            </div>
            <Opciones />
            {/* <Listado /> */}
          </Sider>
          <Content style={{ backgroundColor: "#f2f2f2" }}>
            <Seccion1 />
            {/* <Seccion2 /> */}
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: "#D5C3AA" }}>
          <span>Design by Raquel DT.</span>
          <hr></hr>
          <BaseFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
