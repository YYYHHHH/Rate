/**
 * Created by b on 2017/7/26.
 */

import React, { Component } from 'react';


export default class Yrate extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const { character,disabled,count,defaultValue } = this.props;
        let arr = [];
        if(count){
            for(let i = 0;i<count;i++){
                arr.push(i+1)
            }
        }else{
            arr = [1,2,3,4,5]
        }

        this.setState({
            character:character?character:'★',
            disabled,
            arr,
            star:defaultValue?defaultValue-1:4
        })
    }
    rate(index){
        if(this.props.onChange){
            this.props.onChange(index+1);
        }
        if(this.state.star == 0 && index == 0){
            this.setState({
                star:-1
            })
        }else{
            this.setState({
                star:index
            })
        }
    }
    disabled(){
        alert('对不起你不能修改！')
    }


    render() {
        const { arr,character,disabled } = this.state;
        let star = [];
        if(arr){
            star = arr.map((val,index)=>{
                if(index <= this.state.star){
                    return(
                        <div onClick={()=>{disabled?this.disabled():this.rate(index)}} style={styles.actived}>{character}</div>
                    )
                }else{
                    return(
                        <div onClick={()=>{disabled?this.disabled():this.rate(index)}} style={styles.defalut}>{character}</div>
                    )
                }
            });
        }
        return (
            <div style={{flexDirection:'row'}}>
                {star}
            </div>
        );
    }
}

const styles = {
    actived:{
        fontSize:'5rem',
        color:'#f5a623',
        display:'inline-block'
    },
    defalut:{
        fontSize:'5rem',
        color:'#aaaaaa',
        display:'inline-block'
    }
};
