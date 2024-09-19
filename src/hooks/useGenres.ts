import genres from '../data/genres'

//const useGenres = () => useData<Genre>('/genres')
// 箭头函数中，返回一个对象必须要用括号括住，不然的话，当成是函数体
const useGenres = () => ({data: genres, isLoading: false, errors: null})

export default useGenres