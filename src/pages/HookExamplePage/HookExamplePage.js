import React, { useEffect, useState, useMemo, useCallback } from 'react';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function HookExamplePage() {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(
        e => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
        },
        [number, list]
    ); // number 혹은 list 가 바뀌었을 때만 함수 생성

    useCallback(() => {
        console.log('useCallback!!! number change');
    }, [number])

    useMemo(() => {
        const fn = () => {
            console.log('useMemo!!! number change');
        };
        return fn;
    }, [number])

    return (
        <div>
            {number}<br />
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
}


export default HookExamplePage
