import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });
    this.getData();
  }
  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=8436237a5d694e159136755d47ba8d1f';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log('SGD : ' + sgd2);
      row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('USD : ' + bnd2);
      row = [3, 'USD', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log('HKD : ' + hkd2);
      row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc2);
      row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var eur = rates.IDR / rates.EUR;
      var eur2 = formatCurrency(eur, 'en-US', '', 'EUR');
      console.log('EUR : ' + eur2);
      row = [6, 'EUR', eur2];
      this._table1.row.add(row);

      var zar = rates.IDR / rates.ZAR;
      var zar2 = formatCurrency(zar, 'en-US', '', 'ZAR');
      console.log('ZAR : ' + zar2);
      row = [7, 'ZAR', zar2];
      this._table1.row.add(row);

      var xaf = rates.IDR / rates.XAF;
      var xaf2 = formatCurrency(xaf, 'en-US', '', 'XAF');
      console.log('XAF : ' + xaf2);
      row = [8, 'XAF', xaf2];
      this._table1.row.add(row);

      var all = rates.IDR / rates.ALL;
      var all2 = formatCurrency(all, 'en-US', '', 'ALL');
      console.log('ALL : ' + all2);
      row = [9, 'ALL', all2];
      this._table1.row.add(row);

      var dzd = rates.IDR / rates.DZD;
      var dzd2 = formatCurrency(dzd, 'en-US', '', 'DZD');
      console.log('DZD : ' + dzd2);
      row = [10, 'DZD', dzd2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
