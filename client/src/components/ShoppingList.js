import React, { Component } from 'react';
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchItems, deleteItem} from '../actions/index';


class ShoppingList extends Component {

    componentDidMount(){
        //dispatching this action to the reducer:
        this.props.fetchItems();
    }
    onDeleteClick=(id)=>{
        //dispatching this action w/ value to the reducer:
        this.props.deleteItem(id)
    }
    render() {
        let {items} = this.props.itemList

        return (
            
                <Container>
                        <ListGroup>
                            {items.map(({_id, name})=>{
                                return (
                                    <ListGroupItem key={_id}><Button size="sm" onClick={this.onDeleteClick.bind(this, _id)}>x</Button> {name} </ListGroupItem>
                                )
                            })}
                        </ListGroup>
                </Container>
            
        )
    }
}

ShoppingList.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    itemList: PropTypes.object.isRequired
}

  const mapStateToProps=(state)=> {
      return {
          itemList: state.currentItems
      }
  }

  const mapDispatchToProps = {
    fetchItems: fetchItems,
    deleteItem: deleteItem
   }
 
 
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);
//export default connect(mapStateToProps, {fetchItems, deleteItem})(ShoppingList)
