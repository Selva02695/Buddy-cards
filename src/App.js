import React, { Component } from "react";
import CardList from "./cardlist";
import SearchBox from "./SearchBox";
import Scroll from "./scroll";
import ErrorBoundary from "./ErrorBoundary";
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            searchChange:'',
            robots:[]
        }
    }
     onSearchChange=(event)=>{
      this.setState({searchChange:event.target.value})

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(robot=> this.setState({robots:robot}))
        .catch(err=> console.log('we got ' + err))
    }
    render() {
        const filteredRobots = this.state.robots.filter(users=>{
            return users.name.toLocaleLowerCase().includes(this.state.searchChange.toLowerCase())})
            if(this.state.robots.length === 0){
                return <h1 className="tc">Loading..</h1>
            }
            else{
                return (
                    <div className="tc">
                        <h1>METAL BUDDIES</h1>
                        <SearchBox onSearchChange={this.onSearchChange} />
                        <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                        </Scroll>
                    </div>
                )
            }
        
    }
}

export default App;