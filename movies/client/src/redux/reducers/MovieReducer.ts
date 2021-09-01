// 描述电影列表的状态类型

import { Reducer } from "react";
import { ISearchCondition } from "../../services/CommonTypes";
import { IMovie } from "../../services/MovieService";
import { DeleteAction, EditMoviesAction, MovieActions, MovieChangeSwitchAction, SaveMoviesAction, SetConditionAction, SetLoadingAction } from "../actions/MovieAction";

export type IMovieCondition = Required<ISearchCondition>

/**
 * 电影的状态
 */
export interface IMovieState{
    /**
     * 电影数组
     */
    data:IMovie[]
    /**
     * 查询条件
     */
    condition:IMovieCondition
    /**
     * 总记录数
     */
    total:number
    /**
     * 是否正在加载
     */
    isLoading:boolean,
    /**
     * 总页数
     */
    totalPage:number,
    /**
     * 修改的对象
     */
    editId:string
}

const defaultState:IMovieState = {
    data:[],
    isLoading:false,
    condition:{
        page:1,
        limit:10,
        key:'',
    },
    total:0,
    totalPage:0,
    editId:''
}

const saveMovie:Reducer<IMovieState,SaveMoviesAction> = function (state,action) {
    return {
        ...state,
        data:action.payload.movies,
        total:action.payload.total,
        totalPage: Math.ceil(action.payload.total / state.condition.limit)
    }
}

const setCondition:Reducer<IMovieState,SetConditionAction> = function (state,action) {
    const newState =  {
        ...state,
        condition:{
            ...state.condition,
            ...action.payload
        }
    }
    newState.totalPage = Math.ceil(newState.total/newState.condition.limit)
    return newState
}
const editMovie:Reducer<IMovieState,EditMoviesAction> = function (state,action) {
    const newState =  {
        ...state,
        editId:action.payload
    }
    return newState
}

const setLoading:Reducer<IMovieState,SetLoadingAction> = function (state,action) {
    return {
        ...state,
        isLoading:action.payload
    }
}
const deleteMovie:Reducer<IMovieState,DeleteAction> = function (state,action) {
    return {
        ...state,
        data:state.data.filter(m => m._id !== action.payload),
        total:state.total -1,
        totalPage:Math.ceil((state.total -1) /state.condition.limit)
    }
}

const changSwitch:Reducer<IMovieState,MovieChangeSwitchAction> = function (state,action) {
    // 1.根据id找到对象
    const movie = state.data.find(d => d._id === action.payload.id);
    if(!movie) {
        return state
    }
    // 2.克隆对象
    const newMovie = {...movie};
    newMovie[action.payload.type] = action.payload.newVal;

    // 3.将对象重新放入到数组
    const newData =  state.data.map(d => {
        if(d._id === action.payload.id) {
            return newMovie
        }
        return d;
    })

    return {
        ...state,
        data:newData
    }
}



export default function(state:IMovieState = defaultState,action:MovieActions) {
    //可辨识联合
    switch (action.type) {
        case "movie_delete":
            return deleteMovie(state,action)
        case "movie_save":
            return saveMovie(state,action)
        case "movie_setCondition":
            return setCondition(state,action)
        case "movie_setLoading":
            return setLoading(state,action);
        case "movie_switch":
            return changSwitch(state,action);
        case "movie_edit":
            return editMovie(state,action);
        default:
            return state;
    }
}