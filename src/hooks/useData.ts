const useData = () => {
  const testData = [
    {
      id: 1,
      name: "정우재",
      generation: "1",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "안녕하세요 정직하고 우직한 정우재 입니다",
      companyName: "(주)북한 인민군",
      companyLocation: "경기도",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 2,
      name: "박병관",
      generation: "3",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "저는 헬창이 되서 찌찌를 키울거에요!",
      companyName: "(주)태평양 하와이안",
      companyLocation: "대구",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 3,
      name: "임동현",
      generation: "5",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "커플은 우우우",
      companyName: "원티드랩",
      companyLocation: "안양",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 4,
      name: "김상은",
      generation: "6",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "나는 크다 넵 저는 이 말대로 큽니다",
      companyName: "FLO",
      companyLocation: "서울",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 5,
      name: "기준",
      generation: "7",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "세상의 기준이 되는 남자 김기준 입니다",
      companyName: "(주)페르소나",
      companyLocation: "울산",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 6,
      name: "금현호",
      generation: "6",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "안녕하세요 저는 박사모 입니다",
      companyName: "Google",
      companyLocation: "강남",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 7,
      name: "정우재",
      generation: "4",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "나는 크다",
      companyName: "(주)북한 인민군",
      companyLocation: "경기도 광주",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 8,
      name: "박병관",
      generation: "4",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "나는 크다",
      companyName: "(주)태평양 하와이안",
      companyLocation: "제주도",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 9,
      name: "임동현",
      generation: "4",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "나는 크다",
      companyName: "원티드랩",
      companyLocation: "포항",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 10,
      name: "김상은",
      generation: "4",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "나는 크다",
      companyName: "FLO",
      companyLocation: "인천",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 11,
      name: "기준",
      generation: "4",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "나는 크다",
      companyName: "(주)페르소나",
      companyLocation: "파주",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
    {
      id: 12,
      name: "금현호",
      generation: "4",
      profileImg:
        "https://user-images.githubusercontent.com/48943501/127284705-696db588-a867-48b6-aeba-8c2cd28d7f2f.jpg",
      tagImg:
        "https://user-images.githubusercontent.com/48943501/127284435-aeeb1458-15ae-4dbf-bcff-7cbd28556a0c.jpg",
      explanation: "i'm big",
      companyName: "Google",
      companyLocation: "부산",
      devPosition: "FE",
      position: { lat: 0, lng: 0 },
    },
  ];

  return {
    testData,
  };
};

export default useData;
