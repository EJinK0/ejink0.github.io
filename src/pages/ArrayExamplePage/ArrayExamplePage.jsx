import React, { useRef, useState, useMemo } from 'react'
import UserList from './UserList';
import './ArrayExamplePage.scss';

function ArrayExamplePage() {
  const [inputs, setInputs] = useState({ username: '', email: '' });
  const { username, email } = inputs;
  const nextId = useRef(4);
  const [userList, setUserList] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUserList(userList.concat(user));

    setInputs({ username: '', email: '' });
    nextId.current += 1;
  };

  const countActiveUsers = (users) => {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  };

  const count = useMemo(() => countActiveUsers(userList), [userList]);
  //const count = countActiveUsers(userList);

  const onToggle = (id) => {
    setUserList(
      userList.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div className='arrayExamplePage'>
      <div className='pageHeader'>
        <input name="username" placeholder="계정명" onChange={onChange} value={username} />
        <input name="email" placeholder="이메일" onChange={onChange} value={email} />
        <button onClick={onCreate}>등록</button>
      </div>
      <UserList userList={userList} onToggle={onToggle} />
      <div>활성사용자수{count}</div>
    </div>
  )
}

export default ArrayExamplePage
