import React, { Component } from 'react';
import DataChild from '../DataChild/DataChild';
import { observable, action, decorate } from "mobx";
import {observer} from 'mobx-react';

class Timer {
    num = 1;
    add = ()=>{
        console.log(this.num)
        this.num++;
    }
}
decorate(Timer, {
    num:observable,
    add: action
})
const Timu = new Timer();

class Get extends Component {
    componentDidMount() {
        Timu.num = 123;
    }
    GetDatas = (data)=>{
        alert(data)
    }
    render() {
        return (
            <div >
                {Timu.num}
                <button onClick={Timu.add}>+</button>
                <DataChild Timu={Timu} GetDatas={(data)=>this.GetDatas(data)}/>
            < /div>
        );
    }

}

export default observer(Get);
