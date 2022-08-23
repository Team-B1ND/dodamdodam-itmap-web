import { useMap } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { isUserToggleAndUserIndex } from "store/reducers";
import useCoord from "./companyCoords/useCoord";

const usePanTo = (companyLocation: string, idx: number) => {
  const map = useMap();
  const dispatch = useDispatch();
  const [lat, lng] = useCoord(map, companyLocation);

  /** 클릭을 하면 화면이 마커로 부드럽게 이동해요! */
  const movePanTo = () => {
    if (lat && lng) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);
      map.setLevel(3);
      map.panTo(moveCoord);
      dispatch(isUserToggleAndUserIndex(true, true, idx));
    }
  };
  return { movePanTo };
};

export default usePanTo;
