import React from 'react';

class Book extends React.Component{
  constructor(props){
    // Pass props back to parent
    super(props);
  }

  // Submit book handler
  submitBook(input){
    alert('Submitted');
  }

  render(){
    // Title input tracker
    let titleInput;
    // return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {/* Traverse books array  */}
          {this.props.books.map((b, i) => <li key={i}>{b.title}</li> )}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            // Prevent request
            e.preventDefault();
            // Assemble inputs
            let input = {title: titleInput.value};
            // Call handler
            this.submitBook(input);
            // Reset form
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Book;
