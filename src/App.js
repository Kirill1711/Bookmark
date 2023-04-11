import {nanoid} from 'nanoid';
import {useState} from 'react';
import About from './About/About';
import './App.css';
import BookMark from './Bookmark/Bookmark';
import Help from './Help/Help';
import Modal from './Modale/Modale';

function id () {
  return nanoid(10);
}

function App() {

const [signInActive, setsignInActive] = useState(false);
const [joinActive, setjoinActive] = useState(false);
const [bookmarkActive, setbookmarkActive] = useState(true);
const [aboutActive, setaboutActive] = useState(false);
const [helpActive, sethelpActive] = useState(false);
const [modalEdit, setmodalEdit] = useState(false);

const [linkid, setLinkid] = useState('');
const [link, setLink] = useState('');
const [comment, setComment] = useState('');
const [activeEdit, setActiveEdit] = useState(false);
const [account, setAccount] = useState(false);


 const collections = [
 ];


 const [files, setFiles] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []);
 

 function addFile (comment, link, setComment, setLink, setActive) {
  setFiles([...files, {id: id(), comment: comment, link: link}]);
  setComment('');
  setLink('');
  setActive(false);
 }

 function removeLink (id) {
  setFiles(files.filter(file => file.id !== id));
 }

 function editLink (id, setActiveEdit) {
  setActiveEdit(true);
  files.map(file => {
    return file.id === id ? 
    (setComment(file.comment),
    setLink(file.link),
    setLinkid(file.id)) : '';
  });
}

 function changeSinhIn () {
  setjoinActive(true);
  setsignInActive(false);
 }
 
 function changeJoin () {
  setsignInActive(true);
  setjoinActive(false);
 }

 function changeItem (linkid, link, comment) {
  setFiles(files.map(file => {
    return file.id === linkid ? {...file, link  : link, comment : comment} : file;
  }));
  setActiveEdit(false);
  setComment('');
  setLink('');
  setLinkid('');
 }

 const readCollections = files.map(file => {
  return <li key={file.id} className='bookmark-link'>
    <a className='link-text' href={file.link} target='_blank' rel="noopener noreferrer"> <span>{file.comment}</span></a>
    <button className='button-icon-del' onClick={() => removeLink(file.id)}>
    </button>
    <button className='button-icon-change' onClick={() => editLink(file.id, setActiveEdit)}></button>
    </li>
 });

localStorage.setItem('user', JSON.stringify(files));


  return <>
  <div className='header-color'>
  <div className='container'>
    <div className='header'>
        <div className='title'><a href={() => false} onClick={() => setbookmarkActive(!bookmarkActive)}>Bookmark</a></div>
        <div className='nav'>
          <div className='nav-title'>
          <a href={() => false} onClick={() => setaboutActive(!aboutActive)}>About</a>
          <a href={() => false} onClick={() => sethelpActive(!helpActive)}>Help</a></div>
          <div className='nav-login'>
          <a href={() => false} onClick={() => setAccount(!account)}>Account</a>
          <a href={() => false} onClick={()=>  setsignInActive(true)}>Sigh in</a>
          <a href={() => false} onClick={() => setjoinActive(true)}>Join us</a></div>
        </div>
    </div>
  </div>
  </div>

  <div className={!account ? 'showAcc' : 'hideAcc'}>
    <div className='container'>
      <div className='menuAcc'>
        <ul className='menuAccList'>
      <li>UserName : <input/></li>
      <li>Email Adrees :  <input/></li>
      <li>Change color menu :  <input/></li>
      <li>Change Password :  <input/></li>
      </ul>
      </div>
    </div>
  </div>

  <Modal signInActive={signInActive} setsignInActive={setsignInActive}
  joinActive={joinActive} setjoinActive={setjoinActive} changeSinhIn={changeSinhIn} changeJoin={changeJoin}/>
  <BookMark addFile={addFile}  readCollections={readCollections} 
    bookmarkActive={bookmarkActive} setbookmarkActive={setbookmarkActive}
    modalEdit={modalEdit} setmodalEdit={setmodalEdit} />
  <About aboutActive={aboutActive}/>
  <Help helpActive={helpActive}/>
  

  <div className={activeEdit ? 'modal active' : 'modal'} onClick={() => setActiveEdit(false)}>
            <div className={activeEdit ? 'modal-container active' : 'modal-container'} onClick={(event) => event.stopPropagation()}>
                    <div className="action-form">
                    <span>Comment for link</span>
                    <input name="comment" value={comment} onChange={(event) => setComment(event.target.value)}></input>
                    <span>Adrees of link</span> 
                    <input name="link" value={link} onChange={(event) => setLink(event.target.value)}></input>
                     </div>
                    <button onClick={() => changeItem(linkid, link, comment)}>Done</button>
            </div>
        </div>

  <footer>
    <section className='footer-nootes'>
      <ul className='footer-nootes-items'>
        <li>
          <b>4158</b>
          members
        </li>
        <li>
          <b>14158</b>
          bookmark save
        </li>
      </ul>
    </section>
    
    <section className='footer-content'>
      <div className='footer-button'>
        <button onClick={() => console.log('donate')}>Donate</button>
        <button onClick={() => window.scrollTo(0,0)}>Back to top</button>
      </div>
      <div className='footer-language'>
        <input type='checkbox' disabled checked/>English
        <input type='checkbox' />Russian
      </div>      
    </section>
  </footer>
</>
}

export default App;
