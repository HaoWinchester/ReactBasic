import React, { Component } from 'react';
class DataChild extends Component {
    handleOnclick = ()=>{
        console.log(123);
        this.props.GetDatas(456);
    }
    render() {
        console.log(this.props.Timu.num);
        return (
            <div>
                <p onClick={this.handleOnclick}>come on!</p>
                <p onClick={this.props.Timu.add}>点我 +1不</p>
            </div>
        );
    }

}

export default DataChild;
