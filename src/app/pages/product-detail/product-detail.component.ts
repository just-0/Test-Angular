import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  private _router = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  public product?: IProduct;


  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._apiService.getProductsID(params["id"]).subscribe((data: IProduct) => {
        console.log(data);
        this.product = data;      
      })
    })
  }
}
