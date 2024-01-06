import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TourItem from './tourItem'

import './App.css'

class App extends Component {
  state = {
    toursData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getToursData()
  }

  getToursData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const updatedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({isLoading: false, toursData: updatedData})
  }

  render() {
    const {toursData, isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">
          Travel Guide <br /> <hr className="border" />{' '}
        </h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="tours-list">
            {toursData.map(item => (
              <TourItem key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
