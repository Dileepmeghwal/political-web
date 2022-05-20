import React from 'react'
import PressData from '../Press/Pressdata';

const Press = () => {
  return (
    <>
      <section>
        <div className="container py-4">
          <h2>Press Release</h2>
        </div>
      </section>

      <div className="container press-content">
        {PressData.map((val) => (
          <>
            <div className="card p-2 mb-2">
              <span>{val.Date}</span>
              <span>{val.curDate}</span>
              <h4>{val.title}</h4>
              <p>{val.postContent}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Press