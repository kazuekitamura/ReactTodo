import React from "react";

//TODO入力欄のコンポーネント
export const InputTodo = (props) => {
  // 渡されたpropsから分割代入で取り出す
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
