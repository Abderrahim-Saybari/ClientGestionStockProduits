import {Injectable} from '@angular/core';

import { Produit } from '../shared/Produit';

import { from } from 'rxjs';

@Injectable()
export class ProduitMockService {

    PRODUITS: Produit[] = [];

    constructor() {
        const p1: Produit = new Produit('Livre', 50, 20);
        const p2: Produit = new Produit('Cahier', 200, 5.53);
        const p3: Produit = new Produit('Stylo', 30, 2);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }

    public getProduits(): Produit[] {
         return this.PRODUITS;
    }
}
