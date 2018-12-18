import React, { Component } from 'react';
import CSS from './DataSelect.css'
import * as actionTypes from '../../Store/actions';
import { connect } from 'react-redux';

class DataSelect extends Component {    
    componentDidMount(){
    }
    componentWillMount(){
    }
    render () {
            let { type } = this.props
            
            let rellevantData = this.props.data.map(function(item) { return item[type]; })
            
            let sortedData = rellevantData.filter(function(item, pos){
                return rellevantData.indexOf(item)== pos; 
              });
        return (
            <div className={CSS.Container}>
            {sortedData.map((item)=>{
                return <div className={CSS.Item}><font className={CSS.TextStyle}>{item}</font><br/></div>
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