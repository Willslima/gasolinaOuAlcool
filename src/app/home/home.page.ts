import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado"
  public precoGasolina: any;
  public precoAlcool: any;

  calcular() {
    if(this.precoAlcool && this.precoGasolina){
      // this.resultado = "Preenchidos"

      let pAlcool = parseFloat(this.precoAlcool)
      let pGasolina = parseFloat(this.precoGasolina)
      let res = pAlcool / pGasolina // >= 0.7 ? "É melhor utilizar Gasolina" : "É melhor utilizar Álcool"
      if(res >= 0.7){
        this.resultado = "É melhor utilizar Gasolina" 
      } else {
        this.resultado = "É melhor utilizar Álcool"
      }

    }else{
      this.resultado = "Álcool ou Gasolina não foram preenchidos"
    }
  }

}
