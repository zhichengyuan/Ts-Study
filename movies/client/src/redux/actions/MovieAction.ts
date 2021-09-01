// action的创建函数

import { ISearchCondition, SwitchType } from "../../services/CommonTypes"
import { IMovie, MovieService } from "../../services/MovieService"
import { IAction } from "./ActionTypes"
import {ThunkAction} from 'redux-thunk'
import { IRootState } from "../reducers/RootReducer"

// action的创建函数
// export type AddMoviesAction = IAction<'movie_add',IMovie>
// function addMoviesAction(movie:IMovie,):AddMoviesAction {
//     return {
//         type:'movie_add',
//         payload:movie
//     }
// }
export type SaveMoviesAction = IAction<'movie_save',{
    movies:IMovie[]
    total:number
}>
function saveMoviesAction(movies:IMovie[],total:number):SaveMoviesAction {
    return {
        type:'movie_save',
        payload:{
            movies,
            total
        }
    }
}
export type EditMoviesAction = IAction<'movie_edit',string>

function editMoviesAction(id:string):EditMoviesAction {
    return {
        type:'movie_edit',
        payload:id
    }
}

export type SetLoadingAction = IAction<'movie_setLoading',boolean>

function setLoadingAction(isLoading:boolean):SetLoadingAction{
    return {
        type:"movie_setLoading",
        payload:isLoading
    }
}

export type SetConditionAction = IAction<'movie_setCondition',ISearchCondition>

function setConditionAction(condition:ISearchCondition):SetConditionAction {
    return {
        type:'movie_setCondition',
        payload:condition
    }
}

export type MovieChangeSwitchAction = IAction<"movie_switch",{
    type:SwitchType,
    newVal:boolean,
    id:string
}>
function changeSwitchAction(type:SwitchType,newVal:boolean,id:string):MovieChangeSwitchAction {
    return {
        type:'movie_switch',
        payload:{
            type,
            newVal,
            id
        }
    }
}

export type DeleteAction = IAction<"movie_delete",string>

function deleteAction(id:string):DeleteAction {
    return {
        type:"movie_delete",
        payload:id
    }
}

export type MovieActions =  EditMoviesAction| SaveMoviesAction | SetConditionAction | SetLoadingAction | DeleteAction | MovieChangeSwitchAction


// 根据条件从服务器获取电影的数据
function fetchMoive(condition:ISearchCondition)
    :ThunkAction<Promise<void>,IRootState,any,MovieActions>{
    return async (dispatch,getState) => {
        // 1.设置加载状态
        dispatch(setLoadingAction(true));
        // 2.设置条件
        dispatch(setConditionAction(condition));
        // 3.获取服务器数据
        const curCondition = getState().movie.condition;
        const resp = await MovieService.getMovie(curCondition)
        // 4.更改仓库的数据
        dispatch(saveMoviesAction(resp.data,resp.total))
        // 关闭加载状态
        dispatch(setLoadingAction(false))
    }
}

function deleteMovie(id:string)
    :ThunkAction<Promise<void>,IRootState,any,MovieActions>{
        return async dispatch => {
            dispatch(setLoadingAction(true));
            await MovieService.delete(id);
            dispatch(deleteAction(id));//删除本地仓库中数据
            dispatch(setLoadingAction(false));
        }
}

function changeSwitch(type:SwitchType,newVal:boolean,id:string)
    :ThunkAction<Promise<void>,IRootState,any,MovieActions>{
        return async dispatch => {
            console.log(type);
            dispatch(changeSwitchAction(type,newVal,id));
            await MovieService.edit(id,{
                [type]:newVal
            })
            // await MovieService.edit(id);
            // dispatch(deleteAction(id));//删除本地仓库中数据
            // dispatch(setLoadingAction(false));
        }
}


export default {
    saveMoviesAction,
    setLoadingAction,
    setConditionAction,
    deleteAction,
    deleteMovie,
    fetchMoive,
    changeSwitchAction,
    changeSwitch,
    editMoviesAction,
}