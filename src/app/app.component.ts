import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Username = 'ck_61090412270705d2481a025660931931bedc7afb';
  Password = 'cs_4e83e25ab32cf8d456d4eb05a3021464d502a587';
  constructor(private http: HttpClient) {}
  //onTestGet
  getCarts() {
    //make a get request with basic auth Username and Password and body user_id 1 http://localhost:8888/wordpress2/wp-json/ade-woocart-no-auth/v1/cart
    this.http
      .get(
        'http://localhost:8888/wordpress2/wp-json/ade-woocart-no-auth/v1/cart',
        {
          headers: {
            Authorization: 'Basic ' + btoa(this.Username + ':' + this.Password),
            'Content-Type': 'application/json',
          },
          params: {
            user_id: '1',
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  //add to cart
  addToCart(product_id: any, quantity: any) {
    this.http
      .post(
        'http://localhost:8888/wordpress2/wp-json/ade-woocart-no-auth/v1/cart',
        {
          user_id: '1',
          product_id: product_id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: 'Basic ' + btoa(this.Username + ':' + this.Password),
            'Content-Type': 'application/json',
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  //removeCart
  removeCart(cart_key: any) {
    this.http
      .delete(
        'http://localhost:8888/wordpress2/wp-json/ade-woocart-no-auth/v1/cart',
        {
          headers: {
            Authorization: 'Basic ' + btoa(this.Username + ':' + this.Password),
            'Content-Type': 'application/json',
          },
          body: {
            user_id: '1',
            cart_key: cart_key,
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
