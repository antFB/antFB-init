import React, { Component, PropTypes } from 'react';
import { Spin } from 'antFB';
import Todo from './Todo';
import styles from './Todos.less';
import { getAll } from '../../services/todos';

class TodosContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: false,
    };
  }

  loadTodos(dataType='json') {
    this.setState({ loading: true });
    getAll(dataType).then(({ jsonResult }) => {
      this.setState({
        list: jsonResult.data,
        loading: false,
      });
    })
  }

  handleToggleComplete = (id) => {
    const newList = this.state.list.map(todo => {
      if (id === todo.id) {
        return { ...todo, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    });
    this.setState({
      list: newList,
    });
  }

  componentDidMount() {
    this.loadTodos('jsonp');
  }

  render() {
    const { location } = this.props;
    const { list, loading } = this.state;
    const todos = filter({ list, loading }, null);//location.pathname);
    return (
    	<div>
	      <Todos todos={todos} onToggleComplete={this.handleToggleComplete} />
	      <div>
	      	<span onClick={this.loadTodos.bind(this,'jsonp')} className={styles.testBt}>Get Data By JsonP</span>
	      	<span onClick={this.loadTodos.bind(this,'json')} className={styles.testBt}>Get Data By Json</span>
	      </div>
      </div>
    );
  }
}

const Todos = ({ todos, onToggleComplete }) => {
  const renderList = () => {
    const { list, loading } = todos;
    if (loading) {
      return <Spin />;
    }

    return (
      <div className={styles.list}>
        {list.map(item => <Todo
          key={item.id}
          data={item}
          onToggleComplete={onToggleComplete.bind(this, item.id)}
        />
          )}
      </div>
    );
  };

  return (
    <div className={styles.normal}>
      {renderList()}
    </div>
  );
};

Todos.propTypes = {};

function filter(todos, pathname) {
  const newList = todos.list.filter(todo => {
    /* if (pathname === '/actived') {
      return !todo.isComplete;
    }
    if (pathname === '/completed') {
      return todo.isComplete;
    } */
    return true;
  });
  return { ...todos, list: newList };
}

export default TodosContainer;
