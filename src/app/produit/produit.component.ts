import { Component, OnInit } from '@angular/core';

import {ProduitMockService } from './produit.mock.service';
<<<<<<< HEAD
import { Produit } from '../shared/Produit';
=======
import { Produit } from '../shared/produit';
>>>>>>> master

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  constructor(private produitservice: ProduitMockService) { }

  ngOnInit() {
    this.produits = this.produitservice.getProduits();
  }

}
