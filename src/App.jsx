import './App.css';
import { FaRegStar } from 'react-icons/fa';
import { PiCircleBold } from 'react-icons/pi';

function App() {
  return (
    <div className="block-wrapper">
      <div className="block">
        <div className="card primary-card">
          <div>
            <div className="card__header mb20">
              <div className="star-circle">
                <FaRegStar className="svg-star" fill="var(--white)" />
              </div>
              <h1 className="open-sans large-text white-text thin-text mt0 mb0">
                Level 1
              </h1>
            </div>
            <div className="card__main">
              <h2 className="roboto medium-text semibold-text white-text mt0 mb10">
                Requirements
              </h2>
              <ul className="card__requirements">
                <li className="card__requirements-elem roboto small-text regular-text white-text mb5">
                  <span className="mr10">Confirm E-mail</span>{' '}
                  <img src="done.svg" alt="" />
                </li>
                <li className="card__requirements-elem roboto small-text regular-text white-text mb5">
                  <span className="mr10">Confirm Phone Number</span>{' '}
                  <img src="done.svg" alt="" />
                </li>
                <li className="card__requirements-elem roboto small-text regular-text white-text mb30">
                  <span className="mr10">Enter personal details</span>{' '}
                  <img src="done.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="align-end roboto extra-small-text regular-text white-text">
            Annual turnover - up to 2.500 EUR
          </div>
        </div>
        <div className="card secondary-card">
          <div>
            <div className="card__header mb20">
              <div className="star-circle__transparent">
                <FaRegStar className="svg-star" fill="var(--blue)" />
              </div>
              <h1 className="open-sans large-text thin-text grey-text mt0 mb0">
                Level 2
              </h1>
            </div>
            <div className="card__main">
              <h2 className="roboto medium-text semibold-text grey-text mt0 mb10">
                Requirements
              </h2>
              <ul className="card__requirements">
                <li className="card__requirements-elem roboto small-text regular-text grey-text mb5">
                  <span className="mr10">Upload Photo ID</span>
                  <PiCircleBold className="svg-circle" />
                </li>
                <li className="card__requirements-elem roboto small-text regular-text grey-text mb30">
                  <span className="mr10">Upload Utility Bill</span>
                  <PiCircleBold className="svg-circle" />
                </li>
              </ul>
            </div>
          </div>
          <div className="align-end roboto extra-small-text regular-text grey-text">
            Annual turnover - up to 30.000 EUR
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
