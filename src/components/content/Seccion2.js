import React from "react";
import { Carousel, Image, Skeleton } from "antd";

const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#867666",
};
export default function Seccion2() {
  return (
    <div>
      <Carousel autoplay style={{ backgroundColor: "#867666", color: "white" }}>
        <div>
          <h3 style={contentStyle}>Caramelo</h3>
          <Image
            width={230}
            src="https://firebasestorage.googleapis.com/v0/b/recursos-app1react.appspot.com/o/seico-web%2FARCHIVOS%2FCCC.jpg?alt=media&token=b509f13a-3f0e-4c26-a6fc-c42a08ff8158"
          />
        </div>
        <div>
          <h3 style={contentStyle}>Chocolate</h3>
          <Image
            width={230}
            src="https://firebasestorage.googleapis.com/v0/b/recursos-app1react.appspot.com/o/seico-web%2FARCHIVOS%2FJHMH.jpg?alt=media&token=6e102089-0a07-418b-a49e-27cb8940d663"
          />
        </div>
        <div>
          <h3 style={contentStyle}>Mimi</h3>
          <Image
            width={230}
            src="https://firebasestorage.googleapis.com/v0/b/recursos-app1react.appspot.com/o/seico-web%2FARCHIVOS%2F.%2CKJ%2C.jpg?alt=media&token=6da93c4f-8e95-409b-816b-7b4e5c5de915"
          />
        </div>
        <div>
          <h3 style={contentStyle}>Estrellita</h3>
          <Image
            width={230}
            src="https://firebasestorage.googleapis.com/v0/b/recursos-app1react.appspot.com/o/seico-web%2FARCHIVOS%2Fuuu.jpeg?alt=media&token=a3637a28-dca3-4a33-baa6-48bcb19fc4a4"
          />
        </div>
        <div>
          <h3 style={contentStyle}></h3>
          <Image
            width={230}
            src="https://firebasestorage.googleapis.com/v0/b/recursos-app1react.appspot.com/o/seico-web%2FARCHIVOS%2FWhatsApp%20Image%202021-05-16%20at%2007.18.01.jpeg?alt=media&token=58baae51-6444-4a63-9ed8-b24d883b6217"
          />
        </div>
      </Carousel>
      <label>Descripción</label>

      <Skeleton />
    </div>
  );
}
