import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  // inputに入力された値をvalueで受け取り、setTodoTextに渡す
  const onchangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンが押された時,未完了のTODOに渡す
  const onClickAdd = () => {
    // 入力が空の場合は処理を実行しない
    if (todoText === "") return;
    //...incompleteTodosは今までの配列に、今回入力された値todoTextを渡す
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // inputの入力が未完了に移動したら、inputの表示を消す
    setTodoText("");
  };
  // 削除ボタンが押された処理,何番目のTODOを削除するかindexを渡す
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // index指定の箇所の要素を削除する。２個目の引数は１つ削除するという意味
    newTodos.splice(index, 1);
    // 更新
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンを押した処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // index指定の箇所の要素を削除する。２個目の引数は１つ削除するという意味
    newIncompleteTodos.splice(index, 1);
    // 新しい完了のTODOが生成される
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  //戻すボタンの処理
  const onClickBack = (index) => {
    //削除処理
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    //未完了のリストに戻る
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onchangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 何番目のボタンが押されたか判定する */}
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 関数に引数を渡すときはアロー関数で新しく関数を生成する */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
