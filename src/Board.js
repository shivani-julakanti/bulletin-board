import React from 'react'
import Note from './Note'

class Board extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			notes: [
			{
				id: 33,
				note: 'Call Mom'
			},
			{
				id: 34,
				note: 'Email'	
			}]
		}
		this.eachNote=this.eachNote.bind(this)
	}

	eachNote(note, i){
		return(
		<Note key={i} index={i}>
			{note.note} 
		</Note>
		)
	}

	render(){
		return (
		<div className="board">
			{this.state.notes.map(this.eachNote)}
		</div>
		)
	}
}

export default Board