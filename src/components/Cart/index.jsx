/* eslint-disable react/prop-types */
import "./style.css"
import axios from 'axios'
export const Cart = () => {
    
    const comprar=async()=>{
    const paymentUrl='https://backend-p5.onrender.com/payment/create-payment'
    const paymentUrl2='http://localhost:4000/payment/create-payment'

    try {
      const {data}=await axios.post(paymentUrl)
      if(data){
          console.log(data.detail.response.init_point)
          console.log('render')
          window.location.href=data.detail.response.init_point
      }else{
          const {data}=await axios.post(paymentUrl2)
          console.log(data.detail.response.init_point)
          console.log('localhost')
          window.location.href=data.detail.response.init_point
      }
      
    } catch (error) {
      console.log(error)
    }
    
    
  } 
  return (
    <div className="cart">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      
    
    <button onClick={comprar}>comprar</button>
    </div>
  )
}
