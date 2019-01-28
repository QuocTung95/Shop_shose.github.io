  <template>

    <div class="container-fluid" v-if="cart.length > 0">
    <table>
      <thead>
      <th class="th1" >Product</th>
      <th class="th2" >Description</th>
      <th class="th3">Price</th>
      <th class="th4">Quantity</th>
      <th class="th5">Subtotal</th>
      <th class="th6">Delete</th>
      </thead>
      <tbody>
      <tr v-for="(product, index) in cart" :key="index">

      <td>
        <img class="img-responsive" :src="product.image" alt="">
        <small>{{product.manufacturer}}</small>
        <h3>{{product.name}}</h3>
      </td>
      <td>
        <p>{{product.description}}</p>
      </td>
      <td><p>${{product.price}}</p></td>
      <td>
        <form action="" v-on:submit.prevent="onSubmit">
          <input id="valueBuy" type="number" step="1"  @input="limit(product)" v-model="product.quantity" required/>
        </form>

      </td>
      <td>${{SubtotalProduct(product)}}</td>
      <td>
        <button type="button" class="btn btn-danger" v-on:click='deleteProduct(product)'>Delete</button>
      </td>
      </tr>
      </tbody>

    </table>

    <!--nut thanh toan-->

    <div class="row">
      <div class="col-md-6 promo-code" >
        <label for="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code"/><button type="button" > > </button>
      </div>
      <div class="col-md-6">
        <ul class="Subtotal">
          <li class="total">Total <span>${{totalMoney(product)}}</span></li>
          <li>
            <button type="button" class="btn btn-success" @click="checkOut()">
              Check Out

            </button>

          </li>
        </ul>
      </div>
    </div>

  </div>

  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1>
    <!--<router-view></router-view>-->
</div>
  </template>

  <script>
  export default {
      
  }
  </script>

  <style>
      
  </style>
