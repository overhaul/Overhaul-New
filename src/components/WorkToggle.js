import * as React from 'react'
import { Component } from 'react'

class WorkToggle extends Component {

  constructor() {
      super()
      this.state = {
        listIsOpen: false
      }
      this.toggleView = this.toggleView.bind(this)
    }

  toggleView() {
    this.setState( 
      function(prevState){
        return{
          listIsOpen: !prevState.listIsOpen
        }
      }
    )
  }
  
  render(){
    return (
    	<div className="container row">
    		<div className="col-xs-12 col-md-6">
	    		<div className="toggle-view">
	    			<p className="toggle-view_trigger">{this.state.listIsOpen ? 'Grid' : 'List'}</p>
	    			<div className="toggle-view_buttons">
		    			{this.state.listIsOpen ? 
		    				<button className="toggle-view_button list"
		    						onClick={this.toggleView}
		                onKeyDown={this.toggleView}
		                >
		                <p>List</p>
		          	</button> : 
		          	''
		        	}
		          {this.state.listIsOpen ? 
		          	'' : 
		          	<button className="toggle-view_button grid"
		    						onClick={this.toggleView}
		                onKeyDown={this.toggleView}
		                > 
		                <p>Grid</p>
		          	</button>
		        	}
	        	</div>
          </div>
    		</div>
    	</div>
    )
  }
}


export default WorkToggle