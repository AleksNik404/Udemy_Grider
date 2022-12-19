import { useState, useRef, useEffect } from 'react';

const users = [
  {
    name: 'Sarah',
    age: 20,
  },
  {
    name: 'Alex',
    age: 20,
  },
  {
    name: 'Mikl',
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const haha = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!haha.current) return;
    haha.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input ref={haha} type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user ? user.name : 'user wasn`t found'}</div>
    </div>
  );
};

export default UserSearch;
