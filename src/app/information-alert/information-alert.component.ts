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
  products = [...products];
  productss: Product | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'))

   // this.product = products.find(product => product.id === productIdFromRoute)

  }

  information(nombre: string, foto: any, precio: number, descripcion: string){

    Swal.fire({
      title: nombre,
      imageUrl: foto,
      imageWidth: 150,
      imageHeight: 200,
      footer: precio,  
      text: descripcion,
    })
    
  }

}
