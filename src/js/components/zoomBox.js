import React, { Component } from 'react'

class ZoomBox extends Component {
	constructor(props) {
		super()

		this.state = {
			zoomMousePos: {},
			zoomImgPos: {},
			open: false
		}

		setTimeout(() => {
			this.setState({ open: true })
		}, 2000)

		this.setZoomedPosition = this.setZoomedPosition.bind(this)
		this.zoomedImgTag = this.zoomedImgTag.bind(this)
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)

	}

	setZoomedPosition(e) {
		const { containerL, containerT, containerW, containerH } = this.getContainerDimensions()
		const isPinch = e.touches && e.touches.length > 1

		if (isPinch) {
			return
		}

		if (e.type === 'mousemove') {
			const left = -(e.clientX - containerL)
			const top = -(e.clientY - containerT)
			this.setState({
				zoomImgPos: {left, top} 
			})
		}

		if (e.type === 'touchmove') {
			const xMove = typeof this.state.zoomMousePos.X === 'undefined' ? 0 : this.state.zoomMousePos.X - e.touches[0].clientX
			const yMove = typeof this.state.zoomMousePos.Y === 'undefined' ? 0 : this.state.zoomMousePos.Y - e.touches[0].clientY
			const leftPos = typeof this.state.zoomImgPos.left === 'undefined' ? -(containerW / 2) : this.state.zoomImgPos.left - xMove
			const topPos = typeof this.state.zoomImgPos.top === 'undefined' ? -(containerH / 2) : this.state.zoomImgPos.top - yMove
			const left = leftPos < -(containerW) ? -(containerW) : leftPos > 0 ? 0 : leftPos
			const top = topPos < -(containerH) ? -(containerH) : topPos > 0 ? 0 : topPos

			this.setState({
				zoomImgPos: { left, top },
				zoomMousePos: { X: e.touches[0].clientX, Y: e.touches[0].clientY }
			})
		}
	}

	getContainerDimensions() {
		const containerW = this.refs.zoomBoxContainer.clientWidth
		const containerH = this.refs.zoomBoxContainer.clientHeight
		const containerViewportOffset = this.refs.zoomBoxContainer.getBoundingClientRect()
		const containerL = containerViewportOffset && containerViewportOffset.left
		const containerT = containerViewportOffset && containerViewportOffset.top
		return { containerW, containerH, containerL, containerT }
	}

	zoomedImgTag() {
		const { containerW, containerH } = this.getContainerDimensions()
		const width = containerW * 2
		const height = containerH * 2
		const { left, top } = this.state.zoomImgPos
		const src = width > 0 ? `http://placehold.it/${width}x${height}/ffcc00/00ffcc` : ''
		return <img className='zoom-img' style={{ left: left + 'px', top: top + 'px' }} src={src} alt='' />
	}

	open() {
		this.setState({
			open: true
		})
	}

	close() {
		this.setState({
			open: false
		})
	}

	render() {
		return (
			<div className='zoom-box'>
				<button onClick={ this.open }>Open ZoomBox</button>
				<div className={'zoom-box-container' + ' ' + (this.state.open && 'open') } ref='zoomBoxContainer' onTouchMove={ this.setZoomedPosition } onMouseMove={ this.setZoomedPosition }>
					<div className='popup-content'>
						<span className='cross' onClick={ this.close }></span>
						{ this.refs.zoomBoxContainer && this.zoomedImgTag() }
					</div>
				</div>
			</div>
		)
	}
}

export default ZoomBox