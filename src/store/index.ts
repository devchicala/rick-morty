import { createStore } from "redux";

const INITIAL_STATE = {
  activeLesson: '',
  activeModule: '',
  modules: [
    {
      id: 1,
      title: "Iniciando com Ract",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
      ],
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 1, title: "Terceira aula" },
        { id: 2, title: "Quarta aula" },
      ],
    },
  ],
}

function reducer(state = INITIAL_STATE, action: any) {
  console.log(action)

  if(action.type === 'TOGGLE_LESSON') {
    return { ...state, activeLesson: action.lesson, activeModule: action.module}
  }

  return state;
}

const store = createStore(reducer);

export default store;