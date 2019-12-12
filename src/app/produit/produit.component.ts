import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ProduitService } from './produit.service';

import { Produit } from '../shared/produit';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];

  produitForm: FormGroup;

  operation = 'add';

  selectedProduit: Produit;

  constructor(private produitservice: ProduitService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.creatForm();
   }

  ngOnInit() {
    this.initProduit();
    this.produits = this.route.snapshot.data.produits;

  }
  loadProduits() {
    this.produitservice.getProduits().subscribe(
      data => {this.produits = data; },
      err  => { console.log('An error was occured.'); },
      () => { console.log('loading data was done'); }
    );
  }
  creatForm() {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: ['', Validators.required],
      prixUnitaire: ['', Validators.required]
    });
  }
  addProduit() {
    const p = this.produitForm.value;
    this.produitservice.addProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  updateProduit() {
    this.produitservice.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  deleteProduit() {
    this.produitservice.deleteProduit(this.selectedProduit.id).subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduits();
      }
    );
  }
  initProduit() {
    this.selectedProduit = new Produit();
    this.creatForm();
  }

}
