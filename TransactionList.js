import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import * as actions from "../actions/transactionActions";
import { bindActionCreators } from "redux";
import { Button } from 'react-bootstrap';
import history from './../history';
import Products from '../Product/Products';

class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }

    render() {
        return (
            <div className="App">
                <TransactionForm />
                <form>
            <Button variant="btn btn-success" onClick={() => history.push('/components/login')}>Click button to view products</Button>
          </form>

                <hr />
                <table className="tableDesign">
                    <tbody>
                        <tr><th>Bank Account No</th>
                        <th>IFSC Code</th>
                        <th>Account Holder Name</th>
                        <th>Amount</th></tr>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.bAccountNo}</td>
                                <td>{item.iFSC}</td>
                                <td>{item.bName}</td>
                                <td>{item.amount}</td>
                                <td><button onClick={() => this.handleEdit(index)} className="myListButton">Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)} className="myListButton">Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)