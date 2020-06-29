import React, { useState } from 'react';
import Modal from './Modal/Modal';
import CommentsList from './Comments/CommentList';
import Context from './Context';

function App() {
  const [comments, setComments] = useLocalStorage("Comments", []);

  const removeComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const addComment = (event) => {
    event.preventDefault(event);
    setComments(comments.concat([
      {
        id: Date.now(),
        author: event.target.name.value,
        text: event.target.comment.value,
        date: new Date().toLocaleString()
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeComment }}>
      <div>
        <div className="sidenav">
          <Modal
            onSubmit={addComment}
          />
        </div>
        <div className="main">
          {comments.length
            ? (<CommentsList comments={comments} />)
            : (<p>No comments yet!</p>)}
        </div>
      </div>
    </Context.Provider>
  );
}

function useLocalStorage(key, initialValue) {
  // Стейт для хранения значений
  // Передаем функцию начального состояния в useState, чтобы логика выполнялась только один раз
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Берем значения из local storage по ключу
      const item = window.localStorage.getItem(key);
      // Парсим получаемое значение или возвращаем initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Если ишибка, то возвращаем initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Вернуть упакованную версию setter-функции useState, которая ...
   // ... сохраняет новое значение для localStorage.
  const setValue = value => {
    try {
      // Позволить value быть функцией, так как у нас тот же API, что и для useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Сохраняем стэйт
      setStoredValue(valueToStore);
      // Сохраняем значения в local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Более продвинутая реализация будет обрабатывать ошибки
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default App;
