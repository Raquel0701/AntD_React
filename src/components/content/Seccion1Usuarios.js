import React from "react";
import { useState } from "react";
import { Modal } from "antd";
import {
  Input,
  TextAream,
  Calendar,
  Row,
  Col,
  Radio,
  Rate,
  Pagination,
  InputNumber,
  Button,
} from "antd";

export default function Seccion1Usuarios() {
  const { TextArea } = Input;
  const style = { background: "#f2f2f2", padding: "8px 0" };
  const form = { color: "black", padding: "8px 0" };
  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }

  function onChange(value) {
    console.log("changed", value);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={14}>
          <div style={style}>
            <div style={{ padding: 5, textAlign: "center" }}>
              <label>USUARIO</label>
              <div style={form}>
                {" "}
                <Input placeholder="Ingrese su nombre" />
              </div>
              <div style={form}>
                {" "}
                <Input placeholder="Ingrese su apellido" />
              </div>

              <div style={form}>
                <Radio>Femenino</Radio>
                <Radio>Masculino</Radio>
              </div>
              <div style={form}>
                {" "}
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder="Ingrese su experiencia"
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <label>Edad</label>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChange={onChange}
                />
                <label>Miembros hogar</label>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChange={onChange}
                />
                <label>Num. Mascotas</label>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  onChange={onChange}
                />
              </div>
              <div style={form}>
                {" "}
                <Button type="primary" onClick={showModal}>
                  Registrar información
                </Button>
                <Modal
                  title="Confirmación de registro"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>¿Desea registrar al usuario?</p>
                </Modal>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={10}>
          <div style={style}>
            {" "}
            <div style={{ padding: 5, textAlign: "center" }}>
              <label>FECHA DE NACIMIENTO</label>
              <Calendar onPanelChange={onPanelChange} />
            </div>
          </div>
        </Col>
        
      </Row>
      <div>
        <Pagination defaultCurrent={1} total={2} />
      </div>
    </div>
  );
}
