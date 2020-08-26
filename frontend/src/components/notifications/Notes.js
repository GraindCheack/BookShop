import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Note } from './Note';
import { getPersonalNote, getSystemNote, readPersonalNote, readSystemNote} from '../../actions/notes'
import store from '../../store';
import Message from './Message';

function Notes (params){
  const { setModalData, auth, notes={} } = params

  useEffect(() => {
    if (auth.isAuthenticated) {
      store.dispatch(getPersonalNote())
      store.dispatch(getSystemNote())
    }
  }, [auth])

  const { personalNotes={not_read: [], read: []}, systemNotes=[] } = notes
  const systemNotesData = [...systemNotes.map((value, index) => { return <Message key={index} {...value}/> })]

  const personalNotesData = [
    ...personalNotes.read.map((value, index) => { return <Message key={`read-${index}`} {...value}/> }),
    ...personalNotes.not_read.map((value, index) => { return <Message key={`not-read-${index}`} {...value}/> })
  ]  

  console.log(systemNotes)
  return (
    <div className="position-fixed notes-cont">

      {auth.isAuthenticated && 
      <Note imageLink="/static/frontend/images/Person.svg" 
      title="Персональные нотификации" number={personalNotes.not_read.length}
      data={personalNotesData} data_not_read={personalNotes.not_read}
      setModalData={setModalData} readingFunction={params.readPersonalNote}/> }

      {auth.isAuthenticated && systemNotes.length !== 0 &&
      <Note imageLink="/static/frontend/images/warn.svg" 
      title="Общесистемные нотификации" number={systemNotesData.length}
      data={systemNotesData} data_not_read={systemNotes}
      setModalData={setModalData} readingFunction={params.readSystemNote}/> }

    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  notes: state.notes
});

export default connect(
  mapStateToProps,
  { getPersonalNote, getSystemNote, readPersonalNote, readSystemNote }
)(Notes);