import React, { Component } from 'react';
import{ Button,Col,Row,Grid,FormControl,FormGroup,Form,Table,Checkbox,ButtonToolbar,ButtonGroup,
    DropdownButton,MenuItem
} from 'react-bootstrap';
import './articleList.css'
import request from '../request/requestData'
export default class articleList extends Component{
    constructor(props){
        super(props)
        this.state={
            value:'',
            articleArray:[],
        }
        this.allArticleData=[]
    }
    componentDidMount(){
        request.article.getData('',(obj)=>{
            this.allArticleData=obj.slice(0),
            this.setState({
                articleArray:this.allArticleData.slice(0,10)
            })
        })
    }
    render(){
        const {value,articleArray}=this.state
        return(
            <div className={'articleList-box'} >
                <Row className={'search-box'}>
                    <Form inline>
                        <Button className={"button-box"} bsStyle="danger">删除</Button>
                        <FormGroup
                            controlId="formBasicText"
                        >
                        </FormGroup>
                        <FormControl
                            type="text"
                            value={value}
                            placeholder="请输入文字"
                        />
                        <Button className={"button-box"} bsStyle="info">搜索</Button>
                    </Form>
                </Row>
                <Row className={'search-box'}>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>
                                <Checkbox inline></Checkbox>
                            </th>
                            <th>日期</th>
                            <th>作者</th>
                            <th>文章标题</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {articleArray.map((obj,i)=>{
                            return(
                                <tr>
                                    <th>
                                        <Checkbox inline></Checkbox>
                                    </th>
                                    <td>{obj.userId}</td>
                                    <td>{obj.id}</td>
                                    <td>{obj.title}</td>
                                    <td>
                                        <Button className={"button-box"} bsStyle="info" bsSize="small" inline>编辑</Button>
                                        <Button className={"button-box"} bsStyle="danger" bsSize="small" inline>删除</Button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </Row>
                <Row style={{marginBottom:300}}>
                    <ButtonGroup justified>
                        <Button>首页</Button>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>7</Button>
                        <Button>8</Button>
                        <Button>9</Button>
                        <DropdownButton title="1" id="bg-nested-dropdown">
                            <MenuItem eventKey="1">1</MenuItem>
                            <MenuItem eventKey="2">2</MenuItem>
                            <MenuItem eventKey="3">3</MenuItem>
                            <MenuItem eventKey="4">4</MenuItem>
                            <MenuItem eventKey="5">5</MenuItem>
                            <MenuItem eventKey="6">6</MenuItem>
                        </DropdownButton>
                        <Button>上一页</Button>
                        <Button>下一页</Button>
                        <Button>末页</Button>
                    </ButtonGroup>
                </Row>
            </div>
        )
    }
}