const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

  // 로컬 스토리지의 데이터 갱신
  // completed의 값을 변경 후 아이템을 지웠다가 동일하게 세팅한다. (업데이트 기능이 없기 때문에)
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }