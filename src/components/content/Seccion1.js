import React from "react";
import { Tabs, Divider } from "antd";
import Seccion1Usuarios from "./Seccion1Usuarios";
import Seccion4Results from "./Seccion4Results";
import Seccion2 from "./Seccion2";
import Seccion2Mascotas from "./Seccion2Mascotas";

const { TabPane } = Tabs;
export default function seccion1() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Ingreso de información" key="1">
          <Divider>Ingreso de información</Divider>

          <Seccion1Usuarios />
        </TabPane>
        <TabPane tab="Ingreso de mascotas" key="2">
          <Divider>Ingreso de mascotas</Divider>
          <div style={{ margin: 60, width: 800, height: 300 }}>
            <Seccion2Mascotas />
          </div>
        </TabPane>
        <TabPane tab=" Listado de mascotas" key="3">
          <Divider>Listado de mascotas</Divider>

          <Seccion2 />
        </TabPane>
        <TabPane tab="Resultados" key="4">
          <Divider>Resultados</Divider>
          <Seccion4Results />
        </TabPane>
      </Tabs>
    </div>
  );
}
