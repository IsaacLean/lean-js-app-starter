import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loading from '../components/Loading'
import Nav from '../components/Nav'
import Threads from '../components/Threads'
import { fetchEnd, fetchThreads, setErr } from '../actions'
import { getThread } from '../reducers'
import { isFresh } from '../util/api'
import { isServerRendered } from '../util/store'
import { setDocTitle } from '../util'

export class ThreadPage extends Component {
  componentDidMount() {
    if(this.props.thread) {
      setDocTitle(this.props.thread.subject || `Thread ${this.props.thread._id}`)
      if(isFresh(this.props.thread.received)) return
    }

    if(!isServerRendered()) {
      if(this.props.fetchThreads) {
        this.props.fetchThreads(this.props.id)
          .then(thread => {
            setDocTitle(thread.subject || `Thread ${thread._id}`)
          })
          .catch(err => {
            if(!this.props.thread) {
              if(this.props.setErr) {
                this.props.setErr('read', err)
              }
            } else {
              if(this.props.fetchEnd) {
                this.props.fetchEnd()
              }
            }
          })
      }
    }
  }

  render() {
    let content
    if(this.props.thread) {
      content = <Threads data={[this.props.thread]} />
    } else if(!this.props.thread && this.props.isFetching) {
      content = <Loading />
    }

    return <>
      <Nav mode="top" />
      {content}
      <Nav mode="bottom" />
    </>
  }
}

ThreadPage.propTypes = {
  fetchEnd: PropTypes.func,
  fetchThreads: PropTypes.func,
  id: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  setErr: PropTypes.func,
  thread: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.isFetching,
  thread: getThread(state, ownProps.id)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEnd,
  fetchThreads,
  setErr
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage)
