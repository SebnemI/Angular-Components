import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Country } from 'src/app/models/Country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  public countryName:string |null= '';
  public country:Country = {} as Country;
  public errorMessage:string | undefined;

  constructor(private activatedRoute:ActivatedRoute,
              private countryService: CountryService) { }

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      if(param.get('name'))
      {this.countryName = param.get('name');}
    });

    this.countryService.getAllCountries().subscribe((data)=> {
      let countries:Country[]=data;
      let selectedCountry = countries.find(country => country.name.common === this.countryName);
      if (selectedCountry){
        this.country = selectedCountry;
      }
    })  
  }

  public isNotEmpty(){
    console.log(Object.keys(this.country));
    return Object.keys(this.country).length> 0;
  }

}
