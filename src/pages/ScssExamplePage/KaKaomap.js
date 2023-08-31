/* global kakao */
import React, { useState, useEffect } from 'react';
import './ScssExamplePage.scss';
const { kakao } = window;

const Kakaomap = (state) => {
    const [kakaoMap, setKakaoMap] = useState(null);


    useEffect(() => {
        // 맵을 띄우는 코드
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
        };
        var kakaomap = new kakao.maps.Map(container, options);
        setKakaoMap(kakaomap);

        //마커가 표시 될 위치
        var markerPosition = new kakao.maps.LatLng(
            33.450701,
            126.570667
        );

        // 마커를 생성
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(kakaoMap);
    }, [])

    //console.log(state);
    //console.log(state.state.center.lat);
    //console.log(state.state.center.lng);

    // if (state.state.center.lat !== null || state.state.center.lng !== null) {
    //     console.log(state.state.center.lat);
    //     kakaoMap.setCenter(new kakao.maps.LatLng(state.state.center.lat, state.state.center.lng));
    // }

    //kakaoap.setCenter(state.center);

    //kakaoMap.setCenter(new kakao.maps.LatLng(36.0423, 128.0582));

    return (
        <div id="map" style={{ width: '500px', height: '500px' }}>
        </div>
    );
};

export default Kakaomap;