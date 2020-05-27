const app = document.getElementById('app');

// React Component
console.log(React)

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    React.createElement('p', { className: 'paragraph' }, [
      counter,
      React.createElement('button', { className: 'paragraph' }, 'Add')
    ])
  )
}



console.log(ReactDOM)
ReactDOM.render(App(), app);