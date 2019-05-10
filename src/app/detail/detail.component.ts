import { Component, OnInit, Input } from '@angular/core';
import { TRUCK } from '../data/truck-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id='0';
  trucks = TRUCK;
  theTruck;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.trucks.forEach(truck => {
        if(truck.id == parseInt(this.id)){
          this.theTruck = truck;
        }
      });
    });

  }

}
