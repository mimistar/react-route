import React, { Component } from 'react';
import './App.css';
import {Col,Row,Grid} from 'react-bootstrap'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import CanSve from "./components/cansve";
import myself from "./components/mySelf";
import articleList from "./components/articleList";
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            navlist:[
                {name:'自述',url:'/'},
                {name:'图形',url:'/CanSve'},
                {name:'table',url:'/articleList',child:[{name:'文章列表',url:''}]},
                {name:'地图',url:''},
                {name:'模板',url:''},
                {name:'系统',url:''}
            ],
            indexNav:0,
        }
    }
    onchange(i){
        this.setState({
            indexNav:i
        })
    }
  render() {
    const {navlist,indexNav}=this.state
    return (
      <div className="App">
          <Grid fluid={true}>
              <Row className='test'>
                  <Col lg={3}/>
                  <Col lg={9} >
                      <Row className='test'>
                          <Col lg={9}>
                              <p className={'wcinfo'}>
                                  你好啊!
                              </p>
                          </Col>
                          <Col lg={3} style={{position:'relative',lineHeight:'70px',textAlign:'left'}}>
                              <span className={'infoRight'}>4546565</span>
                              <div className={"logo-img"}>
                                  <img
                                      src="./img/logo.png"
                                      alt=""
                                  />
                              </div>
                          </Col>
                      </Row>
                  </Col>
              </Row>
             <Row className={'bodyContent'}>
                 <Col lg={2} className={"navcontent"}>
                        <ul>
                            {navlist.map((obj,i)=>{
                                return(
                                    <li key={i} className={i===indexNav&&'active'}>
                                        <Link onClick={this.onchange.bind(this,i)} to={obj.url}>{obj.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                 </Col>
                 <Col lg={10} className={"centerContent"}>
                     <Switch>
                         <Route path="/" component={myself} exact/>
                         <Route path="/CanSve" component={CanSve}/>
                         <Route path="/articleList" component={articleList}/>
                     </Switch>
                 </Col>
             </Row>
          </Grid>

      </div>
    );
  }
}
export default App;
