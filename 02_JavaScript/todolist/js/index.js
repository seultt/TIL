(function (window, document) {
  'use strict';
  function addListItem(e) {
    // if(!input.value.trim()) return; // 빈 문자열 방어 코드
    todoList.insertAdjacentHTML('beforeend', '<li>'+ input.value + '<button>삭제</button></li>')
  }
  
  // select
  var input = document.querySelector('.input');
  var button = document.querySelector('.button');
  var todoList = document.querySelector('.todo-list');
  // console.log('input:', input);
  // console.log('button:', button);
  // console.log('todoList:', todoList);

  input.addEventListener('keyup', addListItem);
  


})(window, document);