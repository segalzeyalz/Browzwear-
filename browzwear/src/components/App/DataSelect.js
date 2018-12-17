import React, { Component } from 'react';
import CSS from './DataSelect.css'
import * as actionTypes from '../../Store/actions';
import { connect } from 'react-redux';

class DataSelect extends Component {    
    componentDidMount(){
        // this.props.updateDays()
    }
    componentWillMount(){
        // this.props.updateDays()
    }
    render () {
            let {type} = this.props
            let newArr = this.props.data.map(function(item) { return item[type]; })
            let newNew = newArr.filter(function(item, pos){
                return newArr.indexOf(item)== pos; 
              });
              console.log(newNew) 
        return (
            <div className={CSS.Container}>
            {newNew.map((item)=>{
                return <div><font>{item}</font><br/></div>
            })}
            <br/>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data:state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: ()=>dispatch({type: actionTypes.GET_DATA})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSelect);