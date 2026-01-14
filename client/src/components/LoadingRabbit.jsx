
import loadingRabbit from '../assets/loading-rabbit.mp4'

const LoadingRabbit = () => {
  return (
    <div>
        <video loop muted autoPlay src={loadingRabbit}></video>
    </div>
  )
}

export default LoadingRabbit