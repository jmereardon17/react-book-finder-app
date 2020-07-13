import React from 'react';

const Book = (props) => {
  return (
    <div className="col-md-6 col-lg-4 mb-3">

      <div className="card">
        <div className="row no-gutters">

          <div className="col-3 col-md-4 pr-1 p-2 align-self-center perspective">
            <div className="cover" style={{ background: `url("${props.thumbnail}") 0% 0% / 100% 100%`}}>
              <span className="glasses-icon"></span>
            </div>
          </div>

          <div className="col-9 col-md-8 py-3">
            <div className="card-body py-0 px-2 pr-2">
              <h5 className="card-title text-dark mb-2" title={props.title}>{props.title}</h5>

              {/* If more than one author, comma separate them */}
              {Array.isArray(props.authors) && props.authors.length > 1
                ? <h6 className="authors text-black-50 mb-2" style={{ fontSize: '.8rem' }}>
                  {props.authors.join(', ')}
                </h6>
                : <h6 className="authors text-black-50 mb-2">{props.authors}</h6>}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Book;