import React from 'react'
import { connect } from 'redux'

import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

import { reduxify } from './../utils/reduxify'
import { addTopic } from './../reducers/main'

class TopicsComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.topics.length !== this.props.topics.length
				|| nextState.input !== this.state.input
	}
	onChangeText(value) {
		this.setState({
			...this.state,
			input: value
		})
	}
	onPress() {
		this.props.addTopic(this.state.input)
		this.refs.item_input.blur()
	}
	render() {
		return <View style={styles.list}>
			<TextInput placeholder='type a topic'
					   onChangeText={(v) => this.onChangeText(v)}
					   value={this.state.input}
					   ref='item_input'/>
			<Button title='Add item' onPress={() => this.onPress()}/>
			{this.props.topics.map((item, i) =>
				<Text key={`${i}-item`}> {item} </Text>)}
		</View>
	}
}


const styles = StyleSheet.create({
	list: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
	}
})


const mapStateToProps = state => {
	console.log(state.lists)
	return {
		topics: state.lists
	}
}

const mapDispatchToProps = {
	addTopic
}

export const Topics = reduxify({
	mapStateToProps,
	mapDispatchToProps,
	render: (props) =>
		<TopicsComponent {...props}/>
})