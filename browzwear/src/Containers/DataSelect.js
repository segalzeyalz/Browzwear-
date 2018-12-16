import React, { Component } from 'react';
import CSS from './DataSelect.css'
import { connect } from 'react-redux';
import * as actionTypes from '../Store/actions';

class DataSelect extends Component {    
    componentDidMount(){
        // this.props.updateDays()
    }
    componentWillMount(){
        // this.props.updateDays()
    }
    render () {
        return (
            <div className={CSS.Container}>
                {/* {daysArray.map((day,index) => (
                    <Day 
                        key={index}
                        num={index+1} 
                        date={dates[monthIdx]} 
                        startDay={this.props.startDay}
                        clicked={this.props.onSelectDay}/>
                ))} */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: ()=>dispatch({type: actionTypes.GET_DATA})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSelect);