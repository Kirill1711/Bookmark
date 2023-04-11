import React from "react";
import './bookmark.css';
import { useState } from "react";



const BookMark = ({ addFile, readCollections, bookmarkActive }) => {
  const [active, setActive] = useState(false);
  const [comment, setComment] = useState('');
  const [link, setLink] = useState('');

    return (<>
    <section className={bookmarkActive ? 'bookmark active' : 'bookmark'}>
      <section className="colections-background">
     <div className='container'>
    <div className='colections'>
      <h1 className='toolbar-title'>My Bookmark</h1>
      <button className='button-create' onClick={() => setActive(true)}>
      <span className="span-icon"></span>
      <span>New Bookmark</span></button>
    </div>
  </div>
      </section>

  <main className='container'>
    <ul className='bookmark-collection'>{readCollections}</ul>
  </main>
  </section>


  <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-container active' : 'modal-container'} onClick={(event) => event.stopPropagation()}>
                    <div className="action-form">
                    <span>Comment for link</span>
                    <input name="comment" value={comment} onChange={(event) =>setComment(event.target.value)}></input>
                    <span>Adrees of link</span>
                    <input name="link" value={link} onChange={(event) =>setLink(event.target.value)}></input>
                     </div>
                    <button onClick={() =>addFile(comment, link, setComment, setLink, setActive)}>Done</button>
            </div>
        </div>
    </>)
}

export default BookMark;