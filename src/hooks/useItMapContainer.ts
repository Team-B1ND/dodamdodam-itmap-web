// import { ItMapData } from "../types/itmap/itmap.type";
// import useData from "./useData";
import { useState } from "react";
import itMapRepository from "../repository/itmap.repository";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export class MapSingleton {
  // 클래스의 사용이유? : reRender 방지
  static instance: MapSingleton;

  public map: any;

  public async initMap() {
    const mapContainer = document.getElementById("map");
    let lat = 36.5;
    let lng = 127.5;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 12,
    };
    const DATA = [
      {
        id: "1",
        name: "정우재",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)북한 인민군",
        companyLocation: "경기도",
        position: { lat: 36.5, lng: 127 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "2",
        name: "박병관",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)태평양 하와이안",
        companyLocation: "대구",
        position: { lat: 36.7, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "3",
        name: "임동현",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "원티드랩",
        companyLocation: "전라남도 광주",
        position: { lat: 36.6, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "4",
        name: "김상은",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "FLO",
        companyLocation: "서울",
        position: { lat: 36.5, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "5",
        name: "기준",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)페르소나",
        companyLocation: "울산",
        position: { lat: 36.6, lng: 127 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "6",
        name: "금현호",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "i'm big",
        companyName: "Google",
        companyLocation: "창원",
        position: { lat: 35.7, lng: 126.4 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "7",
        name: "정우재",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)북한 인민군",
        companyLocation: "경기도 광주",
        position: { lat: 35.8, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "8",
        name: "박병관",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)태평양 하와이안",
        companyLocation: "제주도",
        position: { lat: 35.7, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "9",
        name: "임동현",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "원티드랩",
        companyLocation: "포항",
        position: { lat: 35.6, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "10",
        name: "김상은",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "FLO",
        companyLocation: "인천",
        position: { lat: 35.5, lng: 127.5 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "11",
        name: "기준",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "나는 크다",
        companyName: "(주)페르소나",
        companyLocation: "파주",
        position: { lat: 35.6, lng: 127 },
        devPosition: "FE",
        isOpen: false,
      },
      {
        id: "12",
        name: "금현호",
        generation: "4",
        profileImg:
          "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
        tagImg:
          "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
        explanation: "i'm big",
        companyName: "Google",
        companyLocation: "부산",
        position: { lat: 35.7, lng: 126.4 },
        devPosition: "FE",
        isOpen: false,
      },
    ];

    this.map = new kakao.maps.Map(mapContainer, options);
    let zoomControl = new kakao.maps.ZoomControl();
    let mapTypeControl = new kakao.maps.MapTypeControl();
    this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.RIGHT);
    this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let geocoder = new kakao.maps.services.Geocoder();

    const getItMapUserData = async () => {
      try {
        const { data } = await itMapRepository.itMap();
        return data;
      } catch (error) {
        window.alert(
          "데이터를 불러오는데 실패하였습니다. 다시 시도하여 주십시요."
        );
      }
    };

    const fetchAddress = (testArrayData: number) => {
      geocoder.addressSearch(
        getItMapUserData,
        (result: number[] | any, status: number) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(result);

            let marker = new kakao.maps.Marker({
              map: this.map,
              position: coords,
            });

            let infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">Hello</div>',
            });
            infowindow.open(this.map, marker);

            // this.map.setCenter(coords);
          }
        }
      );
    };

    for (const testArrayData in DATA) {
      // let markerTemp = [] as any;
      // console.log(testArrayData);

      fetchAddress(Number(testArrayData));
    }

    // testArrayData.map((item) => {
    //   const markerPosition = new kakao.maps.LatLng(
    //     item.position.lat,
    //     item.position.lng
    //   );

    //   const markerData = new kakao.maps.Marker({
    //     position: markerPosition,
    //     title: item.companyName,
    //   });

    //   markerData.setMap(this.map);
    //   markerTemp.push(markerData);
    // });

    // console.log(markerTemp);

    // const content = `<h1>Hello</h1>`;

    // let overlay = new kakao.maps.CustomOverlay({
    //   content: content,
    //   map: this.map,
    //   position: markerTemp.getPosition(),
    // });

    // kakao.maps.event.addListener(markerTemp, "click", () => {
    //   overlay.setMap(this.map);
    // });
  }

  static getInstance() {
    if (MapSingleton.instance === undefined) {
      MapSingleton.instance = new MapSingleton();
    }

    return MapSingleton.instance;
  }
}

const useItMapContainer = () => {
  return { MapSingleton };
};

export default useItMapContainer;
