import { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    Switch,
    Checkbox,
    message,
  } from 'antd';
import { IMovie, MovieService } from '../services/MovieService';
import { RouteComponentProps } from 'react-router';
import { IResponseData, IResponseError } from '../services/CommonTypes';
import ImgUploader from '../components/imgUploader'

interface IMovieProps extends RouteComponentProps<any>{
    editId:string
}

export interface IAddAndEditMovieEvent {
    /**
     * 完成加载之后的事件
     */
    addMovie?:(movie:IMovie)=>Promise<IResponseError | IResponseData<IMovie>>,
    editMovie?:(id:string,movie:IMovie)=>Promise<IResponseData<true> | IResponseError>,
}

type SizeType = Parameters<typeof Form>[0]['size'];
export default function MovieForm(props:IAddAndEditMovieEvent & IMovieProps) {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    const [form] = Form.useForm();
    const [movieObj, setMovieObj] = useState<IMovie>({
        name:'',
        types:[],
        areas:[],
        timeLong:0,
        isHot:false,
        isClassic:false,
        isComing:false,
        description:'',
        poster:''

    })
    useEffect(() => {
        setIntvalues()
    },[])
    //初始化数据
    const setIntvalues = async () => {
        // console.log('props',props.updataMovie);
            console.log(props)
            if(props.match.params.id) {
                console.log(props.match.params.id)
               let data = await MovieService.getMovieById(props.match.params.id)
               console.log('电影',data)
               if(data.data) {
                setMovieObj(data.data)
                form.setFieldsValue(data.data);
               }
            }else {
                console.log('dddd')
                form.setFieldsValue(movieObj);
            }
            
      }
      //提交
    const  onFinish = async (values:IMovie) => {
        // console.log(values);
        if(props.match.params.id) {
            
            if(props.editMovie) {
                let data = await props.editMovie(props.match.params.id,values);
                if(data.err == '') {
                    console.log('你好')
                    message.success('保存成功');
                    props.history.push('/movie')
                  }else {
                    message.error(data.err);
                    props.history.push('/movie')
                  }
            }
            
        }else {
            if(props.addMovie) {
                let data = await props.addMovie(values);
                if(data.err == '') {
                    message.success('添加成功');
                    props.history.push('/movie')
                    
                  }else {
                    message.error(data.err);
                    // props.history.push('/movie')
                  }
            }
        }
        
        form.setFieldsValue(movieObj);
        // console.log(values);
        // setIsLoading(true)
        // add1(values);
    };
    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                
                <Form.Item 
                name="name"
                label="电影名称"
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                name="types"
                label="电影类型">
                    <Checkbox.Group>
                        <Checkbox value="喜剧" style={{ lineHeight: '32px' }}>
                        喜剧
                        </Checkbox>
                        <Checkbox value="悲剧" style={{ lineHeight: '32px' }}>
                        悲剧
                        </Checkbox>
                        <Checkbox value="爱情" style={{ lineHeight: '32px' }}>
                        爱情
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item 
                name="areas"
                label="地区">
                    <Checkbox.Group>
                        <Checkbox value="香港" style={{ lineHeight: '32px' }}>
                        香港
                        </Checkbox>
                        <Checkbox value="澳门" style={{ lineHeight: '32px' }}>
                        澳门
                        </Checkbox>
                        <Checkbox value="中国大陆" style={{ lineHeight: '32px' }}>
                        中国大陆
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item 
                label="时长"
                name="timeLong"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="poster"
                    label="海报"
                >
                    <ImgUploader curImgUrl={movieObj.poster} onChange={(data:any) => {
                        console.log(data);
                        setMovieObj({
                            ...movieObj,
                            poster:data
                        })
                    }}/>
                </Form.Item>
                <Form.Item 
                name="isHot"
                label="正在热映"
                valuePropName="checked"
                >
                    <Switch v-decorator="[
                        'isHot',
                      ]"/>
                </Form.Item>
                <Form.Item 
                name="isClassic"
                label="即将上映"
                valuePropName="checked"
                >
                    <Switch 
                    v-decorator="[
                        'isClassic',
                      ]"/>
                </Form.Item>
                <Form.Item 
                name="isComing"
                label="经典影片"
                valuePropName="checked"
                >
                    <Switch v-decorator="[
                        'isComing',
                      ]"/>
                </Form.Item>
                <Form.Item 
                name="description"
                label="介绍">
                    <Input />
                </Form.Item>
              
                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    确定
                  </Button>
                </Form.Item>
            </Form>
        </>
    );
    
}
