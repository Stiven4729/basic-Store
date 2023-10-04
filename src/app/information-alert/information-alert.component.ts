import { Product, products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-information-alert',
  templateUrl: './information-alert.component.html',
  styleUrls: ['./information-alert.component.css']
})
export class InformationAlertComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'))
    this.product = products.find(product => product.id === productIdFromRoute)

  }

  information(){

    Swal.fire({
      title: this.product?.name,
      imageUrl: this.product?.photo,
      imageWidth: 150,
      imageHeight: 200,
      footer: this.product?.price,  
      text: this.product?.description,
    })
    
  }

}
