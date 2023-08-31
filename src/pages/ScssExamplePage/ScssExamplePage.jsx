import React, { useState } from 'react';
import Kakaomap from './KaKaomap';
import './ScssExamplePage.scss';

function ScssExamplePage() {
    const [state, setState] = useState({ center: '', inPanto: '' });

    const onMove = () => {
        setState({
            center: { lat: 37.8199, lng: 126.8973 },
            isPanto: false,
        });
    };

    return (
        <div>
            <Kakaomap state={state} />

            <button onClick={onMove}>집</button>
            // 서원힐스 cc : 37.8199, 126.8973
            <button>회사</button>
            <button>집2</button>
            <button>집3</button>
        </div>
    )
}

export default ScssExamplePage
