import React, { useRef, useState } from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);
  const mapRef = useRef();
  const [points, setPoints] = useState([{ lat: 37.4903557, lng: 126.666999 }]);

  const KakaoMap = () => {
    return (
      <Map
        center={{ lat: 37.4903557, lng: 126.666999 }}
        className="map m-0"
        level={4}
        ref={mapRef}
      >
        <MapMarker position={{ lat: 37.4903557, lng: 126.666999 }}>
          {isOpen && (
            <div style={{ minWidth: "160px" }}>
              <img
                alt="close"
                width="14"
                height="13"
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen(false)}
              />
              <div style={{ padding: "5px", color: "#000", fontSize: "10px" }}>
                <a
                  href="https://map.naver.com/v5/search/%ED%82%A4%EC%9B%94%EB%93%9C?c=15,0,0,0,dh"
                  target="_blank"
                  rel="noreferrer"
                >
                  인천 서구 가정로77번길 50-14
                </a>
              </div>
            </div>
          )}
        </MapMarker>
        {points.map((point) => (
          <MapMarker key={`${point.lat}-${point.lng}`} position={point} />
        ))}
        <ZoomControl></ZoomControl>
      </Map>
    );
  };

  return (
    <>
      <PageImage img={"company-img"} title="About Us" />
      <PageTitle title={"오시는 길"} />
      <KakaoMap />
      <div className="contact-address f-20 fw-600 m-0">
        주소 : 인천 서구 가정로77번길 50-14
      </div>
    </>
  );
};

export default Contact;
