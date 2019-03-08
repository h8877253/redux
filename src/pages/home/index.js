
import React, { Component } from 'react';
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'
import { addOrderNum,deleteOrderNum} from '../../store/actions'

class Home extends Component {
    static PropsTypes = { // 定义数据类型
        orderType: PropsTypes.string,
        num: PropsTypes.number.isRequired,
        completed: PropsTypes.string,
        addOrderNum: PropsTypes.func.isRequired
    }
    render() {
        return (
            <div className="order_component">
                <p>orderType: {this.props.orderType}</p>
                <p>orderNum: {this.props.num}</p>
                <p>completed: {this.props.completed.toString()}</p>
                <button onClick={this.props.addOrderNum}>add order number</button>
                <button onClick={this.props.deleteOrderNum}>delete order number</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    orderType: state.orderReducer.orderType,
    completed: state.orderReducer.completed,
    num: state.orderReducer.num
})

export default connect(mapStateToProps, { addOrderNum,deleteOrderNum})(Home)
