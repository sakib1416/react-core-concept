import './App.css';

function App() {
  const journalists = [{
    name: "Mahfuz Anam",
    company: "Daily Star"
  },
  {
    name: "Motiur Rahman",
    company: "Prothom Alo"
  }
]

const products = [
  {name: "Photoshop Pro", price: "$199.90"},
  {name: "Illustrator", price: "$60.99"},
  {name: "PDF Reader", price: "$6.99"},
  {name: "Premier EL", price: "$249.99"}
];

const friends = [
  {name: "Nipu", age: 27},
  {name: "Sani", age: 24},
  {name: "Mazhar", age: 25},
  {name: "Sadik", age: 27},
  {name: "Sameer", age: 28},
  {name: "Iftekhar", age: 29}
];

const series = [
  {name : "Game of Thrones", dialog : "Winter is coming"},
  {name : "Person of Interest", dialog : "You are being watched"},
  {name : "Peaky Blinders", dialog : "By the order of Peaky Blinders"}
]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Duetsche Welle - Made for minds</h1>
        {
          journalists.map(journalist => <Journalists journalist = {journalist}></Journalists>)
        }
        {
          friends.map(friend => <Friends friend = {friend}></Friends>)
        }
        {
          products.map(product => <Product details = {product}></Product>)
        }
        {/* <Series name = "Game of Thrones" dialog = "Winter is coming"></Series>
        <Series name = "Person of Interest" dialog = "You are being watched"></Series> */}
        {
          series.map(series => <Series details = {series}></Series>)
        }
      </header>
    </div>
  );
}

function Friends(props) {
  const friendsStyle = {
    backgroundColor: "cyan",
    color: "red",
    border: "1px solid gray",
    borderRadius: "10px",
    width: "200px",
    height: "200px",
    margin: "10px"
  }
  const {name, age} = props.friend;
  return (
    <div style = {friendsStyle}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    backgroundColor: "gray",
    border: "1px solid gray",
    borderRadius: "5px",
    width: "200px",
    height: "200px",
    margin: "5px",
    float: "left",
  };
  const {name, price} = props.details;
  return (
    <div style = {productStyle}>
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
    </div>
  )
}


function Series(props) {
  const {name, dialog} = props.details;
  return (
    <div style = {{border: "2px solid green", borderRadius:"10px", margin: "10px", width: "400px"}}>
      <h3>Series Name: {name}</h3>
      <p>Dialog: {dialog}</p>
    </div>
  )
}

function Journalists(props) {
  const {name, company} = props.journalist;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h4>Company: {company}</h4>
    </div>
  )
}


export default App;
