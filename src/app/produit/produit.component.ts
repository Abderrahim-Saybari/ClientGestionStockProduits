import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ProduitMockService } from './produit.mock.service';

import { Produit } from '../shared/produit';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitForm: FormGroup;
  constructor(private produitservice: ProduitMockService, private fb: FormBuilder) {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: ['', Validators.required],
      prixUnitaire: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.produits = this.produitservice.getProduits();
  }

}
