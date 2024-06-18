import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano{
  infos: IInfos;
}
interface IInfos {
  tipo: string,
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom,//remove a encapsulação(fica global)
})
export class CardComponent {
 //@ts-ignore
 plano :IPlano= {
  infos: {
    tipo : 'Simples',
    preco:100
  }

 };
}
