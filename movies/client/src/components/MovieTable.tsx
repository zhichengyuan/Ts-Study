import { Table,Switch,Button, message, Popconfirm, Space, Input } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { Component } from 'react';
import { IMovieState } from '../redux/reducers/MovieReducer';
import { IMovie } from '../services/MovieService';
import defaultPoster from '../assets/poster.jpeg'
import { SwitchType } from '../services/CommonTypes';
import { NavLink } from 'react-router-dom';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import {
    SearchOutlined
  } from '@ant-design/icons';

export interface IMovieTableEvent {
    /**
     * 完成加载之后的事件
     */
    onLoad:() => void,
    onSwitchChange:(type:SwitchType,newState:boolean,id:string) => void,
    onDelete:(id:string) => Promise<void>,
    onChange:(newPage:number) => void,
    onkeyChange:(key:string) => void,
    onSearch:() => void,
    goEditMovie?:(id:string) => void
}

class MovieTable extends Component<IMovieTableEvent & IMovieState> {

    componentDidMount() {
        if(this.props.onLoad) {
            this.props.onLoad();
        }
        
    }
    cancel = (e:any) => {
        console.log(e);
        message.error('Click on No');
    }
    confirm = async (id:string) => {
        await this.props.onDelete(id);
        
        message.info('删除成功');
    }
    private handleSearch() {
        this.props.onSearch();
    }
    private getFilterDropDown(p:FilterDropdownProps) {
        console.log(p);
        return (
            <div style={{ padding: 8 }}>
                <Input
                    value={this.props.condition.key}
                    onChange={(e) => {
                            this.props.onkeyChange(e.target.value)
                    }}
                    onPressEnter={() => {
                        this.props.onSearch()
                    }}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90 }}
                    onClick={() => {
                        this.props.onSearch()
                    }}
                >
                    搜索
                </Button>
                
                <Button
                    type="link"
                    size="small"
                    onClick={() => {
                        this.props.onkeyChange('');
                        this.props.onSearch();
                    }}
                >
                    重置
                </Button>
                </Space>
            </div>
        )
    }
    private getColumns(): ColumnsType<IMovie>{
        return [
            {
                title:'图片',
                dataIndex:'poster',
                render:poster => {
                    if(poster){
                        return <img className="tablePoster" src={poster}/>
                    }else {
                        return <img className="tablePoster" src={defaultPoster}/>
                    }
                }
            },
            {
                title:'名称',
                dataIndex:'name',
                filterDropdown:this.getFilterDropDown.bind(this),
                filterIcon: filtered => <SearchOutlined />,
            },
            {
                title:'地区',
                dataIndex:'areas',
                key: 'areas',
                render: (text:string[]) => {
                    return text.join(',')
                }
            },
            {
                title:'类型',
                dataIndex:'types',
                render: (text:string[]) => {
                    return text.join(',')
                }
            },
            {
                title:'时长',
                dataIndex:'timeLong',
                render: timeLong => {
                    return timeLong + '分钟'
                }
            },
            {
                title:'正在热映',
                dataIndex:'isHot',
                render: (isHot,record) => {
                    return <Switch checked={isHot} onChange={(newVal) => {
                        this.props.onSwitchChange(SwitchType.isHot,newVal,record._id!)
                    }} />
                }
            },
            {
                title:'即将上映',
                dataIndex:'isComing',
                render: (isComing,record) => {
                    return <Switch checked={isComing} onChange={(newVal) => {
                        this.props.onSwitchChange(SwitchType.isComing,newVal,record._id!)
                    }} />
                }
            },
            {
                title:'经典影片',
                dataIndex:'isClassic',
                render: (isClassic,record) => {
                    return <Switch checked={isClassic} onChange={(newVal) => {
                        console.log('sdsdsa',newVal)
                        this.props.onSwitchChange(SwitchType.isClassic,newVal,record._id!)
                    }} />
                }
            },
            {
                title:'操作',
                dataIndex:'_id',
                render: (id) => {
                    return (
                        <div>
                            <NavLink to={'/movie/edit/' + id}>
                                <Button type="primary" onClick={() => {
                                    this.props.goEditMovie && this.props.goEditMovie(id)
                                }} size="small">编辑</Button>
                            </NavLink>
                            <Popconfirm
                                title="Are you sure to delete this task?"
                                onConfirm={() => {
                                    this.confirm(id)
                                }}
                                onCancel={this.cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button danger size="small">删除</Button>
                            </Popconfirm>
                            
                        </div>
                    )
                }
            }
        ]
        
    }

    getPageConfig():TablePaginationConfig | false {
        if(this.props.total === 0) {
            return false
        }
        return {
            current:this.props.condition.page,
            defaultCurrent:this.props.condition.page,
            pageSize:this.props.condition.limit,
            total:this.props.total,
        }
    }
    handleChange = (pagination:TablePaginationConfig) => {
        this.props.onChange(pagination.current!)
    }
    render() {
        return (
            <Table 
            pagination={this.getPageConfig()} 
            rowKey="_id" 
            dataSource={this.props.data} 
            columns={this.getColumns()} 
            onChange={this.handleChange.bind(this)}
            loading={this.props.isLoading}
            />
        );
    }
}

export default MovieTable;